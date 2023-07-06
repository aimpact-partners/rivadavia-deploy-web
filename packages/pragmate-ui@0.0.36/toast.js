System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.0/hooks", "@beyond-js/reactive@1.0.1/model", "pragmate-ui@0.0.36/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Toasts, ToastTypes, IToast, toast, Toast, __beyond_pkg, hmr;
  _export({
    Toasts: void 0,
    ToastTypes: void 0,
    IToast: void 0,
    toast: void 0,
    Toast: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_beyondJsReact18Widgets100Hooks) {
      dependency_3 = _beyondJsReact18Widgets100Hooks;
    }, function (_beyondJsReactive101Model) {
      dependency_4 = _beyondJsReactive101Model;
    }, function (_pragmateUi0036Icons) {
      dependency_5 = _pragmateUi0036Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.6.2"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-estrada", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/toast"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['pragmate-ui/icons', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/toast');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1361611415,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Toasts = Toasts;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _model = require("./model");
          var _toast = require("./toast");
          /*bundle*/
          function Toasts({
            position = {
              bottom: '1rem',
              right: '1rem'
            },
            className,
            ...props
          }) {
            const [items, setItems] = _react.default.useState([]);
            (0, _hooks.useBinder)([_model.toast], () => setItems(_model.toast.current), 'current-toasts-changed');
            const elements = items.map(item => _react.default.createElement(_toast.Toast, {
              key: item.id,
              ...item
            }));
            return _react.default.createElement("div", {
              style: position,
              className: `essential__toasts ${className}`,
              ...props
            }, elements);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./model
      ***********************/

      ims.set('./model', {
        hash: 1249255664,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.toast = void 0;
          var _model = require("@beyond-js/reactive/model");
          class Toast extends _model.ReactiveModel {
            #current;
            get current() {
              return this.#current;
            }
            set current(newValue) {
              this.#current = newValue;
              this.triggerEvent('current-toasts-changed');
            }
            constructor() {
              super();
              this.#current = [];
            }
            #generateUniqueId() {
              return crypto.getRandomValues(new Uint8Array(16)).toString();
            }
            #add(type, message, duration) {
              const newToast = {
                id: this.#generateUniqueId(),
                message,
                type,
                duration
              };
              this.#current = [...this.#current, newToast];
              this.triggerEvent('current-toasts-changed');
              return newToast.id;
            }
            remove(toastId) {
              this.#current = this.#current.filter(toast => toast.id !== toastId);
              this.triggerEvent('current-toasts-changed');
            }
            success(message, duration) {
              return this.#add('success', message, duration);
            }
            error(message, duration) {
              return this.#add('error', message, duration);
            }
            warning(message, duration) {
              return this.#add('warning', message, duration);
            }
            info(message, duration) {
              return this.#add('info', message, duration);
            }
            loading(message, duration) {
              return this.#add('loading', message, duration);
            }
          }
          /*bundle*/
          const toast = new Toast();
          exports.toast = toast;
        }
      });

      /***********************
      INTERNAL MODULE: ./toast
      ***********************/

      ims.set('./toast', {
        hash: 1200851649,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Toast = Toast;
          var _react = require("react");
          var _model = require("./model");
          var _icons = require("pragmate-ui/icons");
          const DEFAULT_DURATION = 3000;
          const ANIMATION_MARGIN = 300;
          /*bundle*/
          function Toast({
            type,
            message,
            duration,
            id
          }) {
            const toastRef = _react.default.useRef(null);
            _react.default.useEffect(() => {
              if (toastRef.current) {
                toastRef.current.classList.add("enter");
              }
              return () => {
                if (toastRef.current) toastRef.current.classList.remove("enter");
              };
            }, [toastRef.current]);
            _react.default.useEffect(() => {
              duration = duration ?? DEFAULT_DURATION;
              setTimeout(() => {
                toastRef.current.classList.remove("enter");
                toastRef.current.classList.add("exit");
              }, duration);
              const timeout = setTimeout(() => {
                _model.toast.current = _model.toast.current.filter(item => item.id !== id);
              }, duration + ANIMATION_MARGIN);
              return () => clearTimeout(timeout);
            }, [duration, id]);
            const icons = {
              error: "triangle-exclamation",
              success: "tickCircle",
              info: "infoCircle",
              loading: "refreshCircle",
              warning: "warning"
            };
            return _react.default.createElement("article", {
              ref: toastRef,
              className: `toast ${type}`
            }, _react.default.createElement(_icons.Icon, {
              icon: icons[type],
              className: "icon"
            }), _react.default.createElement("p", {
              className: "message"
            }, message));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Toasts",
        "name": "Toasts"
      }, {
        "im": "./model",
        "from": "ToastTypes",
        "name": "ToastTypes"
      }, {
        "im": "./model",
        "from": "IToast",
        "name": "IToast"
      }, {
        "im": "./model",
        "from": "toast",
        "name": "toast"
      }, {
        "im": "./toast",
        "from": "Toast",
        "name": "Toast"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Toasts') && _export("Toasts", Toasts = require ? require('./index').Toasts : value);
        (require || prop === 'ToastTypes') && _export("ToastTypes", ToastTypes = require ? require('./model').ToastTypes : value);
        (require || prop === 'IToast') && _export("IToast", IToast = require ? require('./model').IToast : value);
        (require || prop === 'toast') && _export("toast", toast = require ? require('./model').toast : value);
        (require || prop === 'Toast') && _export("Toast", Toast = require ? require('./toast').Toast : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxDQUFDL0IsT0FBTyxDQUFDa0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO2NBQ3hDLENBQUMsRUFBRWpCLFFBQVEsQ0FBQztjQUVaLE1BQU1tQixPQUFPLEdBQUdELFVBQVUsQ0FBQyxNQUFLO2dCQUM5QnJDLFlBQUssQ0FBQ0MsT0FBTyxHQUFHRCxZQUFLLENBQUNDLE9BQU8sQ0FBQ3NCLE1BQU0sQ0FBRW5CLElBQVksSUFBS0EsSUFBSSxDQUFDRyxFQUFFLEtBQUtBLEVBQUUsQ0FBQztjQUN4RSxDQUFDLEVBQUVZLFFBQVEsR0FBR1ksZ0JBQWdCLENBQUM7Y0FFL0IsT0FBTyxNQUFNUSxZQUFZLENBQUNELE9BQU8sQ0FBQztZQUNwQyxDQUFDLEVBQUUsQ0FBQ25CLFFBQVEsRUFBRVosRUFBRSxDQUFDLENBQUM7WUFDbEIsTUFBTWlDLEtBQUssR0FBRztjQUNaZixLQUFLLEVBQUUsc0JBQXNCO2NBQzdCRCxPQUFPLEVBQUUsWUFBWTtjQUNyQkcsSUFBSSxFQUFFLFlBQVk7Y0FDbEJDLE9BQU8sRUFBRSxlQUFlO2NBQ3hCRixPQUFPLEVBQUU7YUFDVjtZQUNELE9BQ0U1QjtjQUFTMkMsR0FBRyxFQUFFVCxRQUFRO2NBQUV0QyxTQUFTLEVBQUUsU0FBU3VCLElBQUk7WUFBRSxHQUNoRG5CLDZCQUFDNEMsV0FBSTtjQUFDQyxJQUFJLEVBQUVILEtBQUssQ0FBQ3ZCLElBQUksQ0FBQztjQUFFdkIsU0FBUyxFQUFDO1lBQU0sRUFBRyxFQUM1Q0k7Y0FBR0osU0FBUyxFQUFDO1lBQVMsR0FBRXdCLE9BQU8sQ0FBSyxDQUM1QjtVQUVkIiwibmFtZXMiOlsiVG9hc3RzIiwicG9zaXRpb24iLCJib3R0b20iLCJyaWdodCIsImNsYXNzTmFtZSIsInByb3BzIiwiaXRlbXMiLCJzZXRJdGVtcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0b2FzdCIsImN1cnJlbnQiLCJlbGVtZW50cyIsIm1hcCIsIml0ZW0iLCJUb2FzdCIsImtleSIsImlkIiwic3R5bGUiLCJSZWFjdGl2ZU1vZGVsIiwibmV3VmFsdWUiLCJ0cmlnZ2VyRXZlbnQiLCJjb25zdHJ1Y3RvciIsImNyeXB0byIsImdldFJhbmRvbVZhbHVlcyIsIlVpbnQ4QXJyYXkiLCJ0b1N0cmluZyIsInR5cGUiLCJtZXNzYWdlIiwiZHVyYXRpb24iLCJuZXdUb2FzdCIsInJlbW92ZSIsInRvYXN0SWQiLCJmaWx0ZXIiLCJzdWNjZXNzIiwiZXJyb3IiLCJ3YXJuaW5nIiwiaW5mbyIsImxvYWRpbmciLCJleHBvcnRzIiwiREVGQVVMVF9EVVJBVElPTiIsIkFOSU1BVElPTl9NQVJHSU4iLCJ0b2FzdFJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJ0aW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiaWNvbnMiLCJyZWYiLCJJY29uIiwiaWNvbiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29kZS90cy9pbmRleC50c3giLCJjb2RlL3RzL21vZGVsLnRzIiwiY29kZS90cy90b2FzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF19