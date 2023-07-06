System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/transversals", "@beyond-js/widgets@0.1.4/render", "@aimpact/chat-api@1.0.0/entities/registry", "@aimpact/ailearn-estrada@0.0.2/session", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, Transversal, __beyond_transversal, widgets, bundles;
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Transversals) {
      dependency_1 = _beyondJsKernel019Transversals;
    }, function (_beyondJsWidgets014Render) {
      dependency_2 = _beyondJsWidgets014Render;
    }, function (_aimpactChatApi100EntitiesRegistry) {
      dependency_3 = _aimpactChatApi100EntitiesRegistry;
    }, function (_aimpactAilearnEstrada002Session) {
      dependency_4 = _aimpactAilearnEstrada002Session;
    }, function (_beyondJsKernel019Routing) {
      dependency_5 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      ({
        Transversal
      } = brequire('@beyond-js/kernel/transversals'));
      _export("__beyond_transversal", __beyond_transversal = new Transversal('start', ''));
      __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2], ['@aimpact/chat-api/entities/registry', dependency_3], ['@aimpact/ailearn-estrada/session', dependency_4], ['@beyond-js/kernel/routing', dependency_5]]);

      /*************
      BUNDLE: WIDGET
      *************/
      ({
        widgets
      } = brequire('@beyond-js/widgets/render'));
      widgets.register([{
        "name": "reactive-layout",
        "vspecifier": "@beyond-js/reactive@1.0.1/reactive-layout",
        "is": "layout"
      }, {
        "name": "home-page-reactive",
        "vspecifier": "@beyond-js/reactive@1.0.1/home",
        "is": "page",
        "route": "/home-reactive"
      }, {
        "name": "reactive-tests",
        "vspecifier": "@beyond-js/reactive@1.0.1/tests/tests",
        "is": "page",
        "route": "/reactive/tests"
      }, {
        "name": "chat-api-test",
        "vspecifier": "@aimpact/chat-api@1.0.0//tests/page",
        "is": "page",
        "route": "/chat-api/tests"
      }, {
        "name": "main-layout",
        "vspecifier": "@aimpact/media-manager@1.0.0/layout/main",
        "is": "layout"
      }, {
        "name": "coming-soon",
        "vspecifier": "pragmate-ui@0.0.36/coming-soon",
        "is": "page",
        "route": "/components/coming-soon"
      }, {
        "name": "auth-layout",
        "vspecifier": "@aimpact/ailearn-estrada@0.0.2/auth-layout",
        "is": "layout"
      }, {
        "name": "default-layout",
        "vspecifier": "@aimpact/ailearn-estrada@0.0.2/default-layout",
        "is": "layout"
      }, {
        "name": "chat-layout",
        "vspecifier": "@aimpact/ailearn-estrada@0.0.2/chat-layout",
        "is": "layout"
      }, {
        "name": "auth-login-page",
        "vspecifier": "@aimpact/ailearn-estrada@0.0.2/auth-login",
        "is": "page",
        "route": "/auth/login",
        "layout": "auth-layout"
      }, {
        "name": "auth-register-page",
        "vspecifier": "@aimpact/ailearn-estrada@0.0.2/auth-register",
        "is": "page",
        "route": "/auth/register",
        "layout": "auth-layout"
      }, {
        "name": "chat-page",
        "vspecifier": "@aimpact/ailearn-estrada@0.0.2/chat-page",
        "is": "page",
        "route": "/${id}",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-classes-list",
        "vspecifier": "@aimpact/ailearn-estrada@0.0.2/classes/list.widget",
        "is": "page",
        "route": "/classes/list",
        "layout": "chat-layout"
      }, {
        "name": "class-management",
        "vspecifier": "@aimpact/ailearn-estrada@0.0.2/classes/management",
        "is": "page",
        "route": "/classes/management",
        "layout": "chat-layout"
      }, {
        "name": "app-documents-access",
        "vspecifier": "@aimpact/ailearn-estrada@0.0.2/documents/access.widget",
        "is": "page",
        "route": "/documents/access",
        "layout": "auth-layout"
      }, {
        "name": "app-documents-home",
        "vspecifier": "@aimpact/ailearn-estrada@0.0.2/pages/documents/home.widget",
        "is": "page",
        "route": "/documents/home",
        "layout": "chat-layout"
      }, {
        "name": "app-tests",
        "vspecifier": "@aimpact/ailearn-estrada@0.0.2/pages/tests",
        "is": "page",
        "route": "/tests/reactive"
      }]);
      bundles = [];
      /***********************************************
      MODULE: @aimpact/ailearn-estrada/models/registry
      ***********************************************/
      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/ailearn-estrada@0.0.2/models/registry"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@beyond-js/reactive", "1.0.1"], ["@aimpact/chat-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.6"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.8"], ["dexie", "3.2.4"], ["dompurify", "3.0.3"], ["firebase", "9.22.2"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.0"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.2.1"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.6.2"], ["uuid", "9.0.0"], ["@aimpact/ailearn-estrada", "0.0.2"], ["@aimpact/ailearn-estrada", "0.0.2"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /***********************
        INTERNAL MODULE: ./start
        ***********************/

        ims.set('./start', {
          hash: 898593720,
          creator: function (require, exports) {
            "use strict";

            var _registry = require("@aimpact/chat-api/entities/registry");
            (async () => (0, _registry.createDB)())();
          }
        });
        return {
          dependencies: ['@aimpact/chat-api/entities/registry']
        };
      }]);

      /***************************************
      MODULE: @aimpact/ailearn-estrada/routing
      ***************************************/

      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/ailearn-estrada@0.0.2/routing"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@beyond-js/reactive", "1.0.1"], ["@aimpact/chat-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.6"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.8"], ["dexie", "3.2.4"], ["dompurify", "3.0.3"], ["firebase", "9.22.2"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.0"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.2.1"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.6.2"], ["uuid", "9.0.0"], ["@aimpact/ailearn-estrada", "0.0.2"], ["@aimpact/ailearn-estrada", "0.0.2"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /**********************************
        INTERNAL MODULE: ./handlers/session
        **********************************/

        ims.set('./handlers/session', {
          hash: 2014609484,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.checkSession = checkSession;
            var _session = require("@aimpact/ailearn-estrada/session");
            async function checkSession(pathname) {
              await _session.sessionWrapper.isReady;
              if (PUBLIC_ROUTES.includes(pathname) || _session.sessionWrapper.logged) return true;
              return {
                pathname: DEFAULT_ROUTE
              };
            }
            const PUBLIC_ROUTES = ['/auth/login', '/auth/register', '/documents/access'];
            const DEFAULT_ROUTE = '/auth/login';
          }
        });

        /******************************
        INTERNAL MODULE: ./router/index
        ******************************/

        ims.set('./router/index', {
          hash: 884112209,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.Router = void 0;
            class Router {
              #isDefault;
              get isDefault() {
                return this.#pathname === '/';
              }
              #pathname;
              get pathname() {
                return this.#pathname;
              }
              #data;
              get data() {
                return this.#data;
              }
              #handlers;
              constructor(handlers) {
                if (!Array.isArray(handlers)) {
                  throw new Error('handlers must be an array');
                }
                handlers.forEach(handler => {
                  if (typeof handler !== 'function') throw new Error('handlers must be an array of functions');
                });
                this.#handlers = handlers;
              }
              async validate(path) {
                for (let handler of this.#handlers) {
                  if (handler === undefined) continue;
                  let response = await handler(path);
                  if (response && typeof response === 'object') {
                    return response;
                    break;
                  }
                }
                return {
                  pathname: path
                };
              }
            }
            exports.Router = Router;
          }
        });

        /*************************
        INTERNAL MODULE: ./routing
        *************************/

        ims.set('./routing', {
          hash: 1070756717,
          creator: function (require, exports) {
            "use strict";

            var _routing = require("@beyond-js/kernel/routing");
            var _router = require("./router");
            var _session = require("./handlers/session");
            const router = new _router.Router([_session.checkSession]);
            _routing.routing.redirect = async function redirect(uri) {
              const response = await router.validate(uri.pathname);
              return response.pathname;
            };
          }
        });
        return {
          dependencies: ['@aimpact/ailearn-estrada/session', '@beyond-js/kernel/routing']
        };
      }]);

      /****************************************
      MODULE: @aimpact/ailearn-estrada/registry
      ****************************************/

      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/ailearn-estrada@0.0.2/registry"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@beyond-js/reactive", "1.0.1"], ["@aimpact/chat-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.6"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.8"], ["dexie", "3.2.4"], ["dompurify", "3.0.3"], ["firebase", "9.22.2"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.0"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.2.1"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.6.2"], ["uuid", "9.0.0"], ["@aimpact/ailearn-estrada", "0.0.2"], ["@aimpact/ailearn-estrada", "0.0.2"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /***********************
        INTERNAL MODULE: ./start
        ***********************/

        ims.set('./start', {
          hash: 2894233263,
          creator: function (require, exports) {
            "use strict";

            var _registry = require("@aimpact/chat-api/entities/registry");
            (async () => {
              await (0, _registry.createDB)();
            })();
          }
        });
        return {
          dependencies: ['@aimpact/chat-api/entities/registry']
        };
      }]);
      __beyond_transversal.initialise(bundles);
    }
  };
});