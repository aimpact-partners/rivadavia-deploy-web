System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["marked-mangle","1.1.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/marked-mangle.1.1.0.js
var marked_mangle_1_1_0_exports = {};
__export(marked_mangle_1_1_0_exports, {
  mangle: () => mangle
});
module.exports = __toCommonJS(marked_mangle_1_1_0_exports);

// node_modules/marked-mangle/src/index.js
function mangle() {
  return {
    mangle: false,
    walkTokens(token) {
      if (token.type !== "link") {
        return;
      }
      if (!token.href.startsWith("mailto:")) {
        return;
      }
      const email = token.href.substring(7);
      const mangledEmail = mangleEmail(email);
      token.href = `mailto:${mangledEmail}`;
      if (token.tokens.length !== 1 || token.tokens[0].type !== "text" || token.tokens[0].text !== email) {
        return;
      }
      token.text = mangledEmail;
      token.tokens[0].text = mangledEmail;
    }
  };
}
function mangleEmail(text) {
  let out = "",
    i,
    ch;
  const l = text.length;
  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = "x" + ch.toString(16);
    }
    out += "&#" + ch + ";";
  }
  return out;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9tYXJrZWQtbWFuZ2xlLjEuMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21hcmtlZC1tYW5nbGUvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwibWFuZ2xlIiwibW9kdWxlIiwid2Fsa1Rva2VucyIsInRva2VuIiwidHlwZSIsImhyZWYiLCJzdGFydHNXaXRoIiwiZW1haWwiLCJzdWJzdHJpbmciLCJtYW5nbGVkRW1haWwiLCJtYW5nbGVFbWFpbCIsInRva2VucyIsImxlbmd0aCIsInRleHQiLCJvdXQiLCJpIiwiY2giLCJsIiwiY2hhckNvZGVBdCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7QUFBQTtBQUFBQzs7O0FDQU8sU0FBU0QsU0FBUztFQUN2QixPQUFPO0lBQ0xBLFFBQVE7SUFDUkUsV0FBV0MsT0FBTztNQUNoQixJQUFJQSxNQUFNQyxTQUFTLFFBQVE7UUFDekI7TUFDRjtNQUVBLElBQUksQ0FBQ0QsTUFBTUUsS0FBS0MsV0FBVyxTQUFTLEdBQUc7UUFDckM7TUFDRjtNQUVBLE1BQU1DLFFBQVFKLE1BQU1FLEtBQUtHLFVBQVUsQ0FBQztNQUNwQyxNQUFNQyxlQUFlQyxZQUFZSCxLQUFLO01BRXRDSixNQUFNRSxPQUFPLFVBQVVJO01BRXZCLElBQUlOLE1BQU1RLE9BQU9DLFdBQVcsS0FBS1QsTUFBTVEsT0FBTyxHQUFHUCxTQUFTLFVBQVVELE1BQU1RLE9BQU8sR0FBR0UsU0FBU04sT0FBTztRQUNsRztNQUNGO01BRUFKLE1BQU1VLE9BQU9KO01BQ2JOLE1BQU1RLE9BQU8sR0FBR0UsT0FBT0o7SUFDekI7RUFDRjtBQUNGO0FBRUEsU0FBU0MsWUFBWUcsTUFBTTtFQUN6QixJQUFJQyxNQUFNO0lBQ1JDO0lBQ0FDO0VBRUYsTUFBTUMsSUFBSUosS0FBS0Q7RUFDZixLQUFLRyxJQUFJLEdBQUdBLElBQUlFLEdBQUdGLEtBQUs7SUFDdEJDLEtBQUtILEtBQUtLLFdBQVdILENBQUM7SUFDdEIsSUFBSUksS0FBS0MsUUFBTyxHQUFJLEtBQUs7TUFDdkJKLEtBQUssTUFBTUEsR0FBR0ssU0FBUyxFQUFFO0lBQzNCO0lBQ0FQLE9BQU8sT0FBT0UsS0FBSztFQUNyQjtFQUVBLE9BQU9GO0FBQ1QiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haWxlYXJuL2VzdHJhZGEvb3V0In0=