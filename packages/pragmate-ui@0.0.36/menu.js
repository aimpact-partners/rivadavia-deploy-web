System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/image", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Menu, __beyond_pkg, hmr;
  _export("Menu", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_3 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Image) {
      dependency_4 = _pragmateUi0036Image;
    }, function (_beyondJsKernel019Routing) {
      dependency_5 = _beyondJsKernel019Routing;
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
          "vspecifier": "pragmate-ui@0.0.36/menu"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/image', dependency_4], ['@beyond-js/kernel/routing', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/menu');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./content
      *************************/
      ims.set('./content', {
        hash: 2796574182,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SideMenuContent = void 0;
          var _react = require("react");
          var _list = require("./list");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          const SideMenuContent = ({
            title
          }) => {
            const {
              toggleMenu,
              isOpen
            } = (0, _context.useMenuContext)();
            const cls = isOpen ? "side-menu__content" : "side-menu__content__hide side-menu__content";
            const defaultTitle = title ?? "Title";
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_icons.IconButton, {
              icon: "close",
              className: "side-menu__toggle",
              onClick: toggleMenu
            }), _react.default.createElement("header", null, _react.default.createElement("span", null, defaultTitle)), _react.default.createElement(_list.SideMenuList, null));
          };
          exports.SideMenuContent = SideMenuContent;
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 4010051245,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMenuContext = exports.MenuContext = void 0;
          var _react = require("react");
          const MenuContext = (0, _react.createContext)({});
          exports.MenuContext = MenuContext;
          const useMenuContext = () => (0, _react.useContext)(MenuContext);
          exports.useMenuContext = useMenuContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 319265641,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Menu = void 0;
          var _react = require("react");
          var _content = require("./content");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          /*bundle*/
          const Menu = ({
            items,
            title
          }) => {
            const [isOpen, setIsOpen] = (0, _react.useState)(false);
            const toggleMenu = () => {
              setIsOpen(!isOpen);
            };
            return _react.default.createElement(_context.MenuContext.Provider, {
              value: {
                isOpen,
                items,
                toggleMenu
              }
            }, _react.default.createElement(_icons.IconButton, {
              onClick: toggleMenu,
              icon: "menu"
            }), _react.default.createElement(_content.SideMenuContent, {
              title: title
            }), isOpen && _react.default.createElement("div", {
              onClick: toggleMenu,
              className: "background-black"
            }));
          };
          exports.Menu = Menu;
        }
      });

      /***********************
      INTERNAL MODULE: ./items
      ***********************/

      ims.set('./items', {
        hash: 2650623906,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.menuItems = void 0;
          const menuItems = [{
            title: "Sub title",
            link: "#",
            icon: "user"
          }, {
            title: "Sub title",
            link: "#",
            icon: "favorite"
          }, {
            title: "Sub title",
            link: "#",
            icon: "star"
          }, {
            title: "Sub title",
            link: "#",
            icon: "off"
          }, {
            title: "Sub title",
            link: "#",
            icon: "bell"
          }];
          exports.menuItems = menuItems;
        }
      });

      /****************************
      INTERNAL MODULE: ./list/index
      ****************************/

      ims.set('./list/index', {
        hash: 3097741487,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SideMenuList = void 0;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          const SideMenuList = () => {
            const {
              items
            } = (0, _context.useMenuContext)();
            const output = items.map(item => _react.default.createElement(_item.SideMenuItem, {
              key: item.icon,
              item: item
            }));
            return _react.default.createElement("ul", {
              className: "side-menu__list"
            }, output);
          };
          exports.SideMenuList = SideMenuList;
        }
      });

      /***************************
      INTERNAL MODULE: ./list/item
      ***************************/

      ims.set('./list/item', {
        hash: 2834511559,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SideMenuItem = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _routing = require("@beyond-js/kernel/routing");
          var _context = require("../context");
          const SideMenuItem = ({
            item
          }) => {
            const {
              title,
              link,
              icon
            } = item;
            const {
              toggleMenu
            } = (0, _context.useMenuContext)();
            const onClick = event => {
              event.preventDefault();
              event.stopPropagation();
              _routing.routing.pushState(link);
              toggleMenu();
            };
            return _react.default.createElement("li", {
              className: "side-menu__item"
            }, _react.default.createElement("a", {
              onClick: onClick
            }, _react.default.createElement(_icons.Icon, {
              icon: icon
            }), _react.default.createElement("span", null, title)));
          };
          exports.SideMenuItem = SideMenuItem;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Menu",
        "name": "Menu"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Menu') && _export("Menu", Menu = require ? require('./index').Menu : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFDQTtVQUVBO1VBQ08sTUFBTUEsZUFBZSxHQUFHLENBQUM7WUFBRUM7VUFBSyxDQUFFLEtBQWlCO1lBQ3hELE1BQU07Y0FBRUMsVUFBVTtjQUFFQztZQUFNLENBQUUsR0FBRywyQkFBYyxHQUFFO1lBQy9DLE1BQU1DLEdBQUcsR0FBV0QsTUFBTSxHQUN0QixvQkFBb0IsR0FDcEIsNkNBQTZDO1lBRWpELE1BQU1FLFlBQVksR0FBR0osS0FBSyxJQUFJLE9BQU87WUFDckMsT0FDRUs7Y0FBS0MsU0FBUyxFQUFFSDtZQUFHLEdBQ2pCRSw2QkFBQ0UsaUJBQVU7Y0FDVEMsSUFBSSxFQUFDLE9BQU87Y0FDWkYsU0FBUyxFQUFDLG1CQUFtQjtjQUM3QkcsT0FBTyxFQUFFUjtZQUFVLEVBQ25CLEVBQ0ZJLDZDQUlFQSwyQ0FBT0QsWUFBWSxDQUFRLENBQ3BCLEVBQ1RDLDZCQUFDSyxrQkFBWSxPQUFHLENBQ1o7VUFFVixDQUFDO1VBQUNDOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVCRjtVQUVPLE1BQU1DLFdBQVcsR0FBaUIsd0JBQWEsRUFBQyxFQUFHLENBQUM7VUFBQ0Q7VUFDckQsTUFBTUUsY0FBYyxHQUFjLE1BQVcscUJBQVUsRUFBQ0QsV0FBVyxDQUFDO1VBQUNEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0g1RTtVQUNBO1VBQ0E7VUFDQTtVQUNPO1VBQVcsTUFBTUcsSUFBSSxHQUFHLENBQUM7WUFBRUMsS0FBSztZQUFFZjtVQUFLLENBQUUsS0FBaUI7WUFDL0QsTUFBTSxDQUFDRSxNQUFNLEVBQUVjLFNBQVMsQ0FBQyxHQUFHLG1CQUFRLEVBQVUsS0FBSyxDQUFDO1lBQ3BELE1BQU1mLFVBQVUsR0FBRyxNQUFXO2NBQzVCZSxTQUFTLENBQUMsQ0FBQ2QsTUFBTSxDQUFDO1lBQ3BCLENBQUM7WUFFRCxPQUNFRyw2QkFBQ08sb0JBQVcsQ0FBQ0ssUUFBUTtjQUFDQyxLQUFLLEVBQUU7Z0JBQUVoQixNQUFNO2dCQUFFYSxLQUFLO2dCQUFFZDtjQUFVO1lBQUUsR0FDeERJLDZCQUFDRSxpQkFBVTtjQUFDRSxPQUFPLEVBQUVSLFVBQVU7Y0FBRU8sSUFBSSxFQUFDO1lBQU0sRUFBRyxFQUMvQ0gsNkJBQUNOLHdCQUFlO2NBQUNDLEtBQUssRUFBRUE7WUFBSyxFQUFJLEVBQ2hDRSxNQUFNLElBQUlHO2NBQUtJLE9BQU8sRUFBRVIsVUFBVTtjQUFFSyxTQUFTLEVBQUM7WUFBa0IsRUFBRyxDQUMvQztVQUUzQixDQUFDO1VBQUNLOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pCSyxNQUFNUSxTQUFTLEdBQUcsQ0FDckI7WUFDSW5CLEtBQUssRUFBRSxXQUFXO1lBQ2xCb0IsSUFBSSxFQUFFLEdBQUc7WUFDVFosSUFBSSxFQUFFO1dBQ1QsRUFDRDtZQUNJUixLQUFLLEVBQUUsV0FBVztZQUNsQm9CLElBQUksRUFBRSxHQUFHO1lBQ1RaLElBQUksRUFBRTtXQUNULEVBQ0Q7WUFDSVIsS0FBSyxFQUFFLFdBQVc7WUFDbEJvQixJQUFJLEVBQUUsR0FBRztZQUNUWixJQUFJLEVBQUU7V0FDVCxFQUNEO1lBQ0lSLEtBQUssRUFBRSxXQUFXO1lBQ2xCb0IsSUFBSSxFQUFFLEdBQUc7WUFDVFosSUFBSSxFQUFFO1dBQ1QsRUFDRDtZQUNJUixLQUFLLEVBQUUsV0FBVztZQUNsQm9CLElBQUksRUFBRSxHQUFHO1lBQ1RaLElBQUksRUFBRTtXQUNULENBQ0o7VUFBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJGO1VBQ0E7VUFDQTtVQUVPLE1BQU1ELFlBQVksR0FBRyxNQUFrQjtZQUMxQyxNQUFNO2NBQUVLO1lBQUssQ0FBRSxHQUFHLDJCQUFjLEdBQUU7WUFDbEMsTUFBTU0sTUFBTSxHQUFrQk4sS0FBSyxDQUFDTyxHQUFHLENBQUVDLElBQUksSUFDekNsQiw2QkFBQ21CLGtCQUFZO2NBQUNDLEdBQUcsRUFBRUYsSUFBSSxDQUFDZixJQUFJO2NBQUVlLElBQUksRUFBRUE7WUFBSSxFQUMzQyxDQUFDO1lBQ0YsT0FDSWxCO2NBQUlDLFNBQVMsRUFBQztZQUFpQixHQUMxQmUsTUFBTSxDQUNOO1VBRWIsQ0FBQztVQUFBVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkRDtVQUNBO1VBQ0E7VUFDQTtVQUNPLE1BQU1hLFlBQVksR0FBRyxDQUFDO1lBQUVEO1VBQUksQ0FBRSxLQUFpQjtZQUNwRCxNQUFNO2NBQUV2QixLQUFLO2NBQUVvQixJQUFJO2NBQUVaO1lBQUksQ0FBRSxHQUFHZSxJQUFJO1lBQ2xDLE1BQU07Y0FBRXRCO1lBQVUsQ0FBRSxHQUFHLDJCQUFjLEdBQUU7WUFDdkMsTUFBTVEsT0FBTyxHQUFJaUIsS0FBMEMsSUFBVTtjQUNuRUEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7Y0FDdEJELEtBQUssQ0FBQ0UsZUFBZSxFQUFFO2NBQ3ZCQyxnQkFBTyxDQUFDQyxTQUFTLENBQUNWLElBQUksQ0FBQztjQUN2Qm5CLFVBQVUsRUFBRTtZQUNkLENBQUM7WUFDRCxPQUNFSTtjQUFJQyxTQUFTLEVBQUM7WUFBaUIsR0FDN0JEO2NBQUdJLE9BQU8sRUFBRUE7WUFBTyxHQUNqQkosNkJBQUMwQixXQUFJO2NBQUN2QixJQUFJLEVBQUVBO1lBQUksRUFBSSxFQUNwQkgsMkNBQU9MLEtBQUssQ0FBUSxDQUNsQixDQUNEO1VBRVQsQ0FBQztVQUFDVyIsIm5hbWVzIjpbIlNpZGVNZW51Q29udGVudCIsInRpdGxlIiwidG9nZ2xlTWVudSIsImlzT3BlbiIsImNscyIsImRlZmF1bHRUaXRsZSIsIlJlYWN0IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsImljb24iLCJvbkNsaWNrIiwiU2lkZU1lbnVMaXN0IiwiZXhwb3J0cyIsIk1lbnVDb250ZXh0IiwidXNlTWVudUNvbnRleHQiLCJNZW51IiwiaXRlbXMiLCJzZXRJc09wZW4iLCJQcm92aWRlciIsInZhbHVlIiwibWVudUl0ZW1zIiwibGluayIsIm91dHB1dCIsIm1hcCIsIml0ZW0iLCJTaWRlTWVudUl0ZW0iLCJrZXkiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIkljb24iXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvY29udGVudC50c3giLCJjb2RlL3RzL2NvbnRleHQudHN4IiwiY29kZS90cy9pbmRleC50c3giLCJjb2RlL3RzL2l0ZW1zLnRzIiwiY29kZS90cy9saXN0L2luZGV4LnRzeCIsImNvZGUvdHMvbGlzdC9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=