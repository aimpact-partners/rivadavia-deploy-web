System.register(["@firebase/util@1.9.3","@firebase/component@0.6.4","@firebase/logger@0.4.0","idb@7.1.1","@firebase/app@0.9.12","tslib@2.5.3","@firebase/auth@0.23.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.9.3"],["@firebase/component","0.6.4"],["@firebase/logger","0.4.0"],["idb","7.1.1"],["@firebase/app","0.9.12"],["tslib","2.5.3"],["@firebase/auth","0.23.2"],["firebase","9.22.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.9.3', dep), dep => dependencies.set('@firebase/component@0.6.4', dep), dep => dependencies.set('@firebase/logger@0.4.0', dep), dep => dependencies.set('idb@7.1.1', dep), dep => dependencies.set('@firebase/app@0.9.12', dep), dep => dependencies.set('tslib@2.5.3', dep), dep => dependencies.set('@firebase/auth@0.23.2', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/firebase/auth.9.22.2.js
var auth_9_22_2_exports = {};
module.exports = __toCommonJS(auth_9_22_2_exports);

// node_modules/firebase/auth/dist/esm/index.esm.js
var index_esm_exports = {};
__reExport(index_esm_exports, require("@firebase/auth@0.23.2"));

// .beyond/uimport/firebase/auth.9.22.2.js
__reExport(auth_9_22_2_exports, index_esm_exports, module.exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9maXJlYmFzZS9hdXRoLjkuMjIuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9maXJlYmFzZS9hdXRoL2Rpc3QvZXNtL2luZGV4LmVzbS5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJfX3JlRXhwb3J0IiwicmVxdWlyZSIsImluZGV4X2VzbV9leHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7OztBQ0FBO0FBQUFDLDhCQUFjQzs7O0FEQWRELGdDQUFjRSxtQkFBZEgiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haWxlYXJuL2VzdHJhZGEvb3V0In0=