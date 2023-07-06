System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-estrada@0.0.2/config", "@beyond-js/reactive@1.0.1/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, VoiceLab, Voice, __beyond_pkg, hmr;
  _export({
    VoiceLab: void 0,
    Voice: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Core) {
      dependency_1 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnEstrada002Config) {
      dependency_2 = _aimpactAilearnEstrada002Config;
    }, function (_beyondJsReactive101Model) {
      dependency_3 = _beyondJsReactive101Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.0.1"], ["@aimpact/chat-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.6"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.8"], ["dexie", "3.2.4"], ["dompurify", "3.0.3"], ["firebase", "9.22.2"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.0"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.2.1"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.6.2"], ["uuid", "9.0.0"], ["@aimpact/ailearn-estrada", "0.0.2"], ["@aimpact/ailearn-estrada", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-estrada@0.0.2/voice"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@aimpact/ailearn-estrada/config', dependency_2], ['@beyond-js/reactive/model', dependency_3]]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./voice-lab
      ***************************/
      ims.set('./voice-lab', {
        hash: 1229785881,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.VoiceLab = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _config = require("@aimpact/ailearn-estrada/config");
          /*bundle*/
          class VoiceLab extends _core.Events {
            #apiKey = _config.default.params.elevenlabs.key;
            #voiceId = _config.default.params.elevenlabs.id;
            #url = `https://api.elevenlabs.io/v1/text-to-speech/${this.#voiceId}/stream`;
            #headers = {
              'Content-Type': 'application/json',
              'xi-api-key': this.#apiKey
            };
            #audio;
            get audio() {
              return this.#audio;
            }
            stop() {
              if (!this.#audio) return;
              this.#audio.pause();
            }
            #blob;
            get blob() {
              return this.#blob;
            }
            async play(text) {
              if (!text) {
                console.warn('No hay texto para interpretar');
                return;
              }
              console.warn('call API');
              const response = await fetch(this.#url, {
                method: 'POST',
                headers: this.#headers,
                body: JSON.stringify({
                  text,
                  voice_id: this.#voiceId,
                  voice_settings: {
                    stability: 0,
                    similarity_boost: 0
                  }
                })
              });
              const mediaSource = new MediaSource();
              const audioURL = URL.createObjectURL(mediaSource);
              this.#audio = new Audio(audioURL);
              mediaSource.addEventListener('sourceopen', async () => {
                const sourceBuffer = mediaSource.addSourceBuffer('audio/mpeg');
                const reader = response.body.getReader();
                const pump = async () => {
                  const {
                    value,
                    done
                  } = await reader.read();
                  if (done) return mediaSource.endOfStream();
                  sourceBuffer.appendBuffer(value);
                  pump();
                };
                pump();
              });
              this.#audio.play();
            }
          }
          exports.VoiceLab = VoiceLab;
        }
      });

      /***********************
      INTERNAL MODULE: ./voice
      ***********************/

      ims.set('./voice', {
        hash: 1309687900,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Voice = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class Voice extends _model.ReactiveModel {
            #speaking = false;
            get speaking() {
              return this.#speaking;
            }
            #text;
            get text() {
              return this.#text;
            }
            set text(value) {
              this.#text = value;
            }
            #currentWord = -1;
            get currentWord() {
              return this.#currentWord;
            }
            get paused() {
              return speechSynthesis.paused;
            }
            #instance;
            get instance() {
              return this.#instance;
            }
            constructor() {
              super();
              this.reactiveProps(['lang', 'positionToCut']);
              this.positionToCut = 0;
              this.lang = 'es';
            }
            _mobile() {
              TTS.speak({
                text: this.#text,
                locale: 'es-Latn',
                rate: 0.75
              }, () => this.trigger('play.finish'), e => console.error(e));
            }
            _web() {
              if (this.#speaking) {
                speechSynthesis.cancel();
                this.trigger('on.finish');
              }
              const text = this.#text;
              const utterance = new SpeechSynthesisUtterance(text);
              utterance.lang = this.lang;
              // utterance.rate = 1.5;
              utterance.onstart = () => {
                this.#speaking = true;
                this.trigger('change');
              };
              globalThis.addEventListener('beforeunload', () => {
                speechSynthesis.cancel();
              });
              utterance.onpause = () => {
                this.trigger('change');
              };
              utterance.onresume = () => this.trigger('change');
              utterance.onboundary = event => {
                this.#currentWord = event.charIndex === 0 ? 0 : event.charIndex;
                this.trigger('change');
                this.trigger('boundary');
              };
              utterance.onend = () => {
                this.#speaking = false;
                this.#currentWord = -1;
                this.trigger('change');
                this.trigger('on.finish');
              };
              speechSynthesis.speak(utterance);
            }
            play(text) {
              if (text) this.#text = text;
              globalThis.cordova ? this._mobile() : this._web();
            }
            stop() {
              if (globalThis.cordova) {
                this.#text = '';
                this.play();
                return;
              }
              speechSynthesis.cancel();
            }
          }
          exports.Voice = Voice;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./voice-lab",
        "from": "VoiceLab",
        "name": "VoiceLab"
      }, {
        "im": "./voice",
        "from": "Voice",
        "name": "Voice"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'VoiceLab') && _export("VoiceLab", VoiceLab = require ? require('./voice-lab').VoiceLab : value);
        (require || prop === 'Voice') && _export("Voice", Voice = require ? require('./voice').Voice : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dCQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDaEUsSUFBSSxFQUFFO2dCQUNYOztjQUVEc0MsZUFBZSxDQUFDZSxNQUFNLEVBQUU7WUFDekI7O1VBUUFyQiIsIm5hbWVzIjpbIlZvaWNlTGFiIiwiRXZlbnRzIiwiY29uZmlnIiwicGFyYW1zIiwiZWxldmVubGFicyIsImtleSIsImlkIiwiYXVkaW8iLCJzdG9wIiwicGF1c2UiLCJibG9iIiwicGxheSIsInRleHQiLCJjb25zb2xlIiwid2FybiIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ2b2ljZV9pZCIsInZvaWNlX3NldHRpbmdzIiwic3RhYmlsaXR5Iiwic2ltaWxhcml0eV9ib29zdCIsIm1lZGlhU291cmNlIiwiTWVkaWFTb3VyY2UiLCJhdWRpb1VSTCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIkF1ZGlvIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNvdXJjZUJ1ZmZlciIsImFkZFNvdXJjZUJ1ZmZlciIsInJlYWRlciIsImdldFJlYWRlciIsInB1bXAiLCJ2YWx1ZSIsImRvbmUiLCJyZWFkIiwiZW5kT2ZTdHJlYW0iLCJhcHBlbmRCdWZmZXIiLCJleHBvcnRzIiwiVm9pY2UiLCJSZWFjdGl2ZU1vZGVsIiwic3BlYWtpbmciLCJjdXJyZW50V29yZCIsInBhdXNlZCIsInNwZWVjaFN5bnRoZXNpcyIsImluc3RhbmNlIiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwicG9zaXRpb25Ub0N1dCIsImxhbmciLCJfbW9iaWxlIiwiVFRTIiwic3BlYWsiLCJsb2NhbGUiLCJyYXRlIiwidHJpZ2dlciIsImUiLCJlcnJvciIsIl93ZWIiLCJjYW5jZWwiLCJ1dHRlcmFuY2UiLCJTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UiLCJvbnN0YXJ0IiwiZ2xvYmFsVGhpcyIsIm9ucGF1c2UiLCJvbnJlc3VtZSIsIm9uYm91bmRhcnkiLCJldmVudCIsImNoYXJJbmRleCIsIm9uZW5kIiwiY29yZG92YSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidm9pY2UtbGFiLnRzIiwidm9pY2UudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==