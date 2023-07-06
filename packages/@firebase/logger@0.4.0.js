System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/logger","0.4.0"]]);
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

// .beyond/uimport/@firebase/logger.0.4.0.js
var logger_0_4_0_exports = {};
__export(logger_0_4_0_exports, {
  LogLevel: () => LogLevel,
  Logger: () => Logger,
  setLogLevel: () => setLogLevel,
  setUserLogHandler: () => setUserLogHandler
});
module.exports = __toCommonJS(logger_0_4_0_exports);

// node_modules/@firebase/logger/dist/esm/index.esm2017.js
var instances = [];
var LogLevel;
(function (LogLevel2) {
  LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
  LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
  LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
  LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
  LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
  LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
  "debug": LogLevel.DEBUG,
  "verbose": LogLevel.VERBOSE,
  "info": LogLevel.INFO,
  "warn": LogLevel.WARN,
  "error": LogLevel.ERROR,
  "silent": LogLevel.SILENT
};
var defaultLogLevel = LogLevel.INFO;
var ConsoleMethod = {
  [LogLevel.DEBUG]: "log",
  [LogLevel.VERBOSE]: "log",
  [LogLevel.INFO]: "info",
  [LogLevel.WARN]: "warn",
  [LogLevel.ERROR]: "error"
};
var defaultLogHandler = (instance, logType, ...args) => {
  if (logType < instance.logLevel) {
    return;
  }
  const now = new Date().toISOString();
  const method = ConsoleMethod[logType];
  if (method) {
    console[method](`[${now}]  ${instance.name}:`, ...args);
  } else {
    throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
  }
};
var Logger = class {
  constructor(name) {
    this.name = name;
    this._logLevel = defaultLogLevel;
    this._logHandler = defaultLogHandler;
    this._userLogHandler = null;
    instances.push(this);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(val) {
    if (!(val in LogLevel)) {
      throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
    }
    this._logLevel = val;
  }
  setLogLevel(val) {
    this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(val) {
    if (typeof val !== "function") {
      throw new TypeError("Value assigned to `logHandler` must be a function");
    }
    this._logHandler = val;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(val) {
    this._userLogHandler = val;
  }
  debug(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
    this._logHandler(this, LogLevel.DEBUG, ...args);
  }
  log(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
    this._logHandler(this, LogLevel.VERBOSE, ...args);
  }
  info(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
    this._logHandler(this, LogLevel.INFO, ...args);
  }
  warn(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
    this._logHandler(this, LogLevel.WARN, ...args);
  }
  error(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
    this._logHandler(this, LogLevel.ERROR, ...args);
  }
};
function setLogLevel(level) {
  instances.forEach(inst => {
    inst.setLogLevel(level);
  });
}
function setUserLogHandler(logCallback, options) {
  for (const instance of instances) {
    let customLogLevel = null;
    if (options && options.level) {
      customLogLevel = levelStringToEnum[options.level];
    }
    if (logCallback === null) {
      instance.userLogHandler = null;
    } else {
      instance.userLogHandler = (instance2, level, ...args) => {
        const message = args.map(arg => {
          if (arg == null) {
            return null;
          } else if (typeof arg === "string") {
            return arg;
          } else if (typeof arg === "number" || typeof arg === "boolean") {
            return arg.toString();
          } else if (arg instanceof Error) {
            return arg.message;
          } else {
            try {
              return JSON.stringify(arg);
            } catch (ignored) {
              return null;
            }
          }
        }).filter(arg => arg).join(" ");
        if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance2.logLevel)) {
          logCallback({
            level: LogLevel[level].toLowerCase(),
            message,
            args,
            type: instance2.name
          });
        }
      };
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmlyZWJhc2UvbG9nZ2VyLjAuNC4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9sb2dnZXIvc3JjL2xvZ2dlci50cyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIkxvZ0xldmVsIiwiTG9nZ2VyIiwic2V0TG9nTGV2ZWwiLCJzZXRVc2VyTG9nSGFuZGxlciIsIm1vZHVsZSIsImluc3RhbmNlcyIsImxldmVsU3RyaW5nVG9FbnVtIiwiREVCVUciLCJWRVJCT1NFIiwiSU5GTyIsIldBUk4iLCJFUlJPUiIsIlNJTEVOVCIsImRlZmF1bHRMb2dMZXZlbCIsIkNvbnNvbGVNZXRob2QiLCJkZWZhdWx0TG9nSGFuZGxlciIsImluc3RhbmNlIiwibG9nVHlwZSIsImFyZ3MiLCJsb2dMZXZlbCIsIm5vdyIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIm1ldGhvZCIsImNvbnNvbGUiLCJuYW1lIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsIl9sb2dMZXZlbCIsIl9sb2dIYW5kbGVyIiwiX3VzZXJMb2dIYW5kbGVyIiwicHVzaCIsInZhbCIsIlR5cGVFcnJvciIsImxvZ0hhbmRsZXIiLCJ1c2VyTG9nSGFuZGxlciIsImRlYnVnIiwibG9nIiwiaW5mbyIsIndhcm4iLCJlcnJvciIsImxldmVsIiwiZm9yRWFjaCIsImluc3QiLCJsb2dDYWxsYmFjayIsIm9wdGlvbnMiLCJjdXN0b21Mb2dMZXZlbCIsIm1lc3NhZ2UiLCJtYXAiLCJhcmciLCJ0b1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZ25vcmVkIiwiZmlsdGVyIiwiam9pbiIsInRvTG93ZXJDYXNlIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7O0FDeUNPLElBQU1DLFlBQXNCO0lBYXZCTDtDQUFaLFVBQVlBLFdBQVE7RUFD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