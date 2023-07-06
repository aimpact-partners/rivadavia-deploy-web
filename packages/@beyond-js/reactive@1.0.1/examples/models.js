System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.0.1/entities", "@beyond-js/reactive@1.0.1/tests/backend/provider"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Books, Book, User, Users, __beyond_pkg, hmr;
  _export({
    Books: void 0,
    Book: void 0,
    User: void 0,
    Users: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive101Entities) {
      dependency_1 = _beyondJsReactive101Entities;
    }, function (_beyondJsReactive101TestsBackendProvider) {
      dependency_2 = _beyondJsReactive101TestsBackendProvider;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/reactive", "1.0.1"], ["@aimpact/ailearn-estrada", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.0.1/examples/models"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1], ['@beyond-js/reactive/tests/backend/provider', dependency_2]]);
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./books/collection
      **********************************/
      ims.set('./books/collection', {
        hash: 3905282793,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Books = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _index = require("./index");
          /*bundle*/
          class Books extends _entities.Collection {
            item = _index.Book;
            storeName = "books";
            db = "test";
            constructor() {
              super();
              this.provider = new UserProvider();
              this.init();
            }
          }
          exports.Books = Books;
        }
      });

      /*****************************
      INTERNAL MODULE: ./books/index
      *****************************/

      ims.set('./books/index', {
        hash: 2926907351,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Book = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          /*bundle */
          class Book extends _entities.Item {
            properties = ['id', 'title', 'author', 'year'];
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                storeName: 'book',
                db: 'test'
              });
            }
          }
          exports.Book = Book;
        }
      });

      /*****************************
      INTERNAL MODULE: ./users/index
      *****************************/

      ims.set('./users/index', {
        hash: 963978955,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _provider = require("@beyond-js/reactive/tests/backend/provider");
          /*bundle */
          class User extends _entities.Item {
            properties = ['id', 'name', 'lastname'];
            constructor({
              id = undefined
            } = {}) {
              super({
                storeName: 'user',
                db: 'test',
                id,
                provider: _provider.UserProvider
              });
              this.test();
            }
            test() {
              this.checkReady();
            }
          }
          exports.User = User;
        }
      });

      /*****************************
      INTERNAL MODULE: ./users/users
      *****************************/

      ims.set('./users/users', {
        hash: 2631537503,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Users = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _index = require("./index");
          var _provider = require("@beyond-js/reactive/tests/backend/provider");
          /*bundle*/
          class Users extends _entities.Collection {
            item = _index.User;
            constructor() {
              super({
                storeName: 'user',
                db: 'test',
                provider: _provider.UserProvider,
                item: _index.User
              });
            }
          }
          exports.Users = Users;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./books/collection",
        "from": "Books",
        "name": "Books"
      }, {
        "im": "./books/index",
        "from": "Book",
        "name": "Book"
      }, {
        "im": "./users/index",
        "from": "User",
        "name": "User"
      }, {
        "im": "./users/users",
        "from": "Users",
        "name": "Users"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Books') && _export("Books", Books = require ? require('./books/collection').Books : value);
        (require || prop === 'Book') && _export("Book", Book = require ? require('./books/index').Book : value);
        (require || prop === 'User') && _export("User", User = require ? require('./users/index').User : value);
        (require || prop === 'Users') && _export("Users", Users = require ? require('./users/users').Users : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBS087VUFBVSxNQUFPQSxLQUFNLFNBQVFDLG9CQUFVO1lBQy9DQyxJQUFJLEdBQUdDLFdBQUk7WUFDREMsU0FBUyxHQUFHLE9BQU87WUFDbkJDLEVBQUUsR0FBRyxNQUFNO1lBRXJCQztjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUlDLFlBQVksRUFBRTtjQUNsQyxJQUFJLENBQUNDLElBQUksRUFBRTtZQUNaOztVQUNBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkQ7VUFRTztVQUFXLE1BQ1pQLElBQUssU0FBUVEsY0FBVztZQUNuQkMsVUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDO1lBRXhETixZQUFZO2NBQUVPLEVBQUUsR0FBR0M7WUFBUyxDQUFFLEdBQUcsRUFBRTtjQUNsQyxLQUFLLENBQUM7Z0JBQUVELEVBQUU7Z0JBQUVULFNBQVMsRUFBRSxNQUFNO2dCQUFFQyxFQUFFLEVBQUU7Y0FBTSxDQUFFLENBQUM7WUFDN0M7O1VBQ0FLOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZEO1VBQ0E7VUFRTztVQUFXLE1BQ1pLLElBQUssU0FBUUosY0FBVztZQUNuQkMsVUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUM7WUFFakROLFlBQVk7Y0FBRU8sRUFBRSxHQUFHQztZQUFTLENBQUUsR0FBRyxFQUFFO2NBQ2xDLEtBQUssQ0FBQztnQkFBRVYsU0FBUyxFQUFFLE1BQU07Z0JBQUVDLEVBQUUsRUFBRSxNQUFNO2dCQUFFUSxFQUFFO2dCQUFFTixRQUFRLEVBQUVDO2NBQVksQ0FBRSxDQUFDO2NBQ3BFLElBQUksQ0FBQ1EsSUFBSSxFQUFFO1lBQ1o7WUFFQUEsSUFBSTtjQUNILElBQUksQ0FBQ0MsVUFBVSxFQUFFO1lBQ2xCOztVQUNBUDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkQ7VUFDQTtVQUNBO1VBSU87VUFBVSxNQUFPUSxLQUFNLFNBQVFqQixvQkFBVTtZQUMvQ0MsSUFBSSxHQUFHYSxXQUFJO1lBRVhUO2NBQ0MsS0FBSyxDQUFDO2dCQUFFRixTQUFTLEVBQUUsTUFBTTtnQkFBRUMsRUFBRSxFQUFFLE1BQU07Z0JBQUVFLFFBQVEsRUFBRUMsc0JBQVk7Z0JBQUVOLElBQUksRUFBRWE7Y0FBSSxDQUFFLENBQUM7WUFDN0U7O1VBQ0FMIiwibmFtZXMiOlsiQm9va3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkJvb2siLCJzdG9yZU5hbWUiLCJkYiIsImNvbnN0cnVjdG9yIiwicHJvdmlkZXIiLCJVc2VyUHJvdmlkZXIiLCJpbml0IiwiZXhwb3J0cyIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiaWQiLCJ1bmRlZmluZWQiLCJVc2VyIiwidGVzdCIsImNoZWNrUmVhZHkiLCJVc2VycyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiYm9va3MvY29sbGVjdGlvbi50cyIsImJvb2tzL2luZGV4LnRzIiwidXNlcnMvaW5kZXgudHMiLCJ1c2Vycy91c2Vycy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdfQ==