System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, BeyondTabs, TabsContextProvider, useTabsContext, Tab, TabsContent, Tabs, __beyond_pkg, hmr;
  _export({
    BeyondTabs: void 0,
    TabsContextProvider: void 0,
    useTabsContext: void 0,
    Tab: void 0,
    TabsContent: void 0,
    Tabs: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_beyondJsKernel019Routing) {
      dependency_3 = _beyondJsKernel019Routing;
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
          "vspecifier": "pragmate-ui@0.0.36/tabs"
        },
        "type": "code",
        "name": "tabs"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/kernel/routing', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/tabs');
      ims = new Map();
      /*****************************
      INTERNAL MODULE: ./beyond-tabs
      *****************************/
      ims.set('./beyond-tabs', {
        hash: 4038409210,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondTabs = BeyondTabs;
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function BeyondTabs(props) {
            return React.createElement(_context.TabsContextProvider, {
              ...props
            }, props.children);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 1490835545,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TabsContextProvider = TabsContextProvider;
          exports.useTabsContext = void 0;
          var React = require("react");
          const TabsContext = (0, React.createContext)({});
          /*bundle*/
          function TabsContextProvider(props) {
            const {
              children,
              orientation,
              className,
              selected
            } = props;
            const [active, setSelected] = (0, React.useState)(selected);
            (0, React.useEffect)(() => {
              setSelected(selected);
            }, [selected]);
            const tabNavigate = index => setSelected(index);
            const data = {
              children: children,
              orientation: orientation,
              tabNavigate: tabNavigate,
              selected: active,
              index: selected !== active ? selected : active
            };
            const orientationTab = orientation ? orientation : "horizontal";
            let cls = "beyond-tabs beyond-tabs-container ";
            cls += `${orientationTab === "horizontal" ? "beyond-tabs-horizontal" : "beyond-tabs-vertical"}`;
            if (className) cls += ` ${className}`;
            return React.createElement(TabsContext.Provider, {
              value: data
            }, React.createElement("div", {
              className: cls
            }, children));
          }
          /*bundle*/
          const useTabsContext = () => (0, React.useContext)(TabsContext);
          exports.useTabsContext = useTabsContext;
        }
      });

      /*********************
      INTERNAL MODULE: ./tab
      *********************/

      ims.set('./tab', {
        hash: 2354394322,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tab = void 0;
          var React = require("react");
          /*bundle*/
          const Tab = props => {
            const {
              index,
              isActive,
              selected,
              className,
              children
            } = props;
            let cls = isActive && parseInt(index) === parseInt(selected) ? "beyond-tab tab-active" : "beyond-tab";
            if (className) cls += ` ${className}`;
            const attrs = {
              ...props
            };
            ["children", "onTab", "isActive", "nolink", "className"].forEach(prop => {
              delete attrs[prop];
            });
            return React.createElement("div", {
              className: cls,
              ...attrs
            }, children);
          };
          exports.Tab = Tab;
        }
      });

      /******************************
      INTERNAL MODULE: ./tabs-content
      ******************************/

      ims.set('./tabs-content', {
        hash: 32432436,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TabsContent = TabsContent;
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function TabsContent(props) {
            const context = (0, _context.useTabsContext)();
            const {
              children
            } = props;
            const content = children.find((content, index) => index === context.index);
            return React.createElement("div", {
              className: "beyond-tabs-content"
            }, content);
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./tabs
      **********************/

      ims.set('./tabs', {
        hash: 2705434108,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tabs = Tabs;
          var React = require("react");
          var _context = require("./context");
          var _tab = require("./tab");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function Tabs(props) {
            const [state, setState] = (0, React.useState)({
              active: true,
              valueSelected: 0
            });
            const {
              tabNavigate: tabNavigateGo,
              selected
            } = (0, _context.useTabsContext)();
            const tabNavigate = (event, callback) => {
              const target = event.currentTarget;
              const index = parseInt(target.dataset.index);
              const path = target.dataset.path;
              setState({
                valueSelected: index,
                active: index !== state.valueSelected ? true : !state.active
              });
              if (callback) callback(event);
              tabNavigateGo(index);
              if (path) _routing.routing.replaceState({}, "nada", path);
            };
            const {
              children,
              nolink
            } = props;
            const {
              active,
              valueSelected
            } = state;
            const output = children.map((tab, index) => {
              const properties = {
                key: index,
                selected: selected,
                isActive: active,
                index: index,
                "data-index": index,
                "data-path": tab.props["data-path"]
              };
              if (!nolink) properties.onClick = tabNavigate;else properties.nolink = true;
              if (tab.props.onClick) properties.onClick = event => tabNavigate(event, tab.props.onClick);
              if (tab.type === _tab.Tab) return React.cloneElement(tab, properties);
              return React.createElement(_tab.Tab, {
                ...properties,
                key: index
              }, tab);
            });
            return React.createElement("div", {
              className: "beyond-tabs-items"
            }, React.createElement("div", {
              className: "tabs-container"
            }, output));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./beyond-tabs",
        "from": "BeyondTabs",
        "name": "BeyondTabs"
      }, {
        "im": "./context",
        "from": "TabsContextProvider",
        "name": "TabsContextProvider"
      }, {
        "im": "./context",
        "from": "useTabsContext",
        "name": "useTabsContext"
      }, {
        "im": "./tab",
        "from": "Tab",
        "name": "Tab"
      }, {
        "im": "./tabs-content",
        "from": "TabsContent",
        "name": "TabsContent"
      }, {
        "im": "./tabs",
        "from": "Tabs",
        "name": "Tabs"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BeyondTabs') && _export("BeyondTabs", BeyondTabs = require ? require('./beyond-tabs').BeyondTabs : value);
        (require || prop === 'TabsContextProvider') && _export("TabsContextProvider", TabsContextProvider = require ? require('./context').TabsContextProvider : value);
        (require || prop === 'useTabsContext') && _export("useTabsContext", useTabsContext = require ? require('./context').useTabsContext : value);
        (require || prop === 'Tab') && _export("Tab", Tab = require ? require('./tab').Tab : value);
        (require || prop === 'TabsContent') && _export("TabsContent", TabsContent = require ? require('./tabs-content').TabsContent : value);
        (require || prop === 'Tabs') && _export("Tabs", Tabs = require ? require('./tabs').Tabs : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDMUM7VUFFViIsIm5hbWVzIjpbIkJleW9uZFRhYnMiLCJwcm9wcyIsIlJlYWN0IiwiVGFic0NvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwiVGFic0NvbnRleHQiLCJvcmllbnRhdGlvbiIsImNsYXNzTmFtZSIsInNlbGVjdGVkIiwiYWN0aXZlIiwic2V0U2VsZWN0ZWQiLCJ0YWJOYXZpZ2F0ZSIsImluZGV4IiwiZGF0YSIsIm9yaWVudGF0aW9uVGFiIiwiY2xzIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVRhYnNDb250ZXh0IiwiZXhwb3J0cyIsIlRhYiIsImlzQWN0aXZlIiwicGFyc2VJbnQiLCJhdHRycyIsImZvckVhY2giLCJwcm9wIiwiVGFic0NvbnRlbnQiLCJjb250ZXh0IiwiY29udGVudCIsImZpbmQiLCJUYWJzIiwic3RhdGUiLCJzZXRTdGF0ZSIsInZhbHVlU2VsZWN0ZWQiLCJ0YWJOYXZpZ2F0ZUdvIiwiZXZlbnQiLCJjYWxsYmFjayIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwicGF0aCIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJub2xpbmsiLCJvdXRwdXQiLCJtYXAiLCJ0YWIiLCJwcm9wZXJ0aWVzIiwia2V5Iiwib25DbGljayIsInR5cGUiLCJjbG9uZUVsZW1lbnQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvYmV5b25kLXRhYnMudHN4IiwiY29kZS90cy9jb250ZXh0LnRzeCIsImNvZGUvdHMvdGFiLnRzeCIsImNvZGUvdHMvdGFicy1jb250ZW50LnRzeCIsImNvZGUvdHMvdGFicy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==