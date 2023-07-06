System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, RippleEffect, __beyond_pkg, hmr;
  _export("RippleEffect", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
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
          "vspecifier": "pragmate-ui@0.0.36/ripple"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/ripple');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 4021318841,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RippleEffect = void 0;
          /*bundle*/
          class RippleEffect {
            elements;
            constructor(elements) {
              if (elements) this.add(elements);
            }
            add(elements) {
              this.elements = Array.isArray(elements) ? elements : [elements];
              this.elements.forEach(element => {
                element.classList.add('ripple');
                element.addEventListener('mousedown', this.onClick);
              });
            }
            onClick = event => {
              const rect = event.target.getBoundingClientRect();
              const x = event.clientX - rect.left;
              const y = event.clientY - rect.top;
              const ripple = document.createElement('span');
              ripple.style.left = `${x}px`;
              ripple.style.top = `${y}px`;
              event.target.appendChild(ripple);
              setTimeout(() => {
                ripple.remove();
              }, 1000);
            };
            cleanup() {
              this.elements.forEach(element => {
                element.removeEventListener('mousedown', this.onClick);
              });
              this.elements = [];
            }
          }
          exports.RippleEffect = RippleEffect;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "RippleEffect",
        "name": "RippleEffect"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'RippleEffect') && _export("RippleEffect", RippleEffect = require ? require('./index').RippleEffect : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBTztVQUFVLE1BQU9BLFlBQVk7WUFDM0JDLFFBQVE7WUFFaEJDLFlBQVlELFFBQXlDO2NBQ3BELElBQUlBLFFBQVEsRUFBRSxJQUFJLENBQUNFLEdBQUcsQ0FBQ0YsUUFBUSxDQUFDO1lBQ2pDO1lBRVFFLEdBQUcsQ0FBQ0YsUUFBUTtjQUNuQixJQUFJLENBQUNBLFFBQVEsR0FBR0csS0FBSyxDQUFDQyxPQUFPLENBQUNKLFFBQVEsQ0FBQyxHQUFHQSxRQUFRLEdBQUcsQ0FBQ0EsUUFBUSxDQUFDO2NBQy9ELElBQUksQ0FBQ0EsUUFBUSxDQUFDSyxPQUFPLENBQUNDLE9BQU8sSUFBRztnQkFDL0JBLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDTCxHQUFHLENBQUMsUUFBUSxDQUFDO2dCQUMvQkksT0FBTyxDQUFDRSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDcEQsQ0FBQyxDQUFDO1lBQ0g7WUFFUUEsT0FBTyxHQUFJQyxLQUFpQixJQUFJO2NBQ3ZDLE1BQU1DLElBQUksR0FBSUQsS0FBSyxDQUFDRSxNQUFzQixDQUFDQyxxQkFBcUIsRUFBRTtjQUNsRSxNQUFNQyxDQUFDLEdBQUdKLEtBQUssQ0FBQ0ssT0FBTyxHQUFHSixJQUFJLENBQUNLLElBQUk7Y0FDbkMsTUFBTUMsQ0FBQyxHQUFHUCxLQUFLLENBQUNRLE9BQU8sR0FBR1AsSUFBSSxDQUFDUSxHQUFHO2NBQ2xDLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO2NBQzdDRixNQUFNLENBQUNHLEtBQUssQ0FBQ1AsSUFBSSxHQUFHLEdBQUdGLENBQUMsSUFBSTtjQUM1Qk0sTUFBTSxDQUFDRyxLQUFLLENBQUNKLEdBQUcsR0FBRyxHQUFHRixDQUFDLElBQUk7Y0FDMUJQLEtBQUssQ0FBQ0UsTUFBc0IsQ0FBQ1ksV0FBVyxDQUFDSixNQUFNLENBQUM7Y0FDakRLLFVBQVUsQ0FBQyxNQUFLO2dCQUNmTCxNQUFNLENBQUNNLE1BQU0sRUFBRTtjQUNoQixDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ1QsQ0FBQztZQUVNQyxPQUFPO2NBQ2IsSUFBSSxDQUFDM0IsUUFBUSxDQUFDSyxPQUFPLENBQUNDLE9BQU8sSUFBRztnQkFDL0JBLE9BQU8sQ0FBQ3NCLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUNuQixPQUFPLENBQUM7Y0FDdkQsQ0FBQyxDQUFDO2NBQ0YsSUFBSSxDQUFDVCxRQUFRLEdBQUcsRUFBRTtZQUNuQjs7VUFDQTZCIiwibmFtZXMiOlsiUmlwcGxlRWZmZWN0IiwiZWxlbWVudHMiLCJjb25zdHJ1Y3RvciIsImFkZCIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uQ2xpY2siLCJldmVudCIsInJlY3QiLCJ0YXJnZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwiY2xpZW50WCIsImxlZnQiLCJ5IiwiY2xpZW50WSIsInRvcCIsInJpcHBsZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiY2xlYW51cCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19