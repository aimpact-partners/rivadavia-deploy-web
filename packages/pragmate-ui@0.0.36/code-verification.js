System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, InputCode, __beyond_pkg, hmr;
  _export("InputCode", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
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
          "vspecifier": "pragmate-ui@0.0.36/code-verification"
        },
        "type": "code",
        "name": "code-verification"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/code-verification');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./code-input
      ****************************/
      ims.set('./code-input', {
        hash: 4210698978,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputCode = InputCode;
          var _react = require("react");
          var _input = require("./input");
          const defaultOnCodeFull = () => null;
          /**
           * It's a React component that takes a length prop and an onCodeFull prop. It renders an array of
           * inputs, each of which is limited to one character. When the user enters a character, the component
           * updates the state with the character and focuses the next input. When the user presses backspace,
           * the component removes the last character from the state and focuses the previous input. When the
           * user enters the last character, the component calls the onCodeFull prop with the code as a string.
           * @param {props}  - props
           */
          /*bundle*/
          function InputCode({
            length,
            onCodeFull,
            className,
            onlyNumber,
            reset
          }) {
            const [code, setCode] = (0, _react.useState)([]);
            const refs = (0, _react.useRef)(Array(length));
            const onClean = event => {
              window.setTimeout(() => {
                if (event.which === 8 || event.key?.toLowerCase() === "backspace") {
                  if (code.length) setCode(code.slice(0, code.length - 1));
                  return;
                }
              }, 0);
            };
            const preventDefault = event => {
              const target = event.currentTarget;
              if (target.value.length > 1) {
                target.value = target.value[1];
                event.preventDefault();
                return;
              }
              if (!target.value.match(/\d/g) && onlyNumber) {
                target.value = target.value.replace(/[^0-9.]+/g, "");
                event.preventDefault();
                return;
              }
              setCode(currentCode => [...currentCode, target.value]);
            };
            const setFocus = () => refs.current[code.length]?.focus();
            const cls = className ? `${className} code-inputs` : "code-inputs";
            (0, _react.useEffect)(() => {
              if (refs.current[code.length]) refs.current[code.length].focus();
              onCodeFull(code.join(""));
            }, [code, length]);
            (0, _react.useEffect)(() => {
              setCode([]);
            }, [reset]);
            const output = [...Array(length)].map((_, i) => _react.default.createElement(_input.default, {
              value: code[i] ?? "",
              key: i.toString(),
              ref: el => {
                refs.current[i] = el;
              },
              onChange: preventDefault,
              onKeyDown: onClean,
              onFocus: setFocus
            }));
            return _react.default.createElement("div", {
              className: cls
            }, output);
          }
          InputCode.defaultPros = {
            onCodeFull: defaultOnCodeFull,
            length: 6
          };
        }
      });

      /***********************
      INTERNAL MODULE: ./input
      ***********************/

      ims.set('./input', {
        hash: 340004181,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var React = require("react");
          var _default = (0, React.forwardRef)(function Input(props, ref) {
            const className = (0, React.useMemo)(() => {
              const propsClassName = props.className ?? "";
              const filledClassName = Boolean(String(props.value ?? "").length) ? "filled" : "";
              return `box ${propsClassName} ${filledClassName}`;
            }, [props.value, props.className]);
            return React.createElement("input", {
              ...props,
              maxLength: 1,
              type: "text",
              inputMode: "numeric",
              className: className,
              ref: ref
            });
          });
          exports.default = _default;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./code-input",
        "from": "InputCode",
        "name": "InputCode"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'InputCode') && _export("InputCode", InputCode = require ? require('./code-input').InputCode : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO1lBQUcsRUFDVjtVQUVWLENBQUMsQ0FBQztVQUFBYyIsIm5hbWVzIjpbImRlZmF1bHRPbkNvZGVGdWxsIiwiSW5wdXRDb2RlIiwibGVuZ3RoIiwib25Db2RlRnVsbCIsImNsYXNzTmFtZSIsIm9ubHlOdW1iZXIiLCJyZXNldCIsImNvZGUiLCJzZXRDb2RlIiwicmVmcyIsIkFycmF5Iiwib25DbGVhbiIsImV2ZW50Iiwid2luZG93Iiwic2V0VGltZW91dCIsIndoaWNoIiwia2V5IiwidG9Mb3dlckNhc2UiLCJzbGljZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwibWF0Y2giLCJyZXBsYWNlIiwiY3VycmVudENvZGUiLCJzZXRGb2N1cyIsImN1cnJlbnQiLCJmb2N1cyIsImNscyIsImpvaW4iLCJvdXRwdXQiLCJtYXAiLCJfIiwiaSIsIlJlYWN0IiwiSW5wdXQiLCJ0b1N0cmluZyIsInJlZiIsImVsIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJvbkZvY3VzIiwiZGVmYXVsdFByb3MiLCJwcm9wcyIsInByb3BzQ2xhc3NOYW1lIiwiZmlsbGVkQ2xhc3NOYW1lIiwiQm9vbGVhbiIsIlN0cmluZyIsIm1heExlbmd0aCIsInR5cGUiLCJpbnB1dE1vZGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2NvZGUtaW5wdXQudHN4IiwiY29kZS90cy9pbnB1dC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==