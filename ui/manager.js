System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.0.1/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, UIManager, __beyond_pkg, hmr;
  _export("UIManager", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive101Model) {
      dependency_1 = _beyondJsReactive101Model;
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
          "vspecifier": "@aimpact/ailearn-estrada@0.0.2/ui/manager"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3734448739,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UIManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          class Manager extends _model.ReactiveModel {
            #modalOpened = false;
            get modalOpened() {
              return this.#modalOpened;
            }
            set modalOpened(value) {
              if (value === this.#modalOpened) return;
              this.#modalOpened = value;
              this.triggerEvent('modalOpened');
            }
          }
          /*bundle */
          const UIManager = new Manager();
          exports.UIManager = UIManager;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "UIManager",
        "name": "UIManager"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'UIManager') && _export("UIManager", UIManager = require ? require('./index').UIManager : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0EsTUFBTUEsT0FBUSxTQUFRQyxvQkFBc0I7WUFDM0MsWUFBWSxHQUFZLEtBQUs7WUFDN0IsSUFBSUMsV0FBVztjQUNkLE9BQU8sSUFBSSxDQUFDLFlBQVk7WUFDekI7WUFDQSxJQUFJQSxXQUFXLENBQUNDLEtBQUs7Y0FDcEIsSUFBSUEsS0FBSyxLQUFLLElBQUksQ0FBQyxZQUFZLEVBQUU7Y0FFakMsSUFBSSxDQUFDLFlBQVksR0FBR0EsS0FBSztjQUN6QixJQUFJLENBQUNDLFlBQVksQ0FBQyxhQUFhLENBQUM7WUFDakM7O1VBR007VUFBWSxNQUFNQyxTQUFTLEdBQUcsSUFBSUwsT0FBTyxFQUFFO1VBQUNNIiwibmFtZXMiOlsiTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJtb2RhbE9wZW5lZCIsInZhbHVlIiwidHJpZ2dlckV2ZW50IiwiVUlNYW5hZ2VyIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=