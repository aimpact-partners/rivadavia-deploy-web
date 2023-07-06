System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.0/hooks", "@beyond-js/reactive@1.0.1/model", "pragmate-ui@0.0.36/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Toasts, ToastTypes, IToast, toast, Toast, __beyond_pkg, hmr;
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
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsReact18Widgets100Hooks) {
      dependency_2 = _beyondJsReact18Widgets100Hooks;
    }, function (_beyondJsReactive101Model) {
      dependency_3 = _beyondJsReactive101Model;
    }, function (_pragmateUi0036Icons) {
      dependency_4 = _pragmateUi0036Icons;
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
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/react-18-widgets/hooks', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['pragmate-ui/icons', dependency_4]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsQ0FBQy9CLE9BQU8sQ0FBQ2tDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztjQUN4QyxDQUFDLEVBQUVqQixRQUFRLENBQUM7Y0FFWixNQUFNbUIsT0FBTyxHQUFHRCxVQUFVLENBQUMsTUFBSztnQkFDOUJyQyxZQUFLLENBQUNDLE9BQU8sR0FBR0QsWUFBSyxDQUFDQyxPQUFPLENBQUNzQixNQUFNLENBQUVuQixJQUFZLElBQUtBLElBQUksQ0FBQ0csRUFBRSxLQUFLQSxFQUFFLENBQUM7Y0FDeEUsQ0FBQyxFQUFFWSxRQUFRLEdBQUdZLGdCQUFnQixDQUFDO2NBRS9CLE9BQU8sTUFBTVEsWUFBWSxDQUFDRCxPQUFPLENBQUM7WUFDcEMsQ0FBQyxFQUFFLENBQUNuQixRQUFRLEVBQUVaLEVBQUUsQ0FBQyxDQUFDO1lBQ2xCLE1BQU1pQyxLQUFLLEdBQUc7Y0FDWmYsS0FBSyxFQUFFLHNCQUFzQjtjQUM3QkQsT0FBTyxFQUFFLFlBQVk7Y0FDckJHLElBQUksRUFBRSxZQUFZO2NBQ2xCQyxPQUFPLEVBQUUsZUFBZTtjQUN4QkYsT0FBTyxFQUFFO2FBQ1Y7WUFDRCxPQUNFNUI7Y0FBUzJDLEdBQUcsRUFBRVQsUUFBUTtjQUFFdEMsU0FBUyxFQUFFLFNBQVN1QixJQUFJO1lBQUUsR0FDaERuQiw2QkFBQzRDLFdBQUk7Y0FBQ0MsSUFBSSxFQUFFSCxLQUFLLENBQUN2QixJQUFJLENBQUM7Y0FBRXZCLFNBQVMsRUFBQztZQUFNLEVBQUcsRUFDNUNJO2NBQUdKLFNBQVMsRUFBQztZQUFTLEdBQUV3QixPQUFPLENBQUssQ0FDNUI7VUFFZCIsIm5hbWVzIjpbIlRvYXN0cyIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJjbGFzc05hbWUiLCJwcm9wcyIsIml0ZW1zIiwic2V0SXRlbXMiLCJSZWFjdCIsInVzZVN0YXRlIiwidG9hc3QiLCJjdXJyZW50IiwiZWxlbWVudHMiLCJtYXAiLCJpdGVtIiwiVG9hc3QiLCJrZXkiLCJpZCIsInN0eWxlIiwiUmVhY3RpdmVNb2RlbCIsIm5ld1ZhbHVlIiwidHJpZ2dlckV2ZW50IiwiY29uc3RydWN0b3IiLCJjcnlwdG8iLCJnZXRSYW5kb21WYWx1ZXMiLCJVaW50OEFycmF5IiwidG9TdHJpbmciLCJ0eXBlIiwibWVzc2FnZSIsImR1cmF0aW9uIiwibmV3VG9hc3QiLCJyZW1vdmUiLCJ0b2FzdElkIiwiZmlsdGVyIiwic3VjY2VzcyIsImVycm9yIiwid2FybmluZyIsImluZm8iLCJsb2FkaW5nIiwiZXhwb3J0cyIsIkRFRkFVTFRfRFVSQVRJT04iLCJBTklNQVRJT05fTUFSR0lOIiwidG9hc3RSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0IiwidGltZW91dCIsImNsZWFyVGltZW91dCIsImljb25zIiwicmVmIiwiSWNvbiIsImljb24iXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvaW5kZXgudHN4IiwiY29kZS90cy9tb2RlbC50cyIsImNvZGUvdHMvdG9hc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdfQ==