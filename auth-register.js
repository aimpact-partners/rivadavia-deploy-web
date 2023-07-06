System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.0/page", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-estrada@0.0.2/session", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/link", "@aimpact/ailearn-estrada@0.0.2/shared/icons", "pragmate-ui@0.0.36/icons", "@aimpact/ailearn-estrada@0.0.2/shared/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets100Page) {
      dependency_3 = _beyondJsReact18Widgets100Page;
    }, function (_react) {
      dependency_4 = _react;
    }, function (_beyondJsKernel019Routing) {
      dependency_5 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnEstrada002Session) {
      dependency_6 = _aimpactAilearnEstrada002Session;
    }, function (_pragmateUi0036Form) {
      dependency_7 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Link) {
      dependency_8 = _pragmateUi0036Link;
    }, function (_aimpactAilearnEstrada002SharedIcons) {
      dependency_9 = _aimpactAilearnEstrada002SharedIcons;
    }, function (_pragmateUi0036Icons) {
      dependency_10 = _pragmateUi0036Icons;
    }, function (_aimpactAilearnEstrada002SharedComponents) {
      dependency_11 = _aimpactAilearnEstrada002SharedComponents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.0.1"], ["@aimpact/chat-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.6"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.8"], ["dexie", "3.2.4"], ["dompurify", "3.0.3"], ["firebase", "9.22.2"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.0"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.2.1"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.6.2"], ["uuid", "9.0.0"], ["@aimpact/ailearn-estrada", "0.0.2"], ["@aimpact/ailearn-estrada", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-estrada@0.0.2/auth-register"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@aimpact/ailearn-estrada/session', dependency_6], ['pragmate-ui/form', dependency_7], ['pragmate-ui/link', dependency_8], ['@aimpact/ailearn-estrada/shared/icons', dependency_9], ['pragmate-ui/icons', dependency_10], ['@aimpact/ailearn-estrada/shared/components', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-register-page",
        "vspecifier": "@aimpact/ailearn-estrada@0.0.2/auth-register",
        "is": "page",
        "route": "/auth/register",
        "layout": "auth-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-estrada@0.0.2/auth-register');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3303386583,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _views.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3774336446,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _session = require("@aimpact/ailearn-estrada/session");
          var _form = require("pragmate-ui/form");
          var _link = require("pragmate-ui/link");
          var _icons = require("@aimpact/ailearn-estrada/shared/icons");
          var _icons2 = require("pragmate-ui/icons");
          var _components = require("@aimpact/ailearn-estrada/shared/components");
          const credentials = {
            user: 'ailearn',
            password: 'ailearn01'
          };
          /*bundle*/
          function View() {
            const defaultValues = {
              username: '',
              password: '',
              confirmPassword: '',
              email: '',
              fetching: false
            };
            const [values, setValues] = React.useState(defaultValues);
            const [error, setError] = React.useState('');
            const [fetching, setFetching] = React.useState('');
            const handleChange = ({
              currentTarget: target
            }) => {
              const currentValue = {
                ...values
              };
              currentValue[target.name] = target.value;
              setValues(currentValue);
              setError('');
            };
            const formDisabled = {};
            const {
              username,
              password,
              confirmPassword,
              email
            } = values;
            if (!username || !password) {
              formDisabled.disabled = true;
            }
            const onGoogle = async event => {
              try {
                setFetching('google');
                const response = await _session.sessionWrapper.signInWithGoogle();
                if (!response.status) {
                  if (error === 'POPUP_CLOSED_BY_USER') {
                    setFetching('');
                  } else {
                    setError('Error trying to login with Google');
                  }
                  return;
                }
                setFetching('');
                _routing.routing.pushState('/');
              } catch (e) {
                console.error(e.message);
              }
            };
            const onSubmit = async event => {
              try {
                event.preventDefault();
                const response = await _session.sessionWrapper.login(values.username, values.password);
                if (!response.status) {
                  setError("User / Password don't match");
                  return;
                }
                setValues(defaultValues);
                _routing.routing.pushState('/');
                return;
              } catch (e) {
                setError("User / Password don't match");
              }
            };
            return React.createElement("div", {
              className: 'page-container'
            }, React.createElement("div", {
              className: 'form-container'
            }, React.createElement(_components.ThemeSwitcher, null), React.createElement(_icons2.Icon, {
              icon: _icons.ICONS['aip-chat-logo'],
              className: 'aip-chat-logo'
            }), React.createElement("h1", null, "Create a new account"), React.createElement(_form.Form, {
              onSubmit: onSubmit
            }, error && React.createElement("div", {
              className: 'form-error'
            }, error), React.createElement(_components.Input, {
              label: 'Full Name',
              type: 'text',
              name: 'username',
              value: username,
              onChange: handleChange,
              required: true
            }), React.createElement(_components.Input, {
              label: 'Password',
              type: 'password',
              name: 'password',
              value: password,
              onChange: handleChange,
              required: true
            }), React.createElement(_components.Input, {
              label: 'Confirm Password',
              type: 'password',
              name: 'confirmPassword',
              value: confirmPassword,
              onChange: handleChange,
              required: true
            }), React.createElement(_components.Input, {
              label: 'Email',
              type: 'text',
              name: 'email',
              value: email,
              onChange: handleChange,
              required: true
            }), React.createElement("h5", null, "By creating an account you agree to our Terms of Service and Privacy Policy"), React.createElement("div", {
              className: 'form-actions'
            }, React.createElement(_form.Button, {
              type: 'submit',
              ...formDisabled,
              onClick: onSubmit,
              loading: fetching == 'default',
              label: 'Sign in'
            })), React.createElement("h3", {
              className: 'social-login'
            }, "Or sign in with social login"), React.createElement("div", {
              className: 'form-actions'
            }, React.createElement(_form.Button, {
              icon: 'google',
              onClick: onGoogle,
              loading: fetching == 'google',
              label: 'Google Sign In'
            }), React.createElement(_form.Button, {
              disabled: true,
              icon: 'facebook',
              onClick: onGoogle,
              loading: fetching == 'facebook',
              label: 'Facebook Sign In'
            })), React.createElement("div", {
              className: 'form-actions'
            }, React.createElement(_link.Link, null, "Do you need help to Sign In?"), React.createElement(_link.Link, {
              href: `/auth/login`
            }, "Already have an account?")))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNpQyxpQkFBSztjQUFDQyxLQUFLLEVBQUMsT0FBTztjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDMUIsSUFBSSxFQUFDLE9BQU87Y0FBQ0MsS0FBSyxFQUFFZCxLQUFLO2NBQUV3QyxRQUFRLEVBQUUvQixZQUFZO2NBQUVnQyxRQUFRO1lBQUEsRUFBRyxFQUMvRnJDLDhHQUFvRixFQUNwRkE7Y0FBSzJCLFNBQVMsRUFBQztZQUFjLEdBQzVCM0Isb0JBQUNzQyxZQUFNO2NBQ05ILElBQUksRUFBQyxRQUFRO2NBQUEsR0FDVHhCLFlBQVk7Y0FDaEI0QixPQUFPLEVBQUVmLFFBQVE7Y0FDakJnQixPQUFPLEVBQUUzQyxRQUFRLElBQUksU0FBUztjQUM5QnFDLEtBQUssRUFBQztZQUFTLEVBQ2QsQ0FDRyxFQUNObEM7Y0FBSTJCLFNBQVMsRUFBQztZQUFjLGtDQUFrQyxFQUM5RDNCO2NBQUsyQixTQUFTLEVBQUM7WUFBYyxHQUM1QjNCLG9CQUFDc0MsWUFBTTtjQUNOUixJQUFJLEVBQUMsUUFBUTtjQUNiUyxPQUFPLEVBQUUxQixRQUFRO2NBQ2pCMkIsT0FBTyxFQUFFM0MsUUFBUSxJQUFJLFFBQVE7Y0FDN0JxQyxLQUFLLEVBQUM7WUFBZ0IsRUFDckIsRUFDRmxDLG9CQUFDc0MsWUFBTTtjQUNOMUIsUUFBUTtjQUNSa0IsSUFBSSxFQUFDLFVBQVU7Y0FDZlMsT0FBTyxFQUFFMUIsUUFBUTtjQUNqQjJCLE9BQU8sRUFBRTNDLFFBQVEsSUFBSSxVQUFVO2NBQy9CcUMsS0FBSyxFQUFDO1lBQWtCLEVBQ3ZCLENBQ0csRUFDTmxDO2NBQUsyQixTQUFTLEVBQUM7WUFBYyxHQUM1QjNCLG9CQUFDeUMsVUFBSSx1Q0FBb0MsRUFDekN6QyxvQkFBQ3lDLFVBQUk7Y0FBQ0MsSUFBSSxFQUFFO1lBQWEsOEJBQWlDLENBQ3JELENBQ0EsQ0FDRixDQUNEO1VBRVIiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiY3JlZGVudGlhbHMiLCJ1c2VyIiwicGFzc3dvcmQiLCJkZWZhdWx0VmFsdWVzIiwidXNlcm5hbWUiLCJjb25maXJtUGFzc3dvcmQiLCJlbWFpbCIsImZldGNoaW5nIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJzZXRGZXRjaGluZyIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJmb3JtRGlzYWJsZWQiLCJkaXNhYmxlZCIsIm9uR29vZ2xlIiwiZXZlbnQiLCJyZXNwb25zZSIsInNlc3Npb25XcmFwcGVyIiwic2lnbkluV2l0aEdvb2dsZSIsInN0YXR1cyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibG9naW4iLCJjbGFzc05hbWUiLCJUaGVtZVN3aXRjaGVyIiwiSWNvbiIsImljb24iLCJJQ09OUyIsIkZvcm0iLCJJbnB1dCIsImxhYmVsIiwidHlwZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJCdXR0b24iLCJvbkNsaWNrIiwibG9hZGluZyIsIkxpbmsiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ3aWRnZXQvdHMvY29udHJvbGxlci50cyIsIndpZGdldC90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==