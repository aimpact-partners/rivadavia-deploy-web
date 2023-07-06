System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons", "prism-react-renderer@1.3.5", "pragmate-ui@0.0.36/toast", "pragmate-ui@0.0.36/tabs"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, ImplementationResult, __beyond_pkg, hmr;
  _export("ImplementationResult", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_3 = _pragmateUi0036Icons;
    }, function (_prismReactRenderer2) {
      dependency_4 = _prismReactRenderer2;
    }, function (_pragmateUi0036Toast) {
      dependency_5 = _pragmateUi0036Toast;
    }, function (_pragmateUi0036Tabs) {
      dependency_6 = _pragmateUi0036Tabs;
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
          "vspecifier": "pragmate-ui@0.0.36/implementation-result"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['prism-react-renderer', dependency_4], ['pragmate-ui/toast', dependency_5], ['pragmate-ui/tabs', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/implementation-result');
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./code
      **********************/
      ims.set('./code', {
        hash: 3784215103,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CopyableImplementation = CopyableImplementation;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _prismReactRenderer = require("prism-react-renderer");
          var _toast = require("pragmate-ui/toast");
          function CopyableImplementation({
            code
          }) {
            function copy() {
              navigator.clipboard.writeText(code);
              _toast.toast.success("Copied implementation");
            }
            return React.createElement("div", {
              className: "copyable-content"
            }, React.createElement("div", {
              className: "code"
            }, React.createElement(_prismReactRenderer.default, {
              ..._prismReactRenderer.defaultProps,
              code: code,
              language: "jsx"
            }, ({
              className,
              style,
              tokens,
              getLineProps,
              getTokenProps
            }) => React.createElement("code", {
              className: className,
              style: style
            }, tokens.map((line, i) => React.createElement("div", {
              ...getLineProps({
                line,
                key: i
              })
            }, line.map((token, key) => React.createElement("span", {
              ...getTokenProps({
                token,
                key
              })
            }))))))), React.createElement(_icons.IconButton, {
              icon: "copy",
              onClick: copy,
              className: "copy-button"
            }));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./view
      **********************/

      ims.set('./view', {
        hash: 2333378681,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ImplementationResult = ImplementationResult;
          var _react = require("react");
          var _tabs = require("pragmate-ui/tabs");
          var _icons = require("pragmate-ui/icons");
          var _code = require("./code");
          /*bundle*/
          function ImplementationResult({
            code,
            children
          }) {
            const [tab, setTab] = _react.default.useState(0);
            return _react.default.createElement(_tabs.BeyondTabs, {
              selected: tab
            }, _react.default.createElement(_tabs.Tabs, {
              selected: tab
            }, _react.default.createElement(_icons.IconButton, {
              "data-tooltip": "Result",
              className: "tooltip",
              icon: "result",
              onClick: () => setTab(0)
            }), _react.default.createElement(_icons.IconButton, {
              "data-tooltip": "Code",
              className: "tooltip",
              icon: "code",
              onClick: () => setTab(1)
            })), _react.default.createElement(_tabs.TabsContent, null, children, _react.default.createElement(_code.CopyableImplementation, {
              code: code
            })));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./view",
        "from": "ImplementationResult",
        "name": "ImplementationResult"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ImplementationResult') && _export("ImplementationResult", ImplementationResult = require ? require('./view').ImplementationResult : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUNBO1VBQ0E7VUFDTSxTQUFVQSxzQkFBc0IsQ0FBQztZQUFFQztVQUFJLENBQUU7WUFDN0MsU0FBU0MsSUFBSTtjQUNYQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDSixJQUFJLENBQUM7Y0FDbkNLLFlBQUssQ0FBQ0MsT0FBTyxDQUFDLHVCQUF1QixDQUFDO1lBQ3hDO1lBRUEsT0FDRUM7Y0FBS0MsU0FBUyxFQUFDO1lBQWtCLEdBQy9CRDtjQUFLQyxTQUFTLEVBQUM7WUFBTSxHQUNuQkQsb0JBQUNFLDJCQUFTO2NBQUEsR0FBS0MsZ0NBQVk7Y0FBRVYsSUFBSSxFQUFFQSxJQUFJO2NBQUVXLFFBQVEsRUFBQztZQUFLLEdBQ3BELENBQUM7Y0FBRUgsU0FBUztjQUFFSSxLQUFLO2NBQUVDLE1BQU07Y0FBRUMsWUFBWTtjQUFFQztZQUFhLENBQUUsS0FDekRSO2NBQU1DLFNBQVMsRUFBRUEsU0FBUztjQUFFSSxLQUFLLEVBQUVBO1lBQUssR0FDckNDLE1BQU0sQ0FBQ0csR0FBRyxDQUFDLENBQUNDLElBQUksRUFBRUMsQ0FBQyxLQUNsQlg7Y0FBQSxHQUFTTyxZQUFZLENBQUM7Z0JBQUVHLElBQUk7Z0JBQUVFLEdBQUcsRUFBRUQ7Y0FBQyxDQUFFO1lBQUMsR0FDcENELElBQUksQ0FBQ0QsR0FBRyxDQUFDLENBQUNJLEtBQUssRUFBRUQsR0FBRyxLQUNuQlo7Y0FBQSxHQUFVUSxhQUFhLENBQUM7Z0JBQUVLLEtBQUs7Z0JBQUVEO2NBQUcsQ0FBRTtZQUFDLEVBQ3hDLENBQUMsQ0FFTCxDQUFDLENBRUwsQ0FDUyxDQUNSLEVBQ05aLG9CQUFDYyxpQkFBVTtjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDQyxPQUFPLEVBQUV0QixJQUFJO2NBQUVPLFNBQVMsRUFBQztZQUFhLEVBQUcsQ0FDN0Q7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkE7VUFDQTtVQUNBO1VBQ0E7VUFDTztVQUFVLFNBQVVnQixvQkFBb0IsQ0FBQztZQUM5Q3hCLElBQUk7WUFDSnlCO1VBQVEsQ0FDNEI7WUFDcEMsTUFBTSxDQUFDQyxHQUFHLEVBQUVDLE1BQU0sQ0FBQyxHQUFHcEIsY0FBSyxDQUFDcUIsUUFBUSxDQUFTLENBQUMsQ0FBQztZQUMvQyxPQUNFckIsNkJBQUNzQixnQkFBVTtjQUFDQyxRQUFRLEVBQUVKO1lBQUcsR0FDdkJuQiw2QkFBQ3dCLFVBQUk7Y0FBQ0QsUUFBUSxFQUFFSjtZQUFHLEdBQ2pCbkIsNkJBQUNjLGlCQUFVO2NBQUEsZ0JBQ0ksUUFBUTtjQUNyQmIsU0FBUyxFQUFDLFNBQVM7Y0FDbkJjLElBQUksRUFBQyxRQUFRO2NBQ2JDLE9BQU8sRUFBRSxNQUFNSSxNQUFNLENBQUMsQ0FBQztZQUFDLEVBQ3hCLEVBQ0ZwQiw2QkFBQ2MsaUJBQVU7Y0FBQSxnQkFDSSxNQUFNO2NBQ25CYixTQUFTLEVBQUMsU0FBUztjQUNuQmMsSUFBSSxFQUFDLE1BQU07Y0FDWEMsT0FBTyxFQUFFLE1BQU1JLE1BQU0sQ0FBQyxDQUFDO1lBQUMsRUFDeEIsQ0FDRyxFQUNQcEIsNkJBQUN5QixpQkFBVyxRQUNUUCxRQUFRLEVBQ1RsQiw2QkFBQ1IsNEJBQXNCO2NBQUNDLElBQUksRUFBRUE7WUFBSSxFQUFJLENBQzFCLENBQ0g7VUFFakIiLCJuYW1lcyI6WyJDb3B5YWJsZUltcGxlbWVudGF0aW9uIiwiY29kZSIsImNvcHkiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJSZWFjdCIsImNsYXNzTmFtZSIsIkhpZ2hsaWdodCIsImRlZmF1bHRQcm9wcyIsImxhbmd1YWdlIiwic3R5bGUiLCJ0b2tlbnMiLCJnZXRMaW5lUHJvcHMiLCJnZXRUb2tlblByb3BzIiwibWFwIiwibGluZSIsImkiLCJrZXkiLCJ0b2tlbiIsIkljb25CdXR0b24iLCJpY29uIiwib25DbGljayIsIkltcGxlbWVudGF0aW9uUmVzdWx0IiwiY2hpbGRyZW4iLCJ0YWIiLCJzZXRUYWIiLCJ1c2VTdGF0ZSIsIkJleW9uZFRhYnMiLCJzZWxlY3RlZCIsIlRhYnMiLCJUYWJzQ29udGVudCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29kZS90cy9jb2RlLnRzeCIsImNvZGUvdHMvdmlldy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==