System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/toast", "prismjs@1.29.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, CodeBox, Code, InlineCode, __beyond_pkg, hmr;
  _export({
    CodeBox: void 0,
    Code: void 0,
    InlineCode: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_pragmateUi0036Icons) {
      dependency_3 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Toast) {
      dependency_4 = _pragmateUi0036Toast;
    }, function (_prismjs) {
      dependency_5 = _prismjs;
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
          "vspecifier": "pragmate-ui@0.0.36/code"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/toast', dependency_4], ['prismjs', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/code');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./clipboard
      ***************************/
      ims.set('./clipboard', {
        hash: 2409774466,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Clipboard = Clipboard;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _toast = require("pragmate-ui/toast");
          function Clipboard({
            text,
            message
          }) {
            const ref = React.useRef(null);
            const polyfill = text => {
              const textArea = document.createElement("textarea");
              textArea.value = text;
              // Avoid scrolling to bottom
              textArea.style.top = "0";
              textArea.style.left = "0";
              textArea.style.position = "fixed";
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();
              try {
                const successful = document.execCommand("copy");
                const msg = successful ? "successful" : "unsuccessful";
                console.log("Fallback: Copying text command was " + msg);
              } catch (err) {
                console.error("Fallback: Oops, unable to copy", err);
              }
            };
            const onClick = async event => {
              const target = event.currentTarget;
              _toast.toast.info("copied");
              const text = target.dataset.text;
              if (!navigator.clipboard) {
                return polyfill(text);
              }
              try {
                await navigator.clipboard.writeText(text);
                const span = ref.current.querySelector(".action-copied");
                span.classList.add("show");
                window.setTimeout(() => {
                  span.classList.add("hide");
                  window.setTimeout(() => span.classList.remove("show", "hide"), 300);
                }, 500);
              } catch (e) {
                console.log("some error", e);
              }
            };
            return React.createElement("div", {
              className: "clipboard__container",
              "data-text": text,
              ref: ref,
              onClick: onClick
            }, React.createElement(_toast.Toasts, {
              position: {
                bottom: "2rem",
                right: "2rem"
              }
            }), React.createElement(_icons.IconButton, {
              icon: "copy"
            }), React.createElement("span", {
              className: "action-copied"
            }, "Copied"));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./code-box
      **************************/

      ims.set('./code-box', {
        hash: 3460354440,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CodeBox = CodeBox;
          var React = require("react");
          var _code = require("./code");
          var _clipboard = require("./clipboard");
          /*bundle*/
          function CodeBox({
            title,
            language,
            children
          }) {
            return React.createElement("div", {
              className: 'code__box'
            }, React.createElement("header", null, React.createElement("div", {
              className: 'tab active'
            }, title), React.createElement(_clipboard.Clipboard, {
              text: children,
              message: ''
            })), React.createElement("section", {
              className: 'box__code'
            }, React.createElement(_code.Code, {
              language: language,
              clipboard: false
            }, children)));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./code
      **********************/

      ims.set('./code', {
        hash: 3186956624,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Code = Code;
          var React = require("react");
          var Prism = require("prismjs");
          var _clipboard = require("./clipboard");
          /*bundle*/
          function Code({
            language = 'typescript',
            children,
            clipboard = true
          }) {
            const createMarkup = () => {
              if (!children) {
                return {
                  __html: ''
                };
              }
              const html = Prism.highlight(children, Prism.languages.javascript, language);
              return {
                __html: html
              };
            };
            const cls = `code-container${clipboard ? ' has-clipboard' : ''}`;
            return React.createElement("div", {
              className: cls
            }, React.createElement("pre", null, React.createElement("code", {
              className: `regular__code language-${language}`,
              dangerouslySetInnerHTML: createMarkup()
            })), clipboard && React.createElement(_clipboard.Clipboard, {
              text: children,
              message: ""
            }));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./inline
      ************************/

      ims.set('./inline', {
        hash: 2676581642,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InlineCode = InlineCode;
          var React = require("react");
          /*bundle*/
          function InlineCode({
            children
          }) {
            return React.createElement("code", {
              className: "inline__code"
            }, children);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./code-box",
        "from": "CodeBox",
        "name": "CodeBox"
      }, {
        "im": "./code",
        "from": "Code",
        "name": "Code"
      }, {
        "im": "./inline",
        "from": "InlineCode",
        "name": "InlineCode"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'CodeBox') && _export("CodeBox", CodeBox = require ? require('./code-box').CodeBox : value);
        (require || prop === 'Code') && _export("Code", Code = require ? require('./code').Code : value);
        (require || prop === 'InlineCode') && _export("InlineCode", InlineCode = require ? require('./inline').InlineCode : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBQ0E7VUFFTSxTQUFVQSxTQUFTLENBQUM7WUFBRUMsSUFBSTtZQUFFQztVQUFPLENBQUU7WUFDekMsTUFBTUMsR0FBRyxHQUFHQyxLQUFLLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDOUIsTUFBTUMsUUFBUSxHQUFJTCxJQUFJLElBQUk7Y0FDeEIsTUFBTU0sUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUM7Y0FDbkRGLFFBQVEsQ0FBQ0csS0FBSyxHQUFHVCxJQUFJO2NBRXJCO2NBQ0FNLFFBQVEsQ0FBQ0ksS0FBSyxDQUFDQyxHQUFHLEdBQUcsR0FBRztjQUN4QkwsUUFBUSxDQUFDSSxLQUFLLENBQUNFLElBQUksR0FBRyxHQUFHO2NBQ3pCTixRQUFRLENBQUNJLEtBQUssQ0FBQ0csUUFBUSxHQUFHLE9BQU87Y0FFakNOLFFBQVEsQ0FBQ08sSUFBSSxDQUFDQyxXQUFXLENBQUNULFFBQVEsQ0FBQztjQUNuQ0EsUUFBUSxDQUFDVSxLQUFLLEVBQUU7Y0FDaEJWLFFBQVEsQ0FBQ1csTUFBTSxFQUFFO2NBRWpCLElBQUk7Z0JBQ0YsTUFBTUMsVUFBVSxHQUFHWCxRQUFRLENBQUNZLFdBQVcsQ0FBQyxNQUFNLENBQUM7Z0JBQy9DLE1BQU1DLEdBQUcsR0FBR0YsVUFBVSxHQUFHLFlBQVksR0FBRyxjQUFjO2dCQUN0REcsT0FBTyxDQUFDQyxHQUFHLENBQUMscUNBQXFDLEdBQUdGLEdBQUcsQ0FBQztlQUN6RCxDQUFDLE9BQU9HLEdBQUcsRUFBRTtnQkFDWkYsT0FBTyxDQUFDRyxLQUFLLENBQUMsZ0NBQWdDLEVBQUVELEdBQUcsQ0FBQzs7WUFFeEQsQ0FBQztZQUNELE1BQU1FLE9BQU8sR0FBRyxNQUFPQyxLQUFLLElBQUk7Y0FDOUIsTUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNFLGFBQWE7Y0FDbENDLFlBQUssQ0FBQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQztjQUNwQixNQUFNOUIsSUFBSSxHQUFHMkIsTUFBTSxDQUFDSSxPQUFPLENBQUMvQixJQUFJO2NBQ2hDLElBQUksQ0FBQ2dDLFNBQVMsQ0FBQ0MsU0FBUyxFQUFFO2dCQUN4QixPQUFPNUIsUUFBUSxDQUFDTCxJQUFJLENBQUM7O2NBRXZCLElBQUk7Z0JBQ0YsTUFBTWdDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTLENBQUNsQyxJQUFJLENBQUM7Z0JBQ3pDLE1BQU1tQyxJQUFJLEdBQUdqQyxHQUFHLENBQUNrQyxPQUFPLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDeERGLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO2dCQUMxQkMsTUFBTSxDQUFDQyxVQUFVLENBQUMsTUFBSztrQkFDckJOLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO2tCQUMxQkMsTUFBTSxDQUFDQyxVQUFVLENBQUMsTUFBTU4sSUFBSSxDQUFDRyxTQUFTLENBQUNJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDO2dCQUNyRSxDQUFDLEVBQUUsR0FBRyxDQUFDO2VBQ1IsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1Z0QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLEVBQUVxQixDQUFDLENBQUM7O1lBRWhDLENBQUM7WUFFRCxPQUNFeEM7Y0FDRXlDLFNBQVMsRUFBQyxzQkFBc0I7Y0FBQSxhQUNyQjVDLElBQUk7Y0FDZkUsR0FBRyxFQUFFQSxHQUFHO2NBQ1J1QixPQUFPLEVBQUVBO1lBQU8sR0FFaEJ0QixvQkFBQzBDLGFBQU07Y0FDTGhDLFFBQVEsRUFBRTtnQkFDUmlDLE1BQU0sRUFBRSxNQUFNO2dCQUNkQyxLQUFLLEVBQUU7O1lBQ1IsRUFDRCxFQUNGNUMsb0JBQUM2QyxpQkFBVTtjQUFDQyxJQUFJLEVBQUM7WUFBTSxFQUFHLEVBQzFCOUM7Y0FBTXlDLFNBQVMsRUFBQztZQUFlLFlBQWMsQ0FDekM7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoRUE7VUFDQTtVQUNBO1VBRU87VUFBVSxTQUFVTSxPQUFPLENBQUM7WUFBRUMsS0FBSztZQUFFQyxRQUFRO1lBQUVDO1VBQVEsQ0FBRTtZQUM1RCxPQUNJbEQ7Y0FBS3lDLFNBQVMsRUFBQztZQUFXLEdBQ3RCekMsb0NBQ0lBO2NBQUt5QyxTQUFTLEVBQUM7WUFBWSxHQUFFTyxLQUFLLENBQU8sRUFDekNoRCxvQkFBQ0osb0JBQVM7Y0FBQ0MsSUFBSSxFQUFFcUQsUUFBUTtjQUFFcEQsT0FBTyxFQUFDO1lBQUUsRUFBRyxDQUNuQyxFQUNURTtjQUFTeUMsU0FBUyxFQUFDO1lBQVcsR0FDMUJ6QyxvQkFBQ21ELFVBQUk7Y0FBQ0YsUUFBUSxFQUFFQSxRQUFRO2NBQUVuQixTQUFTLEVBQUU7WUFBSyxHQUNyQ29CLFFBQVEsQ0FDTixDQUNELENBQ1I7VUFFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkE7VUFDQTtVQUNBO1VBRU87VUFBVSxTQUFVQyxJQUFJLENBQUM7WUFBRUYsUUFBUSxHQUFHLFlBQVk7WUFBRUMsUUFBUTtZQUFFcEIsU0FBUyxHQUFHO1VBQUksQ0FBRTtZQUN0RixNQUFNc0IsWUFBWSxHQUFHLE1BQUs7Y0FDekIsSUFBSSxDQUFDRixRQUFRLEVBQUU7Z0JBQ2QsT0FBTztrQkFBRUcsTUFBTSxFQUFFO2dCQUFFLENBQUU7O2NBRXRCLE1BQU1DLElBQUksR0FBR0MsS0FBSyxDQUFDQyxTQUFTLENBQUNOLFFBQVEsRUFBRUssS0FBSyxDQUFDRSxTQUFTLENBQUNDLFVBQVUsRUFBRVQsUUFBUSxDQUFDO2NBQzVFLE9BQU87Z0JBQUVJLE1BQU0sRUFBRUM7Y0FBSSxDQUFFO1lBQ3hCLENBQUM7WUFDRCxNQUFNSyxHQUFHLEdBQUcsaUJBQWlCN0IsU0FBUyxHQUFHLGdCQUFnQixHQUFHLEVBQUUsRUFBRTtZQUNoRSxPQUNDOUI7Y0FBS3lDLFNBQVMsRUFBRWtCO1lBQUcsR0FDbEIzRCxpQ0FDQ0E7Y0FBTXlDLFNBQVMsRUFBRSwwQkFBMEJRLFFBQVEsRUFBRTtjQUFFVyx1QkFBdUIsRUFBRVIsWUFBWTtZQUFFLEVBQUksQ0FDN0YsRUFDTHRCLFNBQVMsSUFBSTlCLG9CQUFDSixvQkFBUztjQUFDQyxJQUFJLEVBQUVxRCxRQUFRO2NBQUVwRCxPQUFPLEVBQUM7WUFBRSxFQUFHLENBQ2pEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJBO1VBRU87VUFBVSxTQUFVK0QsVUFBVSxDQUFDO1lBQUVYO1VBQVEsQ0FBRTtZQUNqRCxPQUFPbEQ7Y0FBTXlDLFNBQVMsRUFBQztZQUFjLEdBQUVTLFFBQVEsQ0FBUTtVQUN4RCIsIm5hbWVzIjpbIkNsaXBib2FyZCIsInRleHQiLCJtZXNzYWdlIiwicmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJwb2x5ZmlsbCIsInRleHRBcmVhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidmFsdWUiLCJzdHlsZSIsInRvcCIsImxlZnQiLCJwb3NpdGlvbiIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImZvY3VzIiwic2VsZWN0Iiwic3VjY2Vzc2Z1bCIsImV4ZWNDb21tYW5kIiwibXNnIiwiY29uc29sZSIsImxvZyIsImVyciIsImVycm9yIiwib25DbGljayIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsInRvYXN0IiwiaW5mbyIsImRhdGFzZXQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzcGFuIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiZSIsImNsYXNzTmFtZSIsIlRvYXN0cyIsImJvdHRvbSIsInJpZ2h0IiwiSWNvbkJ1dHRvbiIsImljb24iLCJDb2RlQm94IiwidGl0bGUiLCJsYW5ndWFnZSIsImNoaWxkcmVuIiwiQ29kZSIsImNyZWF0ZU1hcmt1cCIsIl9faHRtbCIsImh0bWwiLCJQcmlzbSIsImhpZ2hsaWdodCIsImxhbmd1YWdlcyIsImphdmFzY3JpcHQiLCJjbHMiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIklubGluZUNvZGUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NsaXBib2FyZC50c3giLCJ0cy9jb2RlLWJveC50c3giLCJ0cy9jb2RlLnRzeCIsInRzL2lubGluZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=