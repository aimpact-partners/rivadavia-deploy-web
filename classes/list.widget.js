System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.0/page", "@beyond-js/reactive@1.0.1/model", "@aimpact/chat-api@1.0.0/entities/models", "react@18.2.0", "pragmate-ui@0.0.36/spinner", "pragmate-ui@0.0.36/empty", "@aimpact/ailearn-estrada@0.0.2/shared/hooks", "@aimpact/ailearn-estrada@0.0.2/shared/components", "@beyond-js/react-18-widgets@1.0.0/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets100Page) {
      dependency_3 = _beyondJsReact18Widgets100Page;
    }, function (_beyondJsReactive101Model) {
      dependency_4 = _beyondJsReactive101Model;
    }, function (_aimpactChatApi100EntitiesModels) {
      dependency_5 = _aimpactChatApi100EntitiesModels;
    }, function (_react) {
      dependency_6 = _react;
    }, function (_pragmateUi0036Spinner) {
      dependency_7 = _pragmateUi0036Spinner;
    }, function (_pragmateUi0036Empty) {
      dependency_8 = _pragmateUi0036Empty;
    }, function (_aimpactAilearnEstrada002SharedHooks) {
      dependency_9 = _aimpactAilearnEstrada002SharedHooks;
    }, function (_aimpactAilearnEstrada002SharedComponents) {
      dependency_10 = _aimpactAilearnEstrada002SharedComponents;
    }, function (_beyondJsReact18Widgets100Hooks) {
      dependency_11 = _beyondJsReact18Widgets100Hooks;
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
          "vspecifier": "@aimpact/ailearn-estrada@0.0.2/classes/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-api/entities/models', dependency_5], ['react', dependency_6], ['pragmate-ui/spinner', dependency_7], ['pragmate-ui/empty', dependency_8], ['@aimpact/ailearn-estrada/shared/hooks', dependency_9], ['@aimpact/ailearn-estrada/shared/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classes-list",
        "vspecifier": "@aimpact/ailearn-estrada@0.0.2/classes/list.widget",
        "is": "page",
        "route": "/classes/list",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-estrada@0.0.2/classes/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3389289793,
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
              this.#store.load();
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 843758602,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _models = require("@aimpact/chat-api/entities/models");
          class StoreManager extends _model.ReactiveModel {
            #collection;
            get collection() {
              return this.#collection;
            }
            constructor() {
              super();
            }
            async load() {
              this.#collection = new _models.Classes();
              await this.#collection.load();
              this.ready = true;
              console.log(2, this.ready);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 183374129,
        creator: function (require, exports) {
          "use strict";

          var React = require("react");
          const ListContext = React.createContext({});
          const useListContext = () => React.useContext(ListContext);
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 283657426,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyElements = EmptyElements;
          var React = require("react");
          var _empty = require("pragmate-ui/empty");
          /* import { Link } from 'pragmate-ui/components'; */
          function EmptyElements({
            items
          }) {
            return React.createElement(_empty.Empty, null);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3892208095,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@aimpact/ailearn-estrada/shared/hooks");
          var _components = require("@aimpact/ailearn-estrada/shared/components");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!textsReady) {
              return React.createElement(_components.PreloadScreen, null);
            }
            const panes = Array.from({
              length: 25
            }, (_, i) => ({
              tab: `Tab N${i}`,
              content: React.createElement("h1", null, i)
            }));
            return React.createElement("div", null, React.createElement(_components.Tab, {
              panes: panes
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/item
      ****************************/

      ims.set('./views/item', {
        hash: 2571830131,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          function Item({
            data
          }) {
            return React.createElement("section", null, React.createElement("h3", null, data.name));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/list
      ****************************/

      ims.set('./views/list', {
        hash: 377756798,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _loading = require("./loading");
          var _route = require("./route");
          var _empty = require("./empty");
          function List({
            model
          }) {
            const [ready, setReady] = React.useState(model.ready);
            const [fetching, setFetching] = React.useState(false);
            const [items, setItems] = React.useState([]);
            const [total, setTotal] = React.useState(0);
            (0, _hooks.useBinder)([model], () => {
              setFetching(model.fetching || model.ready);
              setReady(model.ready);
              setItems(model.items);
              setTotal(model.items.length);
            });
            if (!ready) return React.createElement(_loading.Loading, null);
            const Control = total > 0 ? React.createElement(_route.Route, {
              items: items
            }) : React.createElement(_empty.EmptyElements, null);
            return React.createElement("div", null, React.createElement("h1", null, "Classes"), Control);
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/loading
      *******************************/

      ims.set('./views/loading', {
        hash: 4184403491,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Loading = Loading;
          var React = require("react");
          var _spinner = require("pragmate-ui/spinner");
          function Loading() {
            return React.createElement("div", {
              className: 'loading__container'
            }, React.createElement(_spinner.Spinner, null));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/route
      *****************************/

      ims.set('./views/route', {
        hash: 1563297621,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Route = Route;
          var React = require("react");
          var _item = require("./item");
          function Route({
            items
          }) {
            return items.map((item, index) => {
              React.createElement(_item.Item, {
                data: item,
                key: index
              });
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDSCIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJleHBvcnRzIiwiUmVhY3RpdmVNb2RlbCIsImNvbGxlY3Rpb24iLCJjb25zdHJ1Y3RvciIsIkNsYXNzZXMiLCJyZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJMaXN0Q29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIkVtcHR5RWxlbWVudHMiLCJpdGVtcyIsIkVtcHR5Iiwic3RvcmUiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJQcmVsb2FkU2NyZWVuIiwicGFuZXMiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaSIsInRhYiIsImNvbnRlbnQiLCJUYWIiLCJJdGVtIiwiZGF0YSIsIm5hbWUiLCJMaXN0IiwibW9kZWwiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldEl0ZW1zIiwidG90YWwiLCJzZXRUb3RhbCIsIkxvYWRpbmciLCJDb250cm9sIiwiUm91dGUiLCJjbGFzc05hbWUiLCJTcGlubmVyIiwibWFwIiwiaXRlbSIsImluZGV4Iiwia2V5Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ3aWRnZXQvdHMvY29udHJvbGxlci50cyIsIndpZGdldC90cy9zdG9yZS9pbmRleC50cyIsIndpZGdldC90cy92aWV3cy9jb250ZXh0LnRzeCIsIndpZGdldC90cy92aWV3cy9lbXB0eS50c3giLCJ3aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2l0ZW0udHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2xpc3QudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2xvYWRpbmcudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL3JvdXRlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=