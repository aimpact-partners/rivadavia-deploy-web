System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/link", "@beyond-js/react-18-widgets@1.0.0/hooks", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "@aimpact/ailearn-estrada@0.0.2/shared/components", "@aimpact/ailearn-estrada@0.0.2/shared/icons", "@aimpact/ailearn-estrada@0.0.2/session", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.0.0/page", "@beyond-js/reactive@1.0.1/model", "@aimpact/chat-api@1.0.0/entities/models"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_3 = _react;
    }, function (_pragmateUi0036Link) {
      dependency_4 = _pragmateUi0036Link;
    }, function (_beyondJsReact18Widgets100Hooks) {
      dependency_5 = _beyondJsReact18Widgets100Hooks;
    }, function (_pragmateUi0036Form) {
      dependency_6 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Icons) {
      dependency_7 = _pragmateUi0036Icons;
    }, function (_aimpactAilearnEstrada002SharedComponents) {
      dependency_8 = _aimpactAilearnEstrada002SharedComponents;
    }, function (_aimpactAilearnEstrada002SharedIcons) {
      dependency_9 = _aimpactAilearnEstrada002SharedIcons;
    }, function (_aimpactAilearnEstrada002Session) {
      dependency_10 = _aimpactAilearnEstrada002Session;
    }, function (_beyondJsKernel019Routing) {
      dependency_11 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets100Page) {
      dependency_12 = _beyondJsReact18Widgets100Page;
    }, function (_beyondJsReactive101Model) {
      dependency_13 = _beyondJsReactive101Model;
    }, function (_aimpactChatApi100EntitiesModels) {
      dependency_14 = _aimpactChatApi100EntitiesModels;
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
          "vspecifier": "@aimpact/ailearn-estrada@0.0.2/documents/access",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['pragmate-ui/link', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/icons', dependency_7], ['@aimpact/ailearn-estrada/shared/components', dependency_8], ['@aimpact/ailearn-estrada/shared/icons', dependency_9], ['@aimpact/ailearn-estrada/session', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['@beyond-js/react-18-widgets/page', dependency_12], ['@beyond-js/reactive/model', dependency_13], ['@aimpact/chat-api/entities/models', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-documents-access",
        "vspecifier": "@aimpact/ailearn-estrada@0.0.2/documents/access.widget",
        "is": "page",
        "route": "/documents/access",
        "layout": "auth-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-estrada@0.0.2/documents/access.widget');
      ims = new Map();
      /***************************************
      INTERNAL MODULE: ./components/empty-view
      ***************************************/
      ims.set('./components/empty-view', {
        hash: 569057465,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyView = void 0;
          var React = require("react");
          var _link = require("pragmate-ui/link");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-estrada/shared/icons");
          const EmptyView = () => {
            return React.createElement("div", {
              className: 'access__folder'
            }, React.createElement("img", {
              alt: 'Shared folder',
              src: '/assets/shared-folder.png'
            }), React.createElement("span", {
              className: 'access-details'
            }, React.createElement(_icons.Icon, {
              icon: _icons2.ICONS['aip-chat-logo'],
              className: 'acccess__ailogo'
            }), React.createElement("h1", null, "Welcome to AIM Chat"), React.createElement("p", null, React.createElement("strong", null, "No pudimos encontrar la carpeta compartida!"), React.createElement("br", null), "Revisa que el link se haya copiado correctamente."), React.createElement(_link.Link, {
              href: '/documents/home'
            }, React.createElement(_form.Button, {
              icon: 'folder',
              label: 'Ir a documentos'
            }))));
          };
          exports.EmptyView = EmptyView;
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 518706050,
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
              return _views.View;
            }
            show() {
              this.#store.load(this.uri.qs.get('id'));
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 2875561523,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _models = require("@aimpact/chat-api/entities/models");
          var _session = require("@aimpact/ailearn-estrada/session");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #found;
            get found() {
              return this.#found;
            }
            load = async id => {
              if (this.#model && this.#model.id !== id) {
                this.#model = undefined;
              }
              this.#model = new _models.KnowledgeBox();
              this.#model.on('change', this.triggerEvent);
              const response = await this.#model.load({
                id
              });
              // TODO [reactive-0.0.1] @ftovar8 @jircdev model.found siempre viene undefined
              this.#found = !!response.data;
              this.ready = true;
            };
            createChat = async (kbId, name) => {
              const chat = new _models.Chat();
              const userId = _session.sessionWrapper.userId;
              let specs = {
                userId,
                knowledgeBoxId: kbId,
                name: `[SAVED] ${name}`
              };
              await chat.publish(specs);
              return {
                status: true,
                chat
              };
            };
            saveSharedFolder = async (kbId, name) => {
              try {
                const sharedFolders = JSON.parse(localStorage.getItem('sharedFolders')) || [];
                const found = sharedFolders.find(folder => folder.id === kbId);
                if (!found) {
                  sharedFolders.push({
                    id: kbId,
                    path: `[SAVED] ${name}`
                  });
                  localStorage.setItem('sharedFolders', JSON.stringify(sharedFolders));
                }
              } catch (error) {
                console.log('error :', error);
              }
            };
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2170970929,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _components = require("@aimpact/ailearn-estrada/shared/components");
          var _emptyView = require("../components/empty-view");
          var _icons2 = require("@aimpact/ailearn-estrada/shared/icons");
          var _session = require("@aimpact/ailearn-estrada/session");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = React.useState(store.ready);
            const [isFetching, setFetching] = React.useState(false);
            const [error, setError] = React.useState(false);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready) return React.createElement(_components.PreloadScreen, null);
            // TODO [reactive-0.0.1] @ftovar8 @jircdev model.found siempre viene undefined
            // if (!store.model.found) return <EmptyView />;
            if (!store.found) return React.createElement(_emptyView.EmptyView, null);
            const {
              model
            } = store;
            const handleClick = async () => {
              try {
                const response = await store.createChat(model.id, model.path);
                await store.saveSharedFolder(model.id, model.path);
                if (!response.status) {
                  console.error(response.message);
                  return;
                }
                const {
                  id: chatId
                } = response.chat;
                _routing.routing.pushState(`/${chatId}`);
              } catch (e) {
                console.error(e.message);
              }
            };
            const googleLogin = async event => {
              try {
                setFetching(true);
                const response = await _session.sessionWrapper.signInWithGoogle();
                if (!response.status) {
                  const {
                    error
                  } = response;
                  if (error === 'POPUP_CLOSED_BY_USER') {
                    setFetching(false);
                  } else {
                    setError('Error trying to login with Google');
                  }
                  return;
                }
                // routing.pushState('/');
                handleClick();
              } catch (e) {
                console.error(e.message);
              }
            };
            return React.createElement("div", {
              className: 'access__folder'
            }, React.createElement("img", {
              alt: 'Shared folder',
              src: '/assets/shared-folder.png'
            }), React.createElement("span", {
              className: 'access-details'
            }, React.createElement(_icons.Icon, {
              icon: _icons2.ICONS['aip-chat-logo'],
              className: 'acccess__ailogo'
            }), React.createElement("h1", null, "Welcome to AIM Chat"), React.createElement("p", null, React.createElement("strong", null, "Knowledge Box ", model.path.toUpperCase(), " has been shared with you."), React.createElement("br", null), "Save the Knowledge Box in your Documents section and start chatting with the content."), !_session.sessionWrapper.logged ? React.createElement(_form.Button, {
              icon: 'google',
              onClick: googleLogin,
              loading: isFetching,
              label: 'Google Sign In'
            }) : React.createElement(_form.Button, {
              variant: 'primary',
              onClick: handleClick,
              icon: 'save'
            }, "Save & Chat")));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ikljb24iLCJpY29uIiwiSUNPTlMiLCJMaW5rIiwiaHJlZiIsIkJ1dHRvbiIsImxhYmVsIiwiZXhwb3J0cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImZvdW5kIiwiaWQiLCJ1bmRlZmluZWQiLCJLbm93bGVkZ2VCb3giLCJvbiIsInRyaWdnZXJFdmVudCIsInJlc3BvbnNlIiwiZGF0YSIsInJlYWR5IiwiY3JlYXRlQ2hhdCIsImtiSWQiLCJuYW1lIiwiY2hhdCIsIkNoYXQiLCJ1c2VySWQiLCJzZXNzaW9uV3JhcHBlciIsInNwZWNzIiwia25vd2xlZGdlQm94SWQiLCJwdWJsaXNoIiwic3RhdHVzIiwic2F2ZVNoYXJlZEZvbGRlciIsInNoYXJlZEZvbGRlcnMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmluZCIsImZvbGRlciIsInB1c2giLCJwYXRoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN0b3JlIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsImlzRmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwiUHJlbG9hZFNjcmVlbiIsImhhbmRsZUNsaWNrIiwibWVzc2FnZSIsImNoYXRJZCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwiZ29vZ2xlTG9naW4iLCJldmVudCIsInNpZ25JbldpdGhHb29nbGUiLCJ0b1VwcGVyQ2FzZSIsImxvZ2dlZCIsIm9uQ2xpY2siLCJsb2FkaW5nIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsid2lkZ2V0L3RzL2NvbXBvbmVudHMvZW1wdHktdmlldy50c3giLCJ3aWRnZXQvdHMvY29udHJvbGxlci50cyIsIndpZGdldC90cy9zdG9yZS9pbmRleC50cyIsIndpZGdldC90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=