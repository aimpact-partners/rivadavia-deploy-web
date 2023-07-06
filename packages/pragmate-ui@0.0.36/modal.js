System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, AlertModal, ConfirmModal, Modal, __beyond_pkg, hmr;
  _export({
    AlertModal: void 0,
    ConfirmModal: void 0,
    Modal: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi0036Form) {
      dependency_2 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Icons) {
      dependency_3 = _pragmateUi0036Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_4 = _beyondJsKernel019Styles;
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
          "vspecifier": "pragmate-ui@0.0.36/modal"
        },
        "type": "code",
        "name": "modal"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/form', dependency_2], ['pragmate-ui/icons', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/modal');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./alert
      ***********************/
      ims.set('./alert', {
        hash: 1674043790,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AlertModal = AlertModal;
          var _react = require("react");
          var _modal = require("./modal");
          var _form = require("pragmate-ui/form");
          /*bundle*/
          function AlertModal(props) {
            const [state, setState] = _react.default.useState({
              fetching: false
            });
            const close = event => {
              setState({
                fetching: true
              });
              if (props.onConfirm) props.onConfirm();
              setState({
                fetching: false
              });
              if (props.onClose) props.onClose();
            };
            const {
              text,
              title,
              btn,
              centered
            } = props;
            let btnLabel = typeof btn === "string" ? btn : "Confirmar";
            let cls = `beyond-alert-dialog${centered ? " beyond-alert-dialog-centered" : ""}`;
            if (props.className) cls += ` ${props.className}`;
            let clsCancel = "btn btn-default btn-cancel";
            if (btn && typeof btn === "object") {
              btnLabel = btn.label ?? btn;
              clsCancel = btn.className ?? clsCancel;
            }
            const disabled = {};
            if (state.fetching) disabled.disabled = true;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: cls
            }, _react.default.createElement("div", {
              className: "alert-dialog-content"
            }, title && _react.default.createElement("h3", {
              dangerouslySetInnerHTML: {
                __html: title
              }
            }), text && _react.default.createElement("div", {
              dangerouslySetInnerHTML: {
                __html: text
              }
            }), props.children ? props.children : null), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_form.Button, {
              className: clsCancel,
              label: btnLabel,
              onClick: close,
              ...disabled
            })));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./children
      **************************/

      ims.set('./children', {
        hash: 283074475,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBeyondModalContext = exports.Children = exports.BeyondModalContext = void 0;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          const BeyondModalContext = (0, React.createContext)({});
          exports.BeyondModalContext = BeyondModalContext;
          const useBeyondModalContext = () => (0, React.useContext)(BeyondModalContext);
          exports.useBeyondModalContext = useBeyondModalContext;
          const Children = ({
            children,
            close,
            dismiss
          }) => {
            const output = [];
            if (dismiss !== false) {
              output.push(React.createElement(_icons.IconButton, {
                className: "close-icon",
                onClick: close,
                "data-dismiss": "modal",
                "aria-label": "Close",
                key: "dismiss-button",
                icon: "close"
              }));
            }
            const childrenWithProps = React.Children.map(children, child => {
              // checking isValidElement is the safe way and avoids a typescript error too
              if ((0, React.isValidElement)(child)) {
                const specs = {};
                //TODO: check a official way to check the children type
                return (0, React.cloneElement)(child, specs);
              }
              return child;
            });
            output.push(childrenWithProps);
            return React.createElement(BeyondModalContext.Provider, {
              value: {
                close,
                dismiss
              }
            }, output);
          };
          exports.Children = Children;
        }
      });

      /*************************
      INTERNAL MODULE: ./confirm
      *************************/

      ims.set('./confirm', {
        hash: 4022228035,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmModal = void 0;
          var React = require("react");
          var _form = require("pragmate-ui/form");
          var _modal = require("./modal");
          /*bundle*/
          const ConfirmModal = properties => {
            const [state, setState] = React.useState({
              fetching: false
            });
            const process = async event => {
              event.stopPropagation();
              setState({
                fetching: true
              });
              const {
                onConfirm,
                onClose
              } = properties;
              if (!onConfirm) {
                console.warn("there is no confirm funciton defined");
                setState({
                  fetching: false
                });
                return;
              }
              await onConfirm();
              setState({
                fetching: false
              });
            };
            const {
              text,
              title,
              btn,
              onCancel,
              centered,
              onConfirm,
              btnConfirm,
              btnCancel
            } = properties;
            let cls = `beyond-confirm-dialog${centered ? " beyond-confirm-dialog-centered" : ""}`;
            if (properties.className) cls += ` ${properties.className}`;
            const props = Object.assign({}, properties);
            ["text", "title", "className", "centering", "btnCancel", "btnConfirm", "onCancel"].forEach(prop => delete props[prop]);
            let cancelLabel = "Cancelar";
            let confirmLabel = "Confirmar";
            let clsCancel = "btn btn-default btn-cancel";
            let clsConfirm = "btn btn-primary btn-confirm";
            if (btnConfirm && typeof btnConfirm === "object") {
              confirmLabel = btnConfirm.label ? btnConfirm.label : btn;
              clsConfirm = btnConfirm.className ? btnConfirm.className : clsConfirm;
            }
            if (btnCancel && typeof btnCancel === "object") {
              cancelLabel = btnCancel.label ? btnCancel.label : btn;
              clsCancel = btnCancel.className ? btnCancel.className : clsCancel;
            }
            const disabled = {};
            if (state.fetching) disabled.disabled = true;
            return React.createElement(_modal.Modal, {
              show: true,
              className: cls,
              onClose: onCancel
            }, React.createElement("div", {
              className: "confirm-dialog-content"
            }, title && React.createElement("h3", null, title), text && React.createElement("div", null, text), properties.children), React.createElement("div", {
              className: "actions"
            }, React.createElement(_form.Button, {
              className: clsCancel,
              label: cancelLabel,
              ...disabled,
              onClick: onCancel
            }), React.createElement(_form.Button, {
              className: clsConfirm,
              label: confirmLabel,
              ...disabled,
              onClick: process
            })));
          };
          exports.ConfirmModal = ConfirmModal;
        }
      });

      /***********************
      INTERNAL MODULE: ./modal
      ***********************/

      ims.set('./modal', {
        hash: 866306233,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Modal = Modal;
          var React = require("react");
          var _children = require("./children");
          /*bundle*/
          function Modal(props) {
            const [state, setState] = (0, React.useState)({
              show: props?.show ?? false,
              closeClicked: false,
              container: null
            });
            const modal = (0, React.useRef)(null);
            const close = async event => {
              if (event) event.stopPropagation();
              const {
                onClose
              } = props;
              const body = document.querySelector('body');
              modal.current.classList.add('modal-hidden');
              window.setTimeout(async () => {
                setState({
                  ...state,
                  show: false,
                  closeClicked: true
                });
                body.setAttribute('style', '');
                body.classList.remove('body-custom-modal-opened');
                onClose(event);
              }, 300);
            };
            const onClickBackdrop = event => {
              event.stopPropagation();
              close(event);
            };
            const show = state.show;
            let cls = 'pragmate-modal ';
            cls += props.className ? props.className : '';
            if (show) cls += ' show-modal';
            const output = [];
            if (show) {
              output.push(React.createElement("div", {
                key: "modal-content-wrapper",
                className: "modal-wrapper"
              }, React.createElement("div", {
                className: "modal-content",
                onClick: event => {
                  event.stopPropagation();
                }
              }, React.createElement(_children.Children, {
                ...props,
                close: close,
                key: "children-content"
              }))));
            }
            return React.createElement("div", {
              ref: modal,
              onClick: onClickBackdrop,
              className: cls
            }, output);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./alert",
        "from": "AlertModal",
        "name": "AlertModal"
      }, {
        "im": "./confirm",
        "from": "ConfirmModal",
        "name": "ConfirmModal"
      }, {
        "im": "./modal",
        "from": "Modal",
        "name": "Modal"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AlertModal') && _export("AlertModal", AlertModal = require ? require('./alert').AlertModal : value);
        (require || prop === 'ConfirmModal') && _export("ConfirmModal", ConfirmModal = require ? require('./confirm').ConfirmModal : value);
        (require || prop === 'Modal') && _export("Modal", Modal = require ? require('./modal').Modal : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLEVBQUU7WUFFN0MsSUFBSUssSUFBSSxFQUFFTixHQUFHLElBQUksYUFBYTtZQUM5QixNQUFNaUIsTUFBTSxHQUFHLEVBQUU7WUFFakIsSUFBSVgsSUFBSSxFQUFFO2NBQ1RXLE1BQU0sQ0FBQ0MsSUFBSSxDQUNWOUI7Z0JBQUtnQyxHQUFHLEVBQUMsdUJBQXVCO2dCQUFDbkIsU0FBUyxFQUFDO2NBQWUsR0FDekRiO2dCQUNDYSxTQUFTLEVBQUMsZUFBZTtnQkFDekJVLE9BQU8sRUFBRW5CLEtBQUssSUFBRztrQkFDaEJBLEtBQUssQ0FBQ3VDLGVBQWUsRUFBRTtnQkFDeEI7Y0FBQyxHQUVEM0Msb0JBQUMyQixrQkFBUTtnQkFBQSxHQUFLOUIsS0FBSztnQkFBRU0sS0FBSyxFQUFFQSxLQUFLO2dCQUFFNkIsR0FBRyxFQUFDO2NBQWtCLEVBQUcsQ0FDdkQsQ0FDRCxDQUNOOztZQUdGLE9BQ0NoQztjQUFLc0UsR0FBRyxFQUFFWixLQUFLO2NBQUVuQyxPQUFPLEVBQUU4QyxlQUFlO2NBQUV4RCxTQUFTLEVBQUVEO1lBQUcsR0FDdkRpQixNQUFNLENBQ0Y7VUFFUiIsIm5hbWVzIjpbIkFsZXJ0TW9kYWwiLCJwcm9wcyIsInN0YXRlIiwic2V0U3RhdGUiLCJSZWFjdCIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJjbG9zZSIsImV2ZW50Iiwib25Db25maXJtIiwib25DbG9zZSIsInRleHQiLCJ0aXRsZSIsImJ0biIsImNlbnRlcmVkIiwiYnRuTGFiZWwiLCJjbHMiLCJjbGFzc05hbWUiLCJjbHNDYW5jZWwiLCJsYWJlbCIsImRpc2FibGVkIiwiTW9kYWwiLCJzaG93IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjaGlsZHJlbiIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJCZXlvbmRNb2RhbENvbnRleHQiLCJleHBvcnRzIiwidXNlQmV5b25kTW9kYWxDb250ZXh0IiwiQ2hpbGRyZW4iLCJkaXNtaXNzIiwib3V0cHV0IiwicHVzaCIsIkljb25CdXR0b24iLCJrZXkiLCJpY29uIiwiY2hpbGRyZW5XaXRoUHJvcHMiLCJtYXAiLCJjaGlsZCIsInNwZWNzIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIkNvbmZpcm1Nb2RhbCIsInByb3BlcnRpZXMiLCJwcm9jZXNzIiwic3RvcFByb3BhZ2F0aW9uIiwiY29uc29sZSIsIndhcm4iLCJvbkNhbmNlbCIsImJ0bkNvbmZpcm0iLCJidG5DYW5jZWwiLCJPYmplY3QiLCJhc3NpZ24iLCJmb3JFYWNoIiwicHJvcCIsImNhbmNlbExhYmVsIiwiY29uZmlybUxhYmVsIiwiY2xzQ29uZmlybSIsImNsb3NlQ2xpY2tlZCIsImNvbnRhaW5lciIsIm1vZGFsIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIiwib25DbGlja0JhY2tkcm9wIiwicmVmIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2FsZXJ0LnRzeCIsImNvZGUvdHMvY2hpbGRyZW4udHN4IiwiY29kZS90cy9jb25maXJtLnRzeCIsImNvZGUvdHMvbW9kYWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF19