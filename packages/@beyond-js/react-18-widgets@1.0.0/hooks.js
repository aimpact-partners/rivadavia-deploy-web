System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/texts"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["@beyond-js/react-18-widgets","1.0.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/texts', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@beyond-js/react-18-widgets/hooks.1.0.0.js
var hooks_1_0_0_exports = {};
__export(hooks_1_0_0_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  useBinder: () => useBinder,
  useTexts: () => useTexts
});
module.exports = __toCommonJS(hooks_1_0_0_exports);

// node_modules/@beyond-js/react-18-widgets/hooks/hooks.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("@beyond-js/kernel@0.1.9/texts"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/react-18-widgets@0.0.6/hooks"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["@beyond-js/kernel/texts", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 364360737,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useBinder = useBinder2;
    var React = require2("react");
    function useBinder2(objects, onBinder, event = "change") {
      React.useEffect(() => {
        objects.forEach(object => {
          if (!object) throw new Error(`object is not valid in useBinder ${object}`);
          object.on(event, onBinder);
        });
        return () => objects.forEach(object => object.off(event, onBinder));
      }, []);
    }
  }
});
ims.set("./use-texts", {
  hash: 2878044955,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useTexts = useTexts2;
    var React = require2("react");
    var _texts = require2("@beyond-js/kernel/texts");
    function useTexts2(specifier, key) {
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
            value = modelTexts.value[key];
          }
          setTexts(value);
          setReady(modelTexts.ready);
        };
        modelTexts.on("change", triggerEvent);
        triggerEvent();
        return () => {
          modelTexts.on("change", triggerEvent);
        };
      }, []);
      const isReady = ready && !!texts;
      return [isReady, texts];
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "useBinder",
  "name": "useBinder"
}, {
  "im": "./use-texts",
  "from": "useTexts",
  "name": "useTexts"
}];
var useBinder, useTexts;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "useBinder") && (useBinder = require2 ? require2("./index").useBinder : value);
  (require2 || prop === "useTexts") && (useTexts = require2 ? require2("./use-texts").useTexts : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvaG9va3MuMS4wLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdC0xOC13aWRnZXRzL2hvb2tzL19fc291cmNlcy9ob29rcy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvaG9va3MvX19zb3VyY2VzL2hvb2tzL3VzZS10ZXh0cy50cyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIl9fYmV5b25kX3BrZyIsImhtciIsInVzZUJpbmRlciIsInVzZVRleHRzIiwibW9kdWxlIiwib2JqZWN0cyIsIm9uQmluZGVyIiwiZXZlbnQiLCJSZWFjdCIsInVzZUVmZmVjdCIsImZvckVhY2giLCJvYmplY3QiLCJFcnJvciIsIm9uIiwib2ZmIiwic3BlY2lmaWVyIiwia2V5IiwicmVhZHkiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidGV4dHMiLCJzZXRUZXh0cyIsIm1vZGVsVGV4dHMiLCJDdXJyZW50VGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJ2YWx1ZSIsImhhc093blByb3BlcnR5IiwiY29uc29sZSIsIndhcm4iLCJpc1JlYWR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUE7SUFVaUIsU0FDUkYsV0FBVUcsU0FBZ0JDLFVBQXNCQyxRQUFnQixVQUFRO01BQzdFQyxNQUFNQyxVQUFVLE1BQW1CO1FBQy9CSixRQUFRSyxRQUFTQyxVQUFxQjtVQUNsQyxJQUFJLENBQUNBLFFBQVEsTUFBTSxJQUFJQyxNQUFNLG9DQUFvQ0QsUUFBUTtVQUN6RUEsT0FBT0UsR0FBR04sT0FBT0QsUUFBUTtRQUM3QixDQUFDO1FBQ0QsT0FBTyxNQUFZRCxRQUFRSyxRQUFTQyxVQUFnQkEsT0FBT0csSUFBSVAsT0FBT0QsUUFBUSxDQUFDO01BQ25GLEdBQUcsRUFBRTtJQUNUOzs7Ozs7Ozs7Ozs7SUNuQkE7SUFDQTtJQUVpQixTQUFVSCxVQUFTWSxXQUFtQkMsS0FBWTtNQUNsRSxNQUFNLENBQUNDLE9BQU9DLFFBQVEsSUFBSVYsTUFBTVcsU0FBUyxLQUFLO01BQzlDLE1BQU0sQ0FBQ0MsT0FBT0MsUUFBUSxJQUFJYixNQUFNVyxTQUFTLEVBQUU7TUFFM0NYLE1BQU1DLFVBQVUsTUFBSztRQUNwQixNQUFNYSxhQUFhLElBQUlDLG9CQUFhUixTQUFTO1FBQzdDLE1BQU1TLGVBQWUsTUFBSztVQUN6QixJQUFJQyxRQUFRSCxXQUFXRztVQUN2QixJQUFJSCxXQUFXTCxTQUFTRCxLQUFLO1lBQzVCLElBQUksQ0FBQ1MsTUFBTUMsZUFBZVYsR0FBRyxHQUFHO2NBQy9CVyxRQUFRQyxLQUNQLDBEQUEwRFosMEJBQTBCRCxXQUFXOztZQUlqR1UsUUFBUUgsV0FBV0csTUFBTVQ7O1VBRTFCSyxTQUFTSSxLQUFLO1VBQ2RQLFNBQVNJLFdBQVdMLEtBQUs7UUFDMUI7UUFDQUssV0FBV1QsR0FBRyxVQUFVVyxZQUFZO1FBQ3BDQSxjQUFZO1FBQ1osT0FBTyxNQUFLO1VBQ1hGLFdBQVdULEdBQUcsVUFBVVcsWUFBWTtRQUNyQztNQUNELEdBQUcsRUFBRTtNQUNMLE1BQU1LLFVBQVVaLFNBQVMsQ0FBQyxDQUFDRztNQUMzQixPQUFPLENBQUNTLFNBQVNULEtBQUs7SUFDdkIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haWxlYXJuL2VzdHJhZGEvb3V0In0=