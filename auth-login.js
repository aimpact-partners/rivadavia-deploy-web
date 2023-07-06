System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.0/page", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/link", "@aimpact/ailearn-estrada@0.0.2/session", "@aimpact/ailearn-estrada@0.0.2/shared/components", "@aimpact/ailearn-estrada@0.0.2/shared/icons"], function (_export, _context) {
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
    }, function (_pragmateUi0036Form) {
      dependency_6 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Icons) {
      dependency_7 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Link) {
      dependency_8 = _pragmateUi0036Link;
    }, function (_aimpactAilearnEstrada002Session) {
      dependency_9 = _aimpactAilearnEstrada002Session;
    }, function (_aimpactAilearnEstrada002SharedComponents) {
      dependency_10 = _aimpactAilearnEstrada002SharedComponents;
    }, function (_aimpactAilearnEstrada002SharedIcons) {
      dependency_11 = _aimpactAilearnEstrada002SharedIcons;
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
          "vspecifier": "@aimpact/ailearn-estrada@0.0.2/auth-login"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/icons', dependency_7], ['pragmate-ui/link', dependency_8], ['@aimpact/ailearn-estrada/session', dependency_9], ['@aimpact/ailearn-estrada/shared/components', dependency_10], ['@aimpact/ailearn-estrada/shared/icons', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-login-page",
        "vspecifier": "@aimpact/ailearn-estrada@0.0.2/auth-login",
        "is": "page",
        "route": "/auth/login",
        "layout": "auth-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-estrada@0.0.2/auth-login');
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

      /************************************
      INTERNAL MODULE: ./hooks/use-firebase
      ************************************/

      ims.set('./hooks/use-firebase', {
        hash: 2621698315,
        creator: function (require, exports) {
          /* import { useState, useEffect } from "react";
          import { initializeApp } from "firebase/app";
          import {
            getAuth,
            createUserWithEmailAndPassword,
            signInWithEmailAndPassword,
            onAuthStateChanged,
            signOut,
          } from "firebase/auth";
          
          const firebaseConfig = {
            // Your Firebase project configuration
          };
          
          const app = initializeApp(firebaseConfig);
          const auth = getAuth(app);
          
          const useFirebaseAuth = () => {
            const [user, setUser] = useState(null);
            const [loading, setLoading] = useState(true);
          
            useEffect(() => {
              const unsubscribe = onAuthStateChanged(auth, (user) => {
                setUser(user);
                setLoading(false);
              });
          
              return () => unsubscribe();
            }, []);
          
            const signUp = async (email, password) => {
              try {
                await createUserWithEmailAndPassword(auth, email, password);
                // Additional steps like sending verification email, etc.
              } catch (error) {
              }
            };
          
            const logIn = async (email, password) => {
              try {
                await signInWithEmailAndPassword(auth, email, password);
              } catch (error) {
              }
            };
          
            const logOut = async () => {
              try {
                await signOut(auth);
              } catch (error) {
              }
            };
          
            return {
              user,
              loading,
              signUp,
              logIn,
              logOut,
            };
          };
          
          export default useFirebaseAuth;
           */
          "use strict";
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1693094092,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _link = require("pragmate-ui/link");
          var _session = require("@aimpact/ailearn-estrada/session");
          var _components = require("@aimpact/ailearn-estrada/shared/components");
          var _icons2 = require("@aimpact/ailearn-estrada/shared/icons");
          /*bundle*/
          function View() {
            const defaultValues = {
              username: '',
              password: ''
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
              password
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
            }, React.createElement(_components.ThemeSwitcher, null), React.createElement(_icons.Icon, {
              icon: _icons2.ICONS['aip-chat-logo'],
              className: 'aip-chat-logo'
            }), React.createElement("h1", null, "Login in AILearn"), React.createElement(_form.Form, {
              onSubmit: onSubmit
            }, error && React.createElement("div", {
              className: 'form-error'
            }, error), React.createElement(_components.Input, {
              label: 'Userame',
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
            }, React.createElement(_link.Link, null, "Forgot your password?"), React.createElement(_link.Link, {
              href: `/auth/register`
            }, "Create a new account?")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLEVBQUM7WUFBYyxHQUM1QjVCLG9CQUFDdUMsWUFBTTtjQUNOUixJQUFJLEVBQUMsUUFBUTtjQUNiUyxPQUFPLEVBQUUxQixRQUFRO2NBQ2pCMkIsT0FBTyxFQUFFckMsUUFBUSxJQUFJLFFBQVE7Y0FDN0IrQixLQUFLLEVBQUM7WUFBZ0IsRUFDckIsRUFDRm5DLG9CQUFDdUMsWUFBTTtjQUNOMUIsUUFBUTtjQUNSa0IsSUFBSSxFQUFDLFVBQVU7Y0FDZlMsT0FBTyxFQUFFMUIsUUFBUTtjQUNqQjJCLE9BQU8sRUFBRXJDLFFBQVEsSUFBSSxVQUFVO2NBQy9CK0IsS0FBSyxFQUFDO1lBQWtCLEVBQ3ZCLENBQ0csRUFDTm5DO2NBQUs0QixTQUFTLEVBQUM7WUFBYyxHQUM1QjVCLG9CQUFDMEMsVUFBSSxnQ0FBNkIsRUFDbEMxQyxvQkFBQzBDLFVBQUk7Y0FBQ0MsSUFBSSxFQUFFO1lBQWdCLDJCQUE4QixDQUNyRCxDQUNBLENBQ0YsQ0FDRDtVQUVSIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsImRlZmF1bHRWYWx1ZXMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsImN1cnJlbnRWYWx1ZSIsIm5hbWUiLCJ2YWx1ZSIsImZvcm1EaXNhYmxlZCIsImRpc2FibGVkIiwib25Hb29nbGUiLCJldmVudCIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJzaWduSW5XaXRoR29vZ2xlIiwic3RhdHVzIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImUiLCJjb25zb2xlIiwibWVzc2FnZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJsb2dpbiIsImNsYXNzTmFtZSIsIlRoZW1lU3dpdGNoZXIiLCJJY29uIiwiaWNvbiIsIklDT05TIiwiRm9ybSIsIklucHV0IiwibGFiZWwiLCJ0eXBlIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJsb2FkaW5nIiwiTGluayIsImhyZWYiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndpZGdldC90cy9jb250cm9sbGVyLnRzIiwid2lkZ2V0L3RzL2hvb2tzL3VzZS1maXJlYmFzZS50cyIsIndpZGdldC90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF19