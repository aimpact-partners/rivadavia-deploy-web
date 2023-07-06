System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.36/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Alert, __beyond_pkg, hmr;
  _export("Alert", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_2 = _pragmateUi0036Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_3 = _beyondJsKernel019Styles;
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
          "vspecifier": "pragmate-ui@0.0.36/alert"
        },
        "type": "code",
        "name": "alert"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/alert');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./alert
      ***********************/
      ims.set('./alert', {
        hash: 514420927,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Alert = Alert;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function Alert(props) {
            const {
              message,
              show,
              className,
              mode,
              title,
              isClose,
              children
            } = props;
            const [state, setState] = _react.default.useState({
              show: show ?? false,
              text: message ?? 'texto de la alerta'
            });
            _react.default.useEffect(() => {
              setState({
                ...state,
                show: show
              });
            }, [show]);
            if (!state.show) return null;
            const close = () => setState({
              ...state,
              show: false,
              text: ''
            });
            const cls = className ? `${className} alert ${mode ?? 'success'}` : `alert ${mode ?? 'success'}`;
            const icons = {
              error: 'error',
              warning: 'circle-exclamation',
              success: 'circle-check',
              info: 'info'
            };
            const defaulIcon = icons[mode ?? 'success'];
            return _react.default.createElement("div", {
              className: cls,
              onClick: close
            }, ' ', title && _react.default.createElement("div", {
              className: 'alert__title'
            }, _react.default.createElement(_icons.Icon, {
              icon: defaulIcon
            }), ' ', _react.default.createElement("span", {
              className: 'alert__title-span',
              dangerouslySetInnerHTML: {
                __html: title
              }
            })), children, message && _react.default.createElement("span", {
              dangerouslySetInnerHTML: {
                __html: message
              }
            }), isClose && _react.default.createElement(_icons.IconButton, {
              icon: 'close',
              onClick: close
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./alert",
        "from": "Alert",
        "name": "Alert"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Alert') && _export("Alert", Alert = require ? require('./alert').Alert : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFnQk87VUFBVSxTQUNSQSxLQUFLLENBQUNDLEtBQWE7WUFDM0IsTUFBTTtjQUFFQyxPQUFPO2NBQUVDLElBQUk7Y0FBRUMsU0FBUztjQUFFQyxJQUFJO2NBQUVDLEtBQUs7Y0FBRUMsT0FBTztjQUFFQztZQUFRLENBQUUsR0FBR1AsS0FBSztZQUMxRSxNQUFNLENBQUNRLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdDLGNBQUssQ0FBQ0MsUUFBUSxDQUFDO2NBQ3hDVCxJQUFJLEVBQUVBLElBQUksSUFBSSxLQUFLO2NBQ25CVSxJQUFJLEVBQUVYLE9BQU8sSUFBSTthQUNqQixDQUFDO1lBQ0ZTLGNBQUssQ0FBQ0csU0FBUyxDQUFDLE1BQUs7Y0FDcEJKLFFBQVEsQ0FBQztnQkFBRSxHQUFHRCxLQUFLO2dCQUFFTixJQUFJLEVBQUVBO2NBQUksQ0FBRSxDQUFDO1lBQ25DLENBQUMsRUFBRSxDQUFDQSxJQUFJLENBQUMsQ0FBQztZQUNWLElBQUksQ0FBQ00sS0FBSyxDQUFDTixJQUFJLEVBQUUsT0FBTyxJQUFJO1lBQzVCLE1BQU1ZLEtBQUssR0FBRyxNQUFZTCxRQUFRLENBQUM7Y0FBRSxHQUFHRCxLQUFLO2NBQUVOLElBQUksRUFBRSxLQUFLO2NBQUVVLElBQUksRUFBRTtZQUFFLENBQUUsQ0FBQztZQUN2RSxNQUFNRyxHQUFHLEdBQVdaLFNBQVMsR0FBRyxHQUFHQSxTQUFTLFVBQVVDLElBQUksSUFBSSxTQUFTLEVBQUUsR0FBRyxTQUFTQSxJQUFJLElBQUksU0FBUyxFQUFFO1lBRXhHLE1BQU1ZLEtBQUssR0FBWTtjQUN0QkMsS0FBSyxFQUFFLE9BQU87Y0FDZEMsT0FBTyxFQUFFLG9CQUFvQjtjQUM3QkMsT0FBTyxFQUFFLGNBQWM7Y0FDdkJDLElBQUksRUFBRTthQUNOO1lBRUQsTUFBTUMsVUFBVSxHQUFHTCxLQUFLLENBQUNaLElBQUksSUFBSSxTQUFTLENBQUM7WUFFM0MsT0FDQ007Y0FBS1AsU0FBUyxFQUFFWSxHQUFHO2NBQUVPLE9BQU8sRUFBRVI7WUFBSyxHQUNqQyxHQUFHLEVBQ0hULEtBQUssSUFDTEs7Y0FBS1AsU0FBUyxFQUFDO1lBQWMsR0FDNUJPLDZCQUFDYSxXQUFJO2NBQUNDLElBQUksRUFBRUg7WUFBVSxFQUFJLEVBQUMsR0FBRyxFQUM5Qlg7Y0FBTVAsU0FBUyxFQUFDLG1CQUFtQjtjQUFDc0IsdUJBQXVCLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRXJCO2NBQUs7WUFBRSxFQUFJLENBRW5GLEVBQ0FFLFFBQVEsRUFDUk4sT0FBTyxJQUFJUztjQUFNZSx1QkFBdUIsRUFBRTtnQkFBRUMsTUFBTSxFQUFFekI7Y0FBTztZQUFFLEVBQVMsRUFDdEVLLE9BQU8sSUFBSUksNkJBQUNpQixpQkFBVTtjQUFDSCxJQUFJLEVBQUMsT0FBTztjQUFDRixPQUFPLEVBQUVSO1lBQUssRUFBSSxDQUNsRDtVQUVSIiwibmFtZXMiOlsiQWxlcnQiLCJwcm9wcyIsIm1lc3NhZ2UiLCJzaG93IiwiY2xhc3NOYW1lIiwibW9kZSIsInRpdGxlIiwiaXNDbG9zZSIsImNoaWxkcmVuIiwic3RhdGUiLCJzZXRTdGF0ZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0ZXh0IiwidXNlRWZmZWN0IiwiY2xvc2UiLCJjbHMiLCJpY29ucyIsImVycm9yIiwid2FybmluZyIsInN1Y2Nlc3MiLCJpbmZvIiwiZGVmYXVsSWNvbiIsIm9uQ2xpY2siLCJJY29uIiwiaWNvbiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiSWNvbkJ1dHRvbiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29kZS90cy9hbGVydC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=