System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, ThemeSwitcher, __beyond_pkg, hmr;
  _export("ThemeSwitcher", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_pragmateUi0036Form) {
      dependency_3 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Icons) {
      dependency_4 = _pragmateUi0036Icons;
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
          "vspecifier": "pragmate-ui@0.0.36/theme-switcher"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/form', dependency_3], ['pragmate-ui/icons', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/theme-switcher');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1179637385,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ThemeSwitcher = ThemeSwitcher;
          var React = require("react");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function ThemeSwitcher() {
            const theme = globalThis?.matchMedia("(prefers-color-scheme: dark)").matches;
            const themeStorage = localStorage.getItem("theme");
            const defaultTheme = theme ? "dark" : "light";
            const userTheme = themeStorage ? themeStorage === "dark" : defaultTheme === "dark";
            const [isDark, setIsDark] = React.useState(userTheme);
            function handleChange({
              target
            }) {
              const container = document.querySelector("html");
              const theme = isDark ? "light" : "dark";
              container.setAttribute("data-beyond-mode", theme);
              localStorage.setItem("theme", theme);
              setIsDark(target.checked);
            }
            React.useEffect(() => {
              if (!themeStorage) return;
              const container = document.querySelector("html");
              container.setAttribute("data-beyond-mode", themeStorage);
            }, []);
            const icon = isDark ? "moon" : "sun";
            return React.createElement("div", {
              className: "theme"
            }, React.createElement("div", {
              className: "container-theme"
            }, React.createElement(_icons.Icon, {
              icon: icon
            }), React.createElement(_form.Switch, {
              className: "checkbox",
              checked: isDark,
              onChange: handleChange
            })));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ThemeSwitcher",
        "name": "ThemeSwitcher"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ThemeSwitcher') && _export("ThemeSwitcher", ThemeSwitcher = require ? require('./index').ThemeSwitcher : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBQ0E7VUFFTztVQUFVLFNBQVVBLGFBQWE7WUFDdEMsTUFBTUMsS0FBSyxHQUFHQyxVQUFVLEVBQUVDLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDQyxPQUFPO1lBQzVFLE1BQU1DLFlBQVksR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2xELE1BQU1DLFlBQVksR0FBV1AsS0FBSyxHQUFHLE1BQU0sR0FBRyxPQUFPO1lBQ3JELE1BQU1RLFNBQVMsR0FBWUosWUFBWSxHQUNuQ0EsWUFBWSxLQUFLLE1BQU0sR0FDdkJHLFlBQVksS0FBSyxNQUFNO1lBQzNCLE1BQU0sQ0FBQ0UsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR0MsS0FBSyxDQUFDQyxRQUFRLENBQVVKLFNBQVMsQ0FBQztZQUU5RCxTQUFTSyxZQUFZLENBQUM7Y0FBRUM7WUFBTSxDQUFFO2NBQzlCLE1BQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO2NBQ2hELE1BQU1qQixLQUFLLEdBQUdTLE1BQU0sR0FBRyxPQUFPLEdBQUcsTUFBTTtjQUN2Q00sU0FBUyxDQUFDRyxZQUFZLENBQUMsa0JBQWtCLEVBQUVsQixLQUFLLENBQUM7Y0FDakRLLFlBQVksQ0FBQ2MsT0FBTyxDQUFDLE9BQU8sRUFBRW5CLEtBQUssQ0FBQztjQUNwQ1UsU0FBUyxDQUFDSSxNQUFNLENBQUNNLE9BQU8sQ0FBQztZQUMzQjtZQUVBVCxLQUFLLENBQUNVLFNBQVMsQ0FBQyxNQUFLO2NBQ25CLElBQUksQ0FBQ2pCLFlBQVksRUFBRTtjQUNuQixNQUFNVyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztjQUNoREYsU0FBUyxDQUFDRyxZQUFZLENBQUMsa0JBQWtCLEVBQUVkLFlBQVksQ0FBQztZQUMxRCxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sTUFBTWtCLElBQUksR0FBV2IsTUFBTSxHQUFHLE1BQU0sR0FBRyxLQUFLO1lBQzVDLE9BQ0VFO2NBQUtZLFNBQVMsRUFBQztZQUFPLEdBQ3BCWjtjQUFLWSxTQUFTLEVBQUM7WUFBaUIsR0FDOUJaLG9CQUFDYSxXQUFJO2NBQUNGLElBQUksRUFBRUE7WUFBSSxFQUFJLEVBQ3BCWCxvQkFBQ2MsWUFBTTtjQUFDRixTQUFTLEVBQUMsVUFBVTtjQUFDSCxPQUFPLEVBQUVYLE1BQU07Y0FBRWlCLFFBQVEsRUFBRWI7WUFBWSxFQUFJLENBQ3BFLENBQ0Y7VUFFViIsIm5hbWVzIjpbIlRoZW1lU3dpdGNoZXIiLCJ0aGVtZSIsImdsb2JhbFRoaXMiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJpc0RhcmsiLCJzZXRJc0RhcmsiLCJSZWFjdCIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwic2V0SXRlbSIsImNoZWNrZWQiLCJ1c2VFZmZlY3QiLCJpY29uIiwiY2xhc3NOYW1lIiwiSWNvbiIsIlN3aXRjaCIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==