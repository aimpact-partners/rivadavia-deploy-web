System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/spinner", "pragmate-ui@0.0.36/ripple", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Button, Checkbox, Form, Input, Radio, Switch, Textarea, __beyond_pkg, hmr;
  _export({
    Button: void 0,
    Checkbox: void 0,
    Form: void 0,
    Input: void 0,
    Radio: void 0,
    Switch: void 0,
    Textarea: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_2 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Spinner) {
      dependency_3 = _pragmateUi0036Spinner;
    }, function (_pragmateUi0036Ripple) {
      dependency_4 = _pragmateUi0036Ripple;
    }, function (_beyondJsKernel019Styles) {
      dependency_5 = _beyondJsKernel019Styles;
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
          "vspecifier": "pragmate-ui@0.0.36/form"
        },
        "type": "code",
        "name": "form"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['pragmate-ui/spinner', dependency_3], ['pragmate-ui/ripple', dependency_4], ['@beyond-js/kernel/styles', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/form');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./button
      ************************/
      ims.set('./button', {
        hash: 2041279641,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Button = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _spinner = require("pragmate-ui/spinner");
          var _ripple = require("pragmate-ui/ripple");
          const /*bundle */Button = (0, _react.forwardRef)((props, ref) => {
            const {
              className,
              onClick,
              data,
              label,
              children,
              icon,
              loading,
              fetching = false,
              variant = 'primary',
              bordered = false,
              disabled = false,
              ...otherProps
            } = props;
            if (!ref) ref = _react.default.useRef();
            const onClickButton = event => {
              if (onClick && typeof onClick === 'function') {
                onClick(event);
                return;
              }
            };
            _react.default.useEffect(() => {
              const ripple = new _ripple.RippleEffect();
              ripple.add(ref.current);
            }, []);
            const properties = {
              ...otherProps,
              type: props.type ? props.type : 'button'
            };
            if (data) {
              Object.keys(data).forEach(entry => {
                properties[`data-${entry}`] = data[entry];
              });
            }
            let cls = `pragmate-button btn-${variant}`;
            cls += className ? ` ${className}` : '';
            cls += bordered ? ' outline' : '';
            cls += icon ? ' has-icon' : '';
            return _react.default.createElement("button", {
              ref: ref,
              className: cls,
              onClick: onClickButton,
              disabled: loading || disabled,
              ...properties
            }, icon && _react.default.createElement(_icons.Icon, {
              icon: icon
            }), (label || children) && _react.default.createElement("div", {
              className: `button-label ${loading ? 'loading' : ''}`
            }, label || children), (loading || fetching) && _react.default.createElement(_spinner.Spinner, {
              type: `on-${variant}`,
              active: true
            }));
          });
          exports.Button = Button;
        }
      });

      /**************************
      INTERNAL MODULE: ./checkbox
      **************************/

      ims.set('./checkbox', {
        hash: 3112645513,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Checkbox = void 0;
          var React = require("react");
          /*bundle*/
          const Checkbox = (0, React.forwardRef)((props, ref) => {
            const {
              checked,
              name,
              disabled,
              className,
              onChange,
              label
            } = props;
            const [state, setState] = (0, React.useState)({
              checked: !!checked
            });
            const handleChange = event => {
              setState({
                checked: !checked
              });
              onChange && onChange(event);
            };
            let cls = `pragmate-checkbox ${className ? className : ""}`;
            cls += disabled ? " disabled" : "";
            const properties = Object.assign({}, props);
            ["className", "checked", "name", "onChange"].forEach(prop => {
              delete properties[prop];
            });
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: cls
            }, React.createElement("input", {
              style: {
                display: "none"
              },
              ref: ref,
              type: "checkbox",
              className: "inp-cbx",
              id: name,
              name: name,
              checked: checked ?? state.checked,
              onChange: handleChange,
              ...properties
            }), React.createElement("label", {
              className: "cbx",
              htmlFor: name
            }, React.createElement("span", null, React.createElement("svg", {
              width: "12px",
              height: "9px",
              viewBox: "0 0 12 9"
            }, React.createElement("polyline", {
              points: "1 5 4 8 11 1"
            }))), React.createElement("span", null, label))));
          });
          exports.Checkbox = Checkbox;
        }
      });

      /**********************
      INTERNAL MODULE: ./form
      **********************/

      ims.set('./form', {
        hash: 278710587,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Form = Form;
          var _react = require("react");
          /*bundle*/
          function Form(props) {
            const {
              onSubmit,
              ...restProps
            } = props;
            const handleSubmit = event => {
              event.preventDefault();
              event.stopPropagation();
              props.onSubmit(event);
            };
            return _react.default.createElement("form", {
              onSubmit: handleSubmit,
              ...restProps
            }, props.children);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./input
      ***********************/

      ims.set('./input', {
        hash: 3305850540,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Input = Input;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _spinner = require("pragmate-ui/spinner");
          /*bundle*/
          function Input(props) {
            const input = (0, React.useRef)(null);
            const [state, setState] = (0, React.useState)({
              value: props.value ?? "",
              errorMessage: props.errorMessage ? props.errorMessage : "Formato incorrecto",
              lengthMessage: "Cantidad máxima: ",
              emptyMessage: "Este campo es requerido",
              type: props.type ?? "text"
            });
            const handleChange = event => {
              if (!!props.onChange && typeof props.onChange === "function") props.onChange(event);
              setState({
                ...state,
                _hasError: false,
                value: event.target.value
              });
            };
            const getError = hasError => {
              if (!state._hasError && !hasError) return;
              let errorMessage = state.emptyMessage;
              if (hasError || input.current.value !== "") errorMessage = props.errorMessage ? props.errorMessage : state.errorMessage;
              if (props.max && parseFloat(input.current.value) > parseInt(props.max)) {
                errorMessage = props.lengthMessage ? props.lengthMessage : state.lengthMessage + ` (max ${props.max})`;
              }
              return React.createElement("span", {
                className: "pragmate-element-input-error"
              }, errorMessage);
            };
            const changeType = event => {
              event.stopPropagation();
              const target = event.currentTarget;
              setState({
                ...state,
                type: target.dataset.type
              });
            };
            const error = getError(props.hasError);
            let properties = {
              ...props
            };
            let cls = props.className ? `${props.className} pragmate-element-input` : "pragmate-element-input";
            cls += props.icon || props.loading || props.password || props.required ? " has-icon" : "";
            cls += props.disabled ? " disabled" : "";
            cls += props.hasError ? " error" : "";
            ["className", "hasError", "errorMessage", "children", "icon", "label", "password", "loading", "colorSpinner"].forEach(prop => {
              delete properties[prop];
            });
            return React.createElement("div", {
              className: cls
            }, React.createElement(React.Fragment, null, props.icon && React.createElement(_icons.Icon, {
              icon: props.icon
            }), React.createElement("input", {
              ref: input,
              ...properties,
              name: props.name,
              onChange: handleChange,
              type: state.type,
              value: typeof props.value !== "undefined" ? props.value : state.value,
              placeholder: props.placeholder ?? " ",
              id: props.id ?? props.name
            }), props.children, error, props.label && React.createElement("label", {
              htmlFor: props.id ?? props.name
            }, props.label), props.loading && React.createElement(_spinner.Spinner, {
              color: props.colorSpinner ?? "var(--primary)"
            }), props.password && (state.type === "password" ? React.createElement(_icons.IconButton, {
              onClick: changeType,
              "data-type": "text",
              className: "eye",
              icon: "eye"
            }) : React.createElement(_icons.IconButton, {
              onClick: changeType,
              className: "eye",
              "data-type": "password",
              icon: "eye-slash"
            })), props.required && React.createElement("span", {
              className: "pragmate-input__required-label"
            }, "(*)")));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./radio
      ***********************/

      ims.set('./radio', {
        hash: 1097693139,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Radio = Radio;
          var _react = require("react");
          /*bundle*/
          function Radio(props) {
            const input = (0, _react.useRef)();
            const onClick = event => {
              input.current.checked = true;
              if (!!props.onChange) props.onChange(event);
            };
            const properties = {
              ...props
            };
            delete properties.onChange;
            const cls = `pragmate-element-radio ${properties.className ? properties.className : ""}`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("input", {
              ref: input,
              ...properties,
              type: "radio",
              onChange: onClick
            }), properties.label && _react.default.createElement("label", {
              htmlFor: properties.id
            }, properties.label));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./switch
      ************************/

      ims.set('./switch', {
        hash: 3581251854,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Switch = void 0;
          var React = require("react");
          /*bundle*/
          const Switch = (0, React.forwardRef)((props, ref) => {
            const {
              value,
              checked,
              required,
              name,
              disabled,
              className,
              onChange,
              onClick
            } = props;
            const [state, setState] = (0, React.useState)({
              checked: !!checked
            });
            const handleChange = event => {
              setState({
                checked: !checked
              });
              onChange && onChange(event);
            };
            const handleClick = event => {
              onClick && onClick(event);
            };
            let cls = `pragmate-element-switch ${className ? className : ""}`;
            cls += disabled ? " disabled" : "";
            const properties = Object.assign({}, props);
            ["className", "disabled", "checked", "name", "required", "onChange", "onClick", "value"].forEach(prop => {
              delete properties[prop];
            });
            return React.createElement("div", {
              className: cls,
              onClick: handleClick,
              ...properties
            }, React.createElement("label", {
              className: "switch"
            }, React.createElement("input", {
              ref: ref,
              type: "checkbox",
              required: required,
              name: name,
              value: value,
              checked: checked ?? state.checked,
              disabled: disabled,
              onChange: handleChange,
              placeholder: name
            }), React.createElement("span", {
              className: "slider"
            })));
          });
          exports.Switch = Switch;
        }
      });

      /**************************
      INTERNAL MODULE: ./textarea
      **************************/

      ims.set('./textarea', {
        hash: 3405639640,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Textarea = Textarea;
          var React = require("react");
          /*bundle*/
          function Textarea(props) {
            const input = props.ref ?? (0, React.useRef)();
            const [state, setState] = (0, React.useState)({
              value: props.value ?? "",
              errorMessage: props.errorMessage ? props.errorMessage : "Formato incorrecto",
              lengthMessage: "Cantidad máxima: ",
              emptyMessage: "Este campo es requerido"
            });
            const handleChange = event => {
              if (!!props.onChange && typeof props.onChange === "function") props.onChange(event);
              setState({
                ...state,
                _hasError: false,
                value: event.target.value
              });
            };
            const getError = hasError => {
              if (!state._hasError && !hasError) return;
              let errorMessage = state.emptyMessage;
              if (hasError || input.value !== "") errorMessage = props.errorMessage ? props.errorMessage : state.errorMessage;
              if (props.max && parseFloat(input.value) > parseInt(props.max)) {
                errorMessage = props.lengthMessage ? props.lengthMessage : state.lengthMessage + ` (max ${props.max})`;
              }
              return React.createElement("span", {
                className: "beyond-element-input-error"
              }, errorMessage);
            };
            const error = getError(props.hasError);
            let properties = {
              ...props
            };
            let cls = props.className ? `${props.className} beyond-element-textarea` : "beyond-element-textarea";
            cls += props.disabled ? " disabled" : "";
            cls += props.hasError ? " error" : "";
            ["className", "hasError", "errorMessage", "children", "label"].forEach(prop => {
              delete properties[prop];
            });
            return React.createElement("div", {
              className: cls
            }, React.createElement(React.Fragment, null, React.createElement("textarea", {
              ref: input,
              ...properties,
              name: props.name,
              onChange: handleChange,
              value: typeof props.value !== "undefined" ? props.value : state.value,
              placeholder: props.placeholder ?? " "
            }), props.children, error, props.label && React.createElement("label", {
              htmlFor: props.id
            }, props.label), props.required && React.createElement("span", {
              className: "beyond-input__required-label"
            }, "(*)")));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./button",
        "from": "Button",
        "name": "Button"
      }, {
        "im": "./checkbox",
        "from": "Checkbox",
        "name": "Checkbox"
      }, {
        "im": "./form",
        "from": "Form",
        "name": "Form"
      }, {
        "im": "./input",
        "from": "Input",
        "name": "Input"
      }, {
        "im": "./radio",
        "from": "Radio",
        "name": "Radio"
      }, {
        "im": "./switch",
        "from": "Switch",
        "name": "Switch"
      }, {
        "im": "./textarea",
        "from": "Textarea",
        "name": "Textarea"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Button') && _export("Button", Button = require ? require('./button').Button : value);
        (require || prop === 'Checkbox') && _export("Checkbox", Checkbox = require ? require('./checkbox').Checkbox : value);
        (require || prop === 'Form') && _export("Form", Form = require ? require('./form').Form : value);
        (require || prop === 'Input') && _export("Input", Input = require ? require('./input').Input : value);
        (require || prop === 'Radio') && _export("Radio", Radio = require ? require('./radio').Radio : value);
        (require || prop === 'Switch') && _export("Switch", Switch = require ? require('./switch').Switch : value);
        (require || prop === 'Textarea') && _export("Textarea", Textarea = require ? require('./textarea').Textarea : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNuRWUsSUFBSSxJQUFJO2NBQ1AsT0FBT25CLFVBQVUsQ0FBQ21CLElBQUksQ0FBQztZQUN6QixDQUFDLENBQ0Y7WUFFRCxPQUNFNUI7Y0FBS1osU0FBUyxFQUFFMkI7WUFBRyxHQUNqQmYsMENBQ0VBO2NBQ0ViLEdBQUcsRUFBRXlELEtBQUs7Y0FBQSxHQUNObkMsVUFBVTtjQUNkYSxJQUFJLEVBQUVwQyxLQUFLLENBQUNvQyxJQUFJO2NBQ2hCQyxRQUFRLEVBQUVHLFlBQVk7Y0FDdEJtQixLQUFLLEVBQUUsT0FBTzNELEtBQUssQ0FBQzJELEtBQUssS0FBSyxXQUFXLEdBQUczRCxLQUFLLENBQUMyRCxLQUFLLEdBQUdyQixLQUFLLENBQUNxQixLQUFLO2NBQ3JFaUIsV0FBVyxFQUFFNUUsS0FBSyxDQUFDNEUsV0FBVyxJQUFJO1lBQUcsRUFDckMsRUFDRDVFLEtBQUssQ0FBQ00sUUFBUSxFQUNkbUUsS0FBSyxFQUNMekUsS0FBSyxDQUFDSyxLQUFLLElBQUlTO2NBQU9nQyxPQUFPLEVBQUU5QyxLQUFLLENBQUM2QztZQUFFLEdBQUc3QyxLQUFLLENBQUNLLEtBQUssQ0FBUyxFQUM5REwsS0FBSyxDQUFDMkUsUUFBUSxJQUNiN0Q7Y0FBTVosU0FBUyxFQUFDO1lBQThCLFNBQy9DLENBQ0EsQ0FDQztVQUVWIiwibmFtZXMiOlsiQnV0dG9uIiwicHJvcHMiLCJyZWYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZGF0YSIsImxhYmVsIiwiY2hpbGRyZW4iLCJpY29uIiwibG9hZGluZyIsImZldGNoaW5nIiwidmFyaWFudCIsImJvcmRlcmVkIiwiZGlzYWJsZWQiLCJvdGhlclByb3BzIiwiUmVhY3QiLCJ1c2VSZWYiLCJvbkNsaWNrQnV0dG9uIiwiZXZlbnQiLCJ1c2VFZmZlY3QiLCJyaXBwbGUiLCJSaXBwbGVFZmZlY3QiLCJhZGQiLCJjdXJyZW50IiwicHJvcGVydGllcyIsInR5cGUiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImVudHJ5IiwiY2xzIiwiSWNvbiIsIlNwaW5uZXIiLCJhY3RpdmUiLCJleHBvcnRzIiwiQ2hlY2tib3giLCJjaGVja2VkIiwibmFtZSIsIm9uQ2hhbmdlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImFzc2lnbiIsInByb3AiLCJzdHlsZSIsImRpc3BsYXkiLCJpZCIsImh0bWxGb3IiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJwb2ludHMiLCJGb3JtIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIklucHV0IiwiaW5wdXQiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImxlbmd0aE1lc3NhZ2UiLCJlbXB0eU1lc3NhZ2UiLCJfaGFzRXJyb3IiLCJ0YXJnZXQiLCJnZXRFcnJvciIsImhhc0Vycm9yIiwibWF4IiwicGFyc2VGbG9hdCIsInBhcnNlSW50IiwiY2hhbmdlVHlwZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZXJyb3IiLCJwYXNzd29yZCIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJjb2xvciIsImNvbG9yU3Bpbm5lciIsIkljb25CdXR0b24iLCJSYWRpbyIsIlN3aXRjaCIsImhhbmRsZUNsaWNrIiwiVGV4dGFyZWEiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvYnV0dG9uLnRzeCIsImNvZGUvdHMvY2hlY2tib3gudHN4IiwiY29kZS90cy9mb3JtLnRzeCIsImNvZGUvdHMvaW5wdXQudHN4IiwiY29kZS90cy9yYWRpby50c3giLCJjb2RlL3RzL3N3aXRjaC50c3giLCJjb2RlL3RzL3RleHRhcmVhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==