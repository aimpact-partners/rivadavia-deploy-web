System.register(["@beyond-js/kernel@0.1.9/bundle", "firebase@9.22.2/app", "firebase@9.22.2/auth", "@aimpact/chat-api@1.0.0/entities/models", "@beyond-js/reactive@1.0.1/model", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
  _export("sessionWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_firebase9222App) {
      dependency_1 = _firebase9222App;
    }, function (_firebase9222Auth) {
      dependency_2 = _firebase9222Auth;
    }, function (_aimpactChatApi100EntitiesModels) {
      dependency_3 = _aimpactChatApi100EntitiesModels;
    }, function (_beyondJsReactive101Model) {
      dependency_4 = _beyondJsReactive101Model;
    }, function (_beyondJsKernel019Routing) {
      dependency_5 = _beyondJsKernel019Routing;
    }, function (_beyondJsKernel019Core) {
      dependency_6 = _beyondJsKernel019Core;
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
          "vspecifier": "@aimpact/ailearn-estrada@0.0.2/session"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['firebase/app', dependency_1], ['firebase/auth', dependency_2], ['@aimpact/chat-api/entities/models', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@beyond-js/kernel/core', dependency_6]]);
      ims = new Map();
      /*********************************
      INTERNAL MODULE: ./firebase/config
      *********************************/
      ims.set('./firebase/config', {
        hash: 3257170744,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.googleProvider = exports.facebookProvider = exports.auth = void 0;
          var _app = require("firebase/app");
          var _auth = require("firebase/auth");
          // Import the functions you need from the SDKs you need

          // TODO: Add SDKs for Firebase products that you want to use
          // https://firebase.google.com/docs/web/setup#available-libraries
          // Your web app's Firebase configuration
          // For Firebase JS SDK v7.20.0 and later, measurementId is optional
          const firebaseConfig = {
            apiKey: 'AIzaSyBYiZcPNBky2QvNdVwgCgU_v2B7feLtbQU',
            authDomain: 'aimpact-partners-dev.firebaseapp.com',
            databaseURL: 'https://aimpact-partners-dev-default-rtdb.firebaseio.com',
            projectId: 'aimpact-partners-dev',
            storageBucket: 'aimpact-partners-dev.appspot.com',
            messagingSenderId: '1081434267674',
            appId: '1:1081434267674:web:9396cc23e55385b5d171a3',
            measurementId: 'G-QLL5WFH89Y'
          };
          // Initialize Firebase
          const app = (0, _app.initializeApp)(firebaseConfig);
          const auth = (0, _auth.getAuth)(app);
          exports.auth = auth;
          const googleProvider = new _auth.GoogleAuthProvider();
          exports.googleProvider = googleProvider;
          const facebookProvider = new _auth.FacebookAuthProvider();
          exports.facebookProvider = facebookProvider;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 4033623338,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.sessionWrapper = void 0;
          var _config = require("./firebase/config");
          var _models = require("@aimpact/chat-api/entities/models");
          var _auth = require("firebase/auth");
          var _model = require("@beyond-js/reactive/model");
          var _routing = require("@beyond-js/kernel/routing");
          var _core = require("@beyond-js/kernel/core");
          class SessionManager extends _model.ReactiveModel {
            #user;
            get user() {
              return this.#user;
            }
            get userId() {
              return _config.auth.currentUser ? _config.auth.currentUser.uid : null;
            }
            get logged() {
              return !!this.user;
            }
            #promise;
            get isReady() {
              return this.#promise;
            }
            constructor() {
              super();
              this.#promise = new _core.PendingPromise();
              (0, _auth.onAuthStateChanged)(_config.auth, this.setUser);
            }
            setUser = async data => {
              if (!data && this.#user) {
                this.#user = undefined;
                this.signOut();
              }
              if (data) {
                const user = new _models.User({
                  id: data.uid
                });
                await user.isReady;
                this.#user = user;
              }
              this.ready = true;
              //@ts-ignore
              this.triggerEvent('change');
              //@ts-ignore
              this.#promise.resolve(this.ready);
            };
            signInWithGoogle = async () => {
              try {
                const response = await (0, _auth.signInWithPopup)(_config.auth, _config.googleProvider);
                if (response.user?.uid) {
                  const {
                    displayName,
                    photoURL,
                    email,
                    phoneNumber
                  } = response.user;
                  const specs = {
                    id: response.user.uid,
                    displayName,
                    photoURL,
                    email,
                    phoneNumber
                  };
                  const user = new _models.User(specs);
                  user.set(specs);
                  this.#user = user;
                  await user.login(response);
                  return {
                    status: true
                  };
                }
                return {
                  status: false,
                  error: 'CANNOT'
                };
              } catch (error) {
                const errors = {
                  'auth/account-exists-with-different-credential': 'ACCOUNT_EXISTS_WITH_DIFFERENT_CREDENTIAL',
                  'auth/popup-closed-by-user': 'POPUP_CLOSED_BY_USER'
                };
                return {
                  status: false,
                  error: errors[error.code] || 'CANNOT'
                };
              }
            };
            signInWithFacebook = async () => {
              try {
                await (0, _auth.signInWithPopup)(_config.auth, _config.facebookProvider);
              } catch (error) {
                console.error(error);
              }
            };
            registerWithEmail = async (email, password) => {
              try {
                await (0, _auth.createUserWithEmailAndPassword)(_config.auth, email, password);
              } catch (error) {
                console.error(error);
              }
            };
            login = async (email, password) => {
              try {
                const response = await (0, _auth.signInWithEmailAndPassword)(_config.auth, email, password);
              } catch (error) {
                return {
                  status: false,
                  error: 'INVALID_DATA'
                };
              }
            };
            signInWithPhoneNumber = async (phoneNumber, appVerifier) => {
              try {
                const confirmationResult = await (0, _auth.signInWithPhoneNumber)(_config.auth, phoneNumber, appVerifier);
                // After this you can ask for the code and call confirmationResult.confirm(code)
              } catch (error) {
                console.error(error);
              }
            };
            signOut = async () => {
              try {
                await (0, _auth.signOut)(_config.auth);
                _routing.routing.pushState('/');
              } catch (error) {
                console.error(error);
              }
            };
            logout = this.signOut;
          }
          /*bundle*/
          const sessionWrapper = new SessionManager();
          exports.sessionWrapper = sessionWrapper;
          globalThis.s = sessionWrapper;
        }
      });

      /**********************
      INTERNAL MODULE: ./user
      **********************/

      ims.set('./user', {
        hash: 273132084,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _model = require("@beyond-js/reactive/model");
          class User extends _model.ReactiveModel {
            constructor({
              id
            }) {
              super({
                id,
                storeName: 'users',
                db: 'ailearn'
              });
            }
          }
          exports.User = User;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "sessionWrapper",
        "name": "sessionWrapper"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'sessionWrapper') && _export("sessionWrapper", sessionWrapper = require ? require('./index').sessionWrapper : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJhdXRoIiwiZXhwb3J0cyIsImdvb2dsZVByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZmFjZWJvb2tQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiU2Vzc2lvbk1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwidXNlciIsInVzZXJJZCIsImN1cnJlbnRVc2VyIiwidWlkIiwibG9nZ2VkIiwiaXNSZWFkeSIsImNvbnN0cnVjdG9yIiwiUGVuZGluZ1Byb21pc2UiLCJzZXRVc2VyIiwiZGF0YSIsInVuZGVmaW5lZCIsInNpZ25PdXQiLCJVc2VyIiwiaWQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsInJlc29sdmUiLCJzaWduSW5XaXRoR29vZ2xlIiwicmVzcG9uc2UiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwiZW1haWwiLCJwaG9uZU51bWJlciIsInNwZWNzIiwic2V0IiwibG9naW4iLCJzdGF0dXMiLCJlcnJvciIsImVycm9ycyIsImNvZGUiLCJzaWduSW5XaXRoRmFjZWJvb2siLCJjb25zb2xlIiwicmVnaXN0ZXJXaXRoRW1haWwiLCJwYXNzd29yZCIsInNpZ25JbldpdGhQaG9uZU51bWJlciIsImFwcFZlcmlmaWVyIiwiY29uZmlybWF0aW9uUmVzdWx0Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsImxvZ291dCIsInNlc3Npb25XcmFwcGVyIiwiZ2xvYmFsVGhpcyIsInMiLCJzdG9yZU5hbWUiLCJkYiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZmlyZWJhc2UvY29uZmlnLnRzIiwiaW5kZXgudHMiLCJ1c2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdfQ==