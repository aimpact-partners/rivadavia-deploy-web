System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.0.1/model", "@aimpact/ailearn-estrada@0.0.2/api", "@aimpact/ailearn-estrada@0.0.2/session", "@aimpact/ailearn-estrada@0.0.2/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Documents, __beyond_pkg, hmr;
  _export("Documents", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive101Model) {
      dependency_1 = _beyondJsReactive101Model;
    }, function (_aimpactAilearnEstrada002Api) {
      dependency_2 = _aimpactAilearnEstrada002Api;
    }, function (_aimpactAilearnEstrada002Session) {
      dependency_3 = _aimpactAilearnEstrada002Session;
    }, function (_aimpactAilearnEstrada002Config) {
      dependency_4 = _aimpactAilearnEstrada002Config;
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
          "vspecifier": "@aimpact/ailearn-estrada@0.0.2/models/documents"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@aimpact/ailearn-estrada/api', dependency_2], ['@aimpact/ailearn-estrada/session', dependency_3], ['@aimpact/ailearn-estrada/config', dependency_4]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 407382714,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Documents = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/ailearn-estrada/api");
          var _session = require("@aimpact/ailearn-estrada/session");
          var _config = require("@aimpact/ailearn-estrada/config");
          /*bundle*/ //@ts-ignore

          //@ts-ignore

          class Documents extends _model.ReactiveModel {
            #api;
            get api() {
              return this.#api;
            }
            #url = _config.default.params.DOCUMENTS_SERVER;
            #project;
            constructor() {
              super();
              this.#api = new _api.Api(this.#url);
              this.#project = _config.default.params.project;
            }
            async list(filter) {
              try {
                this.fetching = true;
                const specs = {
                  type: 'files',
                  userId: _session.sessionWrapper.userId,
                  project: this.#project
                };
                if (filter) specs['filter'] = filter;
                const response = await this.#api.get('/list', specs);
                if (!response.status) throw new Error(response.error);
                return response.data;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = true;
              }
            }
            async remove(path) {
              try {
                if (!path) {
                  return {
                    status: false,
                    error: 'No path provided'
                  };
                }
                this.fetching = true;
                const specs = {
                  userId: _session.sessionWrapper.userId,
                  project: this.#project
                };
                const response = await this.#api.delete('/delete', specs);
                if (!response.status) throw new Error(response.error);
                return response.data;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = true;
              }
            }
          }
          exports.Documents = Documents;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Documents",
        "name": "Documents"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Documents') && _export("Documents", Documents = require ? require('./index').Documents : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBRUE7VUFFQTtVQUNBO1VBR08sV0FQUDs7VUFFQTs7VUFLaUIsTUFBT0EsU0FBVSxTQUFRQyxvQkFBeUI7WUFDbEUsSUFBSTtZQUNKLElBQUlDLEdBQUc7Y0FDTixPQUFPLElBQUksQ0FBQyxJQUFJO1lBQ2pCO1lBQ0EsSUFBSSxHQUFHQyxlQUFNLENBQUNDLE1BQU0sQ0FBQ0MsZ0JBQWdCO1lBQ3JDLFFBQVE7WUFDUkM7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUlDLFFBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2NBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUdKLGVBQU0sQ0FBQ0MsTUFBTSxDQUFDSSxPQUFPO1lBQ3RDO1lBRUEsTUFBTUMsSUFBSSxDQUFDQyxNQUEwQjtjQUNwQyxJQUFJO2dCQUNILElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU1DLEtBQUssR0FBRztrQkFBRUMsSUFBSSxFQUFFLE9BQU87a0JBQUVDLE1BQU0sRUFBRUMsdUJBQWMsQ0FBQ0QsTUFBTTtrQkFBRU4sT0FBTyxFQUFFLElBQUksQ0FBQztnQkFBUSxDQUFFO2dCQUN0RixJQUFJRSxNQUFNLEVBQUVFLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBR0YsTUFBTTtnQkFDcEMsTUFBTU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sRUFBRUwsS0FBSyxDQUFDO2dCQUNwRCxJQUFJLENBQUNJLFFBQVEsQ0FBQ0UsTUFBTSxFQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDSCxRQUFRLENBQUNJLEtBQUssQ0FBQztnQkFDckQsT0FBT0osUUFBUSxDQUFDSyxJQUFJO2VBQ3BCLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNILEtBQUssQ0FBQ0UsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDWCxRQUFRLEdBQUcsSUFBSTs7WUFFdEI7WUFFQSxNQUFNYSxNQUFNLENBQUNDLElBQVk7Y0FDeEIsSUFBSTtnQkFDSCxJQUFJLENBQUNBLElBQUksRUFBRTtrQkFDVixPQUFPO29CQUFFUCxNQUFNLEVBQUUsS0FBSztvQkFBRUUsS0FBSyxFQUFFO2tCQUFrQixDQUFFOztnQkFFcEQsSUFBSSxDQUFDVCxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTUMsS0FBSyxHQUFHO2tCQUFFRSxNQUFNLEVBQUVDLHVCQUFjLENBQUNELE1BQU07a0JBQUVOLE9BQU8sRUFBRSxJQUFJLENBQUM7Z0JBQVEsQ0FBRTtnQkFDdkUsTUFBTVEsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQ1UsTUFBTSxDQUFDLFNBQVMsRUFBRWQsS0FBSyxDQUFDO2dCQUN6RCxJQUFJLENBQUNJLFFBQVEsQ0FBQ0UsTUFBTSxFQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDSCxRQUFRLENBQUNJLEtBQUssQ0FBQztnQkFDckQsT0FBT0osUUFBUSxDQUFDSyxJQUFJO2VBQ3BCLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNILEtBQUssQ0FBQ0UsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDWCxRQUFRLEdBQUcsSUFBSTs7WUFFdEI7O1VBQ0FnQiIsIm5hbWVzIjpbIkRvY3VtZW50cyIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJjb25maWciLCJwYXJhbXMiLCJET0NVTUVOVFNfU0VSVkVSIiwiY29uc3RydWN0b3IiLCJBcGkiLCJwcm9qZWN0IiwibGlzdCIsImZpbHRlciIsImZldGNoaW5nIiwic3BlY3MiLCJ0eXBlIiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJyZXNwb25zZSIsImdldCIsInN0YXR1cyIsIkVycm9yIiwiZXJyb3IiLCJkYXRhIiwiZSIsImNvbnNvbGUiLCJyZW1vdmUiLCJwYXRoIiwiZGVsZXRlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=