System.register(["@beyond-js/backend@0.1.6/client", "@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ActionsBridge, ims, UsersProvider, BookProvider, UserProvider, __beyond_pkg, hmr;
  _export({
    UsersProvider: void 0,
    BookProvider: void 0,
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
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/reactive", "1.0.1"], ["@aimpact/ailearn-estrada", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@1.0.1/tests/backend/provider"
        },
        "type": "bridge"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/backend/client', dependency_0]]);
      ({
        ActionsBridge
      } = brequire('@beyond-js/backend/client'));
      ims = new Map();
      /*****************************
      INTERNAL MODULE: ./books/books
      *****************************/
      ims.set('./books/books', {
        hash: 1323612197,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UsersProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class UsersProvider extends ActionsBridge {
            async save(data) {
              return await this.execute("books\\books//UsersProvider//save", ...arguments);
            }
            async load({
              id
            }) {
              return await this.execute("books\\books//UsersProvider//load", ...arguments);
            }
            async list() {
              return await this.execute("books\\books//UsersProvider//list", ...arguments);
            }
            async send() {
              return await this.execute("books\\books//UsersProvider//send", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.UsersProvider = UsersProvider;
        }
      });

      /*****************************
      INTERNAL MODULE: ./books/index
      *****************************/

      ims.set('./books/index', {
        hash: 693800996,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BookProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class BookProvider extends ActionsBridge {
            async publish(data) {
              return await this.execute("books\\index//BookProvider//publish", ...arguments);
            }
            async load({
              id
            }) {
              return await this.execute("books\\index//BookProvider//load", ...arguments);
            }
            async list() {
              return await this.execute("books\\index//BookProvider//list", ...arguments);
            }
            async bulkSave(data) {
              return await this.execute("books\\index//BookProvider//bulkSave", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.BookProvider = BookProvider;
        }
      });

      /*****************************
      INTERNAL MODULE: ./users/index
      *****************************/

      ims.set('./users/index', {
        hash: 4027472903,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class UserProvider extends ActionsBridge {
            async publish(data) {
              return await this.execute("users\\index//UserProvider//publish", ...arguments);
            }
            async load({
              id
            }) {
              return await this.execute("users\\index//UserProvider//load", ...arguments);
            }
            async list() {
              return await this.execute("users\\index//UserProvider//list", ...arguments);
            }
            async bulkSave(data) {
              return await this.execute("users\\index//UserProvider//bulkSave", ...arguments);
            }
            async delete(id) {
              return await this.execute("users\\index//UserProvider//delete", ...arguments);
            }
            async deleteItems(ids) {
              return await this.execute("users\\index//UserProvider//deleteItems", ...arguments);
            }
            async prueba() {
              return await this.execute("users\\index//UserProvider//prueba", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.UserProvider = UserProvider;
        }
      });

      /*****************************
      INTERNAL MODULE: ./users/users
      *****************************/

      ims.set('./users/users', {
        hash: 1323612197,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UsersProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class UsersProvider extends ActionsBridge {
            async save(data) {
              return await this.execute("users\\users//UsersProvider//save", ...arguments);
            }
            async load({
              id
            }) {
              return await this.execute("users\\users//UsersProvider//load", ...arguments);
            }
            async list() {
              return await this.execute("users\\users//UsersProvider//list", ...arguments);
            }
            async send() {
              return await this.execute("users\\users//UsersProvider//send", ...arguments);
            }
            constructor() {
              super("unknown", _beyond_context.bundle);
            }
          }
          exports.UsersProvider = UsersProvider;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./books/books",
        "from": "UsersProvider",
        "name": "UsersProvider"
      }, {
        "im": "./books/index",
        "from": "BookProvider",
        "name": "BookProvider"
      }, {
        "im": "./users/index",
        "from": "UserProvider",
        "name": "UserProvider"
      }, {
        "im": "./users/users",
        "from": "UsersProvider",
        "name": "UsersProvider"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'UsersProvider') && _export("UsersProvider", UsersProvider = require ? require('./books/books').UsersProvider : value);
        (require || prop === 'BookProvider') && _export("BookProvider", BookProvider = require ? require('./books/index').BookProvider : value);
        (require || prop === 'UserProvider') && _export("UserProvider", UserProvider = require ? require('./users/index').UserProvider : value);
        (require || prop === 'UsersProvider') && _export("UsersProvider", UsersProvider = require ? require('./users/users').UsersProvider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxFQUFFQyxzQkFBTSxDQUFDO1lBQzVCOztVQUNIQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQkQ7VUFFTyxZQUFZO1VBQVUsTUFBT1osYUFBYyxTQUFRQyxhQUFhO1lBQ25FLE1BQU1DLElBQUksQ0FBQ0MsSUFBSTtjQUNYLE9BQU8sTUFBTSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxtQ0FBbUMsRUFBRSxHQUFHQyxTQUFTLENBQUM7WUFDaEY7WUFDQSxNQUFNQyxJQUFJLENBQUM7Y0FBRUM7WUFBRSxDQUFFO2NBQ2IsT0FBTyxNQUFNLElBQUksQ0FBQ0gsT0FBTyxDQUFDLG1DQUFtQyxFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUNoRjtZQUNBLE1BQU1HLElBQUk7Y0FDTixPQUFPLE1BQU0sSUFBSSxDQUFDSixPQUFPLENBQUMsbUNBQW1DLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQ2hGO1lBQ0EsTUFBTUksSUFBSTtjQUNOLE9BQU8sTUFBTSxJQUFJLENBQUNMLE9BQU8sQ0FBQyxtQ0FBbUMsRUFBRSxHQUFHQyxTQUFTLENBQUM7WUFDaEY7WUFDQUs7Y0FDSSxLQUFLLENBQUMsU0FBUyxFQUFFQyxzQkFBTSxDQUFDO1lBQzVCOztVQUNIQyIsIm5hbWVzIjpbIlVzZXJzUHJvdmlkZXIiLCJBY3Rpb25zQnJpZGdlIiwic2F2ZSIsImRhdGEiLCJleGVjdXRlIiwiYXJndW1lbnRzIiwibG9hZCIsImlkIiwibGlzdCIsInNlbmQiLCJjb25zdHJ1Y3RvciIsImJ1bmRsZSIsImV4cG9ydHMiLCJCb29rUHJvdmlkZXIiLCJwdWJsaXNoIiwiYnVsa1NhdmUiLCJVc2VyUHJvdmlkZXIiLCJkZWxldGUiLCJkZWxldGVJdGVtcyIsImlkcyIsInBydWViYSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiYm9va3MvYm9va3MudHMiLCJib29rcy9pbmRleC50cyIsInVzZXJzL2luZGV4LnRzIiwidXNlcnMvdXNlcnMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=