System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.0.1/model", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, mediaDevice, __beyond_pkg, hmr;
  _export("mediaDevice", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive101Model) {
      dependency_1 = _beyondJsReactive101Model;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.6"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/reactive", "1.0.2"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["socket.io-client", "4.6.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/ailearn-estrada", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/media-manager@1.0.0/main"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/kernel/core', dependency_2]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./desktop
      *************************/
      ims.set('./desktop', {
        hash: 1222938740,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopMediaDevice = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _files = require("./files");
          var _input = require("./input");
          var _xhr = require("./xhr");
          class MediaDevice extends _model.ReactiveModel {
            static instance;
            #selector;
            PLATFORM = 'DESKTOP';
            #stream;
            #constraints = {};
            #inputFile;
            #files;
            #promise;
            get isReady() {
              return true;
            }
            constructor() {
              super();
              this.#files = new _files.MediaFiles(this, {});
            }
            async getUserMedia(constraints) {
              if (JSON.stringify(this.#constraints) === JSON.stringify(constraints)) return this.#stream;
              this.#constraints = constraints;
              this.#stream = await navigator.mediaDevices.getUserMedia(constraints);
              return this.#stream;
            }
            async activateCamera(constraints, selector) {
              const stream = await this.getUserMedia(constraints);
              this.#stream = stream;
              selector.srcObject = stream;
              this.#selector = selector;
            }
            static getInstance() {
              if (!MediaDevice.instance) {
                MediaDevice.instance = new MediaDevice();
              }
              return MediaDevice.instance;
            }
            desactivateCamera() {
              if (!this.#stream) {
                return;
              }
              this.#stream.getTracks().forEach(track => {
                track.stop();
                this.#stream.removeTrack(track);
              });
              if (this.#selector) {
                this.#selector.srcObject = undefined;
                this.#selector = undefined;
              }
              this.#constraints = undefined;
              this.#stream = undefined;
            }
            /**
             *
             * @param options
             * @returns
             */
            async getPicture() {
              const stream = await this.getUserMedia({
                video: true,
                audio: false
              });
              const imageCapture = new globalThis.ImageCapture(stream.getVideoTracks()[0]);
              const blob = await imageCapture.takePhoto();
              this.clean();
              return blob;
            }
            clean() {
              this.#constraints = {};
              if (!this.#stream) {
                return;
              }
              this.#stream.getTracks().forEach(track => {
                track.stop();
                this.#stream.removeTrack(track);
              });
              if (this.#selector) {
                this.#selector.srcObject = undefined;
                this.#selector = undefined;
              }
              this.#stream = undefined;
            }
            async getVideoStream() {
              return await this.getUserMedia({
                video: true,
                audio: false
              });
            }
            takePicture(options) {}
            openGallery(selector, specs = {}) {}
            upload(url, specs = {}) {
              const form = new FormData();
            }
            setInputFile(input) {
              this.#inputFile = new _input.InputFile(input, this.#files);
              return this.#inputFile;
            }
            publish = async (url, params) => {
              try {
                const form = new FormData();
                const collection = this.#files;
                const name = collection.total > 1 ? `${params.name}[]` : params.name;
                console.log(1, collection.entries);
                collection.entries.forEach(item => form.append(name, item));
                for (let param in params) {
                  if (!params.hasOwnProperty(param)) continue;
                  form.append(param, params[param]);
                }
                const xhr = new _xhr.XHRLoader();
                const response = await xhr.upload(form, url);
                this.#files = new _files.MediaFiles(this, {});
                console.log(1, this.#files.entries);
                return response.json();
              } catch (error) {
                console.error(error);
              }
            };
          }
          const DesktopMediaDevice = MediaDevice.getInstance();
          exports.DesktopMediaDevice = DesktopMediaDevice;
        }
      });

      /******************************
      INTERNAL MODULE: ./file-manager
      ******************************/

      ims.set('./file-manager', {
        hash: 4123506600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getUrl = getUrl;
          var _core = require("@beyond-js/kernel/core");
          let promise;
          /**
           * REturns a valid url of the image loaded
           *
           * @platform mobile
           * @param data
           * @returns
           */
          function getUrl(data) {
            if (promise) return promise;
            promise = new _core.PendingPromise();
            const process = function processFile(entry) {
              entry.file(file => {
                const reader = new FileReader();
                reader.onloadend = a => {
                  promise.resolve(reader.result);
                  promise = undefined;
                };
                reader.readAsDataURL(file);
              });
            };
            globalThis.resolveLocalFileSystemURL(data, process);
            return promise;
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./files/index
      *****************************/

      ims.set('./files/index', {
        hash: 3923452879,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MediaFiles = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive/model");
          class MediaFiles extends _model.ReactiveModel {
            #loaded = 0;
            #specs;
            #type;
            regExp = /[^\w\d.]/g;
            #errors = [];
            #promise;
            get errors() {
              return this.#errors;
            }
            _total = 0;
            get total() {
              return this._total;
            }
            set total(value) {
              if (value === this._total) return;
              this._total = value;
            }
            _items = new Map();
            get items() {
              return this._items;
            }
            get entries() {
              return [...this._items.values()];
            }
            constructor(parent, specs) {
              super();
              this.#specs = specs;
              this.#type = specs.type ? specs.type : 'any';
            }
            FILE_TYPE = Object.freeze({
              document: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain', 'application/pdf'],
              image: ['image/png', 'image/jpeg', 'image/gif'],
              json: ['application/json'],
              zip: ['application/x-zip-compressed'],
              audio: ['audio/mpeg', 'audio/ogg', 'audio/wav', 'audio/webm', 'audio/aac', 'audio/flac' // FLAC files
              ]
            });

            #onload = event => {
              if (event.target?.removeEventListener) {
                event.target.removeEventListener('load', this.#onload);
              }
              if (this.#specs.onload && typeof this.#specs.onload === 'function') {
                this.#specs.onload(event);
              }
            };
            #onloadend = (event, file) => {
              this.#loaded = this.#loaded + 1;
              file.src = event.target.result;
              this.#processFile(file);
              if (event.target?.removeEventListener) {
                event.target.removeEventListener('onloadend', this.#onloadend);
              }
              this.triggerEvent('file.loaded');
              if (this.#loaded === this._items.size) this.triggerEvent('loadend');
              if (this.#specs.onloadend && typeof this.#specs.onloadend === 'function') {
                this.#specs.onload(event);
              }
            };
            #processFile(file) {
              const name = file.name.replace(this.regExp, '');
              file = this._items.get(name);
              this._items.set(name, file);
            }
            #onerror = event => console.error(4, event);
            validate = file => {
              const isValid = !!this.FILE_TYPE[this.#type].find(item => item === file.type);
              if (!isValid) {
                this.#errors.push(file.name.replace(this.regExp, ''));
              }
              return isValid;
            };
            #readFile = async file => {
              if (this.#type !== 'any') {
                const isValid = await this.validate(file);
                if (!isValid) {
                  this.triggerEvent('error');
                  return;
                }
              }
              const reader = new FileReader();
              reader.onload = event => this.#onload(event);
              reader.onloadend = event => this.#onloadend(event, file);
              reader.onerror = event => this.#onerror(event);
              reader.readAsDataURL(file);
            };
            #validateLoad = () => {
              if (this.#loaded === this._items.size) {}
            };
            clean = () => {
              this._items = new Map();
              this.#loaded = 0;
            };
            /**
             * Read Local files uploaded from an input file
             *
             * @param fileList
             */
            readLocal = async fileList => {
              const promises = [];
              for (let i = 0; i < fileList.length; ++i) {
                const file = fileList[i];
                this._items.set(file.name.replace(this.regExp, ''), file);
                promises.push(this.#readFile(file));
              }
              await Promise.all(promises);
            };
            getMobileUrl(data) {
              if (this.#promise) return this.#promise;
              this.#promise = new _core.PendingPromise();
              const process = entry => {
                entry.file(file => {
                  const reader = new FileReader();
                  reader.onloadend = e => {
                    const imgBlob = new Blob([reader.result], {
                      type: file.type
                    });
                    const name = file.name.replace(this.regExp, '');
                    file.blob = imgBlob;
                    this._items.set(name, file);
                    //returns a valid element to show as image
                    this.#promise.resolve(URL.createObjectURL(imgBlob));
                    this.#promise = undefined;
                  };
                  this._items.set(file.name.replace(this.regExp, ''), file);
                  reader.readAsArrayBuffer(file);
                });
              };
              // cordova file plugin
              globalThis.resolveLocalFileSystemURL(data, process);
              return this.#promise;
            }
          }
          exports.MediaFiles = MediaFiles;
        }
      });

      /**************************
      INTERNAL MODULE: ./i-camera
      **************************/

      ims.set('./i-camera', {
        hash: 1945745868,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3083892194,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.mediaDevice = void 0;
          var _desktop = require("./desktop");
          var _mobile = require("./mobile");
          let media;
          function getMedia(clean = false) {
            if (clean) media = undefined;
            if (media) return media;
            const types = Object.freeze({
              MOBILE: 0,
              DESKTOP: 1
            });
            const deviceType = globalThis.cordova ? types.MOBILE : types.DESKTOP;
            const models = Object.freeze({
              1: _desktop.DesktopMediaDevice,
              0: _mobile.MobileMediaDevice
            });
            media = models[deviceType];
            return media;
          }
          const /*bundle*/mediaDevice = getMedia();
          exports.mediaDevice = mediaDevice;
        }
      });

      /***********************
      INTERNAL MODULE: ./input
      ***********************/

      ims.set('./input', {
        hash: 1272832174,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputFile = void 0;
          var _model = require("@beyond-js/reactive/model");
          class InputFile extends _model.ReactiveModel {
            #input = document.createElement('input');
            #errors;
            #selector;
            #files;
            get files() {
              return this.#files;
            }
            constructor(selector, files, specs = {}) {
              super();
              this.#selector = selector;
              this.#files = files;
              this.#files.on('error', this.getErrors);
              this.#files.on('loadend', this.filesLoaded);
              this.setAttributes(specs);
              if (selector) this.create();
            }
            filesLoaded = () => this.triggerEvent('loadend');
            pictureLoaded = () => this.triggerEvent('pictureLoaded');
            pictureLoading = () => this.triggerEvent('pictureLoading');
            // getErrors = () => (this.#errors = this.files.errors);
            getErrors = () => console.log('error');
            openDialog = () => {
              this.#input.click();
            };
            setAttributes = specs => {
              if (!specs) specs = {};
              let attrs = {
                type: 'file',
                style: 'display:none',
                name: 'input_upload',
                ...specs
              };
              for (let prop in attrs) {
                this.#input.setAttribute(prop, attrs[prop]);
              }
            };
            clean = async () => {
              return this.#files.clean();
              // await this.#mobileFiles.clean();
            };

            #onChangeInput = async event => {
              await this.clean();
              const target = event.currentTarget;
              this.#files.total = target.files.length;
              this.#files.readLocal(target.files);
            };
            create() {
              /**
               * Adds de click and change events into the input file
               */
              const addListeners = () => {
                if (!this.#selector) return;
                this.#selector.addEventListener('click', this.openDialog);
                this.#input.addEventListener('change', this.#onChangeInput);
              };
              this.#selector.after(this.#input);
              addListeners();
            }
          }
          exports.InputFile = InputFile;
        }
      });

      /****************************
      INTERNAL MODULE: ./interfaces
      ****************************/

      ims.set('./interfaces', {
        hash: 2938605133,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************
      INTERNAL MODULE: ./mobile
      ************************/

      ims.set('./mobile', {
        hash: 3634111429,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileMediaDevice = exports.MediaCameraDevice = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _files = require("./files");
          var _xhr = require("./xhr");
          class MediaCameraDevice extends _model.ReactiveModel {
            #source;
            #selector;
            PLATFORM = 'MOBILE';
            static instance;
            #files;
            #DEFAULT_OPTIONS = {
              // Some common settings are 20, 50, and 100
              quality: 80,
              destinationType: globalThis.Camera?.DestinationType?.FILE_URI,
              // In this app, dynamically set the picture source, Camera or photo gallery
              sourceType: 1,
              encodingType: globalThis.Camera?.EncodingType.JPEG,
              mediaType: globalThis.Camera?.MediaType.PICTURE,
              allowEdit: false,
              correctOrientation: true
            };
            constructor() {
              super();
              this.#files = new _files.MediaFiles(this, {});
            }
            #promise;
            get isReady() {
              return !!globalThis.Camera;
            }
            get source() {
              return this.#source;
            }
            #sourceType = 0;
            get sourceType() {
              return this.#sourceType;
            }
            set sourceType(value) {
              if (this.#sourceType === value) return;
              this.#sourceType = value;
            }
            #mediaType = globalThis.Camera?.MediaType.PICTURE; // default
            get mediaType() {
              return this.#mediaType;
            }
            set mediaType(value) {
              if (this.#mediaType === value) return;
              this.#mediaType = value;
            }
            set source(value) {
              this.#source = value;
            }
            onSuccess = async function successCallback(data) {
              const response = await this.#files.getMobileUrl(data);
              this.#promise.resolve(response);
              this.#promise = undefined;
            };
            onFail = message => {
              console.error('Failed because: ' + message);
              this.#promise.reject();
              this.#promise = undefined;
            };
            /**
             *
             * @param srcType number 1 = camera, 0 = photolibrary
             * @returns
             */
            setOptions = overwrites => {
              return {
                ...this.#DEFAULT_OPTIONS,
                ...overwrites
              };
            };
            getPicture = options => {
              if (this.#promise) return this.#promise;
              this.#promise = new _core.PendingPromise();
              navigator.camera?.getPicture(response => this.onSuccess(response), this.onFail, this.setOptions(options));
              return this.#promise;
            };
            openGallery(selector) {
              this.#selector = selector;
              return this.getPicture({
                sourceType: 0
              });
            }
            static getInstance() {
              if (!MediaCameraDevice.instance) {
                MediaCameraDevice.instance = new MediaCameraDevice();
              }
              return MediaCameraDevice.instance;
            }
            publish = async (url, params) => {
              try {
                const form = new FormData();
                const collection = this.#files;
                const name = collection.total > 1 ? `${params.name}[]` : params.name;
                collection.entries.forEach(item => {
                  form.append(name, item.blob, item.name);
                });
                for (let param in params) {
                  if (!params.hasOwnProperty(param)) continue;
                  form.append(param, params[param]);
                }
                const xhr = new _xhr.XHRLoader();
                const response = await xhr.upload(form, url);
                this.#files = new _files.MediaFiles(this, {});
                return response.json();
              } catch (error) {
                console.error(error);
              }
            };
          }
          exports.MediaCameraDevice = MediaCameraDevice;
          const MobileMediaDevice = MediaCameraDevice.getInstance();
          exports.MobileMediaDevice = MobileMediaDevice;
        }
      });

      /*********************
      INTERNAL MODULE: ./xhr
      *********************/

      ims.set('./xhr', {
        hash: 2840199010,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.XHRLoader = void 0;
          var _model = require("@beyond-js/reactive/model");
          class XHRLoader extends _model.ReactiveModel {
            promise;
            uploaded;
            progress;
            error;
            constructor() {
              super();
              this.promise = undefined;
              this.uploaded = false;
              this.progress = 0;
              this.error = false;
            }
            get uploading() {
              return !!this.promise;
            }
            get isUploaded() {
              return this.uploaded;
            }
            get uploadProgress() {
              return this.progress;
            }
            get hasError() {
              return this.error;
            }
            onProgress(event) {
              if (event.lengthComputable) {
                const percent = Math.round(event.loaded * 100 / event.total);
                this.progress = parseInt(percent.toString());
              }
              this.triggerEvent('change');
            }
            onCompleted(event) {
              this.uploaded = true;
              this.promise.resolve();
              this.triggerEvent('change');
              setTimeout(() => {
                this.promise = undefined;
                this.triggerEvent('change');
              }, 100);
            }
            onError(event) {
              console.error('Error uploading picture', event);
              this.error = true;
              this.promise.reject();
              this.triggerEvent('change');
            }
            onAbort() {
              this.promise.resolve(false);
              this.triggerEvent('change');
            }
            async upload(data, url) {
              try {
                const specs = {
                  method: 'post',
                  body: data
                };
                return fetch(url, specs);
              } catch (e) {
                console.error('error', e);
              }
            }
            abort() {
              if (this.promise) {
                this.promise.reject();
                this.triggerEvent('change');
              }
            }
          }
          exports.XHRLoader = XHRLoader;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "mediaDevice",
        "name": "mediaDevice"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'mediaDevice') && _export("mediaDevice", mediaDevice = require ? require('./index').mediaDevice : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDbkMsS0FBSyxHQUFHLElBQUk7Y0FDakIsSUFBSSxDQUFDRyxPQUFPLENBQUM4RyxNQUFNLEVBQUU7Y0FDckIsSUFBSSxDQUFDekUsWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUMvQjtZQUVROEYsT0FBTztjQUNYLElBQUksQ0FBQ25JLE9BQU8sQ0FBQ1ksT0FBTyxDQUFDLEtBQUssQ0FBQztjQUMzQixJQUFJLENBQUN5QixZQUFZLENBQUMsUUFBUSxDQUFDO1lBQy9CO1lBRU8sTUFBTS9ELE1BQU0sQ0FBQzRCLElBQWMsRUFBRTNCLEdBQVc7Y0FDM0MsSUFBSTtnQkFDQSxNQUFNRixLQUFLLEdBQUc7a0JBQ1YrSixNQUFNLEVBQUUsTUFBTTtrQkFDZEMsSUFBSSxFQUFFbkk7aUJBQ1Q7Z0JBQ0QsT0FBT29JLEtBQUssQ0FBQy9KLEdBQUcsRUFBRUYsS0FBSyxDQUFDO2VBQzNCLENBQUMsT0FBT2tGLENBQUMsRUFBRTtnQkFDUnJFLE9BQU8sQ0FBQ1csS0FBSyxDQUFDLE9BQU8sRUFBRTBELENBQUMsQ0FBQzs7WUFFakM7WUFFT2dGLEtBQUs7Y0FDUixJQUFJLElBQUksQ0FBQ3ZJLE9BQU8sRUFBRTtnQkFDZCxJQUFJLENBQUNBLE9BQU8sQ0FBQzhHLE1BQU0sRUFBRTtnQkFDckIsSUFBSSxDQUFDekUsWUFBWSxDQUFDLFFBQVEsQ0FBQzs7WUFFbkM7O1VBQ0h0QyIsIm5hbWVzIjpbIk1lZGlhRGV2aWNlIiwiUmVhY3RpdmVNb2RlbCIsImluc3RhbmNlIiwiUExBVEZPUk0iLCJpc1JlYWR5IiwiY29uc3RydWN0b3IiLCJNZWRpYUZpbGVzIiwiZ2V0VXNlck1lZGlhIiwiY29uc3RyYWludHMiLCJKU09OIiwic3RyaW5naWZ5IiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiYWN0aXZhdGVDYW1lcmEiLCJzZWxlY3RvciIsInN0cmVhbSIsInNyY09iamVjdCIsImdldEluc3RhbmNlIiwiZGVzYWN0aXZhdGVDYW1lcmEiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJzdG9wIiwicmVtb3ZlVHJhY2siLCJ1bmRlZmluZWQiLCJnZXRQaWN0dXJlIiwidmlkZW8iLCJhdWRpbyIsImltYWdlQ2FwdHVyZSIsImdsb2JhbFRoaXMiLCJJbWFnZUNhcHR1cmUiLCJnZXRWaWRlb1RyYWNrcyIsImJsb2IiLCJ0YWtlUGhvdG8iLCJjbGVhbiIsImdldFZpZGVvU3RyZWFtIiwidGFrZVBpY3R1cmUiLCJvcHRpb25zIiwib3BlbkdhbGxlcnkiLCJzcGVjcyIsInVwbG9hZCIsInVybCIsImZvcm0iLCJGb3JtRGF0YSIsInNldElucHV0RmlsZSIsImlucHV0IiwiSW5wdXRGaWxlIiwicHVibGlzaCIsInBhcmFtcyIsImNvbGxlY3Rpb24iLCJuYW1lIiwidG90YWwiLCJjb25zb2xlIiwibG9nIiwiZW50cmllcyIsIml0ZW0iLCJhcHBlbmQiLCJwYXJhbSIsImhhc093blByb3BlcnR5IiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJEZXNrdG9wTWVkaWFEZXZpY2UiLCJleHBvcnRzIiwicHJvbWlzZSIsImdldFVybCIsImRhdGEiLCJQZW5kaW5nUHJvbWlzZSIsInByb2Nlc3MiLCJwcm9jZXNzRmlsZSIsImVudHJ5IiwiZmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJhIiwicmVzb2x2ZSIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJyZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMIiwicmVnRXhwIiwiZXJyb3JzIiwiX3RvdGFsIiwidmFsdWUiLCJfaXRlbXMiLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsInBhcmVudCIsInR5cGUiLCJGSUxFX1RZUEUiLCJPYmplY3QiLCJmcmVlemUiLCJkb2N1bWVudCIsImltYWdlIiwiemlwIiwiZXZlbnQiLCJ0YXJnZXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25sb2FkIiwic3JjIiwidHJpZ2dlckV2ZW50Iiwic2l6ZSIsInJlcGxhY2UiLCJnZXQiLCJzZXQiLCJ2YWxpZGF0ZSIsImlzVmFsaWQiLCJmaW5kIiwicHVzaCIsIm9uZXJyb3IiLCJyZWFkTG9jYWwiLCJmaWxlTGlzdCIsInByb21pc2VzIiwiaSIsImxlbmd0aCIsIlByb21pc2UiLCJhbGwiLCJnZXRNb2JpbGVVcmwiLCJlIiwiaW1nQmxvYiIsIkJsb2IiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWFkQXNBcnJheUJ1ZmZlciIsIm1lZGlhIiwiZ2V0TWVkaWEiLCJ0eXBlcyIsIk1PQklMRSIsIkRFU0tUT1AiLCJkZXZpY2VUeXBlIiwiY29yZG92YSIsIm1vZGVscyIsIk1vYmlsZU1lZGlhRGV2aWNlIiwibWVkaWFEZXZpY2UiLCJjcmVhdGVFbGVtZW50IiwiZmlsZXMiLCJvbiIsImdldEVycm9ycyIsImZpbGVzTG9hZGVkIiwic2V0QXR0cmlidXRlcyIsImNyZWF0ZSIsInBpY3R1cmVMb2FkZWQiLCJwaWN0dXJlTG9hZGluZyIsIm9wZW5EaWFsb2ciLCJjbGljayIsImF0dHJzIiwic3R5bGUiLCJwcm9wIiwic2V0QXR0cmlidXRlIiwiY3VycmVudFRhcmdldCIsImFkZExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZnRlciIsIk1lZGlhQ2FtZXJhRGV2aWNlIiwicXVhbGl0eSIsImRlc3RpbmF0aW9uVHlwZSIsIkNhbWVyYSIsIkRlc3RpbmF0aW9uVHlwZSIsIkZJTEVfVVJJIiwic291cmNlVHlwZSIsImVuY29kaW5nVHlwZSIsIkVuY29kaW5nVHlwZSIsIkpQRUciLCJtZWRpYVR5cGUiLCJNZWRpYVR5cGUiLCJQSUNUVVJFIiwiYWxsb3dFZGl0IiwiY29ycmVjdE9yaWVudGF0aW9uIiwic291cmNlIiwib25TdWNjZXNzIiwic3VjY2Vzc0NhbGxiYWNrIiwib25GYWlsIiwibWVzc2FnZSIsInJlamVjdCIsInNldE9wdGlvbnMiLCJvdmVyd3JpdGVzIiwiY2FtZXJhIiwidXBsb2FkZWQiLCJwcm9ncmVzcyIsInVwbG9hZGluZyIsImlzVXBsb2FkZWQiLCJ1cGxvYWRQcm9ncmVzcyIsImhhc0Vycm9yIiwib25Qcm9ncmVzcyIsImxlbmd0aENvbXB1dGFibGUiLCJwZXJjZW50IiwiTWF0aCIsInJvdW5kIiwibG9hZGVkIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsIm9uQ29tcGxldGVkIiwic2V0VGltZW91dCIsIm9uRXJyb3IiLCJvbkFib3J0IiwibWV0aG9kIiwiYm9keSIsImZldGNoIiwiYWJvcnQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvZGVza3RvcC50cyIsImNvZGUvdHMvZmlsZS1tYW5hZ2VyLnRzIiwiY29kZS90cy9maWxlcy9pbmRleC50cyIsImNvZGUvdHMvaS1jYW1lcmEudHMiLCJjb2RlL3RzL2luZGV4LnRzIiwiY29kZS90cy9pbnB1dC50cyIsImNvZGUvdHMvaW50ZXJmYWNlcy50cyIsImNvZGUvdHMvbW9iaWxlLnRzIiwiY29kZS90cy94aHIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19