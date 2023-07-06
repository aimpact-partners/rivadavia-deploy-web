System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.0.1/model", "@aimpact/media-manager@1.0.0/main", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Uploader, XHRLoader, __beyond_pkg, hmr;
  _export({
    Uploader: void 0,
    XHRLoader: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive101Model) {
      dependency_1 = _beyondJsReactive101Model;
    }, function (_aimpactMediaManager100Main) {
      dependency_2 = _aimpactMediaManager100Main;
    }, function (_beyondJsKernel019Core) {
      dependency_3 = _beyondJsKernel019Core;
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
          "vspecifier": "@aimpact/media-manager@1.0.0/uploader"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@aimpact/media-manager/main', dependency_2], ['@beyond-js/kernel/core', dependency_3]]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./draggable
      ***************************/
      ims.set('./draggable', {
        hash: 2716703498,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraggableUploader = void 0;
          class DraggableUploader {
            #parent;
            #files;
            constructor(parent) {
              this.#parent = parent;
              this.#files = parent.files;
            }
            onDrop = event => {
              event.preventDefault();
              const {
                dataTransfer
              } = event;
              console.log(19, event);
              if (!dataTransfer.items.length) {
                return;
              }
              const files = [];
              for (let i = 0; i < dataTransfer.items.length; ++i) {
                const file = dataTransfer.items[i].getAsFile();
                if (file) {
                  files.push(file);
                }
              }
              this.#files.readLocal(files);
            };
            /**
             * This event runs only when are files on the draggable area.
             * @param event
             */
            onDragOver = event => {
              event.preventDefault();
            };
            /**
             * Add the drag & drop events to the control
             * @param {HTMLInputElement} selector
             */
            add(selector) {
              selector.ondrop = this.onDrop;
              selector.ondragover = this.onDragOver;
            }
          }
          exports.DraggableUploader = DraggableUploader;
        }
      });

      /****************************
      INTERNAL MODULE: ./files/base
      ****************************/

      ims.set('./files/base', {
        hash: 833790498,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseFile = void 0;
          var _model = require("@beyond-js/reactive/model");
          class BaseFile extends _model.ReactiveModel {
            #loaded = 0;
            #specs;
            #type;
            regExp = /[^\w\d.]/g;
            #errors = [];
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
              audio: ['audio/mpeg', 'audio/ogg', 'audio/wav', 'audio/webm', 'audio/aac', 'audio/flac', 'audio/x-m4a' // mp4 files, older version
              ]
            });

            #onload = event => {
              event.target.removeEventListener('load', this.#onload);
              if (this.#specs.onload && typeof this.#specs.onload === 'function') {
                this.#specs.onload(event);
              }
            };
            #onloadend = (event, file) => {
              this.#loaded = this.#loaded + 1;
              const name = file.name.replace(this.regExp, '');
              file = this._items.get(name);
              file.src = event.target.result;
              this._items.set(name, file);
              event.target.removeEventListener('onloadend', this.#onloadend);
              this.triggerEvent('file.loaded');
              if (this.#loaded === this._items.size) this.triggerEvent('loadend');
              if (this.#specs.onloadend && typeof this.#specs.onloadend === 'function') {
                this.#specs.onload(event);
              }
            };
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
              this.triggerEvent();
            };
            /**
             *
             * @param fileList
             */
            readLocal = async fileList => {
              this.fetching = true;
              const promises = [];
              for (let i = 0; i < fileList.length; ++i) {
                const file = fileList[i];
                this._items.set(file.name.replace(this.regExp, ''), file);
                promises.push(this.#readFile(file));
              }
              await Promise.all(promises);
              this.fetching = false;
              //@todo trigger remove
            };
          }

          exports.BaseFile = BaseFile;
        }
      });

      /*****************************
      INTERNAL MODULE: ./files/index
      *****************************/

      ims.set('./files/index', {
        hash: 3307556285,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FilesUploader = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _mobile = require("./mobile");
          var _web = require("./web");
          class FilesUploader extends _model.ReactiveModel {
            static #instance;
            static getInstance(parent, specs) {
              if (this.#instance) return this.#instance;
              if (globalThis.phonegap) return new _mobile.MobileFilesUploader(parent);
              return new _web.WebFilesUploader(parent, specs);
            }
          }
          exports.FilesUploader = FilesUploader;
        }
      });

      /******************************
      INTERNAL MODULE: ./files/mobile
      ******************************/

      ims.set('./files/mobile', {
        hash: 4172311851,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileFilesUploader = void 0;
          var _model = require("@beyond-js/reactive/model");
          class MobileFilesUploader extends _model.ReactiveModel {
            _loaded = 0;
            files = new Map();
            base64;
            _specs;
            _errors = [];
            constructor(specs) {
              super();
              this._specs = specs;
            }
            clean = () => {
              this.files = new Map();
              this._loaded = 0;
            };
            getFiles = async data => {
              this.clean();
              this.base64 = data.url;
              this.triggerEvent('loading');
              /**
               * todo: @julio check
               */
              const [dir, filename] = data.name.split('com.jidadesarrollos.bovino/cache/');
              this.files.set(filename, data.url);
              this.triggerEvent('loadend');
            };
            get entries() {
              return this.files;
            }
            get total() {
              return this.files.size;
            }
          }
          exports.MobileFilesUploader = MobileFilesUploader;
        }
      });

      /***************************
      INTERNAL MODULE: ./files/web
      ***************************/

      ims.set('./files/web', {
        hash: 4019010510,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WebFilesUploader = void 0;
          var _base = require("./base");
          class WebFilesUploader extends _base.BaseFile {}
          exports.WebFilesUploader = WebFilesUploader;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 4153979631,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Uploader = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _draggable = require("./draggable");
          var _files = require("./files");
          var _xhr = require("./xhr");
          var _main = require("@aimpact/media-manager/main");
          /*bundle*/
          class Uploader extends _model.ReactiveModel {
            #files;
            get files() {
              return this.#files;
            }
            #fileInput = document.createElement('input');
            #selector;
            #attrs;
            #draggable;
            #control;
            #specs;
            #errors;
            get errors() {
              return this.#errors;
            }
            constructor(specs = {}) {
              super();
              if (!specs.input) specs.input = {};
              /**
               * Manager of the files
               * @type {UploadFiles}
               */
              this.#files = _files.FilesUploader.getInstance(this, specs);
              this.#draggable = new _draggable.DraggableUploader(this);
              globalThis.up = this;
              this.#files.on('change', this.#listenChanges);
              this.#files.on('error', this.getErrors);
              this.#files.on('loadend', this.filesLoaded);
              const params = {
                ...specs.input
              };
              if (specs.hasOwnProperty('multiple')) params.multiple = specs.multiple;
              this.#specs = specs;
              this.setAttributes(params);
            }
            #listenChanges = () => {
              this.fetching = this.#files.fetching;
              this.ready = this.#files.ready;
            };
            setAttributes = specs => {
              if (!specs) specs = {};
              let attrs = {
                type: 'file',
                style: 'display:none',
                name: 'input_upload',
                ...specs
              };
              if (attrs.multiple) this.#fileInput.accept = 'directory/*';
              for (let prop in attrs) {
                this.#fileInput.setAttribute(prop, attrs[prop]);
              }
              this.#attrs = attrs;
            };
            // };
            openDialog = () => {
              this.#fileInput.click();
            };
            filesLoaded = () => this.triggerEvent('loadend');
            pictureLoaded = () => this.triggerEvent('pictureLoaded');
            pictureLoading = () => this.triggerEvent('pictureLoading');
            getErrors = () => this.#errors = this.files.errors;
            clean = async () => {
              await this.#files.clean();
              // await this.#mobileFiles.clean();
            };

            delete = async fileName => {
              await this.#files.items.delete(fileName);
              this.triggerEvent();
            };
            create = (selector, draggableSelector) => {
              if (_main.mediaDevice.type === 'MOBILE') {
                selector.addEventListener('click', _main.mediaDevice.openGallery);
              }
              this.#selector = selector;
              /**
               * Adds de click and change events into the input file
               */
              const addListeners = () => {
                if (!selector) return;
                selector.addEventListener('click', this.openDialog);
                this.#fileInput.addEventListener('change', this.#onChangeInput);
              };
              selector.after(this.#fileInput);
              addListeners();
              if (draggableSelector) this.#draggable.add(draggableSelector);
            };
            #onChangeInput = async event => {
              this.clean();
              this.fetching = true;
              this.triggerEvent(); // todo: fetching property need to fires this event
              const target = event.currentTarget;
              window.setTimeout(() => {
                this.#files.total = target.files.length;
                this.#files.readLocal(target.files);
                this.fetching = false;
                this.triggerEvent(); // todo: fetching property need to fires this event
              }, 0);
            };
            publish = async (additionalParams = {}) => {
              const form = new FormData();
              //const collection = isCamera ? mobileFiles : files;
              const collection = this.#files;
              const specs = this.#specs;
              const name = collection.total > 1 ? `${specs.name}` : specs.name;
              const items = collection.entries.map(item => item);
              form.append(name, JSON.stringify(items));
              collection.entries.forEach(item => form.append(name, item));
              if (!specs.params) specs.params = {};
              const params = {
                ...specs.params,
                ...additionalParams
              };
              for (let param in params) {
                if (!params.hasOwnProperty(param)) continue;
                form.append(param, params[param]);
              }
              const xhr = new _xhr.XHRLoader();
              const response = await xhr.upload(form, specs.url);
              return response.json();
            };
          }
          exports.Uploader = Uploader;
        }
      });

      /************************
      INTERNAL MODULE: ./resize
      ************************/

      ims.set('./resize', {
        hash: 1913477879,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.resizePicture = void 0;
          const resizePicture = (uri, specs) => new Promise(resolve => {
            specs = specs ? specs : {};
            const maxWidth = specs.maxWidth ? specs.maxWidth : 800;
            const maxHeight = specs.maxHeight ? specs.maxHeight : maxWidth / (4 / 3);
            const quality = specs.quality ? specs.quality : 0.8;
            const img = new Image();
            img.src = uri;
            img.onload = function () {
              let width = img.width;
              let height = img.height;
              let orientation;
              if (width < height) {
                orientation = "portrait";
                if (height > maxHeight) {
                  width *= maxHeight / height;
                  height = maxHeight;
                }
              } else {
                orientation = "landscape";
                if (width > maxWidth) {
                  height *= maxWidth / width;
                  width = maxWidth;
                }
              }
              const canvas = document.createElement("canvas");
              canvas.width = width;
              canvas.height = height;
              const ctx = canvas.getContext("2d");
              ctx.drawImage(img, 0, 0, width, height);
              let image = canvas.toDataURL("image/jpeg", quality);
              if (!specs.rotate) {
                resolve({
                  src: image,
                  width: width,
                  height: height,
                  orientation: orientation
                });
              }
              const rotateCanvas = document.createElement("canvas");
              let ctxRotate = rotateCanvas.getContext("2d");
              rotateCanvas.height = width;
              rotateCanvas.width = height;
              const imgRotate = new Image();
              imgRotate.onload = () => {
                ctxRotate.translate(rotateCanvas.width / 2, rotateCanvas.height / 2);
                ctxRotate.rotate(Math.PI / 2);
                ctxRotate.drawImage(imgRotate, -imgRotate.width / 2, -imgRotate.height / 2);
                ctxRotate.rotate(-Math.PI / 2);
                ctxRotate.translate(-imgRotate.width / 2, -imgRotate.height / 2);
                const imageRotated = rotateCanvas.toDataURL("image/jpg", 1);
                resolve({
                  src: imageRotated,
                  width: width,
                  height: height,
                  orientation: orientation,
                  aja: true
                });
              };
              imgRotate.src = image;
            };
          });
          exports.resizePicture = resizePicture;
        }
      });

      /*********************
      INTERNAL MODULE: ./xhr
      *********************/

      ims.set('./xhr', {
        hash: 4151157772,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.XHRLoader = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle */
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
        "from": "Uploader",
        "name": "Uploader"
      }, {
        "im": "./xhr",
        "from": "XHRLoader",
        "name": "XHRLoader"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Uploader') && _export("Uploader", Uploader = require ? require('./index').Uploader : value);
        (require || prop === 'XHRLoader') && _export("XHRLoader", XHRLoader = require ? require('./xhr').XHRLoader : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixZQUFZLENBQUMsUUFBUSxDQUFDO1lBQy9CO1lBRU8sTUFBTWlGLE1BQU0sQ0FBQ3BELElBQWMsRUFBRUMsR0FBVztjQUMzQyxJQUFJO2dCQUNBLE1BQU1qRCxLQUFLLEdBQUc7a0JBQ1ZpSixNQUFNLEVBQUUsTUFBTTtrQkFDZEMsSUFBSSxFQUFFbEc7aUJBQ1Q7Z0JBQ0QsT0FBT21HLEtBQUssQ0FBQ2xHLEdBQUcsRUFBRWpELEtBQUssQ0FBQztlQUMzQixDQUFDLE9BQU9vSixDQUFDLEVBQUU7Z0JBQ1I5SyxPQUFPLENBQUNnRCxLQUFLLENBQUMsT0FBTyxFQUFFOEgsQ0FBQyxDQUFDOztZQUVqQztZQUVPQyxLQUFLO2NBQ1IsSUFBSSxJQUFJLENBQUN2QixPQUFPLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDQSxPQUFPLENBQUNpQixNQUFNLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQzVILFlBQVksQ0FBQyxRQUFRLENBQUM7O1lBRW5DOztVQUNIL0IiLCJuYW1lcyI6WyJEcmFnZ2FibGVVcGxvYWRlciIsImNvbnN0cnVjdG9yIiwicGFyZW50IiwiZmlsZXMiLCJvbkRyb3AiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGF0YVRyYW5zZmVyIiwiY29uc29sZSIsImxvZyIsIml0ZW1zIiwibGVuZ3RoIiwiaSIsImZpbGUiLCJnZXRBc0ZpbGUiLCJwdXNoIiwicmVhZExvY2FsIiwib25EcmFnT3ZlciIsImFkZCIsInNlbGVjdG9yIiwib25kcm9wIiwib25kcmFnb3ZlciIsImV4cG9ydHMiLCJCYXNlRmlsZSIsIlJlYWN0aXZlTW9kZWwiLCJyZWdFeHAiLCJlcnJvcnMiLCJfdG90YWwiLCJ0b3RhbCIsInZhbHVlIiwiX2l0ZW1zIiwiTWFwIiwiZW50cmllcyIsInZhbHVlcyIsInNwZWNzIiwidHlwZSIsIkZJTEVfVFlQRSIsIk9iamVjdCIsImZyZWV6ZSIsImRvY3VtZW50IiwiaW1hZ2UiLCJqc29uIiwiemlwIiwiYXVkaW8iLCJ0YXJnZXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25sb2FkIiwibmFtZSIsInJlcGxhY2UiLCJnZXQiLCJzcmMiLCJyZXN1bHQiLCJzZXQiLCJ0cmlnZ2VyRXZlbnQiLCJzaXplIiwib25sb2FkZW5kIiwiZXJyb3IiLCJ2YWxpZGF0ZSIsImlzVmFsaWQiLCJmaW5kIiwiaXRlbSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmVycm9yIiwicmVhZEFzRGF0YVVSTCIsImNsZWFuIiwiZmlsZUxpc3QiLCJmZXRjaGluZyIsInByb21pc2VzIiwiUHJvbWlzZSIsImFsbCIsIkZpbGVzVXBsb2FkZXIiLCJnZXRJbnN0YW5jZSIsImdsb2JhbFRoaXMiLCJwaG9uZWdhcCIsIk1vYmlsZUZpbGVzVXBsb2FkZXIiLCJXZWJGaWxlc1VwbG9hZGVyIiwiX2xvYWRlZCIsImJhc2U2NCIsIl9zcGVjcyIsIl9lcnJvcnMiLCJnZXRGaWxlcyIsImRhdGEiLCJ1cmwiLCJkaXIiLCJmaWxlbmFtZSIsInNwbGl0IiwiVXBsb2FkZXIiLCJjcmVhdGVFbGVtZW50IiwiaW5wdXQiLCJ1cCIsIm9uIiwiZ2V0RXJyb3JzIiwiZmlsZXNMb2FkZWQiLCJwYXJhbXMiLCJoYXNPd25Qcm9wZXJ0eSIsIm11bHRpcGxlIiwic2V0QXR0cmlidXRlcyIsInJlYWR5IiwiYXR0cnMiLCJzdHlsZSIsImFjY2VwdCIsInByb3AiLCJzZXRBdHRyaWJ1dGUiLCJvcGVuRGlhbG9nIiwiY2xpY2siLCJwaWN0dXJlTG9hZGVkIiwicGljdHVyZUxvYWRpbmciLCJkZWxldGUiLCJmaWxlTmFtZSIsImNyZWF0ZSIsImRyYWdnYWJsZVNlbGVjdG9yIiwibWVkaWFEZXZpY2UiLCJhZGRFdmVudExpc3RlbmVyIiwib3BlbkdhbGxlcnkiLCJhZGRMaXN0ZW5lcnMiLCJhZnRlciIsImN1cnJlbnRUYXJnZXQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwicHVibGlzaCIsImFkZGl0aW9uYWxQYXJhbXMiLCJmb3JtIiwiRm9ybURhdGEiLCJjb2xsZWN0aW9uIiwibWFwIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsImZvckVhY2giLCJwYXJhbSIsInhociIsIlhIUkxvYWRlciIsInJlc3BvbnNlIiwidXBsb2FkIiwicmVzaXplUGljdHVyZSIsInVyaSIsInJlc29sdmUiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInF1YWxpdHkiLCJpbWciLCJJbWFnZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3JpZW50YXRpb24iLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwidG9EYXRhVVJMIiwicm90YXRlIiwicm90YXRlQ2FudmFzIiwiY3R4Um90YXRlIiwiaW1nUm90YXRlIiwidHJhbnNsYXRlIiwiTWF0aCIsIlBJIiwiaW1hZ2VSb3RhdGVkIiwiYWphIiwicHJvbWlzZSIsInVwbG9hZGVkIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJ1cGxvYWRpbmciLCJpc1VwbG9hZGVkIiwidXBsb2FkUHJvZ3Jlc3MiLCJoYXNFcnJvciIsIm9uUHJvZ3Jlc3MiLCJsZW5ndGhDb21wdXRhYmxlIiwicGVyY2VudCIsInJvdW5kIiwibG9hZGVkIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsIm9uQ29tcGxldGVkIiwib25FcnJvciIsInJlamVjdCIsIm9uQWJvcnQiLCJtZXRob2QiLCJib2R5IiwiZmV0Y2giLCJlIiwiYWJvcnQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRyYWdnYWJsZS50cyIsImZpbGVzL2Jhc2UudHMiLCJmaWxlcy9pbmRleC50cyIsImZpbGVzL21vYmlsZS50cyIsImZpbGVzL3dlYi50cyIsImluZGV4LnRzIiwicmVzaXplLnRzIiwieGhyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=