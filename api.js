System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, Api, JCall, __beyond_pkg, hmr;
  _export({
    Api: void 0,
    JCall: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
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
          "vspecifier": "@aimpact/ailearn-estrada@0.0.2/api"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./api
      *********************/
      ims.set('./api', {
        hash: 806328471,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Api = void 0;
          var _jcall = require("./jcall");
          /*bundle*/
          class Api {
            #url;
            get url() {
              return this.#url ?? '';
            }
            constructor(url) {
              this.#url = url;
            }
            async action(method = 'get', route, specs = {}) {
              const call = new _jcall.JCall();
              return call[method](this.getURL(route), specs);
            }
            getURL(route) {
              return `${this.#url}${route}`;
            }
            get(route, specs) {
              return this.action('get', route, specs);
            }
            post(route, specs) {
              return this.action('post', route, specs);
            }
            delete(route, specs) {
              return this.action('delete', route, specs);
            }
          }
          exports.Api = Api;
        }
      });

      /***********************
      INTERNAL MODULE: ./jcall
      ***********************/

      ims.set('./jcall', {
        hash: 2551429957,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.JCall = JCall;
          /*bundle*/
          function JCall() {
            this.checkToken = headers => {
              if (typeof window === 'undefined') return headers;
              let session = window.localStorage.getItem('session');
              if (!session) return headers;
              const sessionObject = JSON.parse(session);
              headers.append('Authorization', `Bearer ${sessionObject.accessToken}`);
              return headers;
            };
            this.execute = async (url, method = 'get', params = {}, headersSpecs = {}) => {
              try {
                const keys = Object.keys(headersSpecs);
                let headers = new Headers();
                keys.forEach(key => headers.append(key, headersSpecs[key]));
                const specs = {
                  method,
                  headers,
                  mode: 'cors'
                };
                const emptyParams = Object.entries(params).length === 0 && params.constructor === Object;
                if (method === 'post' && !emptyParams) specs.body = JSON.stringify(params);else if (!emptyParams && method === 'get') {
                  const parameters = Object.keys(params);
                  if (parameters.length) {
                    url += '?';
                    parameters.forEach(key => {
                      if ([NaN, undefined, ''].includes(params[key])) return;
                      url += `&${key}=${params[key]}`;
                    });
                  }
                }
                const response = await fetch(url, specs);
                return response.json();
              } catch (e) {
                console.error('error jcall', e);
              }
            };
            this.get = (url, params, headers) => this.execute(url, 'get', params, headers);
            this.post = (url, params, headers = {
              'Content-Type': 'application/json'
            }) => this.execute(url, 'post', params, headers);
            this.delete = (url, params, headers = {
              'Content-Type': 'application/json'
            }) => this.execute(url, 'DELETE', params, headers);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./api",
        "from": "Api",
        "name": "Api"
      }, {
        "im": "./jcall",
        "from": "JCall",
        "name": "JCall"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Api') && _export("Api", Api = require ? require('./api').Api : value);
        (require || prop === 'JCall') && _export("JCall", JCall = require ? require('./jcall').JCall : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQW1CO2NBQ2xCLGNBQWMsRUFBRTthQUNoQixLQUNHLElBQUksQ0FBQ1UsT0FBTyxDQUFDeEIsR0FBRyxFQUFFLFFBQVEsRUFBRXlCLE1BQU0sRUFBRVgsT0FBTyxDQUFDO1VBQ2xEIiwibmFtZXMiOlsiQXBpIiwidXJsIiwiY29uc3RydWN0b3IiLCJhY3Rpb24iLCJtZXRob2QiLCJyb3V0ZSIsInNwZWNzIiwiY2FsbCIsIkpDYWxsIiwiZ2V0VVJMIiwiZ2V0IiwicG9zdCIsImRlbGV0ZSIsImV4cG9ydHMiLCJjaGVja1Rva2VuIiwiaGVhZGVycyIsIndpbmRvdyIsInNlc3Npb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2Vzc2lvbk9iamVjdCIsIkpTT04iLCJwYXJzZSIsImFwcGVuZCIsImFjY2Vzc1Rva2VuIiwiZXhlY3V0ZSIsInBhcmFtcyIsImhlYWRlcnNTcGVjcyIsImtleXMiLCJPYmplY3QiLCJIZWFkZXJzIiwiZm9yRWFjaCIsImtleSIsIm1vZGUiLCJlbXB0eVBhcmFtcyIsImVudHJpZXMiLCJsZW5ndGgiLCJib2R5Iiwic3RyaW5naWZ5IiwicGFyYW1ldGVycyIsIk5hTiIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJlIiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJhcGkudHMiLCJqY2FsbC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19