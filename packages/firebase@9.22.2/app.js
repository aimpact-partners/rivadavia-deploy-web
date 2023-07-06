System.register(["@firebase/util@1.9.3","@firebase/component@0.6.4","@firebase/logger@0.4.0","idb@7.1.1","@firebase/app@0.9.12"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.9.3"],["@firebase/component","0.6.4"],["@firebase/logger","0.4.0"],["idb","7.1.1"],["@firebase/app","0.9.12"],["firebase","9.22.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.9.3', dep), dep => dependencies.set('@firebase/component@0.6.4', dep), dep => dependencies.set('@firebase/logger@0.4.0', dep), dep => dependencies.set('idb@7.1.1', dep), dep => dependencies.set('@firebase/app@0.9.12', dep)],
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

// .beyond/uimport/firebase/app.9.22.2.js
var app_9_22_2_exports = {};
module.exports = __toCommonJS(app_9_22_2_exports);

// node_modules/firebase/app/dist/esm/index.esm.js
var index_esm_exports = {};
var import_app = require("@firebase/app@0.9.12");
__reExport(index_esm_exports, require("@firebase/app@0.9.12"));
var name = "firebase";
var version = "9.22.2";
(0, import_app.registerVersion)(name, version, "app");

// .beyond/uimport/firebase/app.9.22.2.js
__reExport(app_9_22_2_exports, index_esm_exports, module.exports);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9maXJlYmFzZS9hcHAuOS4yMi4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZpcmViYXNlL2FwcC9pbmRleC50cyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJpbXBvcnRfYXBwIiwibmFtZSIsInZlcnNpb24iLCJfX3JlRXhwb3J0IiwiaW5kZXhfZXNtX2V4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTs7Ozs7Ozs7SUNtQkFDLDRCQUFnQkMsTUFBTUMsU0FBUyxLQUFLOzs7QURuQnBDQywrQkFBY0MsbUJBQWRMIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWlsZWFybi9lc3RyYWRhL291dCJ9