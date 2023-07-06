System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.0.1/entities", "@aimpact/chat-api@1.0.0/backend-provider"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Audio, Chats, Chat, Message, Classes, Class, Knowledge, SharedKnowledge, KnowledgeBoxes, KnowledgeBox, User, __beyond_pkg, hmr;
  _export({
    Audio: void 0,
    Chats: void 0,
    Chat: void 0,
    Message: void 0,
    Classes: void 0,
    Class: void 0,
    Knowledge: void 0,
    SharedKnowledge: void 0,
    KnowledgeBoxes: void 0,
    KnowledgeBox: void 0,
    User: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive101Entities) {
      dependency_1 = _beyondJsReactive101Entities;
    }, function (_aimpactChatApi100BackendProvider) {
      dependency_2 = _aimpactChatApi100BackendProvider;
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
          "vspecifier": "@aimpact/chat-api@1.0.0/entities/models"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1], ['@aimpact/chat-api/backend-provider', dependency_2]]);
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./audio/collection
      **********************************/
      ims.set('./audio/collection', {
        hash: 894218051,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Audios = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _backendProvider = require("@aimpact/chat-api/backend-provider");
          var _item = require("./item");
          class Audios extends _entities.Collection {
            item = _item.Audio;
            storeName = 'AudioRecords';
            db = 'chat-api';
            constructor() {
              super();
              this.provider = new _backendProvider.AudioProvider();
              this.init();
            }
          }
          exports.Audios = Audios;
        }
      });

      /****************************
      INTERNAL MODULE: ./audio/item
      ****************************/

      ims.set('./audio/item', {
        hash: 1043681069,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Audio = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _backendProvider = require("@aimpact/chat-api/backend-provider");
          /*bundle*/ // AudioItem

          class Audio extends _entities.Item {
            properties = ['id', 'userId', 'category'];
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'AudioRecords',
                provider: _backendProvider.AudioProvider
              });
            }
          }
          exports.Audio = Audio;
        }
      });

      /*********************************
      INTERNAL MODULE: ./chat/collection
      *********************************/

      ims.set('./chat/collection', {
        hash: 370251067,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chats = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _backendProvider = require("@aimpact/chat-api/backend-provider");
          var _item = require("./item");
          /*bundle*/
          class Chats extends _entities.Collection {
            item = _item.Chat;
            constructor() {
              super({
                provider: _backendProvider.ChatProvider,
                storeName: 'Chat',
                db: 'chat-api'
              });
            }
          }
          exports.Chats = Chats;
        }
      });

      /***************************
      INTERNAL MODULE: ./chat/item
      ***************************/

      ims.set('./chat/item', {
        hash: 121135349,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _backendProvider = require("@aimpact/chat-api/backend-provider");
          var _item = require("./messages/item");
          /*bundle*/ // ChatItem

          class Chat extends _entities.Item {
            properties = ['id', 'autoplay', 'name', 'userId', 'category', 'knowledgeBoxId', 'usage'];
            #messages = new Map();
            get messages() {
              return [...this.#messages.values()];
            }
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'Chat',
                provider: _backendProvider.ChatProvider
              });
            }
            loadAll = async specs => {
              //@ts-ignore
              const response = await this.load(specs);
              let messages = new Map();
              if (response.data.messages?.length) {
                response.data.messages.forEach(message => messages.set(message.id, message));
              }
              this.#messages = messages;
            };
            async setAudioMessage({
              user,
              response
            }) {
              const messageItem = new _item.Message();
              const responseItem = new _item.Message();
              await Promise.all([messageItem.isReady, responseItem.isReady]);
              await messageItem.publish(user);
              await responseItem.publish(response);
              const finalData = {
                ...user
              };
              const data = this.#messages.get('temporal');
              this.#messages.set(messageItem.id, {
                ...finalData,
                id: messageItem.id,
                audio: data.audio
              });
              this.#messages.delete('temporal');
              this.#messages.set(responseItem.id, {
                ...response,
                id: responseItem.id
              });
              this.triggerEvent();
              return responseItem;
            }
            async sendAudio(audio, transcription = undefined) {
              const item = new _item.Message();
              await item.isReady;
              //@ts-ignore
              item.setOffline(true);
              const specs = {
                //@ts-ignore
                id: 'temporal',
                //@ts-ignore
                chatId: this.id,
                type: 'audio',
                audio,
                role: 'user',
                timestamp: Date.now()
              };
              if (transcription) {
                //@ts-ignore
                specs.content = transcription;
              }
              //@ts-ignore
              this.#messages.set('temporal', specs);
              //@ts-ignore
              this.triggerEvent();
            }
            async sendMessage(content, prompt) {
              try {
                this.fetching = true;
                const item = new _item.Message();
                await item.isReady;
                item.setOffline(true);
                this.#messages.set(item.id, {
                  id: item.id,
                  chatId: this.id,
                  content,
                  role: 'user',
                  timestamp: Date.now()
                });
                this.triggerEvent();
                await item.publish({
                  chatId: this.id,
                  content,
                  role: 'user',
                  timestamp: Date.now()
                });
                this.triggerEvent();
                const data = {
                  ...item.getProperties()
                };
                const response = await this.provider.sendMessage({
                  chatId: this.id,
                  ...data,
                  prompt
                });
                if (!response.status) {
                  throw new Error(response.error);
                }
                this.#messages.set(response.data.response.id, response.data.message);
                this.#messages.set(response.data.message.id, response.data.response);
                //@ts-ignore
                this.triggerEvent();
                return {
                  response: response.data.response,
                  message: response.data.message
                };
              } catch (e) {
                console.error(e);
              } finally {
                //@ts-ignore
                this.fetching = false;
              }
            }
            getMessage(id) {
              return this.#messages.get(id);
            }
          }
          exports.Chat = Chat;
        }
      });

      /******************************************
      INTERNAL MODULE: ./chat/messages/collection
      ******************************************/

      ims.set('./chat/messages/collection', {
        hash: 2216528992,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _item = require("./item");
          class Messages extends _entities.Collection {
            item = _item.Message;
            storeName = 'Messages';
            db = 'chat-api';
            constructor() {
              super();
              this.init();
            }
          }
          exports.Messages = Messages;
        }
      });

      /*************************************
      INTERNAL MODULE: ./chat/messages/index
      *************************************/

      ims.set('./chat/messages/index', {
        hash: 156895698,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _backendProvider = require("@aimpact/chat-api/backend-provider");
          var _item = require("./item");
          class Messages extends _entities.Collection {
            item = _item.Message;
            constructor() {
              super({
                provider: _backendProvider.MessageProvider,
                storeName: 'Messages',
                db: 'chat-api'
              });
            }
            add(text) {
              //@ts-ignore
              const message = new _item.Message();
              // message.setOffline(true);
              // this.items.push(message);
            }
          }

          exports.Messages = Messages;
        }
      });

      /************************************
      INTERNAL MODULE: ./chat/messages/item
      ************************************/

      ims.set('./chat/messages/item', {
        hash: 2063698052,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _backendProvider = require("@aimpact/chat-api/backend-provider");
          /*bundle*/ // ChatItem

          class Message extends _entities.Item {
            properties = ['id', 'chatId', 'userId', 'content', 'timestamp', 'role'];
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'Messages',
                provider: _backendProvider.MessageProvider
              });
              //@ts-ignore
              this.reactiveProps(['autoplay']);
            }
          }
          exports.Message = Message;
        }
      });

      /************************************
      INTERNAL MODULE: ./classes/collection
      ************************************/

      ims.set('./classes/collection', {
        hash: 2998028383,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Classes = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _item = require("./item");
          /*bundle*/
          class Classes extends _entities.Collection {
            item = _item.Class;
            constructor() {
              super({
                storeName: 'Classes',
                db: 'chat-api'
              });
            }
          }
          exports.Classes = Classes;
        }
      });

      /******************************
      INTERNAL MODULE: ./classes/item
      ******************************/

      ims.set('./classes/item', {
        hash: 2081161967,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Class = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          /*bundle*/
          class Class extends _entities.Item {
            properties = ['title', 'objectives'];
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'Classes'
              });
            }
          }
          exports.Class = Class;
        }
      });

      /**************************************
      INTERNAL MODULE: ./documents/collection
      **************************************/

      ims.set('./documents/collection', {
        hash: 3277715839,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Documents = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _backendProvider = require("@aimpact/chat-api/backend-provider");
          var _item = require("./item");
          class Documents extends _entities.Collection {
            item = _item.Document;
            constructor() {
              super({
                provider: _backendProvider.DocumentProvider,
                storeName: 'Documents',
                db: 'chat-api'
              });
            }
          }
          exports.Documents = Documents;
        }
      });

      /********************************
      INTERNAL MODULE: ./documents/item
      ********************************/

      ims.set('./documents/item', {
        hash: 2152879272,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Document = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _backendProvider = require("@aimpact/chat-api/backend-provider");
          // Document

          class Document extends _entities.Item {
            properties = ['id', 'knowledgeBaseId']; /* additional properties... */
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'Documents',
                provider: _backendProvider.DocumentProvider
              });
            }
          }
          exports.Document = Document;
        }
      });

      /********************************************
      INTERNAL MODULE: ./knowledge-bases/collection
      ********************************************/

      ims.set('./knowledge-bases/collection', {
        hash: 3912929612,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Knowledges = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _backendProvider = require("@aimpact/chat-api/backend-provider");
          var _item = require("./item");
          class Knowledges extends _entities.Collection {
            item = _item.Knowledge;
            storeName = 'KnowledgeBases';
            db = 'chat-api';
            constructor() {
              super();
              this.provider = new _backendProvider.KnowledgeProvider();
              this.init();
            }
          }
          exports.Knowledges = Knowledges;
        }
      });

      /**************************************
      INTERNAL MODULE: ./knowledge-bases/item
      **************************************/

      ims.set('./knowledge-bases/item', {
        hash: 3817626006,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Knowledge = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _backendProvider = require("@aimpact/chat-api/backend-provider");
          /*bundle*/ // KnowledgeItem

          class Knowledge extends _entities.Item {
            properties = ['id', 'userId', 'category'];
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'KnowledgeBases',
                provider: _backendProvider.KnowledgeProvider
              });
            }
          }
          exports.Knowledge = Knowledge;
        }
      });

      /***************************************************
      INTERNAL MODULE: ./knowledge-bases/shared/collection
      ***************************************************/

      ims.set('./knowledge-bases/shared/collection', {
        hash: 2712582804,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SharedKnowledges = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _backendProvider = require("@aimpact/chat-api/backend-provider");
          var _item = require("./item");
          class SharedKnowledges extends _entities.Collection {
            item = _item.SharedKnowledge;
            storeName = 'SharedKnowledgeBases';
            db = 'chat-api';
            constructor() {
              super();
              this.provider = new _backendProvider.SharedKnowledgeProvider();
              this.init();
            }
          }
          exports.SharedKnowledges = SharedKnowledges;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./knowledge-bases/shared/item
      *********************************************/

      ims.set('./knowledge-bases/shared/item', {
        hash: 889937172,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SharedKnowledge = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _backendProvider = require("@aimpact/chat-api/backend-provider");
          /*bundle*/ // SharedKnowledgeItem

          class SharedKnowledge extends _entities.Item {
            properties = ['id', 'knowledgeBaseId', 'sharedWithUserId'];
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'SharedKnowledgeBases',
                provider: _backendProvider.SharedKnowledgeProvider
              });
            }
          }
          exports.SharedKnowledge = SharedKnowledge;
        }
      });

      /********************************************
      INTERNAL MODULE: ./knowledge-boxes/collection
      ********************************************/

      ims.set('./knowledge-boxes/collection', {
        hash: 1673119624,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KnowledgeBoxes = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _backendProvider = require("@aimpact/chat-api/backend-provider");
          var _item = require("./item");
          /*bundle*/
          class KnowledgeBoxes extends _entities.Collection {
            item = _item.KnowledgeBox;
            constructor() {
              super({
                provider: _backendProvider.KnowledgeBoxProvider,
                storeName: 'KnowledgeBoxes',
                db: 'chat-api'
              });
            }
          }
          exports.KnowledgeBoxes = KnowledgeBoxes;
        }
      });

      /**************************************
      INTERNAL MODULE: ./knowledge-boxes/item
      **************************************/

      ims.set('./knowledge-boxes/item', {
        hash: 1176964104,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KnowledgeBox = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _backendProvider = require("@aimpact/chat-api/backend-provider");
          /*bundle*/ // KnowledgeBox

          class KnowledgeBox extends _entities.Item {
            properties = ['id', 'path', 'identifier', 'documents', 'type'];
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'KnowledgeBoxes',
                provider: _backendProvider.KnowledgeBoxProvider
              });
            }
          }
          exports.KnowledgeBox = KnowledgeBox;
        }
      });

      /****************************
      INTERNAL MODULE: ./users/item
      ****************************/

      ims.set('./users/item', {
        hash: 1070956282,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _backendProvider = require("@aimpact/chat-api/backend-provider");
          /*bundle*/ // AudioItem

          class User extends _entities.Item {
            properties = ['displayName', 'id', 'email', 'photoURL', 'phoneNumber'];
            #logged;
            get logged() {
              return this.#logged;
            }
            constructor(specs) {
              super({
                id: specs.id,
                db: 'chat-api',
                storeName: 'User',
                provider: _backendProvider.UserProvider
              });
            }
            async login(data) {
              await this.isReady;
              if (this.#logged) return;
              await this.set(data.user);
              await this.provider.updateUser({
                ...this.getProperties(),
                id: this.id
              });
              this.#logged = true;
              return true;
            }
          }
          exports.User = User;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./audio/item",
        "from": "Audio",
        "name": "Audio"
      }, {
        "im": "./chat/collection",
        "from": "Chats",
        "name": "Chats"
      }, {
        "im": "./chat/item",
        "from": "Chat",
        "name": "Chat"
      }, {
        "im": "./chat/messages/item",
        "from": "Message",
        "name": "Message"
      }, {
        "im": "./classes/collection",
        "from": "Classes",
        "name": "Classes"
      }, {
        "im": "./classes/item",
        "from": "Class",
        "name": "Class"
      }, {
        "im": "./knowledge-bases/item",
        "from": "Knowledge",
        "name": "Knowledge"
      }, {
        "im": "./knowledge-bases/shared/item",
        "from": "SharedKnowledge",
        "name": "SharedKnowledge"
      }, {
        "im": "./knowledge-boxes/collection",
        "from": "KnowledgeBoxes",
        "name": "KnowledgeBoxes"
      }, {
        "im": "./knowledge-boxes/item",
        "from": "KnowledgeBox",
        "name": "KnowledgeBox"
      }, {
        "im": "./users/item",
        "from": "User",
        "name": "User"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Audio') && _export("Audio", Audio = require ? require('./audio/item').Audio : value);
        (require || prop === 'Chats') && _export("Chats", Chats = require ? require('./chat/collection').Chats : value);
        (require || prop === 'Chat') && _export("Chat", Chat = require ? require('./chat/item').Chat : value);
        (require || prop === 'Message') && _export("Message", Message = require ? require('./chat/messages/item').Message : value);
        (require || prop === 'Classes') && _export("Classes", Classes = require ? require('./classes/collection').Classes : value);
        (require || prop === 'Class') && _export("Class", Class = require ? require('./classes/item').Class : value);
        (require || prop === 'Knowledge') && _export("Knowledge", Knowledge = require ? require('./knowledge-bases/item').Knowledge : value);
        (require || prop === 'SharedKnowledge') && _export("SharedKnowledge", SharedKnowledge = require ? require('./knowledge-bases/shared/item').SharedKnowledge : value);
        (require || prop === 'KnowledgeBoxes') && _export("KnowledgeBoxes", KnowledgeBoxes = require ? require('./knowledge-boxes/collection').KnowledgeBoxes : value);
        (require || prop === 'KnowledgeBox') && _export("KnowledgeBox", KnowledgeBox = require ? require('./knowledge-boxes/item').KnowledgeBox : value);
        (require || prop === 'User') && _export("User", User = require ? require('./users/item').User : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLElBQUksQ0FBQ1ksT0FBTztjQUNsQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Y0FDbEIsTUFBTSxJQUFJLENBQUNSLEdBQUcsQ0FBQ0osSUFBSSxDQUFDTSxJQUFJLENBQUM7Y0FDekIsTUFBTSxJQUFJLENBQUN4QixRQUFRLENBQUNnRixVQUFVLENBQUM7Z0JBQUUsR0FBRyxJQUFJLENBQUM5QixhQUFhLEVBQUU7Z0JBQUU1QyxFQUFFLEVBQUUsSUFBSSxDQUFDQTtjQUFFLENBQUUsQ0FBQztjQUN4RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUk7Y0FDbkIsT0FBTyxJQUFJO1lBQ1o7O1VBQ0FIIiwibmFtZXMiOlsiQXVkaW9zIiwiQ29sbGVjdGlvbiIsIml0ZW0iLCJBdWRpbyIsInN0b3JlTmFtZSIsImRiIiwiY29uc3RydWN0b3IiLCJwcm92aWRlciIsIkF1ZGlvUHJvdmlkZXIiLCJpbml0IiwiZXhwb3J0cyIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiaWQiLCJ1bmRlZmluZWQiLCJDaGF0cyIsIkNoYXQiLCJDaGF0UHJvdmlkZXIiLCJNYXAiLCJtZXNzYWdlcyIsInZhbHVlcyIsImxvYWRBbGwiLCJzcGVjcyIsInJlc3BvbnNlIiwibG9hZCIsImRhdGEiLCJsZW5ndGgiLCJmb3JFYWNoIiwibWVzc2FnZSIsInNldCIsInNldEF1ZGlvTWVzc2FnZSIsInVzZXIiLCJtZXNzYWdlSXRlbSIsIk1lc3NhZ2UiLCJyZXNwb25zZUl0ZW0iLCJQcm9taXNlIiwiYWxsIiwiaXNSZWFkeSIsInB1Ymxpc2giLCJmaW5hbERhdGEiLCJnZXQiLCJhdWRpbyIsImRlbGV0ZSIsInRyaWdnZXJFdmVudCIsInNlbmRBdWRpbyIsInRyYW5zY3JpcHRpb24iLCJzZXRPZmZsaW5lIiwiY2hhdElkIiwidHlwZSIsInJvbGUiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwiY29udGVudCIsInNlbmRNZXNzYWdlIiwicHJvbXB0IiwiZmV0Y2hpbmciLCJnZXRQcm9wZXJ0aWVzIiwic3RhdHVzIiwiRXJyb3IiLCJlcnJvciIsImUiLCJjb25zb2xlIiwiZ2V0TWVzc2FnZSIsIk1lc3NhZ2VzIiwiTWVzc2FnZVByb3ZpZGVyIiwiYWRkIiwidGV4dCIsInJlYWN0aXZlUHJvcHMiLCJDbGFzc2VzIiwiQ2xhc3MiLCJEb2N1bWVudHMiLCJEb2N1bWVudCIsIkRvY3VtZW50UHJvdmlkZXIiLCJLbm93bGVkZ2VzIiwiS25vd2xlZGdlIiwiS25vd2xlZGdlUHJvdmlkZXIiLCJTaGFyZWRLbm93bGVkZ2VzIiwiU2hhcmVkS25vd2xlZGdlIiwiU2hhcmVkS25vd2xlZGdlUHJvdmlkZXIiLCJLbm93bGVkZ2VCb3hlcyIsIktub3dsZWRnZUJveCIsIktub3dsZWRnZUJveFByb3ZpZGVyIiwiVXNlciIsImxvZ2dlZCIsIlVzZXJQcm92aWRlciIsImxvZ2luIiwidXBkYXRlVXNlciJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiYXVkaW8vY29sbGVjdGlvbi50cyIsImF1ZGlvL2l0ZW0udHMiLCJjaGF0L2NvbGxlY3Rpb24udHMiLCJjaGF0L2l0ZW0udHMiLCJjaGF0L21lc3NhZ2VzL2NvbGxlY3Rpb24udHMiLCJjaGF0L21lc3NhZ2VzL2luZGV4LnRzIiwiY2hhdC9tZXNzYWdlcy9pdGVtLnRzIiwiY2xhc3Nlcy9jb2xsZWN0aW9uLnRzIiwiY2xhc3Nlcy9pdGVtLnRzIiwiZG9jdW1lbnRzL2NvbGxlY3Rpb24udHMiLCJkb2N1bWVudHMvaXRlbS50cyIsImtub3dsZWRnZS1iYXNlcy9jb2xsZWN0aW9uLnRzIiwia25vd2xlZGdlLWJhc2VzL2l0ZW0udHMiLCJrbm93bGVkZ2UtYmFzZXMvc2hhcmVkL2NvbGxlY3Rpb24udHMiLCJrbm93bGVkZ2UtYmFzZXMvc2hhcmVkL2l0ZW0udHMiLCJrbm93bGVkZ2UtYm94ZXMvY29sbGVjdGlvbi50cyIsImtub3dsZWRnZS1ib3hlcy9pdGVtLnRzIiwidXNlcnMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=