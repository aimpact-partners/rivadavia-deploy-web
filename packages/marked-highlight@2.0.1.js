System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["marked-highlight","2.0.1"]]);
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

// .beyond/uimport/marked-highlight.2.0.1.js
var marked_highlight_2_0_1_exports = {};
__export(marked_highlight_2_0_1_exports, {
  markedHighlight: () => markedHighlight
});
module.exports = __toCommonJS(marked_highlight_2_0_1_exports);

// node_modules/marked-highlight/src/index.js
function markedHighlight(options) {
  if (typeof options === "function") {
    options = {
      highlight: options
    };
  }
  if (!options || typeof options.highlight !== "function") {
    throw new Error("Must provide highlight function");
  }
  if (typeof options.langPrefix !== "string") {
    options.langPrefix = "language-";
  }
  return {
    async: !!options.async,
    walkTokens(token) {
      if (token.type !== "code") {
        return;
      }
      const lang = getLang(token);
      if (options.async) {
        return Promise.resolve(options.highlight(token.text, lang)).then(updateToken(token));
      }
      const code = options.highlight(token.text, lang);
      updateToken(token)(code);
    },
    renderer: {
      code(code, infoString, escaped) {
        const lang = (infoString || "").match(/\S*/)[0];
        const classAttr = lang ? ` class="${options.langPrefix}${escape(lang)}"` : "";
        code = code.replace(/\n$/, "");
        return `<pre><code${classAttr}>${escaped ? code : escape(code, true)}
</code></pre>`;
      }
    }
  };
}
function getLang(token) {
  return (token.lang || "").match(/\S*/)[0];
}
function updateToken(token) {
  return code => {
    if (typeof code === "string" && code !== token.text) {
      token.escaped = true;
      token.text = code;
    }
  };
}
var escapeTest = /[&<>"']/;
var escapeReplace = new RegExp(escapeTest.source, "g");
var escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
var escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = ch => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9tYXJrZWQtaGlnaGxpZ2h0LjIuMC4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21hcmtlZC1oaWdobGlnaHQvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwibWFya2VkSGlnaGxpZ2h0IiwibW9kdWxlIiwib3B0aW9ucyIsImhpZ2hsaWdodCIsIkVycm9yIiwibGFuZ1ByZWZpeCIsImFzeW5jIiwid2Fsa1Rva2VucyIsInRva2VuIiwidHlwZSIsImxhbmciLCJnZXRMYW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0ZXh0IiwidGhlbiIsInVwZGF0ZVRva2VuIiwiY29kZSIsInJlbmRlcmVyIiwiaW5mb1N0cmluZyIsImVzY2FwZWQiLCJtYXRjaCIsImNsYXNzQXR0ciIsImVzY2FwZSIsInJlcGxhY2UiLCJlc2NhcGVUZXN0IiwiZXNjYXBlUmVwbGFjZSIsIlJlZ0V4cCIsInNvdXJjZSIsImVzY2FwZVRlc3ROb0VuY29kZSIsImVzY2FwZVJlcGxhY2VOb0VuY29kZSIsImVzY2FwZVJlcGxhY2VtZW50cyIsImdldEVzY2FwZVJlcGxhY2VtZW50IiwiY2giLCJodG1sIiwiZW5jb2RlIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7QUFBQTtBQUFBQzs7O0FDQU8sU0FBU0QsZ0JBQWdCRSxTQUFTO0VBQ3ZDLElBQUksT0FBT0EsWUFBWSxZQUFZO0lBQ2pDQSxVQUFVO01BQ1JDLFdBQVdEO0lBQ2I7RUFDRjtFQUVBLElBQUksQ0FBQ0EsV0FBVyxPQUFPQSxRQUFRQyxjQUFjLFlBQVk7SUFDdkQsTUFBTSxJQUFJQyxNQUFNLGlDQUFpQztFQUNuRDtFQUVBLElBQUksT0FBT0YsUUFBUUcsZUFBZSxVQUFVO0lBQzFDSCxRQUFRRyxhQUFhO0VBQ3ZCO0VBRUEsT0FBTztJQUNMQyxPQUFPLENBQUMsQ0FBQ0osUUFBUUk7SUFDakJDLFdBQVdDLE9BQU87TUFDaEIsSUFBSUEsTUFBTUMsU0FBUyxRQUFRO1FBQ3pCO01BQ0Y7TUFFQSxNQUFNQyxPQUFPQyxRQUFRSCxLQUFLO01BRTFCLElBQUlOLFFBQVFJLE9BQU87UUFDakIsT0FBT00sUUFBUUMsUUFBUVgsUUFBUUMsVUFBVUssTUFBTU0sTUFBTUosSUFBSSxDQUFDLEVBQUVLLEtBQUtDLFlBQVlSLEtBQUssQ0FBQztNQUNyRjtNQUVBLE1BQU1TLE9BQU9mLFFBQVFDLFVBQVVLLE1BQU1NLE1BQU1KLElBQUk7TUFDL0NNLFlBQVlSLEtBQUssRUFBRVMsSUFBSTtJQUN6QjtJQUNBQyxVQUFVO01BQ1JELEtBQUtBLE1BQU1FLFlBQVlDLFNBQVM7UUFDOUIsTUFBTVYsUUFBUVMsY0FBYyxJQUFJRSxNQUFNLEtBQUssRUFBRTtRQUM3QyxNQUFNQyxZQUFZWixPQUNkLFdBQVdSLFFBQVFHLGFBQWFrQixPQUFPYixJQUFJLE9BQzNDO1FBQ0pPLE9BQU9BLEtBQUtPLFFBQVEsT0FBTyxFQUFFO1FBQzdCLE9BQU8sYUFBYUYsYUFBYUYsVUFBVUgsT0FBT00sT0FBT04sTUFBTSxJQUFJO0FBQUE7TUFDckU7SUFDRjtFQUNGO0FBQ0Y7QUFFQSxTQUFTTixRQUFRSCxPQUFPO0VBQ3RCLFFBQVFBLE1BQU1FLFFBQVEsSUFBSVcsTUFBTSxLQUFLLEVBQUU7QUFDekM7QUFFQSxTQUFTTCxZQUFZUixPQUFPO0VBQzFCLE9BQVFTLFFBQVM7SUFDZixJQUFJLE9BQU9BLFNBQVMsWUFBWUEsU0FBU1QsTUFBTU0sTUFBTTtNQUNuRE4sTUFBTVksVUFBVTtNQUNoQlosTUFBTU0sT0FBT0c7SUFDZjtFQUNGO0FBQ0Y7QUFHQSxJQUFNUSxhQUFhO0FBQ25CLElBQU1DLGdCQUFnQixJQUFJQyxPQUFPRixXQUFXRyxRQUFRLEdBQUc7QUFDdkQsSUFBTUMscUJBQXFCO0FBQzNCLElBQU1DLHdCQUF3QixJQUFJSCxPQUFPRSxtQkFBbUJELFFBQVEsR0FBRztBQUN2RSxJQUFNRyxxQkFBcUI7RUFDekIsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7QUFDUDtBQUNBLElBQU1DLHVCQUF3QkMsTUFBT0YsbUJBQW1CRTtBQUN4RCxTQUFTVixPQUFPVyxNQUFNQyxRQUFRO0VBQzVCLElBQUlBLFFBQVE7SUFDVixJQUFJVixXQUFXVyxLQUFLRixJQUFJLEdBQUc7TUFDekIsT0FBT0EsS0FBS1YsUUFBUUUsZUFBZU0sb0JBQW9CO0lBQ3pEO0VBQ0YsT0FBTztJQUNMLElBQUlILG1CQUFtQk8sS0FBS0YsSUFBSSxHQUFHO01BQ2pDLE9BQU9BLEtBQUtWLFFBQVFNLHVCQUF1QkUsb0JBQW9CO0lBQ2pFO0VBQ0Y7RUFFQSxPQUFPRTtBQUNUIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWlsZWFybi9lc3RyYWRhL291dCJ9