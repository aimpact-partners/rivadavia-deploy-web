System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/spinner", "pragmate-ui@0.0.36/ripple"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Button, Checkbox, Form, Input, Radio, Switch, Textarea, __beyond_pkg, hmr;
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['pragmate-ui/spinner', dependency_3], ['pragmate-ui/ripple', dependency_4]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkVlLElBQUksSUFBSTtjQUNQLE9BQU9uQixVQUFVLENBQUNtQixJQUFJLENBQUM7WUFDekIsQ0FBQyxDQUNGO1lBRUQsT0FDRTVCO2NBQUtaLFNBQVMsRUFBRTJCO1lBQUcsR0FDakJmLDBDQUNFQTtjQUNFYixHQUFHLEVBQUV5RCxLQUFLO2NBQUEsR0FDTm5DLFVBQVU7Y0FDZGEsSUFBSSxFQUFFcEMsS0FBSyxDQUFDb0MsSUFBSTtjQUNoQkMsUUFBUSxFQUFFRyxZQUFZO2NBQ3RCbUIsS0FBSyxFQUFFLE9BQU8zRCxLQUFLLENBQUMyRCxLQUFLLEtBQUssV0FBVyxHQUFHM0QsS0FBSyxDQUFDMkQsS0FBSyxHQUFHckIsS0FBSyxDQUFDcUIsS0FBSztjQUNyRWlCLFdBQVcsRUFBRTVFLEtBQUssQ0FBQzRFLFdBQVcsSUFBSTtZQUFHLEVBQ3JDLEVBQ0Q1RSxLQUFLLENBQUNNLFFBQVEsRUFDZG1FLEtBQUssRUFDTHpFLEtBQUssQ0FBQ0ssS0FBSyxJQUFJUztjQUFPZ0MsT0FBTyxFQUFFOUMsS0FBSyxDQUFDNkM7WUFBRSxHQUFHN0MsS0FBSyxDQUFDSyxLQUFLLENBQVMsRUFDOURMLEtBQUssQ0FBQzJFLFFBQVEsSUFDYjdEO2NBQU1aLFNBQVMsRUFBQztZQUE4QixTQUMvQyxDQUNBLENBQ0M7VUFFViIsIm5hbWVzIjpbIkJ1dHRvbiIsInByb3BzIiwicmVmIiwiY2xhc3NOYW1lIiwib25DbGljayIsImRhdGEiLCJsYWJlbCIsImNoaWxkcmVuIiwiaWNvbiIsImxvYWRpbmciLCJmZXRjaGluZyIsInZhcmlhbnQiLCJib3JkZXJlZCIsImRpc2FibGVkIiwib3RoZXJQcm9wcyIsIlJlYWN0IiwidXNlUmVmIiwib25DbGlja0J1dHRvbiIsImV2ZW50IiwidXNlRWZmZWN0IiwicmlwcGxlIiwiUmlwcGxlRWZmZWN0IiwiYWRkIiwiY3VycmVudCIsInByb3BlcnRpZXMiLCJ0eXBlIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJlbnRyeSIsImNscyIsIkljb24iLCJTcGlubmVyIiwiYWN0aXZlIiwiZXhwb3J0cyIsIkNoZWNrYm94IiwiY2hlY2tlZCIsIm5hbWUiLCJvbkNoYW5nZSIsInN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJhc3NpZ24iLCJwcm9wIiwic3R5bGUiLCJkaXNwbGF5IiwiaWQiLCJodG1sRm9yIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwicG9pbnRzIiwiRm9ybSIsIm9uU3VibWl0IiwicmVzdFByb3BzIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJJbnB1dCIsImlucHV0IiwidmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJsZW5ndGhNZXNzYWdlIiwiZW1wdHlNZXNzYWdlIiwiX2hhc0Vycm9yIiwidGFyZ2V0IiwiZ2V0RXJyb3IiLCJoYXNFcnJvciIsIm1heCIsInBhcnNlRmxvYXQiLCJwYXJzZUludCIsImNoYW5nZVR5cGUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImVycm9yIiwicGFzc3dvcmQiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwiY29sb3IiLCJjb2xvclNwaW5uZXIiLCJJY29uQnV0dG9uIiwiUmFkaW8iLCJTd2l0Y2giLCJoYW5kbGVDbGljayIsIlRleHRhcmVhIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2J1dHRvbi50c3giLCJjb2RlL3RzL2NoZWNrYm94LnRzeCIsImNvZGUvdHMvZm9ybS50c3giLCJjb2RlL3RzL2lucHV0LnRzeCIsImNvZGUvdHMvcmFkaW8udHN4IiwiY29kZS90cy9zd2l0Y2gudHN4IiwiY29kZS90cy90ZXh0YXJlYS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=