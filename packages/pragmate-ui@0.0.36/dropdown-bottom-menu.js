System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/image", "pragmate-ui@0.0.36/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, DropdownBottomMenu, __beyond_pkg, hmr;
  _export("DropdownBottomMenu", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi0036Image) {
      dependency_3 = _pragmateUi0036Image;
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
          "vspecifier": "pragmate-ui@0.0.36/dropdown-bottom-menu"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/image', dependency_3], ['pragmate-ui/icons', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/dropdown-bottom-menu');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2794062376,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownBottomMenu = DropdownBottomMenu;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _list = require("./list");
          /*bundle*/
          function DropdownBottomMenu({
            handleClick,
            show,
            items,
            children,
            isImage,
            title
          }) {
            const cls = show ? "pull-down-menu" : "pull-down-menu pull-down-menu__hide";
            const isItems = !!items && Array.isArray(items);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: cls
            }, (title || isImage) && _react.default.createElement("header", null, isImage && _react.default.createElement("div", {
              className: "image-menu"
            }, _react.default.createElement(_image.Image, {
              src: `${globalThis.baseDir}assets/dummy.svg`,
              alt: " "
            })), title && _react.default.createElement("span", null, title)), isItems && _react.default.createElement(_list.MenuList, {
              items: items
            }), children), show && _react.default.createElement("div", {
              onClick: handleClick,
              className: "background-black"
            }));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 4263323519,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MenuItem = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          const MenuItem = ({
            item
          }) => {
            const {
              title,
              link,
              icon
            } = item;
            return _react.default.createElement("li", {
              className: "pull-down-menu__item"
            }, _react.default.createElement(_icons.Icon, {
              icon: icon
            }), _react.default.createElement("a", {
              href: link
            }, title));
          };
          exports.MenuItem = MenuItem;
        }
      });

      /**********************
      INTERNAL MODULE: ./list
      **********************/

      ims.set('./list', {
        hash: 3770438484,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MenuList = void 0;
          var _react = require("react");
          var _item = require("./item");
          const MenuList = ({
            items
          }) => {
            const output = items.map(item => _react.default.createElement(_item.MenuItem, {
              key: item.icon,
              item: item
            }));
            return _react.default.createElement("ul", {
              className: "pull-down-menu__list"
            }, output);
          };
          exports.MenuList = MenuList;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "DropdownBottomMenu",
        "name": "DropdownBottomMenu"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'DropdownBottomMenu') && _export("DropdownBottomMenu", DropdownBottomMenu = require ? require('./index').DropdownBottomMenu : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBQ0E7VUFFTztVQUFVLFNBQVVBLGtCQUFrQixDQUFDO1lBQzVDQyxXQUFXO1lBQ1hDLElBQUk7WUFDSkMsS0FBSztZQUNMQyxRQUFRO1lBQ1JDLE9BQU87WUFDUEM7VUFBSyxDQUNOO1lBQ0MsTUFBTUMsR0FBRyxHQUFXTCxJQUFJLEdBQ3BCLGdCQUFnQixHQUNoQixxQ0FBcUM7WUFDekMsTUFBTU0sT0FBTyxHQUFZLENBQUMsQ0FBQ0wsS0FBSyxJQUFJTSxLQUFLLENBQUNDLE9BQU8sQ0FBQ1AsS0FBSyxDQUFDO1lBQ3hELE9BQ0VRLDREQUNFQTtjQUFLQyxTQUFTLEVBQUVMO1lBQUcsR0FDaEIsQ0FBQ0QsS0FBSyxJQUFJRCxPQUFPLEtBQ2hCTSw2Q0FDR04sT0FBTyxJQUNOTTtjQUFLQyxTQUFTLEVBQUM7WUFBWSxHQUN6QkQsNkJBQUNFLFlBQUs7Y0FBQ0MsR0FBRyxFQUFFLEdBQUdDLFVBQVUsQ0FBQ0MsT0FBTyxrQkFBa0I7Y0FBRUMsR0FBRyxFQUFDO1lBQUcsRUFBRyxDQUVsRSxFQUNBWCxLQUFLLElBQUlLLDJDQUFPTCxLQUFLLENBQVEsQ0FFakMsRUFDQUUsT0FBTyxJQUFJRyw2QkFBQ08sY0FBUTtjQUFDZixLQUFLLEVBQUVBO1lBQUssRUFBSSxFQUNyQ0MsUUFBUSxDQUNMLEVBQ0xGLElBQUksSUFBSVM7Y0FBS1EsT0FBTyxFQUFFbEIsV0FBVztjQUFFVyxTQUFTLEVBQUM7WUFBa0IsRUFBRyxDQUNsRTtVQUVQOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQTtVQUNBO1VBRU8sTUFBTVEsUUFBUSxHQUFHLENBQUM7WUFBRUM7VUFBSSxDQUFFLEtBQWlCO1lBQ2hELE1BQU07Y0FBRWYsS0FBSztjQUFFZ0IsSUFBSTtjQUFFQztZQUFJLENBQUUsR0FBR0YsSUFBSTtZQUNsQyxPQUNFVjtjQUFJQyxTQUFTLEVBQUM7WUFBc0IsR0FDbENELDZCQUFDYSxXQUFJO2NBQUNELElBQUksRUFBRUE7WUFBSSxFQUFJLEVBQ3BCWjtjQUFHYyxJQUFJLEVBQUVIO1lBQUksR0FBR2hCLEtBQUssQ0FBSyxDQUN2QjtVQUVULENBQUM7VUFBQ29COzs7Ozs7Ozs7Ozs7Ozs7OztVQ1hGO1VBQ0E7VUFFTyxNQUFNUixRQUFRLEdBQUcsQ0FBQztZQUFFZjtVQUFLLENBQUUsS0FBaUI7WUFFL0MsTUFBTXdCLE1BQU0sR0FBa0J4QixLQUFLLENBQUN5QixHQUFHLENBQUVQLElBQUksSUFDekNWLDZCQUFDUyxjQUFRO2NBQUNTLEdBQUcsRUFBRVIsSUFBSSxDQUFDRSxJQUFJO2NBQUVGLElBQUksRUFBRUE7WUFBSSxFQUN2QyxDQUFDO1lBQ0YsT0FDSVY7Y0FBSUMsU0FBUyxFQUFDO1lBQXNCLEdBQy9CZSxNQUFNLENBQ047VUFFYixDQUFDO1VBQUFEIiwibmFtZXMiOlsiRHJvcGRvd25Cb3R0b21NZW51IiwiaGFuZGxlQ2xpY2siLCJzaG93IiwiaXRlbXMiLCJjaGlsZHJlbiIsImlzSW1hZ2UiLCJ0aXRsZSIsImNscyIsImlzSXRlbXMiLCJBcnJheSIsImlzQXJyYXkiLCJSZWFjdCIsImNsYXNzTmFtZSIsIkltYWdlIiwic3JjIiwiZ2xvYmFsVGhpcyIsImJhc2VEaXIiLCJhbHQiLCJNZW51TGlzdCIsIm9uQ2xpY2siLCJNZW51SXRlbSIsIml0ZW0iLCJsaW5rIiwiaWNvbiIsIkljb24iLCJocmVmIiwiZXhwb3J0cyIsIm91dHB1dCIsIm1hcCIsImtleSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29kZS90cy9pbmRleC50c3giLCJjb2RlL3RzL2l0ZW0udHN4IiwiY29kZS90cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXX0=