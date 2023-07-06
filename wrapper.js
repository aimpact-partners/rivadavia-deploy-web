System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-api@1.0.0/entities/models", "@beyond-js/reactive@1.0.1/model", "@aimpact/ailearn-estrada@0.0.2/session", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Wrapper, AppWrapper, __beyond_pkg, hmr;
  _export({
    Wrapper: void 0,
    AppWrapper: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactChatApi100EntitiesModels) {
      dependency_1 = _aimpactChatApi100EntitiesModels;
    }, function (_beyondJsReactive101Model) {
      dependency_2 = _beyondJsReactive101Model;
    }, function (_aimpactAilearnEstrada002Session) {
      dependency_3 = _aimpactAilearnEstrada002Session;
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
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
          "vspecifier": "@aimpact/ailearn-estrada@0.0.2/wrapper"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/chat-api/entities/models', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/ailearn-estrada/session', dependency_3], ['@beyond-js/kernel/core', dependency_4]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 987015647,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Wrapper = exports.AppWrapper = void 0;
          var _models = require("@aimpact/chat-api/entities/models");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/ailearn-estrada/session");
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/
          class Wrapper extends _model.ReactiveModel {
            #chats;
            get chats() {
              return this.#chats;
            }
            #knowledgeBoxes;
            get knowledgeBoxes() {
              return this.#knowledgeBoxes;
            }
            #sharedKnowledgeBoxes;
            get sharedKnowledgeBoxes() {
              return this.#sharedKnowledgeBoxes;
            }
            #currentChat;
            get currentChat() {
              return this.#currentChat;
            }
            set currentChat(id) {
              this.#currentChat = this.#chats.get(id);
              this.triggerEvent();
            }
            #ready = new _core.PendingPromise();
            get isReady() {
              return this.#ready;
            }
            constructor() {
              super();
              this.reactiveProps(['isUpdating']);
              _session.sessionWrapper.on('change', this.validateSession.bind(this));
              this.load();
            }
            validateSession() {
              if (!_session.sessionWrapper.logged) return;
              this.ready = false;
              this.#ready = new _core.PendingPromise();
              this.load();
            }
            async load() {
              await _session.sessionWrapper.isReady;
              if (!_session.sessionWrapper.logged) {
                //@ts-ignore
                this.ready = true;
                this.#ready.resolve(true);
                return;
              }
              const knowledgeBoxes = new _models.KnowledgeBoxes();
              this.#knowledgeBoxes = knowledgeBoxes;
              this.#knowledgeBoxes.bind('change', () => this.triggerEvent());
              await knowledgeBoxes.load({
                userId: _session.sessionWrapper.user.id
              });
              this.#sharedKnowledgeBoxes = JSON.parse(localStorage.getItem('sharedFolders')) || [];
              const chats = new _models.Chats();
              this.#chats = chats;
              this.#chats.bind('change', () => this.triggerEvent());
              await chats.load({
                userId: _session.sessionWrapper.user.id
              });
              this.ready = true;
              this.#ready.resolve(true);
            }
          }
          exports.Wrapper = Wrapper;
          const _wrapper = new Wrapper();
          /*bundle*/
          const AppWrapper = _wrapper;
          exports.AppWrapper = AppWrapper;
          globalThis.app = AppWrapper;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Wrapper",
        "name": "Wrapper"
      }, {
        "im": "./index",
        "from": "AppWrapper",
        "name": "AppWrapper"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Wrapper') && _export("Wrapper", Wrapper = require ? require('./index').Wrapper : value);
        (require || prop === 'AppWrapper') && _export("AppWrapper", AppWrapper = require ? require('./index').AppWrapper : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFO1VBQ3ZCO1VBQVcsTUFBTStCLFVBQVUsR0FBR0QsUUFBUTtVQUFDRDtVQUM5Q0csVUFBVSxDQUFDQyxHQUFHLEdBQUdGLFVBQVUiLCJuYW1lcyI6WyJXcmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsImNoYXRzIiwia25vd2xlZGdlQm94ZXMiLCJzaGFyZWRLbm93bGVkZ2VCb3hlcyIsImN1cnJlbnRDaGF0IiwiaWQiLCJnZXQiLCJ0cmlnZ2VyRXZlbnQiLCJQZW5kaW5nUHJvbWlzZSIsImlzUmVhZHkiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsIm9uIiwidmFsaWRhdGVTZXNzaW9uIiwiYmluZCIsImxvYWQiLCJsb2dnZWQiLCJyZWFkeSIsInJlc29sdmUiLCJLbm93bGVkZ2VCb3hlcyIsInVzZXJJZCIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiQ2hhdHMiLCJleHBvcnRzIiwiX3dyYXBwZXIiLCJBcHBXcmFwcGVyIiwiZ2xvYmFsVGhpcyIsImFwcCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=