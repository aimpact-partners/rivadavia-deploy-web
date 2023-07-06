System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "perfect-scrollbar@1.5.5"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, ScrollContainer, __beyond_pkg, hmr;
  _export("ScrollContainer", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_perfectScrollbar2) {
      dependency_3 = _perfectScrollbar2;
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
          "vspecifier": "pragmate-ui@0.0.36/perfect-scrollbar"
        },
        "type": "code",
        "name": "perfect-scrollbar"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['perfect-scrollbar', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/perfect-scrollbar');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./container
      ***************************/
      ims.set('./container', {
        hash: 1893022313,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ScrollContainer = ScrollContainer;
          var _react = require("react");
          var _perfectScrollbar = require("perfect-scrollbar");
          /*bundle*/ /**
                      * It's a React component that uses the PerfectScrollbar library to create a scrollbar that can be
                      * customized with CSS.
                      * @param {props} props - props
                      * @returns A function that returns a JSX.Element
                      */
          function ScrollContainer(props) {
            const ref = (0, _react.useRef)(null);
            (0, _react.useEffect)(() => {
              const control = ref.current;
              const scrollbar = new _perfectScrollbar.default(control, {
                wheelSpeed: 2,
                wheelPropagation: true,
                minScrollbarLength: 20
              });
              const handleOnScrollY = event => {
                props.onScrollY(event, control, scrollbar);
              };
              const handleOnScrollX = event => {
                props.onScrollY(event, control, scrollbar);
              };
              const {
                onScrollY,
                onScrollX
              } = props;
              if (onScrollY) control.addEventListener("ps-scroll-y", handleOnScrollY);
              if (onScrollX) control.addEventListener("ps-scroll-y", handleOnScrollX);
              return () => {
                scrollbar.destroy();
                if (onScrollY) ref.current.removeEventListener("ps-scroll-y", onScrollY);
                if (onScrollX) ref.current.removeEventListener("ps-scroll-y", handleOnScrollX);
              };
            }, []);
            let cls = props.className ? `beyond-perfect-scrollbar ${props.className}` : "beyond-perfect-scrollbar";
            return _react.default.createElement("div", {
              ref: ref,
              className: cls
            }, props.children);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./container",
        "from": "ScrollContainer",
        "name": "ScrollContainer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ScrollContainer') && _export("ScrollContainer", ScrollContainer = require ? require('./container').ScrollContainer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBT0E7VUFlTyxXQU5QOzs7Ozs7VUFNaUIsU0FDUkEsZUFBZSxDQUFDQyxLQUFZO1lBQ25DLE1BQU1DLEdBQUcsR0FBcUMsaUJBQU0sRUFBQyxJQUFJLENBQUM7WUFFMUQsb0JBQVMsRUFBQyxNQUFtQjtjQUMzQixNQUFNQyxPQUFPLEdBQW1CRCxHQUFHLENBQUNFLE9BQU87Y0FFM0MsTUFBTUMsU0FBUyxHQUFxQixJQUFJQyx5QkFBZ0IsQ0FBQ0gsT0FBTyxFQUFFO2dCQUNoRUksVUFBVSxFQUFFLENBQUM7Z0JBQ2JDLGdCQUFnQixFQUFFLElBQUk7Z0JBQ3RCQyxrQkFBa0IsRUFBRTtlQUNyQixDQUFDO2NBQ0YsTUFBTUMsZUFBZSxHQUFJQyxLQUFLLElBQVU7Z0JBQ3RDVixLQUFLLENBQUNXLFNBQVMsQ0FBQ0QsS0FBSyxFQUFFUixPQUFPLEVBQUVFLFNBQVMsQ0FBQztjQUM1QyxDQUFDO2NBRUQsTUFBTVEsZUFBZSxHQUFJRixLQUFLLElBQVU7Z0JBQ3RDVixLQUFLLENBQUNXLFNBQVMsQ0FBQ0QsS0FBSyxFQUFFUixPQUFPLEVBQUVFLFNBQVMsQ0FBQztjQUM1QyxDQUFDO2NBQ0QsTUFBTTtnQkFBRU8sU0FBUztnQkFBRUU7Y0FBUyxDQUFFLEdBQUdiLEtBQUs7Y0FDdEMsSUFBSVcsU0FBUyxFQUFFVCxPQUFPLENBQUNZLGdCQUFnQixDQUFDLGFBQWEsRUFBRUwsZUFBZSxDQUFDO2NBQ3ZFLElBQUlJLFNBQVMsRUFBRVgsT0FBTyxDQUFDWSxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUVGLGVBQWUsQ0FBQztjQUN2RSxPQUFPLE1BQUs7Z0JBQ1ZSLFNBQVMsQ0FBQ1csT0FBTyxFQUFFO2dCQUVuQixJQUFJSixTQUFTLEVBQUVWLEdBQUcsQ0FBQ0UsT0FBTyxDQUFDYSxtQkFBbUIsQ0FBQyxhQUFhLEVBQUVMLFNBQVMsQ0FBQztnQkFDeEUsSUFBSUUsU0FBUyxFQUNYWixHQUFHLENBQUNFLE9BQU8sQ0FBQ2EsbUJBQW1CLENBQUMsYUFBYSxFQUFFSixlQUFlLENBQUM7Y0FDbkUsQ0FBQztZQUNILENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixJQUFJSyxHQUFHLEdBQVdqQixLQUFLLENBQUNrQixTQUFTLEdBQzdCLDRCQUE0QmxCLEtBQUssQ0FBQ2tCLFNBQVMsRUFBRSxHQUM3QywwQkFBMEI7WUFDOUIsT0FDRUM7Y0FBS2xCLEdBQUcsRUFBRUEsR0FBRztjQUFFaUIsU0FBUyxFQUFFRDtZQUFHLEdBQzFCakIsS0FBSyxDQUFDb0IsUUFBUSxDQUNYO1VBRVYiLCJuYW1lcyI6WyJTY3JvbGxDb250YWluZXIiLCJwcm9wcyIsInJlZiIsImNvbnRyb2wiLCJjdXJyZW50Iiwic2Nyb2xsYmFyIiwiUGVyZmVjdFNjcm9sbGJhciIsIndoZWVsU3BlZWQiLCJ3aGVlbFByb3BhZ2F0aW9uIiwibWluU2Nyb2xsYmFyTGVuZ3RoIiwiaGFuZGxlT25TY3JvbGxZIiwiZXZlbnQiLCJvblNjcm9sbFkiLCJoYW5kbGVPblNjcm9sbFgiLCJvblNjcm9sbFgiLCJhZGRFdmVudExpc3RlbmVyIiwiZGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJjbGFzc05hbWUiLCJSZWFjdCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2NvbnRhaW5lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=