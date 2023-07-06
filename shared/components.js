System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/spinner", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, ConfirmationModal, LabeledIconButton, Input, Loading, PreloadScreen, Tab, ThemeSwitcher, __beyond_pkg, hmr;
  _export({
    ConfirmationModal: void 0,
    LabeledIconButton: void 0,
    Input: void 0,
    Loading: void 0,
    PreloadScreen: void 0,
    Tab: void 0,
    ThemeSwitcher: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi0036Form) {
      dependency_2 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Icons) {
      dependency_3 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Spinner) {
      dependency_4 = _pragmateUi0036Spinner;
    }, function (_beyondJsKernel019Styles) {
      dependency_5 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.0.1"], ["@aimpact/chat-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.6"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.8"], ["dexie", "3.2.4"], ["dompurify", "3.0.3"], ["firebase", "9.22.2"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.0"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.2.1"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.6.2"], ["uuid", "9.0.0"], ["@aimpact/ailearn-estrada", "0.0.2"], ["@aimpact/ailearn-estrada", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-estrada@0.0.2/shared/components"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/form', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/spinner', dependency_4], ['@beyond-js/kernel/styles', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-estrada@0.0.2/shared/components');
      ims = new Map();
      /************************************
      INTERNAL MODULE: ./confirmation-modal
      ************************************/
      ims.set('./confirmation-modal', {
        hash: 2899614746,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmationModal = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          const ConfirmationModal = _react.default.forwardRef((props, ref) => {
            const {
              content,
              cancel,
              submit
            } = props;
            return _react.default.createElement("dialog", {
              ref: ref,
              className: 'confirmation-modal'
            }, _react.default.createElement(_icons.IconButton, {
              icon: 'close',
              className: 'close',
              onClick: cancel
            }), _react.default.createElement("header", null, _react.default.createElement("h1", null, "Atention!")), _react.default.createElement("p", null, content), _react.default.createElement("footer", null, _react.default.createElement(_form.Button, {
              icon: 'close-circle',
              variant: 'link',
              onClick: cancel
            }, "Cancel"), _react.default.createElement(_form.Button, {
              icon: 'save',
              variant: 'primary',
              onClick: submit
            }, "Submit")));
          });
          exports.ConfirmationModal = ConfirmationModal;
        }
      });

      /*****************************
      INTERNAL MODULE: ./icon-button
      *****************************/

      ims.set('./icon-button', {
        hash: 505396687,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LabeledIconButton = void 0;
          var React = require("react");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          /* bundle */
          const LabeledIconButton = React.forwardRef((props, ref) => {
            const {
              icon,
              label,
              ...rest
            } = props;
            return React.createElement(_form.Button, {
              ref: ref,
              label: React.createElement("div", {
                className: 'icon-button'
              }, React.createElement(_icons.Icon, {
                icon: icon
              }), label),
              ...rest
            });
          });
          exports.LabeledIconButton = LabeledIconButton;
        }
      });

      /***********************
      INTERNAL MODULE: ./input
      ***********************/

      ims.set('./input', {
        hash: 448656881,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Input = void 0;
          var React = require("react");
          /* bundle */
          const Input = ({
            name,
            label,
            disabled,
            ...rest
          }) => {
            return React.createElement("div", {
              className: 'input-wrapper'
            }, React.createElement("input", {
              name: name,
              disabled: disabled,
              ...rest
            }), !disabled && React.createElement("label", {
              htmlFor: name
            }, label));
          };
          exports.Input = Input;
        }
      });

      /*************************
      INTERNAL MODULE: ./loading
      *************************/

      ims.set('./loading', {
        hash: 477427642,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Loading = void 0;
          var _react = require("react");
          var _spinner = require("pragmate-ui/spinner");
          /* bundle */
          const Loading = () => {
            return _react.default.createElement("div", {
              className: "spinner-container"
            }, _react.default.createElement(_spinner.Spinner, {
              className: "spinner",
              type: "primary",
              active: true
            }));
          };
          exports.Loading = Loading;
        }
      });

      /**************************
      INTERNAL MODULE: ./pre-load
      **************************/

      ims.set('./pre-load', {
        hash: 2567925015,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PreloadScreen = PreloadScreen;
          var React = require("react");
          var _spinner = require("pragmate-ui/spinner");
          /* bundle */
          function PreloadScreen() {
            return React.createElement("div", {
              className: 'preload-screen active'
            }, React.createElement(_spinner.Spinner, {
              active: true
            }));
          }
        }
      });

      /*********************
      INTERNAL MODULE: ./tab
      *********************/

      ims.set('./tab', {
        hash: 1751036469,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tab = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          /* bundle  */
          const Tab = ({
            panes
          }) => {
            const [activeTab, setActiveTab] = (0, _react.useState)(0);
            const tabRef = _react.default.useRef(null);
            const handleTabClick = index => setActiveTab(index);
            _react.default.useEffect(() => {
              const scrollToTab = index => {
                const tabElement = tabRef.current?.querySelectorAll('.tab')[index];
                if (tabElement) {
                  const container = tabRef.current;
                  const containerRect = container.getBoundingClientRect();
                  const tabRect = tabElement.getBoundingClientRect();
                  const scrollLeft = container.scrollLeft;
                  if (tabRect.left < containerRect.left) {
                    container.scrollTo({
                      left: scrollLeft + tabRect.left - containerRect.left,
                      behavior: 'smooth'
                    });
                  } else if (tabRect.right > containerRect.right) {
                    container.scrollTo({
                      left: scrollLeft + tabRect.right - containerRect.right,
                      behavior: 'smooth'
                    });
                  }
                }
              };
              scrollToTab(activeTab);
            }, [activeTab]);
            const renderTabs = () => {
              return panes.map((pane, index) => _react.default.createElement("div", {
                key: index,
                className: `tab ${index === activeTab ? 'active' : ''}`,
                onClick: () => handleTabClick(index)
              }, pane.tab));
            };
            const navigateNext = () => activeTab < panes.length - 1 ? setActiveTab(activeTab + 1) : null;
            const navigateBack = () => activeTab > 0 ? setActiveTab(activeTab - 1) : null;
            const renderContent = () => panes[activeTab].content;
            return _react.default.createElement("section", {
              className: 'tab-container'
            }, _react.default.createElement("header", {
              className: 'tab-menu'
            }, _react.default.createElement(_icons.IconButton, {
              className: 'md',
              icon: 'chevronRight',
              onClick: navigateBack,
              disabled: !activeTab
            }), _react.default.createElement("div", {
              className: 'tabs',
              ref: tabRef
            }, renderTabs()), _react.default.createElement(_icons.IconButton, {
              className: 'md',
              icon: 'chevronRight',
              onClick: navigateNext,
              disabled: activeTab === panes.length - 1
            })), _react.default.createElement("div", {
              className: 'tab-content'
            }, _react.default.createElement("div", {
              className: 'tab-content-wrapper'
            }, renderContent())));
          };
          exports.Tab = Tab;
        }
      });

      /******************************
      INTERNAL MODULE: ./theme-button
      ******************************/

      ims.set('./theme-button', {
        hash: 1432519911,
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
          function ThemeSwitcher({
            fetching
          }) {
            const theme = globalThis?.matchMedia('(prefers-color-scheme: dark)').matches;
            const themeStorage = localStorage.getItem('theme');
            const defaultTheme = theme ? 'dark' : 'light';
            const userTheme = themeStorage ?? defaultTheme;
            const [icon, setIcon] = React.useState(userTheme === 'dark' ? 'sun' : 'moon');
            function handleChange(e) {
              e.preventDefault();
              const container = document.querySelector('html');
              const theme = icon === 'sun' ? 'light' : 'dark';
              container.setAttribute('data-beyond-mode', theme);
              localStorage.setItem('theme', theme);
              setIcon(theme === 'dark' ? 'sun' : 'moon');
            }
            React.useEffect(() => {
              if (!themeStorage) return;
              const container = document.querySelector('html');
              container.setAttribute('data-beyond-mode', themeStorage);
            }, []);
            return React.createElement("div", {
              className: 'sidebar-item theme-switcher',
              onClick: handleChange
            }, React.createElement(_icons.Icon, {
              icon: icon,
              disabled: fetching
            }), React.createElement(_form.Switch, {
              className: 'checkbox',
              onChange: handleChange,
              checked: icon === 'moon'
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./confirmation-modal",
        "from": "ConfirmationModal",
        "name": "ConfirmationModal"
      }, {
        "im": "./icon-button",
        "from": "LabeledIconButton",
        "name": "LabeledIconButton"
      }, {
        "im": "./input",
        "from": "Input",
        "name": "Input"
      }, {
        "im": "./loading",
        "from": "Loading",
        "name": "Loading"
      }, {
        "im": "./pre-load",
        "from": "PreloadScreen",
        "name": "PreloadScreen"
      }, {
        "im": "./tab",
        "from": "Tab",
        "name": "Tab"
      }, {
        "im": "./theme-button",
        "from": "ThemeSwitcher",
        "name": "ThemeSwitcher"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ConfirmationModal') && _export("ConfirmationModal", ConfirmationModal = require ? require('./confirmation-modal').ConfirmationModal : value);
        (require || prop === 'LabeledIconButton') && _export("LabeledIconButton", LabeledIconButton = require ? require('./icon-button').LabeledIconButton : value);
        (require || prop === 'Input') && _export("Input", Input = require ? require('./input').Input : value);
        (require || prop === 'Loading') && _export("Loading", Loading = require ? require('./loading').Loading : value);
        (require || prop === 'PreloadScreen') && _export("PreloadScreen", PreloadScreen = require ? require('./pre-load').PreloadScreen : value);
        (require || prop === 'Tab') && _export("Tab", Tab = require ? require('./tab').Tab : value);
        (require || prop === 'ThemeSwitcher') && _export("ThemeSwitcher", ThemeSwitcher = require ? require('./theme-button').ThemeSwitcher : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxLQUFLLENBQUNtQyxTQUFTLENBQUMsTUFBSztjQUNwQixJQUFJLENBQUM2QixZQUFZLEVBQUU7Y0FDbkIsTUFBTXhCLFNBQVMsR0FBR2tDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztjQUNoRG5DLFNBQVMsQ0FBQ29DLFlBQVksQ0FBQyxrQkFBa0IsRUFBRVosWUFBWSxDQUFDO1lBQ3pELENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixPQUNDaEU7Y0FBS08sU0FBUyxFQUFDLDZCQUE2QjtjQUFDRyxPQUFPLEVBQUU2RDtZQUFZLEdBQ2pFdkUsb0JBQUNpQixXQUFJO2NBQUNSLElBQUksRUFBRUEsSUFBSTtjQUFFVyxRQUFRLEVBQUV1QztZQUFRLEVBQUksRUFDeEMzRCxvQkFBQzhFLFlBQU07Y0FBQ3ZFLFNBQVMsRUFBQyxVQUFVO2NBQUN3RSxRQUFRLEVBQUVSLFlBQVk7Y0FBRVMsT0FBTyxFQUFFdkUsSUFBSSxLQUFLO1lBQU0sRUFBSSxDQUM1RTtVQUVSIiwibmFtZXMiOlsiQ29uZmlybWF0aW9uTW9kYWwiLCJSZWFjdCIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsImNvbnRlbnQiLCJjYW5jZWwiLCJzdWJtaXQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJCdXR0b24iLCJ2YXJpYW50IiwiZXhwb3J0cyIsIkxhYmVsZWRJY29uQnV0dG9uIiwibGFiZWwiLCJyZXN0IiwiSWNvbiIsIklucHV0IiwibmFtZSIsImRpc2FibGVkIiwiaHRtbEZvciIsIkxvYWRpbmciLCJTcGlubmVyIiwidHlwZSIsImFjdGl2ZSIsIlByZWxvYWRTY3JlZW4iLCJUYWIiLCJwYW5lcyIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsInRhYlJlZiIsInVzZVJlZiIsImhhbmRsZVRhYkNsaWNrIiwiaW5kZXgiLCJ1c2VFZmZlY3QiLCJzY3JvbGxUb1RhYiIsInRhYkVsZW1lbnQiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnRhaW5lciIsImNvbnRhaW5lclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0YWJSZWN0Iiwic2Nyb2xsTGVmdCIsImxlZnQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwicmlnaHQiLCJyZW5kZXJUYWJzIiwibWFwIiwicGFuZSIsImtleSIsInRhYiIsIm5hdmlnYXRlTmV4dCIsImxlbmd0aCIsIm5hdmlnYXRlQmFjayIsInJlbmRlckNvbnRlbnQiLCJUaGVtZVN3aXRjaGVyIiwiZmV0Y2hpbmciLCJ0aGVtZSIsImdsb2JhbFRoaXMiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJzZXRJY29uIiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwiU3dpdGNoIiwib25DaGFuZ2UiLCJjaGVja2VkIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2NvbmZpcm1hdGlvbi1tb2RhbC50c3giLCJjb2RlL3RzL2ljb24tYnV0dG9uLnRzeCIsImNvZGUvdHMvaW5wdXQudHN4IiwiY29kZS90cy9sb2FkaW5nLnRzeCIsImNvZGUvdHMvcHJlLWxvYWQudHN4IiwiY29kZS90cy90YWIudHN4IiwiY29kZS90cy90aGVtZS1idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19