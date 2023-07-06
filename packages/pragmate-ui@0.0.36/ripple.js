System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, RippleEffect, __beyond_pkg, hmr;
  _export("RippleEffect", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
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
      __pkg.dependencies.update([]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQU87VUFBVSxNQUFPQSxZQUFZO1lBQzNCQyxRQUFRO1lBRWhCQyxZQUFZRCxRQUF5QztjQUNwRCxJQUFJQSxRQUFRLEVBQUUsSUFBSSxDQUFDRSxHQUFHLENBQUNGLFFBQVEsQ0FBQztZQUNqQztZQUVRRSxHQUFHLENBQUNGLFFBQVE7Y0FDbkIsSUFBSSxDQUFDQSxRQUFRLEdBQUdHLEtBQUssQ0FBQ0MsT0FBTyxDQUFDSixRQUFRLENBQUMsR0FBR0EsUUFBUSxHQUFHLENBQUNBLFFBQVEsQ0FBQztjQUMvRCxJQUFJLENBQUNBLFFBQVEsQ0FBQ0ssT0FBTyxDQUFDQyxPQUFPLElBQUc7Z0JBQy9CQSxPQUFPLENBQUNDLFNBQVMsQ0FBQ0wsR0FBRyxDQUFDLFFBQVEsQ0FBQztnQkFDL0JJLE9BQU8sQ0FBQ0UsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBQ3BELENBQUMsQ0FBQztZQUNIO1lBRVFBLE9BQU8sR0FBSUMsS0FBaUIsSUFBSTtjQUN2QyxNQUFNQyxJQUFJLEdBQUlELEtBQUssQ0FBQ0UsTUFBc0IsQ0FBQ0MscUJBQXFCLEVBQUU7Y0FDbEUsTUFBTUMsQ0FBQyxHQUFHSixLQUFLLENBQUNLLE9BQU8sR0FBR0osSUFBSSxDQUFDSyxJQUFJO2NBQ25DLE1BQU1DLENBQUMsR0FBR1AsS0FBSyxDQUFDUSxPQUFPLEdBQUdQLElBQUksQ0FBQ1EsR0FBRztjQUNsQyxNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztjQUM3Q0YsTUFBTSxDQUFDRyxLQUFLLENBQUNQLElBQUksR0FBRyxHQUFHRixDQUFDLElBQUk7Y0FDNUJNLE1BQU0sQ0FBQ0csS0FBSyxDQUFDSixHQUFHLEdBQUcsR0FBR0YsQ0FBQyxJQUFJO2NBQzFCUCxLQUFLLENBQUNFLE1BQXNCLENBQUNZLFdBQVcsQ0FBQ0osTUFBTSxDQUFDO2NBQ2pESyxVQUFVLENBQUMsTUFBSztnQkFDZkwsTUFBTSxDQUFDTSxNQUFNLEVBQUU7Y0FDaEIsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNULENBQUM7WUFFTUMsT0FBTztjQUNiLElBQUksQ0FBQzNCLFFBQVEsQ0FBQ0ssT0FBTyxDQUFDQyxPQUFPLElBQUc7Z0JBQy9CQSxPQUFPLENBQUNzQixtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDbkIsT0FBTyxDQUFDO2NBQ3ZELENBQUMsQ0FBQztjQUNGLElBQUksQ0FBQ1QsUUFBUSxHQUFHLEVBQUU7WUFDbkI7O1VBQ0E2QiIsIm5hbWVzIjpbIlJpcHBsZUVmZmVjdCIsImVsZW1lbnRzIiwiY29uc3RydWN0b3IiLCJhZGQiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkNsaWNrIiwiZXZlbnQiLCJyZWN0IiwidGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsImNsaWVudFgiLCJsZWZ0IiwieSIsImNsaWVudFkiLCJ0b3AiLCJyaXBwbGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsInJlbW92ZSIsImNsZWFudXAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29kZS90cy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==