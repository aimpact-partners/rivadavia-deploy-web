System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/spinner"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, ConfirmationModal, LabeledIconButton, Input, Loading, PreloadScreen, Tab, ThemeSwitcher, __beyond_pkg, hmr;
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/form', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/spinner', dependency_4]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxDQUFDbUMsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsSUFBSSxDQUFDNkIsWUFBWSxFQUFFO2NBQ25CLE1BQU14QixTQUFTLEdBQUdrQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Y0FDaERuQyxTQUFTLENBQUNvQyxZQUFZLENBQUMsa0JBQWtCLEVBQUVaLFlBQVksQ0FBQztZQUN6RCxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FDQ2hFO2NBQUtPLFNBQVMsRUFBQyw2QkFBNkI7Y0FBQ0csT0FBTyxFQUFFNkQ7WUFBWSxHQUNqRXZFLG9CQUFDaUIsV0FBSTtjQUFDUixJQUFJLEVBQUVBLElBQUk7Y0FBRVcsUUFBUSxFQUFFdUM7WUFBUSxFQUFJLEVBQ3hDM0Qsb0JBQUM4RSxZQUFNO2NBQUN2RSxTQUFTLEVBQUMsVUFBVTtjQUFDd0UsUUFBUSxFQUFFUixZQUFZO2NBQUVTLE9BQU8sRUFBRXZFLElBQUksS0FBSztZQUFNLEVBQUksQ0FDNUU7VUFFUiIsIm5hbWVzIjpbIkNvbmZpcm1hdGlvbk1vZGFsIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJjb250ZW50IiwiY2FuY2VsIiwic3VibWl0IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsImljb24iLCJvbkNsaWNrIiwiQnV0dG9uIiwidmFyaWFudCIsImV4cG9ydHMiLCJMYWJlbGVkSWNvbkJ1dHRvbiIsImxhYmVsIiwicmVzdCIsIkljb24iLCJJbnB1dCIsIm5hbWUiLCJkaXNhYmxlZCIsImh0bWxGb3IiLCJMb2FkaW5nIiwiU3Bpbm5lciIsInR5cGUiLCJhY3RpdmUiLCJQcmVsb2FkU2NyZWVuIiwiVGFiIiwicGFuZXMiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJ0YWJSZWYiLCJ1c2VSZWYiLCJoYW5kbGVUYWJDbGljayIsImluZGV4IiwidXNlRWZmZWN0Iiwic2Nyb2xsVG9UYWIiLCJ0YWJFbGVtZW50IiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb250YWluZXIiLCJjb250YWluZXJSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidGFiUmVjdCIsInNjcm9sbExlZnQiLCJsZWZ0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsInJpZ2h0IiwicmVuZGVyVGFicyIsIm1hcCIsInBhbmUiLCJrZXkiLCJ0YWIiLCJuYXZpZ2F0ZU5leHQiLCJsZW5ndGgiLCJuYXZpZ2F0ZUJhY2siLCJyZW5kZXJDb250ZW50IiwiVGhlbWVTd2l0Y2hlciIsImZldGNoaW5nIiwidGhlbWUiLCJnbG9iYWxUaGlzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0aGVtZVN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVmYXVsdFRoZW1lIiwidXNlclRoZW1lIiwic2V0SWNvbiIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwic2V0SXRlbSIsIlN3aXRjaCIsIm9uQ2hhbmdlIiwiY2hlY2tlZCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29kZS90cy9jb25maXJtYXRpb24tbW9kYWwudHN4IiwiY29kZS90cy9pY29uLWJ1dHRvbi50c3giLCJjb2RlL3RzL2lucHV0LnRzeCIsImNvZGUvdHMvbG9hZGluZy50c3giLCJjb2RlL3RzL3ByZS1sb2FkLnRzeCIsImNvZGUvdHMvdGFiLnRzeCIsImNvZGUvdHMvdGhlbWUtYnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==