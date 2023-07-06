System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Spinner, __beyond_pkg, hmr;
  _export("Spinner", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
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
          "vspecifier": "pragmate-ui@0.0.36/spinner"
        },
        "type": "code",
        "name": "spinner"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/styles', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/spinner');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./spinner
      *************************/
      ims.set('./spinner', {
        hash: 3687874229,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Spinner = void 0;
          var _react = require("react");
          /*bundle*/
          const Spinner = (0, _react.forwardRef)((props, ref) => {
            let {
              color,
              className,
              size,
              type,
              active
            } = props;
            const types = ["on-primary", "on-secondary", "on-surface", "on-error", "primary", "secondary", "tertiary"];
            const clsType = types.includes(type) ? type : "primary";
            const style = {};
            if (color) style.stroke = color;
            className = `${clsType}${className ? ` ${className}` : ""}`;
            let cls = className ? `${className} pragmate-element-spinner` : "pragmate-element-spinner";
            if (active) cls += " is-active";
            const circleSize = size === "xs" ? 30 : size === "md" ? 40 : size === "lg" ? 50 : size === "xl" ? 60 : 30;
            return _react.default.createElement("div", {
              className: cls,
              ref: ref
            }, _react.default.createElement("svg", {
              viewBox: "0 0 100 100"
            }, _react.default.createElement("circle", {
              cx: "50",
              cy: "50",
              r: circleSize,
              style: style
            })));
          });
          exports.Spinner = Spinner;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./spinner",
        "from": "Spinner",
        "name": "Spinner"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Spinner') && _export("Spinner", Spinner = require ? require('./spinner').Spinner : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQWFPO1VBQ1AsTUFBTUEsT0FBTyxHQUNYLHFCQUFVLEVBQ1IsQ0FBQ0MsS0FBaUIsRUFBRUMsR0FBOEIsS0FBaUI7WUFDakUsSUFBSTtjQUFFQyxLQUFLO2NBQUVDLFNBQVM7Y0FBRUMsSUFBSTtjQUFFQyxJQUFJO2NBQUVDO1lBQU0sQ0FBRSxHQUFHTixLQUFLO1lBRXBELE1BQU1PLEtBQUssR0FBRyxDQUNaLFlBQVksRUFDWixjQUFjLEVBQ2QsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLFVBQVUsQ0FDWDtZQUNELE1BQU1DLE9BQU8sR0FBR0QsS0FBSyxDQUFDRSxRQUFRLENBQUNKLElBQUksQ0FBQyxHQUFHQSxJQUFJLEdBQUcsU0FBUztZQUV2RCxNQUFNSyxLQUFLLEdBQXdCLEVBQUU7WUFDckMsSUFBSVIsS0FBSyxFQUFFUSxLQUFLLENBQUNDLE1BQU0sR0FBR1QsS0FBSztZQUMvQkMsU0FBUyxHQUFHLEdBQUdLLE9BQU8sR0FBR0wsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUMzRCxJQUFJUyxHQUFHLEdBQVdULFNBQVMsR0FDdkIsR0FBR0EsU0FBUywyQkFBMkIsR0FDdkMsMEJBQTBCO1lBQzlCLElBQUlHLE1BQU0sRUFBRU0sR0FBRyxJQUFJLFlBQVk7WUFFL0IsTUFBTUMsVUFBVSxHQUNkVCxJQUFJLEtBQUssSUFBSSxHQUNULEVBQUUsR0FDRkEsSUFBSSxLQUFLLElBQUksR0FDYixFQUFFLEdBQ0ZBLElBQUksS0FBSyxJQUFJLEdBQ2IsRUFBRSxHQUNGQSxJQUFJLEtBQUssSUFBSSxHQUNiLEVBQUUsR0FDRixFQUFFO1lBRVIsT0FDRVU7Y0FBS1gsU0FBUyxFQUFFUyxHQUFHO2NBQUVYLEdBQUcsRUFBRUE7WUFBRyxHQUMzQmE7Y0FBS0MsT0FBTyxFQUFDO1lBQWEsR0FDeEJEO2NBQVFFLEVBQUUsRUFBQyxJQUFJO2NBQUNDLEVBQUUsRUFBQyxJQUFJO2NBQUNDLENBQUMsRUFBRUwsVUFBVTtjQUFFSCxLQUFLLEVBQUVBO1lBQUssRUFBSSxDQUNuRCxDQUNGO1VBRVYsQ0FBQyxDQUNGO1VBQUNTIiwibmFtZXMiOlsiU3Bpbm5lciIsInByb3BzIiwicmVmIiwiY29sb3IiLCJjbGFzc05hbWUiLCJzaXplIiwidHlwZSIsImFjdGl2ZSIsInR5cGVzIiwiY2xzVHlwZSIsImluY2x1ZGVzIiwic3R5bGUiLCJzdHJva2UiLCJjbHMiLCJjaXJjbGVTaXplIiwiUmVhY3QiLCJ2aWV3Qm94IiwiY3giLCJjeSIsInIiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL3NwaW5uZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19