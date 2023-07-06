System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.9/texts"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, useTexts, useDebounce, __beyond_pkg, hmr;
  _export({
    useTexts: void 0,
    useDebounce: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsKernel019Texts) {
      dependency_2 = _beyondJsKernel019Texts;
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
          "vspecifier": "@aimpact/ailearn-estrada@0.0.2/shared/hooks"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/texts', dependency_2]]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./use-texts
      ***************************/
      ims.set('./use-texts', {
        hash: 2878044955,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTexts = useTexts;
          var React = require("react");
          var _texts = require("@beyond-js/kernel/texts");
          /*bundle*/
          function useTexts(specifier, key) {
            const [ready, setReady] = React.useState(false);
            const [texts, setTexts] = React.useState({});
            React.useEffect(() => {
              const modelTexts = new _texts.CurrentTexts(specifier);
              const triggerEvent = () => {
                let value = modelTexts.value;
                if (modelTexts.ready && key) {
                  if (!value.hasOwnProperty(key)) {
                    console.warn(`the key specified for texts was not found. Key passed: ${key}, module specifier: ${specifier}`);
                  }
                  //@ts-ignore
                  value = modelTexts.value[key];
                }
                setTexts(value);
                setReady(modelTexts.ready);
              };
              modelTexts.on('change', triggerEvent);
              triggerEvent();
              return () => {
                modelTexts.on('change', triggerEvent);
              };
            }, []);
            const isReady = ready && !!texts;
            return [isReady, texts];
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./useDebounce
      *****************************/

      ims.set('./useDebounce', {
        hash: 1430552522,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDebounce = exports.default = void 0;
          var _react = require("react");
          /* bundle */
          const useDebounce = (value, delay) => {
            const [debouncedValue, setDebouncedValue] = (0, _react.useState)(value);
            (0, _react.useEffect)(() => {
              const timerId = setTimeout(() => {
                setDebouncedValue(value);
              }, delay);
              return () => {
                clearTimeout(timerId);
              };
            }, [value, delay]);
            return debouncedValue;
          };
          exports.useDebounce = useDebounce;
          var _default = useDebounce;
          exports.default = _default;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./use-texts",
        "from": "useTexts",
        "name": "useTexts"
      }, {
        "im": "./useDebounce",
        "from": "useDebounce",
        "name": "useDebounce"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'useTexts') && _export("useTexts", useTexts = require ? require('./use-texts').useTexts : value);
        (require || prop === 'useDebounce') && _export("useDebounce", useDebounce = require ? require('./useDebounce').useDebounce : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUVPO1VBQVUsU0FBVUEsUUFBUSxDQUFDQyxTQUFpQixFQUFFQyxHQUFZO1lBQ2xFLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR0MsS0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQy9DLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR0gsS0FBSyxDQUFDQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBRTVDRCxLQUFLLENBQUNJLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1DLFVBQVUsR0FBRyxJQUFJQyxtQkFBWSxDQUFDVixTQUFTLENBQUM7Y0FDOUMsTUFBTVcsWUFBWSxHQUFHLE1BQUs7Z0JBQ3pCLElBQUlDLEtBQUssR0FBR0gsVUFBVSxDQUFDRyxLQUFLO2dCQUM1QixJQUFJSCxVQUFVLENBQUNQLEtBQUssSUFBSUQsR0FBRyxFQUFFO2tCQUM1QixJQUFJLENBQUNXLEtBQUssQ0FBQ0MsY0FBYyxDQUFDWixHQUFHLENBQUMsRUFBRTtvQkFDL0JhLE9BQU8sQ0FBQ0MsSUFBSSxDQUNYLDBEQUEwRGQsR0FBRyx1QkFBdUJELFNBQVMsRUFBRSxDQUMvRjs7a0JBRUY7a0JBQ0FZLEtBQUssR0FBR0gsVUFBVSxDQUFDRyxLQUFLLENBQUNYLEdBQUcsQ0FBQzs7Z0JBRTlCTSxRQUFRLENBQUNLLEtBQUssQ0FBQztnQkFDZlQsUUFBUSxDQUFDTSxVQUFVLENBQUNQLEtBQUssQ0FBQztjQUMzQixDQUFDO2NBQ0RPLFVBQVUsQ0FBQ08sRUFBRSxDQUFDLFFBQVEsRUFBRUwsWUFBWSxDQUFDO2NBQ3JDQSxZQUFZLEVBQUU7Y0FDZCxPQUFPLE1BQUs7Z0JBQ1hGLFVBQVUsQ0FBQ08sRUFBRSxDQUFDLFFBQVEsRUFBRUwsWUFBWSxDQUFDO2NBQ3RDLENBQUM7WUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ04sTUFBTU0sT0FBTyxHQUFHZixLQUFLLElBQUksQ0FBQyxDQUFDSSxLQUFLO1lBQ2hDLE9BQU8sQ0FBQ1csT0FBTyxFQUFFWCxLQUFLLENBQUM7VUFDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JBO1VBRU87VUFBYSxNQUFNWSxXQUFXLEdBQUcsQ0FBQ04sS0FBSyxFQUFFTyxLQUFLLEtBQUk7WUFDeEQsTUFBTSxDQUFDQyxjQUFjLEVBQUVDLGlCQUFpQixDQUFDLEdBQUcsbUJBQVEsRUFBQ1QsS0FBSyxDQUFDO1lBRTNELG9CQUFTLEVBQUMsTUFBSztjQUNkLE1BQU1VLE9BQU8sR0FBR0MsVUFBVSxDQUFDLE1BQUs7Z0JBQy9CRixpQkFBaUIsQ0FBQ1QsS0FBSyxDQUFDO2NBQ3pCLENBQUMsRUFBRU8sS0FBSyxDQUFDO2NBRVQsT0FBTyxNQUFLO2dCQUNYSyxZQUFZLENBQUNGLE9BQU8sQ0FBQztjQUN0QixDQUFDO1lBQ0YsQ0FBQyxFQUFFLENBQUNWLEtBQUssRUFBRU8sS0FBSyxDQUFDLENBQUM7WUFFbEIsT0FBT0MsY0FBYztVQUN0QixDQUFDO1VBQUNLO1VBQUEsZUFFYVAsV0FBVztVQUFBTyIsIm5hbWVzIjpbInVzZVRleHRzIiwic3BlY2lmaWVyIiwia2V5IiwicmVhZHkiLCJzZXRSZWFkeSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0ZXh0cyIsInNldFRleHRzIiwidXNlRWZmZWN0IiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsInRyaWdnZXJFdmVudCIsInZhbHVlIiwiaGFzT3duUHJvcGVydHkiLCJjb25zb2xlIiwid2FybiIsIm9uIiwiaXNSZWFkeSIsInVzZURlYm91bmNlIiwiZGVsYXkiLCJkZWJvdW5jZWRWYWx1ZSIsInNldERlYm91bmNlZFZhbHVlIiwidGltZXJJZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL3VzZS10ZXh0cy50cyIsImNvZGUvdHMvdXNlRGVib3VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==