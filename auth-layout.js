System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.0/base", "@beyond-js/reactive@1.0.1/model", "@aimpact/chat-api@1.0.0/entities/models", "@aimpact/ailearn-estrada@0.0.2/wrapper", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.0/hooks", "@aimpact/ailearn-estrada@0.0.2/shared/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets100Base) {
      dependency_2 = _beyondJsReact18Widgets100Base;
    }, function (_beyondJsReactive101Model) {
      dependency_3 = _beyondJsReactive101Model;
    }, function (_aimpactChatApi100EntitiesModels) {
      dependency_4 = _aimpactChatApi100EntitiesModels;
    }, function (_aimpactAilearnEstrada002Wrapper) {
      dependency_5 = _aimpactAilearnEstrada002Wrapper;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_beyondJsReact18Widgets100Hooks) {
      dependency_7 = _beyondJsReact18Widgets100Hooks;
    }, function (_aimpactAilearnEstrada002SharedComponents) {
      dependency_8 = _aimpactAilearnEstrada002SharedComponents;
    }, function (_beyondJsKernel019Styles) {
      dependency_9 = _beyondJsKernel019Styles;
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
          "vspecifier": "@aimpact/ailearn-estrada@0.0.2/auth-layout"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/chat-api/entities/models', dependency_4], ['@aimpact/ailearn-estrada/wrapper', dependency_5], ['react', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7], ['@aimpact/ailearn-estrada/shared/components', dependency_8], ['@beyond-js/kernel/styles', dependency_9]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-layout",
        "vspecifier": "@aimpact/ailearn-estrada@0.0.2/auth-layout",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-estrada@0.0.2/auth-layout');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 420276778,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _layout = require("./view/layout");
          var _storeManager = require("./store-manager");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = new _storeManager.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _layout.Layout;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*******************************
      INTERNAL MODULE: ./store-manager
      *******************************/

      ims.set('./store-manager', {
        hash: 1579572739,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _wrapper = require("@aimpact/ailearn-estrada/wrapper");
          class StoreManager extends _model.ReactiveModel {
            get user() {
              return;
            }
            constructor() {
              super();
              //@ts-ignore
              _wrapper.AppWrapper.on('change', this.triggerEvent);
            }
            isReady() {
              return _wrapper.AppWrapper.ready;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./view/layout
      *****************************/

      ims.set('./view/layout', {
        hash: 145637187,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = void 0;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("@aimpact/ailearn-estrada/shared/components");
          const Layout = ({
            store
          }) => {
            const [ready, setReady] = (0, _react.useState)(store.isReady());
            (0, _hooks.useBinder)([store], () => setReady(store.isReady()));
            if (!ready) return _react.default.createElement(_components.PreloadScreen, null);
            return _react.default.createElement("main", null, _react.default.createElement("beyond-layout-children", null));
          };
          exports.Layout = Layout;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBQ0E7VUFFTztVQUFVLE1BQ1hBLFVBQVcsU0FBUUMsMkJBQXFCO1lBQzVDLE1BQU07WUFDTkMsV0FBVztjQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSUMsMEJBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ3BCO1lBQ0EsSUFBSUMsTUFBTTtjQUNSLE9BQU9DLGNBQU07WUFDZjs7VUFDREM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQ7VUFFQTtVQU1NLE1BQU9ILFlBQWEsU0FBUUksb0JBQXFCO1lBQ3RELElBQUlDLElBQUk7Y0FDUDtZQUNEO1lBRUFDO2NBQ0MsS0FBSyxFQUFFO2NBQ1A7Y0FDQUMsbUJBQVUsQ0FBQ0MsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQztZQUMzQztZQUNBQyxPQUFPO2NBQ04sT0FBT0gsbUJBQVUsQ0FBQ0ksS0FBSztZQUN4Qjs7VUFDQVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJEO1VBQ0E7VUFFQTtVQUlPLE1BQU1ELE1BQU0sR0FBYSxDQUFDO1lBQUNVO1VBQUssQ0FBUyxLQUFJO1lBQ25ELE1BQU0sQ0FBQ0QsS0FBSyxFQUFFRSxRQUFRLENBQUMsR0FBRyxtQkFBUSxFQUFDRCxLQUFLLENBQUNGLE9BQU8sRUFBRSxDQUFDO1lBQ25ELG9CQUFTLEVBQUMsQ0FBQ0UsS0FBSyxDQUFDLEVBQUUsTUFBTUMsUUFBUSxDQUFDRCxLQUFLLENBQUNGLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDQyxLQUFLLEVBQUUsT0FBT0csNkJBQUNDLHlCQUFhLE9BQUc7WUFDcEMsT0FDQ0QsMkNBQ0NBLDREQUEwQixDQUNwQjtVQUVULENBQUM7VUFBQ1giLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJMYXlvdXQiLCJleHBvcnRzIiwiUmVhY3RpdmVNb2RlbCIsInVzZXIiLCJjb25zdHJ1Y3RvciIsIkFwcFdyYXBwZXIiLCJvbiIsInRyaWdnZXJFdmVudCIsImlzUmVhZHkiLCJyZWFkeSIsInN0b3JlIiwic2V0UmVhZHkiLCJSZWFjdCIsIlByZWxvYWRTY3JlZW4iXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9zdG9yZS1tYW5hZ2VyLnRzIiwidHMvdmlldy9sYXlvdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdfQ==