System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.0.1/database"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, createDB, __beyond_pkg, hmr;
  _export("createDB", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive101Database) {
      dependency_1 = _beyondJsReactive101Database;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.0.1"], ["@beyond-js/backend", "0.1.7"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@google-cloud/functions-framework", "3.2.0"], ["@google-cloud/storage", "6.11.0"], ["google-auth-library", "8.9.0"], ["axios", "1.4.0"], ["dayjs", "1.11.8"], ["dexie", "3.2.4"], ["busboy", "1.6.0"], ["dotenv", "16.1.4"], ["express", "4.18.2"], ["firebase", "9.22.2"], ["firebase-admin", "11.9.0"], ["fluent-ffmpeg", "2.1.2"], ["form-data", "4.0.0"], ["node-fetch", "2.6.12"], ["openai", "3.2.1"], ["socket.io-client", "4.6.2"], ["uuid", "9.0.0"], ["@aimpact/chat-api", "1.0.0"], ["@aimpact/ailearn-estrada", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-api@1.0.0/entities/registry"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/database', dependency_1]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 707911998,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.createDB = void 0;
          var _database = require("@beyond-js/reactive/database");
          async function create() {
            try {
              const db = await _database.DBManager.config('chat-api@6', {
                Chat: 'id, name, userId, category, knowledgeBoxId, usage',
                User: 'id',
                Messages: 'id, chatId, userId, text, role, usage, timestamp',
                AudioRecords: 'id, messageId',
                KnowledgeBases: 'id, userId',
                KnowledgeBoxes: 'id, userId',
                SharedKnowledgeBases: 'id, knowledgeBaseId, sharedWithUserId',
                Documents: 'id, knowledgeBaseId',
                Classes: 'id, title, description'
              });
              // For example, if you have user data to add you can use:
              // db.Chat.bulkAdd(chats);
            } catch (e) {
              console.trace('error', e);
            }
          }
          /*bundle */
          const createDB = create;
          exports.createDB = createDB;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "createDB",
        "name": "createDB"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'createDB') && _export("createDB", createDB = require ? require('./index').createDB : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBRUEsZUFBZUEsTUFBTTtZQUNwQixJQUFJO2NBQ0gsTUFBTUMsRUFBRSxHQUFHLE1BQU1DLG1CQUFTLENBQUNDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7Z0JBQy9DQyxJQUFJLEVBQUUsbURBQW1EO2dCQUN6REMsSUFBSSxFQUFFLElBQUk7Z0JBQ1ZDLFFBQVEsRUFBRSxrREFBa0Q7Z0JBQzVEQyxZQUFZLEVBQUUsZUFBZTtnQkFDN0JDLGNBQWMsRUFBRSxZQUFZO2dCQUM1QkMsY0FBYyxFQUFFLFlBQVk7Z0JBQzVCQyxvQkFBb0IsRUFBRSx1Q0FBdUM7Z0JBQzdEQyxTQUFTLEVBQUUscUJBQXFCO2dCQUNoQ0MsT0FBTyxFQUFFO2VBQ1QsQ0FBQztjQUVGO2NBQ0E7YUFDQSxDQUFDLE9BQU9DLENBQUMsRUFBRTtjQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxPQUFPLEVBQUVGLENBQUMsQ0FBQzs7VUFFM0I7VUFFTztVQUFZLE1BQU1HLFFBQVEsR0FBR2hCLE1BQU07VUFBQ2lCIiwibmFtZXMiOlsiY3JlYXRlIiwiZGIiLCJEQk1hbmFnZXIiLCJjb25maWciLCJDaGF0IiwiVXNlciIsIk1lc3NhZ2VzIiwiQXVkaW9SZWNvcmRzIiwiS25vd2xlZGdlQmFzZXMiLCJLbm93bGVkZ2VCb3hlcyIsIlNoYXJlZEtub3dsZWRnZUJhc2VzIiwiRG9jdW1lbnRzIiwiQ2xhc3NlcyIsImUiLCJjb25zb2xlIiwidHJhY2UiLCJjcmVhdGVEQiIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19