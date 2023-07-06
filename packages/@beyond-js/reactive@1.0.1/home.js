System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.0/page", "@beyond-js/reactive@1.0.1/model", "@beyond-js/reactive@1.0.1/examples/models", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.0/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, Page, Item, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Page: void 0,
    Item: void 0
  });
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets100Page) {
      dependency_3 = _beyondJsReact18Widgets100Page;
    }, function (_beyondJsReactive101Model) {
      dependency_4 = _beyondJsReactive101Model;
    }, function (_beyondJsReactive101ExamplesModels) {
      dependency_5 = _beyondJsReactive101ExamplesModels;
    }, function (_react) {
      dependency_6 = _react;
    }, function (_beyondJsReact18Widgets100Hooks) {
      dependency_7 = _beyondJsReact18Widgets100Hooks;
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
          "vspecifier": "@beyond-js/reactive@1.0.1/home"
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/reactive/examples/models', dependency_5], ['react', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "home-page-reactive",
        "vspecifier": "@beyond-js/reactive@1.0.1/home",
        "is": "page",
        "route": "/home-reactive"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond-js/reactive@1.0.1/home');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1218204421,
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
            get Widget() {
              return _views.Page;
            }
            #store;
            createStore(language) {
              this.#store = new _store.Store();
              return this.#store;
            }
            show() {
              // const user = new User(1);
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 422378181,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Store = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _models = require("@beyond-js/reactive/examples/models");
          class Store extends _model.ReactiveModel {
            #list;
            get list() {
              return this.#list;
            }
            #users;
            get users() {
              return this.#users;
            }
            constructor() {
              super();
              this.#users = new _models.Users();
              // this.#users.setOffline(true);
              this.#users.on('change', this.triggerEvent.bind(this));
              this.load();
            }
            async load() {
              await this.#users.load();
              this.ready = true;
            }
            async deleteUser(id) {
              const user = new _models.User({
                id
              });
              await user.load();
              await user.delete();
              this.triggerEvent();
            }
            async deleteItems(ids) {
              await this.#users.delete(ids);
              this.triggerEvent();
            }
          }
          exports.Store = Store;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 675274807,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTestContext = exports.TestContext = void 0;
          var React = require("react");
          const TestContext = React.createContext({});
          exports.TestContext = TestContext;
          const useTestContext = () => React.useContext(TestContext);
          exports.useTestContext = useTestContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1731185938,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _items = require("./items");
          var _context = require("./context");
          /*bundle*/
          function Page({
            store
          }) {
            const ref = React.useRef(null);
            const [ready, setReady] = React.useState(false);
            const [selected, setSelected] = React.useState(new Set());
            const [count, setCount] = React.useState(store.users?.items?.length ?? 0);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setCount(store.users?.items?.length ?? 0);
            });
            if (!ready) return React.createElement("div", null, "cargando....");
            const onCheck = event => {
              if (!event.currentTarget) return;
              const {
                value
              } = event.currentTarget;
              setSelected(prev => new Set(prev.add(value)));
            };
            const onToggle = event => {
              const newset = new Set();
              if (selected.size === store.users.items.length) {
                setSelected(newset);
                return;
              }
              store.users.items.forEach(user => newset.add(user.id.toString()));
              setSelected(newset);
            };
            const users = store.users.items.map(user => React.createElement(_items.Item, {
              data: user,
              key: user.id
            }));
            const onBulkDelete = event => {
              event.stopPropagation();
              store.deleteItems(Array.from(selected));
            };
            const props = {
              disabled: selected.size === 0
            };
            return React.createElement(_context.TestContext.Provider, {
              value: {
                total: store.users.items?.length,
                totalSelected: selected.size,
                selected,
                onCheck,
                store
              }
            }, React.createElement("div", {
              className: 'page__container'
            }, React.createElement("header", null, React.createElement("h1", null, "P\u00E1gina de prueba")), React.createElement("button", {
              onClick: onToggle
            }, "Select all"), React.createElement("button", {
              ref: ref,
              onClick: onBulkDelete,
              ...props
            }, "Eliminar"), React.createElement("ul", null, users)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/items
      *****************************/

      ims.set('./views/items', {
        hash: 2440342923,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function Item({
            data
          }) {
            const {
              selected,
              onCheck,
              store
            } = (0, _context.useTestContext)();
            function onDelete(e) {
              e.preventDefault();
              e.stopPropagation();
              store.deleteUser(data.id);
            }
            if (data.isDeleted) return null;
            const attrs = {
              checked: selected.has(data.id.toString())
            };
            return React.createElement("li", null, React.createElement("input", {
              type: "checkbox",
              ...attrs,
              onChange: onCheck,
              value: data.id
            }), React.createElement("div", null, data.name), React.createElement("section", null, React.createElement("button", {
              onClick: onDelete
            }, "delete")));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "Page",
        "name": "Page"
      }, {
        "im": "./views/items",
        "from": "Item",
        "name": "Item"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Page') && _export("Page", Page = require ? require('./views/index').Page : value);
        (require || prop === 'Item') && _export("Item", Item = require ? require('./views/items').Item : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q25CLElBQUksQ0FBQ3BDLEVBQUUsQ0FBQ2lDLFFBQVEsRUFBRTtZQUFDLENBQUU7WUFFM0QsT0FDQzFCLGdDQUNDQTtjQUFPaUQsSUFBSSxFQUFDLFVBQVU7Y0FBQSxHQUFLSCxLQUFLO2NBQUVJLFFBQVEsRUFBRWxDLE9BQU87Y0FBRUcsS0FBSyxFQUFFVSxJQUFJLENBQUNwQztZQUFFLEVBQUksRUFDdkVPLGlDQUFNNkIsSUFBSSxDQUFDc0IsSUFBSSxDQUFPLEVBQ3RCbkQscUNBQ0NBO2NBQVF5QyxPQUFPLEVBQUVDO1lBQVEsWUFBaUIsQ0FDakMsQ0FDTjtVQUVQIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJQYWdlIiwiY3JlYXRlU3RvcmUiLCJsYW5ndWFnZSIsIlN0b3JlIiwic2hvdyIsImV4cG9ydHMiLCJSZWFjdGl2ZU1vZGVsIiwibGlzdCIsInVzZXJzIiwiY29uc3RydWN0b3IiLCJVc2VycyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiYmluZCIsImxvYWQiLCJyZWFkeSIsImRlbGV0ZVVzZXIiLCJpZCIsInVzZXIiLCJVc2VyIiwiZGVsZXRlIiwiZGVsZXRlSXRlbXMiLCJpZHMiLCJUZXN0Q29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVRlc3RDb250ZXh0IiwidXNlQ29udGV4dCIsInN0b3JlIiwicmVmIiwidXNlUmVmIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJTZXQiLCJjb3VudCIsInNldENvdW50IiwiaXRlbXMiLCJsZW5ndGgiLCJvbkNoZWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJwcmV2IiwiYWRkIiwib25Ub2dnbGUiLCJuZXdzZXQiLCJzaXplIiwiZm9yRWFjaCIsInRvU3RyaW5nIiwibWFwIiwiSXRlbSIsImRhdGEiLCJrZXkiLCJvbkJ1bGtEZWxldGUiLCJzdG9wUHJvcGFnYXRpb24iLCJBcnJheSIsImZyb20iLCJwcm9wcyIsImRpc2FibGVkIiwiUHJvdmlkZXIiLCJ0b3RhbCIsInRvdGFsU2VsZWN0ZWQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwib25EZWxldGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJpc0RlbGV0ZWQiLCJhdHRycyIsImNoZWNrZWQiLCJoYXMiLCJ0eXBlIiwib25DaGFuZ2UiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvc3RvcmUudHMiLCJ0cy92aWV3cy9jb250ZXh0LnRzIiwidHMvdmlld3MvaW5kZXgudHN4IiwidHMvdmlld3MvaXRlbXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=