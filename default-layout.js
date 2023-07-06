System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.0/base", "@beyond-js/reactive@1.0.1/model", "@aimpact/chat-api@1.0.0/entities/models", "@aimpact/ailearn-estrada@0.0.2/wrapper", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
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
          "vspecifier": "@aimpact/ailearn-estrada@0.0.2/default-layout"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/chat-api/entities/models', dependency_4], ['@aimpact/ailearn-estrada/wrapper', dependency_5], ['react', dependency_6]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "default-layout",
        "vspecifier": "@aimpact/ailearn-estrada@0.0.2/default-layout",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-estrada@0.0.2/default-layout');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2747796075,
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
        hash: 2937223359,
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
        hash: 1012068149,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = void 0;
          var _react = require("react");
          const Layout = ({
            store
          }) => {
            return _react.default.createElement("beyond-layout-children", null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBQ0E7VUFFTztVQUFVLE1BQ1hBLFVBQVcsU0FBUUMsMkJBQXFCO1lBQzdDLE1BQU07WUFDTkMsV0FBVztjQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSUMsMEJBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBQ0EsSUFBSUMsTUFBTTtjQUNULE9BQU9DLGNBQU07WUFDZDs7VUFDQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQ7VUFFQTtVQU9NLE1BQU9ILFlBQWEsU0FBUUksb0JBQXFCO1lBQ3RELElBQUlDLElBQUk7Y0FDUDtZQUNEO1lBRUFDO2NBQ0MsS0FBSyxFQUFFO2NBQ1BDLG1CQUFVLENBQUNDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7WUFDM0M7WUFDQUMsT0FBTztjQUNOLE9BQU9ILG1CQUFVLENBQUNJLEtBQUs7WUFDeEI7O1VBQ0FSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCRDtVQUtPLE1BQU1ELE1BQU0sR0FBYSxDQUFDO1lBQUNVO1VBQUssQ0FBUyxLQUFJO1lBQ25ELE9BQU9DLDREQUEwQjtVQUNsQyxDQUFDO1VBQUNWIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiZXhwb3J0cyIsIlJlYWN0aXZlTW9kZWwiLCJ1c2VyIiwiY29uc3RydWN0b3IiLCJBcHBXcmFwcGVyIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJpc1JlYWR5IiwicmVhZHkiLCJzdG9yZSIsIlJlYWN0Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvc3RvcmUtbWFuYWdlci50cyIsInRzL3ZpZXcvbGF5b3V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXX0=