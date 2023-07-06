System.register(["@beyond-js/backend@0.1.6/client", "@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ActionsBridge, ims, AudioProvider, ChatProvider, ClassesProvider, DocumentProvider, KnowledgeBasesProvider, KnowledgeBoxProvider, SharedKnowledgeBasesProvider, MessageProvider, UserProvider, __beyond_pkg, hmr;
  _export({
    AudioProvider: void 0,
    ChatProvider: void 0,
    ClassesProvider: void 0,
    DocumentProvider: void 0,
    KnowledgeBasesProvider: void 0,
    KnowledgeBoxProvider: void 0,
    SharedKnowledgeBasesProvider: void 0,
    MessageProvider: void 0,
    UserProvider: void 0
  });
  return {
    setters: [function (_beyondJsBackend016Client) {
      dependency_0 = _beyondJsBackend016Client;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.0.1"], ["@beyond-js/backend", "0.1.7"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@google-cloud/functions-framework", "3.2.0"], ["@google-cloud/storage", "6.11.0"], ["google-auth-library", "8.9.0"], ["axios", "1.4.0"], ["dayjs", "1.11.8"], ["dexie", "3.2.4"], ["busboy", "1.6.0"], ["dotenv", "16.1.4"], ["express", "4.18.2"], ["firebase", "9.22.2"], ["firebase-admin", "11.9.0"], ["fluent-ffmpeg", "2.1.2"], ["form-data", "4.0.0"], ["node-fetch", "2.6.12"], ["openai", "3.2.1"], ["socket.io-client", "4.6.2"], ["uuid", "9.0.0"], ["@aimpact/chat-api", "1.0.0"], ["@aimpact/ailearn-estrada", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-api@1.0.0/backend-provider"
        },
        "type": "bridge"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/backend/client', dependency_0]]);
      ({
        ActionsBridge
      } = brequire('@beyond-js/backend/client'));
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./audio
      ***********************/
      ims.set('./audio', {
        hash: 713988727,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class AudioProvider extends ActionsBridge {
            async load(id) {
              return await this.execute("audio//AudioProvider//load", ...arguments);
            }
            async publish(data) {
              return await this.execute("audio//AudioProvider//publish", ...arguments);
            }
            async list() {
              return await this.execute("audio//AudioProvider//list", ...arguments);
            }
            async bulkSave(data) {
              return await this.execute("audio//AudioProvider//bulkSave", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.AudioProvider = AudioProvider;
        }
      });

      /****************************
      INTERNAL MODULE: ./chat/index
      ****************************/

      ims.set('./chat/index', {
        hash: 1418822399,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class ChatProvider extends ActionsBridge {
            async load({
              id
            }) {
              return await this.execute("chat\\index//ChatProvider//load", ...arguments);
            }
            async publish(data) {
              return await this.execute("chat\\index//ChatProvider//publish", ...arguments);
            }
            async delete({
              id
            }) {
              return await this.execute("chat\\index//ChatProvider//delete", ...arguments);
            }
            async list(specs) {
              return await this.execute("chat\\index//ChatProvider//list", ...arguments);
            }
            async bulkSave(data) {
              return await this.execute("chat\\index//ChatProvider//bulkSave", ...arguments);
            }
            async sendMessage(data) {
              return await this.execute("chat\\index//ChatProvider//sendMessage", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.ChatProvider = ChatProvider;
        }
      });

      /*******************************
      INTERNAL MODULE: ./classes/index
      *******************************/

      ims.set('./classes/index', {
        hash: 111046654,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassesProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class ClassesProvider extends ActionsBridge {
            async generator(promt, objetives) {
              return await this.execute("classes\\index//ClassesProvider//generator", ...arguments);
            }
            async load(id) {
              return await this.execute("classes\\index//ClassesProvider//load", ...arguments);
            }
            async publish(data) {
              return await this.execute("classes\\index//ClassesProvider//publish", ...arguments);
            }
            async list() {
              return await this.execute("classes\\index//ClassesProvider//list", ...arguments);
            }
            async bulkSave(data) {
              return await this.execute("classes\\index//ClassesProvider//bulkSave", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.ClassesProvider = ClassesProvider;
        }
      });

      /***************************
      INTERNAL MODULE: ./documents
      ***************************/

      ims.set('./documents', {
        hash: 3405175683,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DocumentProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class DocumentProvider extends ActionsBridge {
            async load(id) {
              return await this.execute("documents//DocumentProvider//load", ...arguments);
            }
            async publish(data) {
              return await this.execute("documents//DocumentProvider//publish", ...arguments);
            }
            async list() {
              return await this.execute("documents//DocumentProvider//list", ...arguments);
            }
            async bulkSave(data) {
              return await this.execute("documents//DocumentProvider//bulkSave", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.DocumentProvider = DocumentProvider;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./knowledge-boxes/knowledge-bases
      *************************************************/

      ims.set('./knowledge-boxes/knowledge-bases', {
        hash: 3440241069,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KnowledgeBasesProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class KnowledgeBasesProvider extends ActionsBridge {
            async load(id) {
              return await this.execute("knowledge-boxes\\knowledge-bases//KnowledgeBasesProvider//load", ...arguments);
            }
            async publish(data) {
              return await this.execute("knowledge-boxes\\knowledge-bases//KnowledgeBasesProvider//publish", ...arguments);
            }
            async list() {
              return await this.execute("knowledge-boxes\\knowledge-bases//KnowledgeBasesProvider//list", ...arguments);
            }
            async bulkSave(data) {
              return await this.execute("knowledge-boxes\\knowledge-bases//KnowledgeBasesProvider//bulkSave", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.KnowledgeBasesProvider = KnowledgeBasesProvider;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./knowledge-boxes/knowledge-box
      ***********************************************/

      ims.set('./knowledge-boxes/knowledge-box', {
        hash: 2857234525,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KnowledgeBoxProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class KnowledgeBoxProvider extends ActionsBridge {
            /**
             * @todo validate if it's necessary to filter by user
             * @param param
             * @returns
             */
            async load({
              id
            }) {
              return await this.execute("knowledge-boxes\\knowledge-box//KnowledgeBoxProvider//load", ...arguments);
            }
            async publish(data) {
              return await this.execute("knowledge-boxes\\knowledge-box//KnowledgeBoxProvider//publish", ...arguments);
            }
            async list({
              userId
            }) {
              return await this.execute("knowledge-boxes\\knowledge-box//KnowledgeBoxProvider//list", ...arguments);
            }
            async bulkSave(data) {
              return await this.execute("knowledge-boxes\\knowledge-box//KnowledgeBoxProvider//bulkSave", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.KnowledgeBoxProvider = KnowledgeBoxProvider;
        }
      });

      /****************************************
      INTERNAL MODULE: ./knowledge-boxes/shared
      ****************************************/

      ims.set('./knowledge-boxes/shared', {
        hash: 2082471794,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SharedKnowledgeBasesProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class SharedKnowledgeBasesProvider extends ActionsBridge {
            async load(id) {
              return await this.execute("knowledge-boxes\\shared//SharedKnowledgeBasesProvider//load", ...arguments);
            }
            async publish(data) {
              return await this.execute("knowledge-boxes\\shared//SharedKnowledgeBasesProvider//publish", ...arguments);
            }
            async list() {
              return await this.execute("knowledge-boxes\\shared//SharedKnowledgeBasesProvider//list", ...arguments);
            }
            async bulkSave(data) {
              return await this.execute("knowledge-boxes\\shared//SharedKnowledgeBasesProvider//bulkSave", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.SharedKnowledgeBasesProvider = SharedKnowledgeBasesProvider;
        }
      });

      /**************************
      INTERNAL MODULE: ./messages
      **************************/

      ims.set('./messages', {
        hash: 1007032656,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class MessageProvider extends ActionsBridge {
            async load(id) {
              return await this.execute("messages//MessageProvider//load", ...arguments);
            }
            async publish(data) {
              return await this.execute("messages//MessageProvider//publish", ...arguments);
            }
            async list() {
              return await this.execute("messages//MessageProvider//list", ...arguments);
            }
            async bulkSave(data) {
              return await this.execute("messages//MessageProvider//bulkSave", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.MessageProvider = MessageProvider;
        }
      });

      /****************************
      INTERNAL MODULE: ./users/user
      ****************************/

      ims.set('./users/user', {
        hash: 4091502331,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class UserProvider extends ActionsBridge {
            async updateUser(user) {
              return await this.execute("users\\user//UserProvider//updateUser", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.UserProvider = UserProvider;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./audio",
        "from": "AudioProvider",
        "name": "AudioProvider"
      }, {
        "im": "./chat/index",
        "from": "ChatProvider",
        "name": "ChatProvider"
      }, {
        "im": "./classes/index",
        "from": "ClassesProvider",
        "name": "ClassesProvider"
      }, {
        "im": "./documents",
        "from": "DocumentProvider",
        "name": "DocumentProvider"
      }, {
        "im": "./knowledge-boxes/knowledge-bases",
        "from": "KnowledgeBasesProvider",
        "name": "KnowledgeBasesProvider"
      }, {
        "im": "./knowledge-boxes/knowledge-box",
        "from": "KnowledgeBoxProvider",
        "name": "KnowledgeBoxProvider"
      }, {
        "im": "./knowledge-boxes/shared",
        "from": "SharedKnowledgeBasesProvider",
        "name": "SharedKnowledgeBasesProvider"
      }, {
        "im": "./messages",
        "from": "MessageProvider",
        "name": "MessageProvider"
      }, {
        "im": "./users/user",
        "from": "UserProvider",
        "name": "UserProvider"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AudioProvider') && _export("AudioProvider", AudioProvider = require ? require('./audio').AudioProvider : value);
        (require || prop === 'ChatProvider') && _export("ChatProvider", ChatProvider = require ? require('./chat/index').ChatProvider : value);
        (require || prop === 'ClassesProvider') && _export("ClassesProvider", ClassesProvider = require ? require('./classes/index').ClassesProvider : value);
        (require || prop === 'DocumentProvider') && _export("DocumentProvider", DocumentProvider = require ? require('./documents').DocumentProvider : value);
        (require || prop === 'KnowledgeBasesProvider') && _export("KnowledgeBasesProvider", KnowledgeBasesProvider = require ? require('./knowledge-boxes/knowledge-bases').KnowledgeBasesProvider : value);
        (require || prop === 'KnowledgeBoxProvider') && _export("KnowledgeBoxProvider", KnowledgeBoxProvider = require ? require('./knowledge-boxes/knowledge-box').KnowledgeBoxProvider : value);
        (require || prop === 'SharedKnowledgeBasesProvider') && _export("SharedKnowledgeBasesProvider", SharedKnowledgeBasesProvider = require ? require('./knowledge-boxes/shared').SharedKnowledgeBasesProvider : value);
        (require || prop === 'MessageProvider') && _export("MessageProvider", MessageProvider = require ? require('./messages').MessageProvider : value);
        (require || prop === 'UserProvider') && _export("UserProvider", UserProvider = require ? require('./users/user').UserProvider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pCLE9BQU8sTUFBTSxJQUFJLENBQUN6QixPQUFPLENBQUMsdUNBQXVDLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQ3BGO1lBQ0FLO2NBQ0ksS0FBSyxDQUFDLFNBQVMsRUFBRUMsc0JBQU0sQ0FBQztZQUM1Qjs7VUFDSEMiLCJuYW1lcyI6WyJBdWRpb1Byb3ZpZGVyIiwiQWN0aW9uc0JyaWRnZSIsImxvYWQiLCJpZCIsImV4ZWN1dGUiLCJhcmd1bWVudHMiLCJwdWJsaXNoIiwiZGF0YSIsImxpc3QiLCJidWxrU2F2ZSIsImNvbnN0cnVjdG9yIiwiYnVuZGxlIiwiZXhwb3J0cyIsIkNoYXRQcm92aWRlciIsImRlbGV0ZSIsInNwZWNzIiwic2VuZE1lc3NhZ2UiLCJDbGFzc2VzUHJvdmlkZXIiLCJnZW5lcmF0b3IiLCJwcm9tdCIsIm9iamV0aXZlcyIsIkRvY3VtZW50UHJvdmlkZXIiLCJLbm93bGVkZ2VCYXNlc1Byb3ZpZGVyIiwiS25vd2xlZGdlQm94UHJvdmlkZXIiLCJ1c2VySWQiLCJTaGFyZWRLbm93bGVkZ2VCYXNlc1Byb3ZpZGVyIiwiTWVzc2FnZVByb3ZpZGVyIiwiVXNlclByb3ZpZGVyIiwidXBkYXRlVXNlciIsInVzZXIiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImF1ZGlvLnRzIiwiY2hhdC9pbmRleC50cyIsImNsYXNzZXMvaW5kZXgudHMiLCJkb2N1bWVudHMudHMiLCJrbm93bGVkZ2UtYm94ZXMva25vd2xlZGdlLWJhc2VzLnRzIiwia25vd2xlZGdlLWJveGVzL2tub3dsZWRnZS1ib3gudHMiLCJrbm93bGVkZ2UtYm94ZXMvc2hhcmVkLnRzIiwibWVzc2FnZXMudHMiLCJ1c2Vycy91c2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==