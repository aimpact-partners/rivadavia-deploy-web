System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.0/page", "dayjs@1.11.8", "@beyond-js/reactive@1.0.1/model", "@aimpact/ailearn-estrada@0.0.2/config", "@aimpact/ailearn-estrada@0.0.2/system-prompt", "@aimpact/ailearn-estrada@0.0.2/session", "@aimpact/media-manager@1.0.0/uploader", "@aimpact/ailearn-estrada@0.0.2/voice", "@aimpact/chat-api@1.0.0/entities/models", "@aimpact/ailearn-estrada@0.0.2/wrapper", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "@aimpact/ailearn-estrada@0.0.2/ui/manager", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "@aimpact/ailearn-estrada@0.0.2/shared/components", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.0.0/hooks", "@aimpact/ailearn-estrada@0.0.2/shared/icons", "@aimpact/ailearn-estrada@0.0.2/input", "pragmate-ui@0.0.36/toast", "dompurify@3.0.3", "marked-mangle@1.1.0", "marked@5.1.0", "marked-highlight@2.0.1", "highlight.js@11.8.0", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, bimport, __Bundle, __pkg, ims, Controller, Recorder, Chat, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Recorder: void 0,
    Chat: void 0
  });
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets100Page) {
      dependency_2 = _beyondJsReact18Widgets100Page;
    }, function (_dayjs2) {
      dependency_3 = _dayjs2;
    }, function (_beyondJsReactive101Model) {
      dependency_4 = _beyondJsReactive101Model;
    }, function (_aimpactAilearnEstrada002Config) {
      dependency_5 = _aimpactAilearnEstrada002Config;
    }, function (_aimpactAilearnEstrada002SystemPrompt) {
      dependency_6 = _aimpactAilearnEstrada002SystemPrompt;
    }, function (_aimpactAilearnEstrada002Session) {
      dependency_7 = _aimpactAilearnEstrada002Session;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_8 = _aimpactMediaManager100Uploader;
    }, function (_aimpactAilearnEstrada002Voice) {
      dependency_9 = _aimpactAilearnEstrada002Voice;
    }, function (_aimpactChatApi100EntitiesModels) {
      dependency_10 = _aimpactChatApi100EntitiesModels;
    }, function (_aimpactAilearnEstrada002Wrapper) {
      dependency_11 = _aimpactAilearnEstrada002Wrapper;
    }, function (_beyondJsKernel019Core) {
      dependency_12 = _beyondJsKernel019Core;
    }, function (_react2) {
      dependency_13 = _react2;
    }, function (_aimpactAilearnEstrada002UiManager) {
      dependency_14 = _aimpactAilearnEstrada002UiManager;
    }, function (_pragmateUi0036Form) {
      dependency_15 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Icons) {
      dependency_16 = _pragmateUi0036Icons;
    }, function (_aimpactAilearnEstrada002SharedComponents) {
      dependency_17 = _aimpactAilearnEstrada002SharedComponents;
    }, function (_beyondJsKernel019Routing) {
      dependency_18 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets100Hooks) {
      dependency_19 = _beyondJsReact18Widgets100Hooks;
    }, function (_aimpactAilearnEstrada002SharedIcons) {
      dependency_20 = _aimpactAilearnEstrada002SharedIcons;
    }, function (_aimpactAilearnEstrada002Input) {
      dependency_21 = _aimpactAilearnEstrada002Input;
    }, function (_pragmateUi0036Toast) {
      dependency_22 = _pragmateUi0036Toast;
    }, function (_dompurify) {
      dependency_23 = _dompurify;
    }, function (_markedMangle2) {
      dependency_24 = _markedMangle2;
    }, function (_marked2) {
      dependency_25 = _marked2;
    }, function (_markedHighlight2) {
      dependency_26 = _markedHighlight2;
    }, function (_highlightJs) {
      dependency_27 = _highlightJs;
    }, function (_beyondJsKernel019Styles) {
      dependency_28 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.0.1"], ["@aimpact/chat-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.6"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.8"], ["dexie", "3.2.4"], ["dompurify", "3.0.3"], ["firebase", "9.22.2"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.0"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.2.1"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.6.2"], ["uuid", "9.0.0"], ["@aimpact/ailearn-estrada", "0.0.2"], ["@aimpact/ailearn-estrada", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-estrada@0.0.2/chat-page"
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['dayjs', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-estrada/config', dependency_5], ['@aimpact/ailearn-estrada/system-prompt', dependency_6], ['@aimpact/ailearn-estrada/session', dependency_7], ['@aimpact/media-manager/uploader', dependency_8], ['@aimpact/ailearn-estrada/voice', dependency_9], ['@aimpact/chat-api/entities/models', dependency_10], ['@aimpact/ailearn-estrada/wrapper', dependency_11], ['@beyond-js/kernel/core', dependency_12], ['react', dependency_13], ['@aimpact/ailearn-estrada/ui/manager', dependency_14], ['pragmate-ui/form', dependency_15], ['pragmate-ui/icons', dependency_16], ['@aimpact/ailearn-estrada/shared/components', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['@aimpact/ailearn-estrada/shared/icons', dependency_20], ['@aimpact/ailearn-estrada/input', dependency_21], ['pragmate-ui/toast', dependency_22], ['dompurify', dependency_23], ['marked-mangle', dependency_24], ['marked', dependency_25], ['marked-highlight', dependency_26], ['highlight.js', dependency_27], ['@beyond-js/kernel/styles', dependency_28]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "chat-page",
        "vspecifier": "@aimpact/ailearn-estrada@0.0.2/chat-page",
        "is": "page",
        "route": "/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-estrada@0.0.2/chat-page');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2284025579,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.Page;
            }
            show() {
              this.#store.load(this.uri.vars.get('id'));
            }
            hide() {
              this.#store.clean();
            }
          }
          exports.Controller = Controller;
        }
      });

      /*************************************
      INTERNAL MODULE: ./interfaces/messages
      *************************************/

      ims.set('./interfaces/messages', {
        hash: 775952468,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/audio
      *****************************/

      ims.set('./store/audio', {
        hash: 3948245458,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioManager = void 0;
          var _dayjs = require("dayjs");
          var _model = require("@beyond-js/reactive/model");
          var _config = require("@aimpact/ailearn-estrada/config");
          var _systemPrompt = require("@aimpact/ailearn-estrada/system-prompt");
          var _session = require("@aimpact/ailearn-estrada/session");
          var _uploader = require("@aimpact/media-manager/uploader");
          var _recorder = require("./recorder");
          var _voice = require("@aimpact/ailearn-estrada/voice");
          class AudioManager extends _model.ReactiveModel {
            #parent;
            #recorder;
            get recorder() {
              return this.#recorder;
            }
            #uploader;
            get uploader() {
              return this.#uploader;
            }
            #players = {
              web: new _voice.Voice(),
              lab: new _voice.VoiceLab()
            };
            #player = 'web';
            get player() {
              return this.#players[this.#player];
            }
            #fetching;
            set isFetching(value) {
              this.#fetching = value;
              this.triggerEvent();
            }
            get isFetching() {
              return this.#uploader.fetching || super.fetching;
            }
            #error;
            get error() {
              return this.#error;
            }
            constructor(parent) {
              super();
              this.#recorder = new _recorder.Recorder();
              this.#parent = parent;
              this.reactiveProps(['autoplay']);
              this.init();
            }
            clean() {
              this.#error = undefined;
              this.trigger('change');
            }
            selectPlayer(name) {
              if (!this.#players[name]) {
                throw new Error(`Player ${name} not found`);
              }
              this.#player = name;
              //@ts-ignore
              this.trigger('change');
            }
            async init() {
              this.ready = true;
              this.#uploader = new _uploader.Uploader({
                type: 'audio',
                name: 'audio',
                params: {
                  container: 'audios',
                  project: 'ailearn-estrada'
                },
                url: _config.default.params.CHAT_API_SERVER
              });
              this.#uploader.on('change', () => {});
              this.#uploader.on('error', () => {});
              this.#uploader.on('loadend', this.loadend);
              this.#uploader.on('file.loaded', this.process);
            }
            process() {}
            loadend = async () => {
              console.warn('loadend ???');
            };
            create(selector) {
              if (globalThis.cordova) {
                // in cordova we use the native actions with cordova plugins
                return;
              }
              this.#uploader.create(selector);
            }
            blobToArrayBuffer(blob) {
              return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = e => {
                  const arrayBuffer = e.target?.result;
                  if (arrayBuffer instanceof ArrayBuffer) {
                    resolve(arrayBuffer);
                  } else {
                    reject(new Error('Failed to convert Blob to ArrayBuffer'));
                  }
                };
                reader.onerror = e => {
                  reject(e);
                };
                reader.readAsArrayBuffer(blob);
              });
            }
            async saveRecording(recording, transcription = undefined) {
              const {
                chat
              } = this.#parent;
              chat.sendAudio(recording, transcription);
              this.fetching = true;
              this.#parent.waitingResponse = true;
              const generateId = async buffer => {
                const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
                return hashHex;
              };
              const arrayBuffer = await this.blobToArrayBuffer(recording);
              return this.saveAudio(recording);
            }
            async saveAudio(audio, id = undefined) {
              this.fetching = true;
              const number = localStorage.getItem('recording.number') ? parseInt(localStorage.getItem('recording.number')) : 0;
              id = id ?? `recording.${performance.now()}`;
              const response = await this.publishRecording(audio);
              if (!response?.status) {
                return;
              }
              const {
                data
              } = response;
              const properties = {
                name: audio.name ?? `Recording ${number}`,
                path: data.file,
                output: data.output,
                usage: data.usage,
                source: audio,
                createdAt: (0, _dayjs.default)().unix(),
                transcription: data.transcription
              };
              return this.saveItem(properties);
            }
            publishRecording = async audio => {
              const form = new FormData();
              const kb = this.#parent.chat.knowledgeBoxId ? 'knowledge' : 'main';
              const system = (0, _systemPrompt.systemResumen)(kb, _session.sessionWrapper.user.displayName);
              form.append('audio', audio);
              form.append('prompt', system);
              form.append('container', 'audios');
              form.append('project', 'ailearn-estrada');
              form.append('chatId', this.#parent.chat.id);
              form.append('userId', _session.sessionWrapper.userId);
              form.append('fileName', `recoring-${Date.now()}.mp3`);
              form.append('knowledgeBoxId', this.#parent.selectedKb);
              const xhr = new _uploader.XHRLoader();
              const response = await xhr.upload(form, _config.default.params.CHAT_API_SERVER);
              return response.json();
            };
            async saveItem(properties) {
              try {
                const {
                  chat
                } = this.#parent;
                const response = await chat.setAudioMessage({
                  user: {
                    chatId: chat.id,
                    content: properties.transcription,
                    role: 'user',
                    timestamp: Date.now()
                  },
                  response: {
                    chatId: chat.id,
                    content: properties.output,
                    role: 'system',
                    usage: properties.usage,
                    timestamp: Date.now()
                  }
                });
                this.#parent.currentMessage = response;
                this.#parent.waitingResponse = false;
              } catch (e) {
                console.error('error saving item', e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.AudioManager = AudioManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 1714504619,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _models = require("@aimpact/chat-api/entities/models");
          var _wrapper = require("@aimpact/ailearn-estrada/wrapper");
          var _session = require("@aimpact/ailearn-estrada/session");
          var _systemPrompt = require("@aimpact/ailearn-estrada/system-prompt");
          var _audio = require("./audio");
          class StoreManager extends _model.ReactiveModel {
            #messages = [];
            get messages() {
              return this.#messages;
            }
            #name;
            get name() {
              return this.#name;
            }
            #category;
            get category() {
              return this.#category;
            }
            #chat;
            get chat() {
              return this.#chat;
            }
            #chats = _wrapper.AppWrapper.chats;
            get chats() {
              return this.#chats.items ?? [];
            }
            #audio = new _audio.AudioManager(this);
            get audioManager() {
              return this.#audio;
            }
            #kbs = _wrapper.AppWrapper.knowledgeBoxes;
            get kbs() {
              return this.#kbs.items ?? [];
            }
            #selectedKb;
            get selectedKb() {
              return this.#selectedKb;
            }
            set selectedKb(kb) {
              this.#selectedKb = kb;
            }
            #selectedModel = 'GPT 4';
            get selectedModel() {
              return this.#selectedModel;
            }
            set selectedModel(model) {
              this.#selectedModel = model;
            }
            #notFound;
            get notFound() {
              return this.#notFound;
            }
            set notFound(notFound) {
              this.#notFound = notFound;
            }
            get selectedKbPath() {
              const selectedKb = this.#kbs.items.find(i => i.id === this.#selectedKb);
              return selectedKb?.path ?? 'No Knowledge Box';
            }
            #currentMessage;
            get currentMessage() {
              return this.#currentMessage;
            }
            set currentMessage(message) {
              if (message?.id === this.#currentMessage?.id) return;
              this.#currentMessage = message;
            }
            constructor() {
              super();
              this.reactiveProps(['waitingResponse', 'autoplay']);
              this.autoplay = true;
            }
            clean() {
              this.#messages = undefined;
              this.fetching = false;
              this.ready = false;
            }
            load = async id => {
              if (!id) {
                this.ready = true;
                this.notFound = false;
                return;
              }
              this.fetching = true;
              var chat = new _models.Chat({
                id
              });
              await chat.load({
                id
              });
              if (!chat.found) {
                this.fetching = false;
                this.ready = true;
                this.notFound = true;
                return;
              }
              await chat.isReady;
              const knowledeBoxSelected = this.#kbs.items.find(i => i.id === chat.knowledgeBoxId);
              this.#selectedKb = knowledeBoxSelected ? knowledeBoxSelected.id : 'default';
              /* usar propiedad role para identificar owner del mensaje*/
              chat.on('change', () => {
                this.#messages = chat.messages;
                this.triggerEvent('new.message');
              });
              await chat.loadAll({
                id
              });
              globalThis.chat = chat;
              this.#chat = chat;
              this.#messages = chat.messages;
              this.fetching = false;
              this.ready = true;
              this.notFound = false;
            };
            async sendMessage(message) {
              try {
                this.#currentMessage = undefined;
                if ([undefined, '', null].includes(message)) return;
                this.fetching = true;
                this.waitingResponse = true;
                const kb = this.#chat.knowledgeBoxId ? 'knowledge' : 'main';
                const system = (0, _systemPrompt.systemResumen)(kb, _session.sessionWrapper.user.displayName);
                const backendResponse = await this.#chat.sendMessage(message, system);
                // the system answer.
                this.#currentMessage = backendResponse.response;
                this.chat.getMessage(backendResponse.response.id).autoplay = this.autoplay;
                this.waitingResponse = false;
                this.triggerEvent('new.message');
              } catch (e) {
                throw e;
              } finally {
                this.waitingResponse = false;
                this.fetching = false;
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /********************************
      INTERNAL MODULE: ./store/recorder
      ********************************/

      ims.set('./store/recorder', {
        hash: 2233069833,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Recorder = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _dayjs = require("dayjs");
          /*bundle */
          class Recorder extends _core.Events {
            #initialised = false;
            #source;
            #stream;
            #startTime;
            #initPromise;
            #stopPromise;
            #audioContext;
            #recordingPromise;
            #mediaRecorder;
            #chunks = [];
            get chunks() {
              return this.#chunks;
            }
            #status;
            get status() {
              return this.#status;
            }
            #recording = false;
            get recording() {
              return this.#recording;
            }
            #error;
            get error() {
              return this.#error;
            }
            get valid() {
              return !this.#error;
            }
            #audio;
            get audio() {
              return this.#audio;
            }
            #analyser;
            get analyser() {
              return this.#analyser;
            }
            #speechRecognition;
            #transcription = '';
            get transcription() {
              return this.#transcription;
            }
            #promiseSpeech;
            async initialise() {
              if (this.#initPromise) return await this.#initPromise;
              this.#initPromise = new _core.PendingPromise();
              navigator.mediaDevices.getUserMedia({
                audio: true
              }).then(stream => {
                this.#mediaRecorder = new MediaRecorder(stream);
                this.#stream = stream;
                // Create an AudioContext
                this.#audioContext = new (globalThis.AudioContext || globalThis.webkitAudioContext)();
                // Create an AnalyserNode
                this.#analyser = this.#audioContext.createAnalyser();
                // Create a source from the stream and connect it to the analyser
                this.#source = this.#audioContext.createMediaStreamSource(stream);
                // this.#source.connect(this.#analyser);
                if ('webkitSpeechRecognition' in window) {
                  //@ts-ignore
                  this.#speechRecognition = new webkitSpeechRecognition();
                  this.#speechRecognition.lang = 'es-ES';
                  this.#speechRecognition.continuous = true;
                  this.#speechRecognition.interimResults = true;
                  // this.#speechRecognition.lang = 'en-US'; // Change this to the desired language
                  this.#promiseSpeech = new _core.PendingPromise();
                  this.#speechRecognition.onresult = event => {
                    let interimTranscript = '';
                    let finalTranscript = '';
                    for (let i = event.resultIndex; i < event.results.length; ++i) {
                      if (event.results[i].isFinal) {
                        finalTranscript += event.results[i][0].transcript;
                        this.#transcription = finalTranscript;
                        this.#promiseSpeech.resolve(this.#transcription);
                      } else {
                        interimTranscript += event.results[i][0].transcript;
                      }
                    }
                  };
                  this.#speechRecognition.onerror = event => console.error('error in transcription');
                  this.#speechRecognition.start();
                } else {
                  console.error('Speech recognition not supported');
                }
                this.#mediaRecorder.addEventListener('dataavailable', event => {
                  if (event.data.size === 0) return;
                  this.#chunks.push(event.data);
                  this.trigger('dataavailable');
                });
              }).catch(error => {
                console.error(error);
                this.#error = error.message;
                this.#initPromise.reject();
              }).finally(() => {
                this.#initialised = true;
                this.#initPromise.resolve();
              });
              return this.#initPromise;
            }
            record() {
              // if (this.#recording || this.transcribing) {
              if (this.#recordingPromise) return this.#recordingPromise;
              // TODO - @ftovar ERROR
              // this.#chunks = [];
              this.#recordingPromise = new _core.PendingPromise();
              if (this.#recording) {
                throw new Error('Wait for recorder to be stopped and transcription ready');
              }
              this.#status = 'started';
              this.#recording = true;
              this.trigger('change');
              this.initialise().then(async () => {
                this.#startTime = (0, _dayjs.default)();
                // TODO - @ftovar ERROR
                // const audio = await this.#mediaRecorder?.start(1000);
                await this.#mediaRecorder?.start();
              }).catch(error => {
                console.error(error);
              });
              return this.#recordingPromise;
            }
            stopStream = () => {
              //stopping the capturing request by stopping all the tracks on the active stream
              this.#stream.getTracks() //get all tracks from the stream
              .forEach(track => track.stop()); //stop each one
            };

            stop() {
              if (!this.#mediaRecorder) {
                console.warn('this.#mediaRecorder no initialize');
                return;
              }
              if (this.#stopPromise) return this.#stopPromise;
              this.#stopPromise = new _core.PendingPromise();
              if (!this.#recording) throw new Error('Recorder is not currently recording');
              this.#status = 'stopped';
              const stop = () => {
                this.#chunks = [];
                this.#recording = false;
                const endtime = (0, _dayjs.default)();
                this.#mediaRecorder.addEventListener('stop', async () => {
                  const audio = new Blob(this.#chunks, {
                    type: this.#mediaRecorder.mimeType
                  });
                  //@ts-ignore
                  this.#audio = audio;
                  const onFinish = () => {
                    this.#stopPromise.resolve(audio);
                    this.#stopPromise = undefined;
                  };
                  if (this.#promiseSpeech) {
                    this.#promiseSpeech.then(onFinish);
                  } else {
                    if (this.#stopPromise) {
                      onFinish();
                    }
                  }
                  if (this.#recordingPromise) {
                    this.#recordingPromise.resolve(audio);
                    this.#recordingPromise = undefined;
                  }
                  this.stopStream();
                  this.#mediaRecorder = undefined;
                  this.#stream = undefined;
                  this.#initPromise = undefined;
                });
                this.#mediaRecorder?.stop();
                this.#speechRecognition?.stop();
                this.trigger('change');
              };
              this.#initialised ? stop() : this.initialise().then(stop);
              return this.#stopPromise;
            }
          }
          exports.Recorder = Recorder;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1408604792,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useChatContext = exports.ChatContext = void 0;
          var React = require("react");
          const ChatContext = React.createContext({});
          exports.ChatContext = ChatContext;
          const useChatContext = () => React.useContext(ChatContext);
          exports.useChatContext = useChatContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 1904903353,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyChat = EmptyChat;
          var React = require("react");
          var _manager = require("@aimpact/ailearn-estrada/ui/manager");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _wrapper = require("@aimpact/ailearn-estrada/wrapper");
          var _components = require("@aimpact/ailearn-estrada/shared/components");
          var _routing = require("@beyond-js/kernel/routing");
          function EmptyChat() {
            function openDialog() {
              _manager.UIManager.modalOpened = true;
            }
            function navigateToDocuments() {
              _routing.routing.pushState('/documents/home');
            }
            const chatText = !!_wrapper.AppWrapper.chats?.items?.length ? {
              title: 'Chat now',
              subtitle: 'Select a chat to start talking.',
              description: ' Or create a new one here:'
            } : {
              title: 'Chat now',
              subtitle: 'There are no chats in your space yet.',
              description: 'You can start by creating your first chat now.'
            };
            const kbText = !!_wrapper.AppWrapper.knowledgeBoxes?.items?.length ? {
              title: 'Upload documents',
              subtitle: 'Use your documents to talk to AI.',
              description: ' Or create a new one here:'
            } : {
              title: 'Upload documents',
              subtitle: 'There are no knowledge box in your space yet.',
              description: 'You can start by creating your first knowledge box now.'
            };
            if (!_wrapper.AppWrapper.ready) return React.createElement(_components.PreloadScreen, null);
            return React.createElement("section", {
              className: 'empty-view-container'
            }, React.createElement("section", {
              className: 'empty-view-banner'
            }, React.createElement("img", {
              src: '/assets/rivadavia.png',
              width: 100,
              className: 'lg'
            }), React.createElement("div", {
              className: 'title-xl'
            }, "\u00A1Bienvenido!"), React.createElement("p", null, "Ayer, hoy y siempre ayud\u00E1ndote a aprender. Rivadavia es la marca l\u00EDder de la vuelta al cole, sin\u00F3nimo de calidad e innovaci\u00F3n siempre presente en todas las listas escolares y aulas argentinas.")), React.createElement("section", {
              className: 'cards'
            }, React.createElement("div", {
              className: 'empty-view-card'
            }, React.createElement("header", null, React.createElement(_icons.Icon, {
              icon: 'add-chat',
              className: 'lg'
            }), React.createElement("h1", null, chatText.title)), React.createElement("p", null, chatText.subtitle, chatText.description), React.createElement(_form.Button, {
              onClick: openDialog,
              label: 'Start Chat'
            })), React.createElement("div", {
              className: 'empty-view-card'
            }, React.createElement("header", null, React.createElement(_icons.Icon, {
              icon: 'upload-file',
              className: 'lg'
            }), React.createElement("h1", null, kbText.title)), React.createElement("p", null, kbText.subtitle, kbText.description), React.createElement(_form.Button, {
              onClick: navigateToDocuments,
              label: 'Create Knowledge Box'
            }))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/header/index
      ************************************/

      ims.set('./views/header/index', {
        hash: 4085034098,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _components = require("@aimpact/ailearn-estrada/shared/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function Header() {
            const {
              store
            } = (0, _context.useChatContext)();
            const [search, setSearch] = (0, _react.useState)('');
            const [autoplay, setAutoplay] = (0, _react.useState)(store.autoplay);
            const handleAutoplayToggle = () => {
              store.autoplay = !store.autoplay;
            };
            (0, _hooks.useBinder)([store], () => setAutoplay(store.autoplay));
            const handleChatSearch = e => {
              e.preventDefault();
              setSearch(e.target.value);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: 'section-title'
            }, _react.default.createElement("h1", null, store.chat.name ?? 'Untitled')), _react.default.createElement("div", {
              className: 'chat__header'
            }, _react.default.createElement("div", {
              className: 'chat__detail__container'
            }, _react.default.createElement(_icons.Icon, {
              icon: 'planet'
            }), _react.default.createElement("span", null, store.selectedKbPath)), _react.default.createElement("div", {
              className: 'chat__detail__container'
            }, _react.default.createElement(_icons.Icon, {
              icon: 'folder'
            }), _react.default.createElement("span", null, store.selectedModel)), _react.default.createElement(_components.Input, {
              name: 'chat',
              label: 'Search in chat',
              value: search,
              onChange: handleChatSearch,
              required: true,
              type: 'search'
            }), _react.default.createElement(_icons.Icon, {
              icon: autoplay ? 'speaker' : 'speaker-off',
              className: 'lg speaker',
              onClick: handleAutoplayToggle
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1264789375,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _chat = require("./room/chat");
          var _context = require("./context");
          var _empty = require("./empty");
          var _chatSkeleton = require("./room/chat-skeleton");
          var _notFound = require("./not-found");
          function Page({
            store
          }) {
            const [fetching, setFetching] = React.useState(store.fetching);
            const [ready, setReady] = React.useState(store.ready);
            (0, _hooks.useBinder)([store], () => {
              setFetching(store.fetching);
              setReady(store.ready);
            });
            const contextValue = {
              store,
              autoplay: store.autoplay,
              messages: store.messages,
              player: store.audioManager.player
            };
            const Control = store.chat?.id ? _chat.Chat : store.notFound ? _notFound.ChatNotFound : _empty.EmptyChat;
            const View = ready ? Control : _chatSkeleton.ChatSkeleton;
            return React.createElement(_context.ChatContext.Provider, {
              value: contextValue
            }, React.createElement(View, null));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/not-found
      *********************************/

      ims.set('./views/not-found', {
        hash: 3650080419,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatNotFound = ChatNotFound;
          var React = require("react");
          var _manager = require("@aimpact/ailearn-estrada/ui/manager");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _wrapper = require("@aimpact/ailearn-estrada/wrapper");
          var _components = require("@aimpact/ailearn-estrada/shared/components");
          var _icons2 = require("@aimpact/ailearn-estrada/shared/icons");
          function ChatNotFound() {
            function openDialog() {
              _manager.UIManager.modalOpened = true;
            }
            if (!_wrapper.AppWrapper.ready) return React.createElement(_components.PreloadScreen, null);
            return React.createElement("div", {
              className: 'not__found_chat '
            }, React.createElement("img", {
              src: '/assets/not-found.png',
              alt: 'Chat not found'
            }), React.createElement("span", {
              className: 'not__found__details'
            }, React.createElement(_icons.Icon, {
              icon: _icons2.ICONS['aip-chat-logo'],
              className: 'not-found__ailogo'
            }), React.createElement("h2", null, "Chat not found"), React.createElement("p", null, React.createElement("strong", null, "We couldn't find a chat associated with that ID."), " ", React.createElement("br", null), "Please enter URL correctly or create a new chat."), React.createElement(_form.Button, {
              icon: 'chat',
              onClick: openDialog,
              label: 'Start New Chat'
            })));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/room/chat-skeleton
      ******************************************/

      ims.set('./views/room/chat-skeleton', {
        hash: 1779463887,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatSkeleton = void 0;
          var _react = require("react");
          var _input = require("@aimpact/ailearn-estrada/input");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          const ChatSkeleton = () => {
            const {
              store
            } = (0, _context.useChatContext)();
            return _react.default.createElement("div", {
              className: 'chat-container'
            }, _react.default.createElement("div", {
              className: 'section-title'
            }, _react.default.createElement("div", {
              className: 'title-skeleton'
            })), _react.default.createElement("div", {
              className: 'chat__header'
            }, _react.default.createElement("div", {
              className: 'header-skeleton'
            }), _react.default.createElement("div", {
              className: 'header-skeleton'
            }), _react.default.createElement("div", {
              className: 'header-skeleton'
            }), _react.default.createElement("div", {
              className: 'header-skeleton'
            })), _react.default.createElement("div", {
              className: 'chat'
            }, [...Array(5)].map((_, i) => _react.default.createElement("div", {
              key: `skeleton-${i}`,
              className: 'message-skeleton'
            }))), _react.default.createElement("div", {
              className: 'send'
            }, _react.default.createElement(_input.ChatInput, {
              disabled: true,
              store: store,
              text: '',
              setText: () => {}
            }), _react.default.createElement(_icons.IconButton, {
              icon: 'backArrow',
              className: 'scroll-bottom circle',
              disabled: true
            })));
          };
          exports.ChatSkeleton = ChatSkeleton;
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/room/chat
      *********************************/

      ims.set('./views/room/chat', {
        hash: 1374783479,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = Chat;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _input = require("@aimpact/ailearn-estrada/input");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          var _messages = require("./messages");
          var _header = require("../header");
          /*bundle*/
          function Chat() {
            const {
              store
            } = (0, _context.useChatContext)();
            const messagesEnd = (0, _react.useRef)(null);
            const scrollToBottom = () => messagesEnd.current?.scrollIntoView({
              block: 'end',
              behavior: 'smooth'
            });
            (0, _hooks.useBinder)([store], () => {
              window.setTimeout(() => scrollToBottom(), 100);
            }, 'new.message');
            _react.default.useEffect(() => scrollToBottom(), []);
            return _react.default.createElement("div", {
              className: 'chat-container'
            }, _react.default.createElement(_header.Header, null), _react.default.createElement("div", {
              className: 'chat'
            }, _react.default.createElement(_messages.Messages, null), _react.default.createElement("div", {
              ref: messagesEnd
            })), _react.default.createElement("div", {
              className: 'send'
            }, _react.default.createElement(_input.ChatInput, {
              store: store
            }), _react.default.createElement(_icons.IconButton, {
              icon: 'backArrow',
              className: 'scroll-bottom circle',
              onClick: scrollToBottom
            })));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/room/messages/answering
      ***********************************************/

      ims.set('./views/room/messages/answering', {
        hash: 1334015489,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SystemAnswering = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-estrada/shared/icons");
          const SystemAnswering = () => {
            return _react.default.createElement("div", {
              className: 'message answering'
            }, _react.default.createElement(_icons.Icon, {
              className: 'lg',
              icon: _icons2.ICONS['ai-profile']
            }), _react.default.createElement("div", {
              className: 'dot-animation'
            }, _react.default.createElement("span", {
              className: 'dot'
            }), _react.default.createElement("span", {
              className: 'dot'
            }), _react.default.createElement("span", {
              className: 'dot'
            })));
          };
          exports.SystemAnswering = SystemAnswering;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/room/messages/index
      *******************************************/

      ims.set('./views/room/messages/index', {
        hash: 2922280869,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = Messages;
          var React = require("react");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _answering = require("./answering");
          var _message = require("./message");
          function Messages() {
            const {
              store
            } = (0, _context.useChatContext)();
            const [messages, setMessages] = React.useState(store.messages ?? []);
            (0, _hooks.useBinder)([store], () => {
              setMessages([...store.messages]);
            }, 'new.message');
            const output = messages.map((message, i) => {
              const last = i === messages.length - 1;
              return React.createElement(_message.Message, {
                key: `message-${i}`,
                message: message,
                last: last
              });
            });
            return React.createElement(React.Fragment, null, output, store.waitingResponse && React.createElement(_answering.SystemAnswering, null));
          }
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./views/room/messages/message/actions/index
      ***********************************************************/

      ims.set('./views/room/messages/message/actions/index', {
        hash: 310307936,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageActions = MessageActions;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../../../context");
          var _toast = require("pragmate-ui/toast");
          function MessageActions({
            message,
            text,
            messageTokens
          }) {
            const {
              store,
              player
            } = (0, _context.useChatContext)();
            const [action, setAction] = React.useState('stop');
            const [processing, setProcessing] = React.useState(false);
            (0, _hooks.useBinder)([player], () => setProcessing(player.speaking));
            const onChange = () => {
              setProcessing(false);
              setAction('');
            };
            (0, _hooks.useBinder)([player], onChange, 'on.finish');
            const onPlay = async ({
              listen
            }) => {
              setAction('play');
              store.currentMessage = message;
              player.positionToCut = 0;
              await player.play(text);
            };
            const onPause = async ({
              listen
            }) => {
              await player.stop();
              setAction('stop');
              setProcessing(false);
            };
            const playAudio = async event => {
              setProcessing(true);
              const call = action === 'play' ? onPause : onPlay;
              await call(event.currentTarget.dataset);
              setProcessing(false);
            };
            const copyMessage = async () => {
              await navigator.clipboard.writeText(text);
              _toast.toast.success('Message copied to clipboard');
            };
            const disabled = {
              disabled: true
            };
            const apply = store.currentMessage?.id === message?.id && processing;
            const icon = apply || action === 'play' ? 'stop' : 'play';
            const onClick = apply || action === 'play' ? onPause : onPlay;
            return React.createElement("div", null, React.createElement("div", {
              className: 'audio__actions'
            }, React.createElement(_icons.IconButton, {
              onClick: copyMessage,
              icon: 'copy'
            }), React.createElement(_icons.IconButton, {
              onClick: onClick,
              "data-listen": 'api',
              icon: icon
            })), messageTokens && React.createElement("div", {
              className: 'tokens overline'
            }, messageTokens, " TOKENS"));
          }
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./views/room/messages/message/audio-message
      ***********************************************************/

      ims.set('./views/room/messages/message/audio-message', {
        hash: 3644074600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioMessage = void 0;
          var _react = require("react");
          var _player = require("./components/player");
          var _text = require("./components/text");
          var _profileIcon = require("./components/profile-icon");
          const AudioMessage = ({
            message,
            last
          }) => {
            const cls = `message ${message.role}`;
            return _react.default.createElement("div", {
              className: cls,
              "data-id": message.id
            }, _react.default.createElement("section", {
              className: 'picture__container'
            }, _react.default.createElement(_profileIcon.ProfileIcon, {
              role: message.role
            })), _react.default.createElement("section", {
              className: 'message__container'
            }, _react.default.createElement(_text.MessageText, {
              message: message
            }), _react.default.createElement(_player.AudioPlayer, {
              src: message.audio
            })));
          };
          exports.AudioMessage = AudioMessage;
        }
      });

      /***************************************************************
      INTERNAL MODULE: ./views/room/messages/message/components/player
      ***************************************************************/

      ims.set('./views/room/messages/message/components/player', {
        hash: 1140809978,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var React = require("react");
          // audio_player.tsx

          function AudioPlayer({
            src
          }) {
            if (!src) {
              console.warn('not audio to process');
              return null;
            }
            src = URL.createObjectURL(src);
            const ref = React.useRef(null);
            React.useEffect(() => {
              const target = ref.current;
              target.addEventListener('loadedmetadata', () => {
                if (target.duration === Infinity) {
                  target.currentTime = 1e101;
                  target.ontimeupdate = () => {
                    target.ontimeupdate = null;
                    target.currentTime = 0;
                  };
                }
              });
            }, [src]);
            if (!src) return null;
            return React.createElement("div", {
              className: 'audio-player'
            }, React.createElement("audio", {
              controls: true,
              preload: 'metadata'
            }, React.createElement("source", {
              src: src,
              type: 'audio/mp3',
              ref: ref
            }), "Your browser does not support the audio element."));
          }
        }
      });

      /*********************************************************************
      INTERNAL MODULE: ./views/room/messages/message/components/profile-icon
      *********************************************************************/

      ims.set('./views/room/messages/message/components/profile-icon', {
        hash: 3563722095,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = ProfileIcon;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _session = require("@aimpact/ailearn-estrada/session");
          var _icons2 = require("@aimpact/ailearn-estrada/shared/icons");
          function ProfileIcon({
            role
          }) {
            const [loadError, setLoadError] = (0, _react.useState)(false);
            const icon = role === 'user' ? 'user' : 'ai-profile';
            const userProps = _session.sessionWrapper.user.getProperties();
            const handleLoadError = () => setLoadError(true);
            return _react.default.createElement(_react.default.Fragment, null, userProps.photoURL && role === 'user' && !loadError ? _react.default.createElement("img", {
              alt: 'user image profile',
              src: userProps.photoURL,
              onError: handleLoadError
            }) : _react.default.createElement(_icons.Icon, {
              className: 'lg',
              icon: _icons2.ICONS[icon] ?? icon
            }));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./views/room/messages/message/components/text
      *************************************************************/

      ims.set('./views/room/messages/message/components/text', {
        hash: 2342304613,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageText = MessageText;
          var React = require("react");
          var DOMPurify = require("dompurify");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../../../context");
          var _markedMangle = require("marked-mangle");
          var _marked = require("marked");
          var _markedHighlight = require("marked-highlight");
          var _highlight = require("highlight.js");
          function MessageText({
            message
          }) {
            const {
              store,
              autoplay,
              player
            } = (0, _context.useChatContext)();
            const [text, setText] = React.useState(message?.content ?? '');
            const [cutIndex, setCutIndex] = React.useState(0);
            const ref = React.useRef(null);
            _marked.marked.use((0, _markedMangle.mangle)());
            _marked.marked.use((0, _markedHighlight.markedHighlight)({
              langPrefix: 'hljs language-',
              highlight(code, lang) {
                const language = _highlight.default.getLanguage(lang) ? lang : 'plaintext';
                return _highlight.default.highlight(code, {
                  language
                }).value;
              }
            }));
            React.useEffect(() => {
              if (!message || message.role === 'user' || !autoplay) return;
              if (message.id !== store.currentMessage?.id) return;
              player.play(message.content);
            }, [message?.autoplay]);
            const removeHighlight = () => {
              ref.current.querySelectorAll('.highlight').forEach(element => element.classList.remove('highlight'));
            };
            (0, _hooks.useBinder)([player], () => {
              if (store.currentMessage?.id !== message?.id) return;
              const currentIndex = player.currentWord;
              if (player.positionToCut > 0) {
                const segmentToCut = player.text.slice(0, currentIndex).split(' ').length - 1;
                const finalPosition = player.positionToCut + segmentToCut;
                const textArray = text.split(' ');
                removeHighlight();
                if (!ref.current.querySelector(`[data-index="${finalPosition}"]`)) return;
                ref.current.querySelector(`[data-index="${finalPosition}"]`).classList.add('highlight');
                return;
              }
              const endOfWordIndex = text.indexOf(' ', currentIndex);
              const segment = text.slice(0, currentIndex);
              const position = segment.split(' ').length - 1;
              removeHighlight();
              ref.current.querySelector(`[data-index="${position}"]`).classList.add('highlight');
            }, 'boundary');
            (0, _hooks.useBinder)([player], removeHighlight, 'on.finish');
            if (typeof text !== 'string') return null;
            const textsArray = text.split(' ');
            const createSpan = (word, index) => `<span data-index="${index}" class="word">${word}</span>`;
            const words = textsArray.map(createSpan).join(' ');
            const content = DOMPurify.sanitize((0, _marked.marked)(words, {
              headerIds: false,
              headerPrefix: false
            }));
            const onClick = event => {
              event.preventDefault();
              event.stopPropagation();
              if (event.target.classList.contains('word')) {
                const index = event.target.dataset.index;
                const wordsArray = text.split(' ');
                const textToPlay = wordsArray.slice(index).join(' ');
                store.currentMessage = message;
                console.log(39, event.target);
                player.positionToCut = parseInt(index);
                console.log(40, player.positionToCut);
                player.play(textToPlay);
                // Implement your logic for playing the text from the clicked word to the end here.
              }
            };

            return React.createElement("div", {
              className: 'message-text__container',
              ref: ref
            }, React.createElement("div", {
              onClick: onClick,
              dangerouslySetInnerHTML: {
                __html: content
              }
            }));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/room/messages/message/context
      *****************************************************/

      ims.set('./views/room/messages/message/context', {
        hash: 558237393,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useChatMessageContext = exports.ChatMessageContext = void 0;
          var React = require("react");
          const ChatMessageContext = React.createContext({});
          exports.ChatMessageContext = ChatMessageContext;
          const useChatMessageContext = () => React.useContext(ChatMessageContext);
          exports.useChatMessageContext = useChatMessageContext;
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/room/messages/message/index
      ***************************************************/

      ims.set('./views/room/messages/message/index', {
        hash: 1636181731,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = Message;
          var React = require("react");
          var _text = require("./components/text");
          var _actions = require("./actions");
          var _profileIcon = require("./components/profile-icon");
          var _audioMessage = require("./audio-message");
          var _context = require("../../../context");
          function Message({
            message,
            last
          }) {
            const {
              store,
              player,
              autoplay
            } = (0, _context.useChatContext)();
            const cls = `message ${message.role}`;
            if (message.type === 'audio') {
              return React.createElement(_audioMessage.AudioMessage, {
                message: message,
                last: last
              });
            }
            const messageTokens = message.role === 'system' ? message.usage?.totalTokens : null;
            return React.createElement("div", {
              className: cls,
              "data-id": message.id
            }, React.createElement("section", {
              className: 'picture__container'
            }, React.createElement(_profileIcon.ProfileIcon, {
              role: message.role
            })), React.createElement("section", {
              className: 'message__container'
            }, React.createElement(_text.MessageText, {
              message: message
            })), React.createElement("section", {
              className: 'message__actions'
            }, React.createElement(_actions.MessageActions, {
              message: message,
              text: message.content,
              messageTokens: messageTokens
            })));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/to__delete/use-speech-to-text
      *****************************************************/

      ims.set('./views/to__delete/use-speech-to-text', {
        hash: 2438641339,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSpeechToText = useSpeechToText;
          var React = require("react");
          var _voice = require("@aimpact/ailearn-estrada/voice");
          function useSpeechToText() {
            const [voices, setVoice] = React.useState({});
            React.useEffect(() => {
              const voice = new _voice.Voice();
              const lab = new _voice.VoiceLab();
              setVoice({
                voice,
                lab
              });
            }, []);
            const {
              voice,
              lab
            } = voices;
            return {
              voice,
              lab,
              ready: !!voice && !!lab
            };
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./store/recorder",
        "from": "Recorder",
        "name": "Recorder"
      }, {
        "im": "./views/room/chat",
        "from": "Chat",
        "name": "Chat"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Recorder') && _export("Recorder", Recorder = require ? require('./store/recorder').Recorder : value);
        (require || prop === 'Chat') && _export("Chat", Chat = require ? require('./views/room/chat').Chat : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFhLENBQUM7WUFFeERyQyxLQUFLLENBQUM2RCxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNb0csS0FBSyxHQUFHLElBQUk5VixZQUFLLEVBQUU7Y0FDekIsTUFBTUMsR0FBRyxHQUFHLElBQUlDLGVBQVEsRUFBRTtjQUMxQjJWLFFBQVEsQ0FBQztnQkFBRUMsS0FBSztnQkFBRTdWO2NBQUcsQ0FBRSxDQUFDO1lBQ3pCLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDTixNQUFNO2NBQUU2VixLQUFLO2NBQUU3VjtZQUFHLENBQUUsR0FBRzJWLE1BQU07WUFDN0IsT0FBTztjQUFFRSxLQUFLO2NBQUU3VixHQUFHO2NBQUVpQixLQUFLLEVBQUUsQ0FBQyxDQUFDNFUsS0FBSyxJQUFJLENBQUMsQ0FBQzdWO1lBQUcsQ0FBRTtVQUMvQyIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJQYWdlIiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFuIiwiZXhwb3J0cyIsIk9iamVjdCIsInZhbHVlIiwiQXVkaW9NYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInJlY29yZGVyIiwidXBsb2FkZXIiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiaXNGZXRjaGluZyIsInRyaWdnZXJFdmVudCIsImZldGNoaW5nIiwiZXJyb3IiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsIlJlY29yZGVyIiwicmVhY3RpdmVQcm9wcyIsImluaXQiLCJ1bmRlZmluZWQiLCJ0cmlnZ2VyIiwic2VsZWN0UGxheWVyIiwibmFtZSIsIkVycm9yIiwicmVhZHkiLCJVcGxvYWRlciIsInR5cGUiLCJwYXJhbXMiLCJjb250YWluZXIiLCJwcm9qZWN0IiwidXJsIiwiY29uZmlnIiwiQ0hBVF9BUElfU0VSVkVSIiwib24iLCJsb2FkZW5kIiwicHJvY2VzcyIsImNvbnNvbGUiLCJ3YXJuIiwiY3JlYXRlIiwic2VsZWN0b3IiLCJnbG9iYWxUaGlzIiwiY29yZG92YSIsImJsb2JUb0FycmF5QnVmZmVyIiwiYmxvYiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJhcnJheUJ1ZmZlciIsInRhcmdldCIsInJlc3VsdCIsIkFycmF5QnVmZmVyIiwib25lcnJvciIsInJlYWRBc0FycmF5QnVmZmVyIiwic2F2ZVJlY29yZGluZyIsInJlY29yZGluZyIsInRyYW5zY3JpcHRpb24iLCJjaGF0Iiwic2VuZEF1ZGlvIiwid2FpdGluZ1Jlc3BvbnNlIiwiZ2VuZXJhdGVJZCIsImJ1ZmZlciIsImhhc2hCdWZmZXIiLCJjcnlwdG8iLCJzdWJ0bGUiLCJkaWdlc3QiLCJoYXNoQXJyYXkiLCJBcnJheSIsImZyb20iLCJVaW50OEFycmF5IiwiaGFzaEhleCIsIm1hcCIsImIiLCJ0b1N0cmluZyIsInBhZFN0YXJ0Iiwiam9pbiIsInNhdmVBdWRpbyIsImF1ZGlvIiwiaWQiLCJudW1iZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VJbnQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInJlc3BvbnNlIiwicHVibGlzaFJlY29yZGluZyIsInN0YXR1cyIsImRhdGEiLCJwcm9wZXJ0aWVzIiwicGF0aCIsImZpbGUiLCJvdXRwdXQiLCJ1c2FnZSIsInNvdXJjZSIsImNyZWF0ZWRBdCIsInVuaXgiLCJzYXZlSXRlbSIsImZvcm0iLCJGb3JtRGF0YSIsImtiIiwia25vd2xlZGdlQm94SWQiLCJzeXN0ZW0iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsImFwcGVuZCIsInVzZXJJZCIsIkRhdGUiLCJzZWxlY3RlZEtiIiwieGhyIiwiWEhSTG9hZGVyIiwidXBsb2FkIiwianNvbiIsInNldEF1ZGlvTWVzc2FnZSIsImNoYXRJZCIsImNvbnRlbnQiLCJyb2xlIiwidGltZXN0YW1wIiwiY3VycmVudE1lc3NhZ2UiLCJtZXNzYWdlcyIsImNhdGVnb3J5IiwiQXBwV3JhcHBlciIsImNoYXRzIiwiaXRlbXMiLCJhdWRpb01hbmFnZXIiLCJrbm93bGVkZ2VCb3hlcyIsImticyIsInNlbGVjdGVkTW9kZWwiLCJtb2RlbCIsIm5vdEZvdW5kIiwic2VsZWN0ZWRLYlBhdGgiLCJmaW5kIiwiaSIsIm1lc3NhZ2UiLCJhdXRvcGxheSIsIkNoYXQiLCJmb3VuZCIsImlzUmVhZHkiLCJrbm93bGVkZUJveFNlbGVjdGVkIiwibG9hZEFsbCIsInNlbmRNZXNzYWdlIiwiaW5jbHVkZXMiLCJiYWNrZW5kUmVzcG9uc2UiLCJnZXRNZXNzYWdlIiwiRXZlbnRzIiwiY2h1bmtzIiwidmFsaWQiLCJhbmFseXNlciIsImluaXRpYWxpc2UiLCJQZW5kaW5nUHJvbWlzZSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInRoZW4iLCJzdHJlYW0iLCJNZWRpYVJlY29yZGVyIiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwiY3JlYXRlQW5hbHlzZXIiLCJjcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSIsIndpbmRvdyIsIndlYmtpdFNwZWVjaFJlY29nbml0aW9uIiwibGFuZyIsImNvbnRpbnVvdXMiLCJpbnRlcmltUmVzdWx0cyIsIm9ucmVzdWx0IiwiZXZlbnQiLCJpbnRlcmltVHJhbnNjcmlwdCIsImZpbmFsVHJhbnNjcmlwdCIsInJlc3VsdEluZGV4IiwicmVzdWx0cyIsImxlbmd0aCIsImlzRmluYWwiLCJ0cmFuc2NyaXB0Iiwic3RhcnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2l6ZSIsInB1c2giLCJjYXRjaCIsImZpbmFsbHkiLCJyZWNvcmQiLCJzdG9wU3RyZWFtIiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInRyYWNrIiwic3RvcCIsImVuZHRpbWUiLCJCbG9iIiwibWltZVR5cGUiLCJvbkZpbmlzaCIsIkNoYXRDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2hhdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiRW1wdHlDaGF0Iiwib3BlbkRpYWxvZyIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwibmF2aWdhdGVUb0RvY3VtZW50cyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJjaGF0VGV4dCIsInRpdGxlIiwic3VidGl0bGUiLCJkZXNjcmlwdGlvbiIsImtiVGV4dCIsIlByZWxvYWRTY3JlZW4iLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsIkljb24iLCJpY29uIiwiQnV0dG9uIiwib25DbGljayIsImxhYmVsIiwiSGVhZGVyIiwic3RvcmUiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJzZXRBdXRvcGxheSIsImhhbmRsZUF1dG9wbGF5VG9nZ2xlIiwiaGFuZGxlQ2hhdFNlYXJjaCIsInByZXZlbnREZWZhdWx0IiwiSW5wdXQiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNldFJlYWR5IiwiY29udGV4dFZhbHVlIiwiQ29udHJvbCIsIkNoYXROb3RGb3VuZCIsIlZpZXciLCJDaGF0U2tlbGV0b24iLCJQcm92aWRlciIsImFsdCIsIklDT05TIiwiXyIsImtleSIsIkNoYXRJbnB1dCIsImRpc2FibGVkIiwidGV4dCIsInNldFRleHQiLCJJY29uQnV0dG9uIiwibWVzc2FnZXNFbmQiLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwiTWVzc2FnZXMiLCJyZWYiLCJTeXN0ZW1BbnN3ZXJpbmciLCJzZXRNZXNzYWdlcyIsImxhc3QiLCJNZXNzYWdlIiwiTWVzc2FnZUFjdGlvbnMiLCJtZXNzYWdlVG9rZW5zIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzcGVha2luZyIsIm9uUGxheSIsImxpc3RlbiIsInBvc2l0aW9uVG9DdXQiLCJwbGF5Iiwib25QYXVzZSIsInBsYXlBdWRpbyIsImNhbGwiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImNvcHlNZXNzYWdlIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidG9hc3QiLCJzdWNjZXNzIiwiYXBwbHkiLCJBdWRpb01lc3NhZ2UiLCJjbHMiLCJQcm9maWxlSWNvbiIsIk1lc3NhZ2VUZXh0IiwiQXVkaW9QbGF5ZXIiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ1c2VSZWYiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJjb250cm9scyIsInByZWxvYWQiLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwicGhvdG9VUkwiLCJvbkVycm9yIiwiY3V0SW5kZXgiLCJzZXRDdXRJbmRleCIsIm1hcmtlZCIsInVzZSIsImxhbmdQcmVmaXgiLCJoaWdobGlnaHQiLCJjb2RlIiwibGFuZ3VhZ2UiLCJobGpzIiwiZ2V0TGFuZ3VhZ2UiLCJyZW1vdmVIaWdobGlnaHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImN1cnJlbnRJbmRleCIsImN1cnJlbnRXb3JkIiwic2VnbWVudFRvQ3V0Iiwic2xpY2UiLCJzcGxpdCIsImZpbmFsUG9zaXRpb24iLCJ0ZXh0QXJyYXkiLCJxdWVyeVNlbGVjdG9yIiwiYWRkIiwiZW5kT2ZXb3JkSW5kZXgiLCJpbmRleE9mIiwic2VnbWVudCIsInBvc2l0aW9uIiwidGV4dHNBcnJheSIsImNyZWF0ZVNwYW4iLCJ3b3JkIiwiaW5kZXgiLCJ3b3JkcyIsIkRPTVB1cmlmeSIsInNhbml0aXplIiwiaGVhZGVySWRzIiwiaGVhZGVyUHJlZml4Iiwic3RvcFByb3BhZ2F0aW9uIiwiY29udGFpbnMiLCJ3b3Jkc0FycmF5IiwidGV4dFRvUGxheSIsImxvZyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiQ2hhdE1lc3NhZ2VDb250ZXh0IiwidXNlQ2hhdE1lc3NhZ2VDb250ZXh0IiwidG90YWxUb2tlbnMiLCJ1c2VTcGVlY2hUb1RleHQiLCJ2b2ljZXMiLCJzZXRWb2ljZSIsInZvaWNlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvaW50ZXJmYWNlcy9tZXNzYWdlcy50cyIsInRzL3N0b3JlL2F1ZGlvLnRzIiwidHMvc3RvcmUvaW5kZXgudHMiLCJ0cy9zdG9yZS9yZWNvcmRlci50cyIsInRzL3ZpZXdzL2NvbnRleHQudHN4IiwidHMvdmlld3MvZW1wdHkudHN4IiwidHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL25vdC1mb3VuZC50c3giLCJ0cy92aWV3cy9yb29tL2NoYXQtc2tlbGV0b24udHN4IiwidHMvdmlld3Mvcm9vbS9jaGF0LnRzeCIsInRzL3ZpZXdzL3Jvb20vbWVzc2FnZXMvYW5zd2VyaW5nLnRzeCIsInRzL3ZpZXdzL3Jvb20vbWVzc2FnZXMvaW5kZXgudHN4IiwidHMvdmlld3Mvcm9vbS9tZXNzYWdlcy9tZXNzYWdlL2FjdGlvbnMvaW5kZXgudHN4IiwidHMvdmlld3Mvcm9vbS9tZXNzYWdlcy9tZXNzYWdlL2F1ZGlvLW1lc3NhZ2UudHN4IiwidHMvdmlld3Mvcm9vbS9tZXNzYWdlcy9tZXNzYWdlL2NvbXBvbmVudHMvcGxheWVyLnRzeCIsInRzL3ZpZXdzL3Jvb20vbWVzc2FnZXMvbWVzc2FnZS9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCJ0cy92aWV3cy9yb29tL21lc3NhZ2VzL21lc3NhZ2UvY29tcG9uZW50cy90ZXh0LnRzeCIsInRzL3ZpZXdzL3Jvb20vbWVzc2FnZXMvbWVzc2FnZS9jb250ZXh0LnRzIiwidHMvdmlld3Mvcm9vbS9tZXNzYWdlcy9tZXNzYWdlL2luZGV4LnRzeCIsInRzL3ZpZXdzL3RvX19kZWxldGUvdXNlLXNwZWVjaC10by10ZXh0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==