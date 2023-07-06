System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons", "prism-react-renderer@1.3.5"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, CopyableImplementation, __beyond_pkg, hmr;
  _export("CopyableImplementation", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_pragmateUi0036Icons) {
      dependency_3 = _pragmateUi0036Icons;
    }, function (_prismReactRenderer2) {
      dependency_4 = _prismReactRenderer2;
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
          "vspecifier": "pragmate-ui@0.0.36/copyable-implementation"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['prism-react-renderer', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/copyable-implementation');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1373727334,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CopyableImplementation = CopyableImplementation;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _prismReactRenderer = require("prism-react-renderer");
          /*bundle*/ //import { toast } from 'pragmate-ui/toast';

          function CopyableImplementation({
            children,
            language = "jsx"
          }) {
            function copy() {
              navigator.clipboard.writeText(children);
              //toast.success('Copied implementation');
            }

            return React.createElement("div", {
              className: "copyable-content"
            }, React.createElement("div", {
              className: "code"
            }, React.createElement(_prismReactRenderer.default, {
              ..._prismReactRenderer.defaultProps,
              code: children,
              language: language
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
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "CopyableImplementation",
        "name": "CopyableImplementation"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'CopyableImplementation') && _export("CopyableImplementation", CopyableImplementation = require ? require('./index').CopyableImplementation : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUVBO1VBQ0E7VUFNTyxXQVJQOztVQVFpQixTQUFVQSxzQkFBc0IsQ0FBQztZQUNoREMsUUFBUTtZQUNSQyxRQUFRLEdBQUc7VUFBSyxDQUNWO1lBQ04sU0FBU0MsSUFBSTtjQUNYQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDTCxRQUFRLENBQUM7Y0FDdkM7WUFDRjs7WUFFQSxPQUNFTTtjQUFLQyxTQUFTLEVBQUM7WUFBa0IsR0FDL0JEO2NBQUtDLFNBQVMsRUFBQztZQUFNLEdBQ25CRCxvQkFBQ0UsMkJBQVM7Y0FBQSxHQUFLQyxnQ0FBWTtjQUFFQyxJQUFJLEVBQUVWLFFBQVE7Y0FBRUMsUUFBUSxFQUFFQTtZQUFRLEdBQzVELENBQUM7Y0FBRU0sU0FBUztjQUFFSSxLQUFLO2NBQUVDLE1BQU07Y0FBRUMsWUFBWTtjQUFFQztZQUFhLENBQUUsS0FDekRSO2NBQU1DLFNBQVMsRUFBRUEsU0FBUztjQUFFSSxLQUFLLEVBQUVBO1lBQUssR0FDckNDLE1BQU0sQ0FBQ0csR0FBRyxDQUFDLENBQUNDLElBQUksRUFBRUMsQ0FBQyxLQUNsQlg7Y0FBQSxHQUFTTyxZQUFZLENBQUM7Z0JBQUVHLElBQUk7Z0JBQUVFLEdBQUcsRUFBRUQ7Y0FBQyxDQUFFO1lBQUMsR0FDcENELElBQUksQ0FBQ0QsR0FBRyxDQUFDLENBQUNJLEtBQUssRUFBRUQsR0FBRyxLQUNuQlo7Y0FBQSxHQUFVUSxhQUFhLENBQUM7Z0JBQUVLLEtBQUs7Z0JBQUVEO2NBQUcsQ0FBRTtZQUFDLEVBQ3hDLENBQUMsQ0FFTCxDQUFDLENBRUwsQ0FDUyxDQUNSLEVBQ05aLG9CQUFDYyxpQkFBVTtjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDQyxPQUFPLEVBQUVwQixJQUFJO2NBQUVLLFNBQVMsRUFBQztZQUFhLEVBQUcsQ0FDN0Q7VUFFViIsIm5hbWVzIjpbIkNvcHlhYmxlSW1wbGVtZW50YXRpb24iLCJjaGlsZHJlbiIsImxhbmd1YWdlIiwiY29weSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsIlJlYWN0IiwiY2xhc3NOYW1lIiwiSGlnaGxpZ2h0IiwiZGVmYXVsdFByb3BzIiwiY29kZSIsInN0eWxlIiwidG9rZW5zIiwiZ2V0TGluZVByb3BzIiwiZ2V0VG9rZW5Qcm9wcyIsIm1hcCIsImxpbmUiLCJpIiwia2V5IiwidG9rZW4iLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19