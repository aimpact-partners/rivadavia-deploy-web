System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["dexie","3.2.4"]]);
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

// .beyond/uimport/dexie.3.2.4.js
var dexie_3_2_4_exports = {};
__export(dexie_3_2_4_exports, {
  Dexie: () => Dexie$1,
  RangeSet: () => RangeSet,
  default: () => dexie_3_2_4_default,
  liveQuery: () => liveQuery,
  mergeRanges: () => mergeRanges,
  rangesOverlap: () => rangesOverlap
});
module.exports = __toCommonJS(dexie_3_2_4_exports);

// node_modules/dexie/dist/modern/dexie.mjs
var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
var keys = Object.keys;
var isArray = Array.isArray;
if (typeof Promise !== "undefined" && !_global.Promise) {
  _global.Promise = Promise;
}
function extend(obj, extension) {
  if (typeof extension !== "object") return obj;
  keys(extension).forEach(function (key) {
    obj[key] = extension[key];
  });
  return obj;
}
var getProto = Object.getPrototypeOf;
var _hasOwn = {}.hasOwnProperty;
function hasOwn(obj, prop) {
  return _hasOwn.call(obj, prop);
}
function props(proto, extension) {
  if (typeof extension === "function") extension = extension(getProto(proto));
  (typeof Reflect === "undefined" ? keys : Reflect.ownKeys)(extension).forEach(key => {
    setProp(proto, key, extension[key]);
  });
}
var defineProperty = Object.defineProperty;
function setProp(obj, prop, functionOrGetSet, options) {
  defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === "function" ? {
    get: functionOrGetSet.get,
    set: functionOrGetSet.set,
    configurable: true
  } : {
    value: functionOrGetSet,
    configurable: true,
    writable: true
  }, options));
}
function derive(Child) {
  return {
    from: function (Parent) {
      Child.prototype = Object.create(Parent.prototype);
      setProp(Child.prototype, "constructor", Child);
      return {
        extend: props.bind(null, Child.prototype)
      };
    }
  };
}
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
function getPropertyDescriptor(obj, prop) {
  const pd = getOwnPropertyDescriptor(obj, prop);
  let proto;
  return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
}
var _slice = [].slice;
function slice(args, start, end) {
  return _slice.call(args, start, end);
}
function override(origFunc, overridedFactory) {
  return overridedFactory(origFunc);
}
function assert(b) {
  if (!b) throw new Error("Assertion Failed");
}
function asap$1(fn) {
  if (_global.setImmediate) setImmediate(fn);else setTimeout(fn, 0);
}
function arrayToObject(array, extractor) {
  return array.reduce((result, item, i) => {
    var nameAndValue = extractor(item, i);
    if (nameAndValue) result[nameAndValue[0]] = nameAndValue[1];
    return result;
  }, {});
}
function tryCatch(fn, onerror, args) {
  try {
    fn.apply(null, args);
  } catch (ex) {
    onerror && onerror(ex);
  }
}
function getByKeyPath(obj, keyPath) {
  if (hasOwn(obj, keyPath)) return obj[keyPath];
  if (!keyPath) return obj;
  if (typeof keyPath !== "string") {
    var rv = [];
    for (var i = 0, l = keyPath.length; i < l; ++i) {
      var val = getByKeyPath(obj, keyPath[i]);
      rv.push(val);
    }
    return rv;
  }
  var period = keyPath.indexOf(".");
  if (period !== -1) {
    var innerObj = obj[keyPath.substr(0, period)];
    return innerObj === void 0 ? void 0 : getByKeyPath(innerObj, keyPath.substr(period + 1));
  }
  return void 0;
}
function setByKeyPath(obj, keyPath, value) {
  if (!obj || keyPath === void 0) return;
  if ("isFrozen" in Object && Object.isFrozen(obj)) return;
  if (typeof keyPath !== "string" && "length" in keyPath) {
    assert(typeof value !== "string" && "length" in value);
    for (var i = 0, l = keyPath.length; i < l; ++i) {
      setByKeyPath(obj, keyPath[i], value[i]);
    }
  } else {
    var period = keyPath.indexOf(".");
    if (period !== -1) {
      var currentKeyPath = keyPath.substr(0, period);
      var remainingKeyPath = keyPath.substr(period + 1);
      if (remainingKeyPath === "") {
        if (value === void 0) {
          if (isArray(obj) && !isNaN(parseInt(currentKeyPath))) obj.splice(currentKeyPath, 1);else delete obj[currentKeyPath];
        } else obj[currentKeyPath] = value;
      } else {
        var innerObj = obj[currentKeyPath];
        if (!innerObj || !hasOwn(obj, currentKeyPath)) innerObj = obj[currentKeyPath] = {};
        setByKeyPath(innerObj, remainingKeyPath, value);
      }
    } else {
      if (value === void 0) {
        if (isArray(obj) && !isNaN(parseInt(keyPath))) obj.splice(keyPath, 1);else delete obj[keyPath];
      } else obj[keyPath] = value;
    }
  }
}
function delByKeyPath(obj, keyPath) {
  if (typeof keyPath === "string") setByKeyPath(obj, keyPath, void 0);else if ("length" in keyPath) [].map.call(keyPath, function (kp) {
    setByKeyPath(obj, kp, void 0);
  });
}
function shallowClone(obj) {
  var rv = {};
  for (var m in obj) {
    if (hasOwn(obj, m)) rv[m] = obj[m];
  }
  return rv;
}
var concat = [].concat;
function flatten(a) {
  return concat.apply([], a);
}
var intrinsicTypeNames = "Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(flatten([8, 16, 32, 64].map(num => ["Int", "Uint", "Float"].map(t => t + num + "Array")))).filter(t => _global[t]);
var intrinsicTypes = intrinsicTypeNames.map(t => _global[t]);
arrayToObject(intrinsicTypeNames, x => [x, true]);
var circularRefs = null;
function deepClone(any) {
  circularRefs = typeof WeakMap !== "undefined" && /* @__PURE__ */new WeakMap();
  const rv = innerDeepClone(any);
  circularRefs = null;
  return rv;
}
function innerDeepClone(any) {
  if (!any || typeof any !== "object") return any;
  let rv = circularRefs && circularRefs.get(any);
  if (rv) return rv;
  if (isArray(any)) {
    rv = [];
    circularRefs && circularRefs.set(any, rv);
    for (var i = 0, l = any.length; i < l; ++i) {
      rv.push(innerDeepClone(any[i]));
    }
  } else if (intrinsicTypes.indexOf(any.constructor) >= 0) {
    rv = any;
  } else {
    const proto = getProto(any);
    rv = proto === Object.prototype ? {} : Object.create(proto);
    circularRefs && circularRefs.set(any, rv);
    for (var prop in any) {
      if (hasOwn(any, prop)) {
        rv[prop] = innerDeepClone(any[prop]);
      }
    }
  }
  return rv;
}
var {
  toString
} = {};
function toStringTag(o) {
  return toString.call(o).slice(8, -1);
}
var iteratorSymbol = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
var getIteratorOf = typeof iteratorSymbol === "symbol" ? function (x) {
  var i;
  return x != null && (i = x[iteratorSymbol]) && i.apply(x);
} : function () {
  return null;
};
var NO_CHAR_ARRAY = {};
function getArrayOf(arrayLike) {
  var i, a, x, it;
  if (arguments.length === 1) {
    if (isArray(arrayLike)) return arrayLike.slice();
    if (this === NO_CHAR_ARRAY && typeof arrayLike === "string") return [arrayLike];
    if (it = getIteratorOf(arrayLike)) {
      a = [];
      while (x = it.next(), !x.done) a.push(x.value);
      return a;
    }
    if (arrayLike == null) return [arrayLike];
    i = arrayLike.length;
    if (typeof i === "number") {
      a = new Array(i);
      while (i--) a[i] = arrayLike[i];
      return a;
    }
    return [arrayLike];
  }
  i = arguments.length;
  a = new Array(i);
  while (i--) a[i] = arguments[i];
  return a;
}
var isAsyncFunction = typeof Symbol !== "undefined" ? fn => fn[Symbol.toStringTag] === "AsyncFunction" : () => false;
var debug = typeof location !== "undefined" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
function setDebug(value, filter) {
  debug = value;
  libraryFilter = filter;
}
var libraryFilter = () => true;
var NEEDS_THROW_FOR_STACK = !new Error("").stack;
function getErrorWithStack() {
  if (NEEDS_THROW_FOR_STACK) try {
    getErrorWithStack.arguments;
    throw new Error();
  } catch (e) {
    return e;
  }
  return new Error();
}
function prettyStack(exception, numIgnoredFrames) {
  var stack = exception.stack;
  if (!stack) return "";
  numIgnoredFrames = numIgnoredFrames || 0;
  if (stack.indexOf(exception.name) === 0) numIgnoredFrames += (exception.name + exception.message).split("\n").length;
  return stack.split("\n").slice(numIgnoredFrames).filter(libraryFilter).map(frame => "\n" + frame).join("");
}
var dexieErrorNames = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"];
var idbDomErrorNames = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"];
var errorList = dexieErrorNames.concat(idbDomErrorNames);
var defaultTexts = {
  VersionChanged: "Database version changed by other database connection",
  DatabaseClosed: "Database has been closed",
  Abort: "Transaction aborted",
  TransactionInactive: "Transaction has already completed or failed",
  MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
};
function DexieError(name, msg) {
  this._e = getErrorWithStack();
  this.name = name;
  this.message = msg;
}
derive(DexieError).from(Error).extend({
  stack: {
    get: function () {
      return this._stack || (this._stack = this.name + ": " + this.message + prettyStack(this._e, 2));
    }
  },
  toString: function () {
    return this.name + ": " + this.message;
  }
});
function getMultiErrorMessage(msg, failures) {
  return msg + ". Errors: " + Object.keys(failures).map(key => failures[key].toString()).filter((v, i, s) => s.indexOf(v) === i).join("\n");
}
function ModifyError(msg, failures, successCount, failedKeys) {
  this._e = getErrorWithStack();
  this.failures = failures;
  this.failedKeys = failedKeys;
  this.successCount = successCount;
  this.message = getMultiErrorMessage(msg, failures);
}
derive(ModifyError).from(DexieError);
function BulkError(msg, failures) {
  this._e = getErrorWithStack();
  this.name = "BulkError";
  this.failures = Object.keys(failures).map(pos => failures[pos]);
  this.failuresByPos = failures;
  this.message = getMultiErrorMessage(msg, failures);
}
derive(BulkError).from(DexieError);
var errnames = errorList.reduce((obj, name) => (obj[name] = name + "Error", obj), {});
var BaseException = DexieError;
var exceptions = errorList.reduce((obj, name) => {
  var fullName = name + "Error";
  function DexieError2(msgOrInner, inner) {
    this._e = getErrorWithStack();
    this.name = fullName;
    if (!msgOrInner) {
      this.message = defaultTexts[name] || fullName;
      this.inner = null;
    } else if (typeof msgOrInner === "string") {
      this.message = `${msgOrInner}${!inner ? "" : "\n " + inner}`;
      this.inner = inner || null;
    } else if (typeof msgOrInner === "object") {
      this.message = `${msgOrInner.name} ${msgOrInner.message}`;
      this.inner = msgOrInner;
    }
  }
  derive(DexieError2).from(BaseException);
  obj[name] = DexieError2;
  return obj;
}, {});
exceptions.Syntax = SyntaxError;
exceptions.Type = TypeError;
exceptions.Range = RangeError;
var exceptionMap = idbDomErrorNames.reduce((obj, name) => {
  obj[name + "Error"] = exceptions[name];
  return obj;
}, {});
function mapError(domError, message) {
  if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name]) return domError;
  var rv = new exceptionMap[domError.name](message || domError.message, domError);
  if ("stack" in domError) {
    setProp(rv, "stack", {
      get: function () {
        return this.inner.stack;
      }
    });
  }
  return rv;
}
var fullNameExceptions = errorList.reduce((obj, name) => {
  if (["Syntax", "Type", "Range"].indexOf(name) === -1) obj[name + "Error"] = exceptions[name];
  return obj;
}, {});
fullNameExceptions.ModifyError = ModifyError;
fullNameExceptions.DexieError = DexieError;
fullNameExceptions.BulkError = BulkError;
function nop() {}
function mirror(val) {
  return val;
}
function pureFunctionChain(f1, f2) {
  if (f1 == null || f1 === mirror) return f2;
  return function (val) {
    return f2(f1(val));
  };
}
function callBoth(on1, on2) {
  return function () {
    on1.apply(this, arguments);
    on2.apply(this, arguments);
  };
}
function hookCreatingChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    var res = f1.apply(this, arguments);
    if (res !== void 0) arguments[0] = res;
    var onsuccess = this.onsuccess,
      onerror = this.onerror;
    this.onsuccess = null;
    this.onerror = null;
    var res2 = f2.apply(this, arguments);
    if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    return res2 !== void 0 ? res2 : res;
  };
}
function hookDeletingChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    f1.apply(this, arguments);
    var onsuccess = this.onsuccess,
      onerror = this.onerror;
    this.onsuccess = this.onerror = null;
    f2.apply(this, arguments);
    if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
  };
}
function hookUpdatingChain(f1, f2) {
  if (f1 === nop) return f2;
  return function (modifications) {
    var res = f1.apply(this, arguments);
    extend(modifications, res);
    var onsuccess = this.onsuccess,
      onerror = this.onerror;
    this.onsuccess = null;
    this.onerror = null;
    var res2 = f2.apply(this, arguments);
    if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    return res === void 0 ? res2 === void 0 ? void 0 : res2 : extend(res, res2);
  };
}
function reverseStoppableEventChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    if (f2.apply(this, arguments) === false) return false;
    return f1.apply(this, arguments);
  };
}
function promisableChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    var res = f1.apply(this, arguments);
    if (res && typeof res.then === "function") {
      var thiz = this,
        i = arguments.length,
        args = new Array(i);
      while (i--) args[i] = arguments[i];
      return res.then(function () {
        return f2.apply(thiz, args);
      });
    }
    return f2.apply(this, arguments);
  };
}
var INTERNAL = {};
var LONG_STACKS_CLIP_LIMIT = 100,
  MAX_LONG_STACKS = 20,
  ZONE_ECHO_LIMIT = 100,
  [resolvedNativePromise, nativePromiseProto, resolvedGlobalPromise] = typeof Promise === "undefined" ? [] : (() => {
    let globalP = Promise.resolve();
    if (typeof crypto === "undefined" || !crypto.subtle) return [globalP, getProto(globalP), globalP];
    const nativeP = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
    return [nativeP, getProto(nativeP), globalP];
  })(),
  nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
var patchGlobalPromise = !!resolvedGlobalPromise;
var stack_being_generated = false;
var schedulePhysicalTick = resolvedGlobalPromise ? () => {
  resolvedGlobalPromise.then(physicalTick);
} : _global.setImmediate ? setImmediate.bind(null, physicalTick) : _global.MutationObserver ? () => {
  var hiddenDiv = document.createElement("div");
  new MutationObserver(() => {
    physicalTick();
    hiddenDiv = null;
  }).observe(hiddenDiv, {
    attributes: true
  });
  hiddenDiv.setAttribute("i", "1");
} : () => {
  setTimeout(physicalTick, 0);
};
var asap = function (callback, args) {
  microtickQueue.push([callback, args]);
  if (needsNewPhysicalTick) {
    schedulePhysicalTick();
    needsNewPhysicalTick = false;
  }
};
var isOutsideMicroTick = true,
  needsNewPhysicalTick = true,
  unhandledErrors = [],
  rejectingErrors = [],
  currentFulfiller = null,
  rejectionMapper = mirror;
var globalPSD = {
  id: "global",
  global: true,
  ref: 0,
  unhandleds: [],
  onunhandled: globalError,
  pgp: false,
  env: {},
  finalize: function () {
    this.unhandleds.forEach(uh => {
      try {
        globalError(uh[0], uh[1]);
      } catch (e) {}
    });
  }
};
var PSD = globalPSD;
var microtickQueue = [];
var numScheduledCalls = 0;
var tickFinalizers = [];
function DexiePromise(fn) {
  if (typeof this !== "object") throw new TypeError("Promises must be constructed via new");
  this._listeners = [];
  this.onuncatched = nop;
  this._lib = false;
  var psd = this._PSD = PSD;
  if (debug) {
    this._stackHolder = getErrorWithStack();
    this._prev = null;
    this._numPrev = 0;
  }
  if (typeof fn !== "function") {
    if (fn !== INTERNAL) throw new TypeError("Not a function");
    this._state = arguments[1];
    this._value = arguments[2];
    if (this._state === false) handleRejection(this, this._value);
    return;
  }
  this._state = null;
  this._value = null;
  ++psd.ref;
  executePromiseTask(this, fn);
}
var thenProp = {
  get: function () {
    var psd = PSD,
      microTaskId = totalEchoes;
    function then(onFulfilled, onRejected) {
      var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
      const cleanup = possibleAwait && !decrementExpectedAwaits();
      var rv = new DexiePromise((resolve, reject) => {
        propagateToListener(this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait, cleanup), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait, cleanup), resolve, reject, psd));
      });
      debug && linkToPreviousPromise(rv, this);
      return rv;
    }
    then.prototype = INTERNAL;
    return then;
  },
  set: function (value) {
    setProp(this, "then", value && value.prototype === INTERNAL ? thenProp : {
      get: function () {
        return value;
      },
      set: thenProp.set
    });
  }
};
props(DexiePromise.prototype, {
  then: thenProp,
  _then: function (onFulfilled, onRejected) {
    propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
  },
  catch: function (onRejected) {
    if (arguments.length === 1) return this.then(null, onRejected);
    var type2 = arguments[0],
      handler = arguments[1];
    return typeof type2 === "function" ? this.then(null, err => err instanceof type2 ? handler(err) : PromiseReject(err)) : this.then(null, err => err && err.name === type2 ? handler(err) : PromiseReject(err));
  },
  finally: function (onFinally) {
    return this.then(value => {
      onFinally();
      return value;
    }, err => {
      onFinally();
      return PromiseReject(err);
    });
  },
  stack: {
    get: function () {
      if (this._stack) return this._stack;
      try {
        stack_being_generated = true;
        var stacks = getStack(this, [], MAX_LONG_STACKS);
        var stack = stacks.join("\nFrom previous: ");
        if (this._state !== null) this._stack = stack;
        return stack;
      } finally {
        stack_being_generated = false;
      }
    }
  },
  timeout: function (ms, msg) {
    return ms < Infinity ? new DexiePromise((resolve, reject) => {
      var handle = setTimeout(() => reject(new exceptions.Timeout(msg)), ms);
      this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
    }) : this;
  }
});
if (typeof Symbol !== "undefined" && Symbol.toStringTag) setProp(DexiePromise.prototype, Symbol.toStringTag, "Dexie.Promise");
globalPSD.env = snapShot();
function Listener(onFulfilled, onRejected, resolve, reject, zone) {
  this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
  this.onRejected = typeof onRejected === "function" ? onRejected : null;
  this.resolve = resolve;
  this.reject = reject;
  this.psd = zone;
}
props(DexiePromise, {
  all: function () {
    var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise(function (resolve, reject) {
      if (values.length === 0) resolve([]);
      var remaining = values.length;
      values.forEach((a, i) => DexiePromise.resolve(a).then(x => {
        values[i] = x;
        if (! --remaining) resolve(values);
      }, reject));
    });
  },
  resolve: value => {
    if (value instanceof DexiePromise) return value;
    if (value && typeof value.then === "function") return new DexiePromise((resolve, reject) => {
      value.then(resolve, reject);
    });
    var rv = new DexiePromise(INTERNAL, true, value);
    linkToPreviousPromise(rv, currentFulfiller);
    return rv;
  },
  reject: PromiseReject,
  race: function () {
    var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise((resolve, reject) => {
      values.map(value => DexiePromise.resolve(value).then(resolve, reject));
    });
  },
  PSD: {
    get: () => PSD,
    set: value => PSD = value
  },
  totalEchoes: {
    get: () => totalEchoes
  },
  newPSD: newScope,
  usePSD,
  scheduler: {
    get: () => asap,
    set: value => {
      asap = value;
    }
  },
  rejectionMapper: {
    get: () => rejectionMapper,
    set: value => {
      rejectionMapper = value;
    }
  },
  follow: (fn, zoneProps) => {
    return new DexiePromise((resolve, reject) => {
      return newScope((resolve2, reject2) => {
        var psd = PSD;
        psd.unhandleds = [];
        psd.onunhandled = reject2;
        psd.finalize = callBoth(function () {
          run_at_end_of_this_or_next_physical_tick(() => {
            this.unhandleds.length === 0 ? resolve2() : reject2(this.unhandleds[0]);
          });
        }, psd.finalize);
        fn();
      }, zoneProps, resolve, reject);
    });
  }
});
if (NativePromise) {
  if (NativePromise.allSettled) setProp(DexiePromise, "allSettled", function () {
    const possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise(resolve => {
      if (possiblePromises.length === 0) resolve([]);
      let remaining = possiblePromises.length;
      const results = new Array(remaining);
      possiblePromises.forEach((p, i) => DexiePromise.resolve(p).then(value => results[i] = {
        status: "fulfilled",
        value
      }, reason => results[i] = {
        status: "rejected",
        reason
      }).then(() => --remaining || resolve(results)));
    });
  });
  if (NativePromise.any && typeof AggregateError !== "undefined") setProp(DexiePromise, "any", function () {
    const possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise((resolve, reject) => {
      if (possiblePromises.length === 0) reject(new AggregateError([]));
      let remaining = possiblePromises.length;
      const failures = new Array(remaining);
      possiblePromises.forEach((p, i) => DexiePromise.resolve(p).then(value => resolve(value), failure => {
        failures[i] = failure;
        if (! --remaining) reject(new AggregateError(failures));
      }));
    });
  });
}
function executePromiseTask(promise, fn) {
  try {
    fn(value => {
      if (promise._state !== null) return;
      if (value === promise) throw new TypeError("A promise cannot be resolved with itself.");
      var shouldExecuteTick = promise._lib && beginMicroTickScope();
      if (value && typeof value.then === "function") {
        executePromiseTask(promise, (resolve, reject) => {
          value instanceof DexiePromise ? value._then(resolve, reject) : value.then(resolve, reject);
        });
      } else {
        promise._state = true;
        promise._value = value;
        propagateAllListeners(promise);
      }
      if (shouldExecuteTick) endMicroTickScope();
    }, handleRejection.bind(null, promise));
  } catch (ex) {
    handleRejection(promise, ex);
  }
}
function handleRejection(promise, reason) {
  rejectingErrors.push(reason);
  if (promise._state !== null) return;
  var shouldExecuteTick = promise._lib && beginMicroTickScope();
  reason = rejectionMapper(reason);
  promise._state = false;
  promise._value = reason;
  debug && reason !== null && typeof reason === "object" && !reason._promise && tryCatch(() => {
    var origProp = getPropertyDescriptor(reason, "stack");
    reason._promise = promise;
    setProp(reason, "stack", {
      get: () => stack_being_generated ? origProp && (origProp.get ? origProp.get.apply(reason) : origProp.value) : promise.stack
    });
  });
  addPossiblyUnhandledError(promise);
  propagateAllListeners(promise);
  if (shouldExecuteTick) endMicroTickScope();
}
function propagateAllListeners(promise) {
  var listeners = promise._listeners;
  promise._listeners = [];
  for (var i = 0, len = listeners.length; i < len; ++i) {
    propagateToListener(promise, listeners[i]);
  }
  var psd = promise._PSD;
  --psd.ref || psd.finalize();
  if (numScheduledCalls === 0) {
    ++numScheduledCalls;
    asap(() => {
      if (--numScheduledCalls === 0) finalizePhysicalTick();
    }, []);
  }
}
function propagateToListener(promise, listener) {
  if (promise._state === null) {
    promise._listeners.push(listener);
    return;
  }
  var cb = promise._state ? listener.onFulfilled : listener.onRejected;
  if (cb === null) {
    return (promise._state ? listener.resolve : listener.reject)(promise._value);
  }
  ++listener.psd.ref;
  ++numScheduledCalls;
  asap(callListener, [cb, promise, listener]);
}
function callListener(cb, promise, listener) {
  try {
    currentFulfiller = promise;
    var ret,
      value = promise._value;
    if (promise._state) {
      ret = cb(value);
    } else {
      if (rejectingErrors.length) rejectingErrors = [];
      ret = cb(value);
      if (rejectingErrors.indexOf(value) === -1) markErrorAsHandled(promise);
    }
    listener.resolve(ret);
  } catch (e) {
    listener.reject(e);
  } finally {
    currentFulfiller = null;
    if (--numScheduledCalls === 0) finalizePhysicalTick();
    --listener.psd.ref || listener.psd.finalize();
  }
}
function getStack(promise, stacks, limit) {
  if (stacks.length === limit) return stacks;
  var stack = "";
  if (promise._state === false) {
    var failure = promise._value,
      errorName,
      message;
    if (failure != null) {
      errorName = failure.name || "Error";
      message = failure.message || failure;
      stack = prettyStack(failure, 0);
    } else {
      errorName = failure;
      message = "";
    }
    stacks.push(errorName + (message ? ": " + message : "") + stack);
  }
  if (debug) {
    stack = prettyStack(promise._stackHolder, 2);
    if (stack && stacks.indexOf(stack) === -1) stacks.push(stack);
    if (promise._prev) getStack(promise._prev, stacks, limit);
  }
  return stacks;
}
function linkToPreviousPromise(promise, prev) {
  var numPrev = prev ? prev._numPrev + 1 : 0;
  if (numPrev < LONG_STACKS_CLIP_LIMIT) {
    promise._prev = prev;
    promise._numPrev = numPrev;
  }
}
function physicalTick() {
  beginMicroTickScope() && endMicroTickScope();
}
function beginMicroTickScope() {
  var wasRootExec = isOutsideMicroTick;
  isOutsideMicroTick = false;
  needsNewPhysicalTick = false;
  return wasRootExec;
}
function endMicroTickScope() {
  var callbacks, i, l;
  do {
    while (microtickQueue.length > 0) {
      callbacks = microtickQueue;
      microtickQueue = [];
      l = callbacks.length;
      for (i = 0; i < l; ++i) {
        var item = callbacks[i];
        item[0].apply(null, item[1]);
      }
    }
  } while (microtickQueue.length > 0);
  isOutsideMicroTick = true;
  needsNewPhysicalTick = true;
}
function finalizePhysicalTick() {
  var unhandledErrs = unhandledErrors;
  unhandledErrors = [];
  unhandledErrs.forEach(p => {
    p._PSD.onunhandled.call(null, p._value, p);
  });
  var finalizers = tickFinalizers.slice(0);
  var i = finalizers.length;
  while (i) finalizers[--i]();
}
function run_at_end_of_this_or_next_physical_tick(fn) {
  function finalizer() {
    fn();
    tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
  }
  tickFinalizers.push(finalizer);
  ++numScheduledCalls;
  asap(() => {
    if (--numScheduledCalls === 0) finalizePhysicalTick();
  }, []);
}
function addPossiblyUnhandledError(promise) {
  if (!unhandledErrors.some(p => p._value === promise._value)) unhandledErrors.push(promise);
}
function markErrorAsHandled(promise) {
  var i = unhandledErrors.length;
  while (i) if (unhandledErrors[--i]._value === promise._value) {
    unhandledErrors.splice(i, 1);
    return;
  }
}
function PromiseReject(reason) {
  return new DexiePromise(INTERNAL, false, reason);
}
function wrap(fn, errorCatcher) {
  var psd = PSD;
  return function () {
    var wasRootExec = beginMicroTickScope(),
      outerScope = PSD;
    try {
      switchToZone(psd, true);
      return fn.apply(this, arguments);
    } catch (e) {
      errorCatcher && errorCatcher(e);
    } finally {
      switchToZone(outerScope, false);
      if (wasRootExec) endMicroTickScope();
    }
  };
}
var task = {
  awaits: 0,
  echoes: 0,
  id: 0
};
var taskCounter = 0;
var zoneStack = [];
var zoneEchoes = 0;
var totalEchoes = 0;
var zone_id_counter = 0;
function newScope(fn, props2, a1, a2) {
  var parent = PSD,
    psd = Object.create(parent);
  psd.parent = parent;
  psd.ref = 0;
  psd.global = false;
  psd.id = ++zone_id_counter;
  var globalEnv = globalPSD.env;
  psd.env = patchGlobalPromise ? {
    Promise: DexiePromise,
    PromiseProp: {
      value: DexiePromise,
      configurable: true,
      writable: true
    },
    all: DexiePromise.all,
    race: DexiePromise.race,
    allSettled: DexiePromise.allSettled,
    any: DexiePromise.any,
    resolve: DexiePromise.resolve,
    reject: DexiePromise.reject,
    nthen: getPatchedPromiseThen(globalEnv.nthen, psd),
    gthen: getPatchedPromiseThen(globalEnv.gthen, psd)
  } : {};
  if (props2) extend(psd, props2);
  ++parent.ref;
  psd.finalize = function () {
    --this.parent.ref || this.parent.finalize();
  };
  var rv = usePSD(psd, fn, a1, a2);
  if (psd.ref === 0) psd.finalize();
  return rv;
}
function incrementExpectedAwaits() {
  if (!task.id) task.id = ++taskCounter;
  ++task.awaits;
  task.echoes += ZONE_ECHO_LIMIT;
  return task.id;
}
function decrementExpectedAwaits() {
  if (!task.awaits) return false;
  if (--task.awaits === 0) task.id = 0;
  task.echoes = task.awaits * ZONE_ECHO_LIMIT;
  return true;
}
if (("" + nativePromiseThen).indexOf("[native code]") === -1) {
  incrementExpectedAwaits = decrementExpectedAwaits = nop;
}
function onPossibleParallellAsync(possiblePromise) {
  if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
    incrementExpectedAwaits();
    return possiblePromise.then(x => {
      decrementExpectedAwaits();
      return x;
    }, e => {
      decrementExpectedAwaits();
      return rejection(e);
    });
  }
  return possiblePromise;
}
function zoneEnterEcho(targetZone) {
  ++totalEchoes;
  if (!task.echoes || --task.echoes === 0) {
    task.echoes = task.id = 0;
  }
  zoneStack.push(PSD);
  switchToZone(targetZone, true);
}
function zoneLeaveEcho() {
  var zone = zoneStack[zoneStack.length - 1];
  zoneStack.pop();
  switchToZone(zone, false);
}
function switchToZone(targetZone, bEnteringZone) {
  var currentZone = PSD;
  if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (! --zoneEchoes || targetZone !== PSD)) {
    enqueueNativeMicroTask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
  }
  if (targetZone === PSD) return;
  PSD = targetZone;
  if (currentZone === globalPSD) globalPSD.env = snapShot();
  if (patchGlobalPromise) {
    var GlobalPromise = globalPSD.env.Promise;
    var targetEnv = targetZone.env;
    nativePromiseProto.then = targetEnv.nthen;
    GlobalPromise.prototype.then = targetEnv.gthen;
    if (currentZone.global || targetZone.global) {
      Object.defineProperty(_global, "Promise", targetEnv.PromiseProp);
      GlobalPromise.all = targetEnv.all;
      GlobalPromise.race = targetEnv.race;
      GlobalPromise.resolve = targetEnv.resolve;
      GlobalPromise.reject = targetEnv.reject;
      if (targetEnv.allSettled) GlobalPromise.allSettled = targetEnv.allSettled;
      if (targetEnv.any) GlobalPromise.any = targetEnv.any;
    }
  }
}
function snapShot() {
  var GlobalPromise = _global.Promise;
  return patchGlobalPromise ? {
    Promise: GlobalPromise,
    PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
    all: GlobalPromise.all,
    race: GlobalPromise.race,
    allSettled: GlobalPromise.allSettled,
    any: GlobalPromise.any,
    resolve: GlobalPromise.resolve,
    reject: GlobalPromise.reject,
    nthen: nativePromiseProto.then,
    gthen: GlobalPromise.prototype.then
  } : {};
}
function usePSD(psd, fn, a1, a2, a3) {
  var outerScope = PSD;
  try {
    switchToZone(psd, true);
    return fn(a1, a2, a3);
  } finally {
    switchToZone(outerScope, false);
  }
}
function enqueueNativeMicroTask(job) {
  nativePromiseThen.call(resolvedNativePromise, job);
}
function nativeAwaitCompatibleWrap(fn, zone, possibleAwait, cleanup) {
  return typeof fn !== "function" ? fn : function () {
    var outerZone = PSD;
    if (possibleAwait) incrementExpectedAwaits();
    switchToZone(zone, true);
    try {
      return fn.apply(this, arguments);
    } finally {
      switchToZone(outerZone, false);
      if (cleanup) enqueueNativeMicroTask(decrementExpectedAwaits);
    }
  };
}
function getPatchedPromiseThen(origThen, zone) {
  return function (onResolved, onRejected) {
    return origThen.call(this, nativeAwaitCompatibleWrap(onResolved, zone), nativeAwaitCompatibleWrap(onRejected, zone));
  };
}
var UNHANDLEDREJECTION = "unhandledrejection";
function globalError(err, promise) {
  var rv;
  try {
    rv = promise.onuncatched(err);
  } catch (e) {}
  if (rv !== false) try {
    var event,
      eventData = {
        promise,
        reason: err
      };
    if (_global.document && document.createEvent) {
      event = document.createEvent("Event");
      event.initEvent(UNHANDLEDREJECTION, true, true);
      extend(event, eventData);
    } else if (_global.CustomEvent) {
      event = new CustomEvent(UNHANDLEDREJECTION, {
        detail: eventData
      });
      extend(event, eventData);
    }
    if (event && _global.dispatchEvent) {
      dispatchEvent(event);
      if (!_global.PromiseRejectionEvent && _global.onunhandledrejection) try {
        _global.onunhandledrejection(event);
      } catch (_) {}
    }
    if (debug && event && !event.defaultPrevented) {
      console.warn(`Unhandled rejection: ${err.stack || err}`);
    }
  } catch (e) {}
}
var rejection = DexiePromise.reject;
function tempTransaction(db, mode, storeNames, fn) {
  if (!db.idbdb || !db._state.openComplete && !PSD.letThrough && !db._vip) {
    if (db._state.openComplete) {
      return rejection(new exceptions.DatabaseClosed(db._state.dbOpenError));
    }
    if (!db._state.isBeingOpened) {
      if (!db._options.autoOpen) return rejection(new exceptions.DatabaseClosed());
      db.open().catch(nop);
    }
    return db._state.dbReadyPromise.then(() => tempTransaction(db, mode, storeNames, fn));
  } else {
    var trans = db._createTransaction(mode, storeNames, db._dbSchema);
    try {
      trans.create();
      db._state.PR1398_maxLoop = 3;
    } catch (ex) {
      if (ex.name === errnames.InvalidState && db.isOpen() && --db._state.PR1398_maxLoop > 0) {
        console.warn("Dexie: Need to reopen db");
        db._close();
        return db.open().then(() => tempTransaction(db, mode, storeNames, fn));
      }
      return rejection(ex);
    }
    return trans._promise(mode, (resolve, reject) => {
      return newScope(() => {
        PSD.trans = trans;
        return fn(resolve, reject, trans);
      });
    }).then(result => {
      return trans._completion.then(() => result);
    });
  }
}
var DEXIE_VERSION = "3.2.4";
var maxString = String.fromCharCode(65535);
var minKey = -Infinity;
var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
var STRING_EXPECTED = "String expected.";
var connections = [];
var isIEOrEdge = typeof navigator !== "undefined" && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
var hasIEDeleteObjectStoreBug = isIEOrEdge;
var hangsOnDeleteLargeKeyRange = isIEOrEdge;
var dexieStackFrameFilter = frame => !/(dexie\.js|dexie\.min\.js)/.test(frame);
var DBNAMES_DB = "__dbnames";
var READONLY = "readonly";
var READWRITE = "readwrite";
function combine(filter1, filter2) {
  return filter1 ? filter2 ? function () {
    return filter1.apply(this, arguments) && filter2.apply(this, arguments);
  } : filter1 : filter2;
}
var AnyRange = {
  type: 3,
  lower: -Infinity,
  lowerOpen: false,
  upper: [[]],
  upperOpen: false
};
function workaroundForUndefinedPrimKey(keyPath) {
  return typeof keyPath === "string" && !/\./.test(keyPath) ? obj => {
    if (obj[keyPath] === void 0 && keyPath in obj) {
      obj = deepClone(obj);
      delete obj[keyPath];
    }
    return obj;
  } : obj => obj;
}
var Table = class {
  _trans(mode, fn, writeLocked) {
    const trans = this._tx || PSD.trans;
    const tableName = this.name;
    function checkTableInTransaction(resolve, reject, trans2) {
      if (!trans2.schema[tableName]) throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
      return fn(trans2.idbtrans, trans2);
    }
    const wasRootExec = beginMicroTickScope();
    try {
      return trans && trans.db === this.db ? trans === PSD.trans ? trans._promise(mode, checkTableInTransaction, writeLocked) : newScope(() => trans._promise(mode, checkTableInTransaction, writeLocked), {
        trans,
        transless: PSD.transless || PSD
      }) : tempTransaction(this.db, mode, [this.name], checkTableInTransaction);
    } finally {
      if (wasRootExec) endMicroTickScope();
    }
  }
  get(keyOrCrit, cb) {
    if (keyOrCrit && keyOrCrit.constructor === Object) return this.where(keyOrCrit).first(cb);
    return this._trans("readonly", trans => {
      return this.core.get({
        trans,
        key: keyOrCrit
      }).then(res => this.hook.reading.fire(res));
    }).then(cb);
  }
  where(indexOrCrit) {
    if (typeof indexOrCrit === "string") return new this.db.WhereClause(this, indexOrCrit);
    if (isArray(indexOrCrit)) return new this.db.WhereClause(this, `[${indexOrCrit.join("+")}]`);
    const keyPaths = keys(indexOrCrit);
    if (keyPaths.length === 1) return this.where(keyPaths[0]).equals(indexOrCrit[keyPaths[0]]);
    const compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(ix => ix.compound && keyPaths.every(keyPath => ix.keyPath.indexOf(keyPath) >= 0) && ix.keyPath.every(keyPath => keyPaths.indexOf(keyPath) >= 0))[0];
    if (compoundIndex && this.db._maxKey !== maxString) return this.where(compoundIndex.name).equals(compoundIndex.keyPath.map(kp => indexOrCrit[kp]));
    if (!compoundIndex && debug) console.warn(`The query ${JSON.stringify(indexOrCrit)} on ${this.name} would benefit of a compound index [${keyPaths.join("+")}]`);
    const {
      idxByName
    } = this.schema;
    const idb = this.db._deps.indexedDB;
    function equals(a, b) {
      try {
        return idb.cmp(a, b) === 0;
      } catch (e) {
        return false;
      }
    }
    const [idx, filterFunction] = keyPaths.reduce(([prevIndex, prevFilterFn], keyPath) => {
      const index = idxByName[keyPath];
      const value = indexOrCrit[keyPath];
      return [prevIndex || index, prevIndex || !index ? combine(prevFilterFn, index && index.multi ? x => {
        const prop = getByKeyPath(x, keyPath);
        return isArray(prop) && prop.some(item => equals(value, item));
      } : x => equals(value, getByKeyPath(x, keyPath))) : prevFilterFn];
    }, [null, null]);
    return idx ? this.where(idx.name).equals(indexOrCrit[idx.keyPath]).filter(filterFunction) : compoundIndex ? this.filter(filterFunction) : this.where(keyPaths).equals("");
  }
  filter(filterFunction) {
    return this.toCollection().and(filterFunction);
  }
  count(thenShortcut) {
    return this.toCollection().count(thenShortcut);
  }
  offset(offset) {
    return this.toCollection().offset(offset);
  }
  limit(numRows) {
    return this.toCollection().limit(numRows);
  }
  each(callback) {
    return this.toCollection().each(callback);
  }
  toArray(thenShortcut) {
    return this.toCollection().toArray(thenShortcut);
  }
  toCollection() {
    return new this.db.Collection(new this.db.WhereClause(this));
  }
  orderBy(index) {
    return new this.db.Collection(new this.db.WhereClause(this, isArray(index) ? `[${index.join("+")}]` : index));
  }
  reverse() {
    return this.toCollection().reverse();
  }
  mapToClass(constructor) {
    this.schema.mappedClass = constructor;
    const readHook = obj => {
      if (!obj) return obj;
      const res = Object.create(constructor.prototype);
      for (var m in obj) if (hasOwn(obj, m)) try {
        res[m] = obj[m];
      } catch (_) {}
      return res;
    };
    if (this.schema.readHook) {
      this.hook.reading.unsubscribe(this.schema.readHook);
    }
    this.schema.readHook = readHook;
    this.hook("reading", readHook);
    return constructor;
  }
  defineClass() {
    function Class(content) {
      extend(this, content);
    }
    return this.mapToClass(Class);
  }
  add(obj, key) {
    const {
      auto,
      keyPath
    } = this.schema.primKey;
    let objToAdd = obj;
    if (keyPath && auto) {
      objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
    }
    return this._trans("readwrite", trans => {
      return this.core.mutate({
        trans,
        type: "add",
        keys: key != null ? [key] : null,
        values: [objToAdd]
      });
    }).then(res => res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult).then(lastResult => {
      if (keyPath) {
        try {
          setByKeyPath(obj, keyPath, lastResult);
        } catch (_) {}
      }
      return lastResult;
    });
  }
  update(keyOrObject, modifications) {
    if (typeof keyOrObject === "object" && !isArray(keyOrObject)) {
      const key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
      if (key === void 0) return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
      try {
        if (typeof modifications !== "function") {
          keys(modifications).forEach(keyPath => {
            setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
          });
        } else {
          modifications(keyOrObject, {
            value: keyOrObject,
            primKey: key
          });
        }
      } catch (_a) {}
      return this.where(":id").equals(key).modify(modifications);
    } else {
      return this.where(":id").equals(keyOrObject).modify(modifications);
    }
  }
  put(obj, key) {
    const {
      auto,
      keyPath
    } = this.schema.primKey;
    let objToAdd = obj;
    if (keyPath && auto) {
      objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
    }
    return this._trans("readwrite", trans => this.core.mutate({
      trans,
      type: "put",
      values: [objToAdd],
      keys: key != null ? [key] : null
    })).then(res => res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult).then(lastResult => {
      if (keyPath) {
        try {
          setByKeyPath(obj, keyPath, lastResult);
        } catch (_) {}
      }
      return lastResult;
    });
  }
  delete(key) {
    return this._trans("readwrite", trans => this.core.mutate({
      trans,
      type: "delete",
      keys: [key]
    })).then(res => res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0);
  }
  clear() {
    return this._trans("readwrite", trans => this.core.mutate({
      trans,
      type: "deleteRange",
      range: AnyRange
    })).then(res => res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0);
  }
  bulkGet(keys2) {
    return this._trans("readonly", trans => {
      return this.core.getMany({
        keys: keys2,
        trans
      }).then(result => result.map(res => this.hook.reading.fire(res)));
    });
  }
  bulkAdd(objects, keysOrOptions, options) {
    const keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
    options = options || (keys2 ? void 0 : keysOrOptions);
    const wantResults = options ? options.allKeys : void 0;
    return this._trans("readwrite", trans => {
      const {
        auto,
        keyPath
      } = this.schema.primKey;
      if (keyPath && keys2) throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
      if (keys2 && keys2.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
      const numObjects = objects.length;
      let objectsToAdd = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
      return this.core.mutate({
        trans,
        type: "add",
        keys: keys2,
        values: objectsToAdd,
        wantResults
      }).then(({
        numFailures,
        results,
        lastResult,
        failures
      }) => {
        const result = wantResults ? results : lastResult;
        if (numFailures === 0) return result;
        throw new BulkError(`${this.name}.bulkAdd(): ${numFailures} of ${numObjects} operations failed`, failures);
      });
    });
  }
  bulkPut(objects, keysOrOptions, options) {
    const keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
    options = options || (keys2 ? void 0 : keysOrOptions);
    const wantResults = options ? options.allKeys : void 0;
    return this._trans("readwrite", trans => {
      const {
        auto,
        keyPath
      } = this.schema.primKey;
      if (keyPath && keys2) throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
      if (keys2 && keys2.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
      const numObjects = objects.length;
      let objectsToPut = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
      return this.core.mutate({
        trans,
        type: "put",
        keys: keys2,
        values: objectsToPut,
        wantResults
      }).then(({
        numFailures,
        results,
        lastResult,
        failures
      }) => {
        const result = wantResults ? results : lastResult;
        if (numFailures === 0) return result;
        throw new BulkError(`${this.name}.bulkPut(): ${numFailures} of ${numObjects} operations failed`, failures);
      });
    });
  }
  bulkDelete(keys2) {
    const numKeys = keys2.length;
    return this._trans("readwrite", trans => {
      return this.core.mutate({
        trans,
        type: "delete",
        keys: keys2
      });
    }).then(({
      numFailures,
      lastResult,
      failures
    }) => {
      if (numFailures === 0) return lastResult;
      throw new BulkError(`${this.name}.bulkDelete(): ${numFailures} of ${numKeys} operations failed`, failures);
    });
  }
};
function Events(ctx) {
  var evs = {};
  var rv = function (eventName, subscriber) {
    if (subscriber) {
      var i2 = arguments.length,
        args = new Array(i2 - 1);
      while (--i2) args[i2 - 1] = arguments[i2];
      evs[eventName].subscribe.apply(null, args);
      return ctx;
    } else if (typeof eventName === "string") {
      return evs[eventName];
    }
  };
  rv.addEventType = add;
  for (var i = 1, l = arguments.length; i < l; ++i) {
    add(arguments[i]);
  }
  return rv;
  function add(eventName, chainFunction, defaultFunction) {
    if (typeof eventName === "object") return addConfiguredEvents(eventName);
    if (!chainFunction) chainFunction = reverseStoppableEventChain;
    if (!defaultFunction) defaultFunction = nop;
    var context = {
      subscribers: [],
      fire: defaultFunction,
      subscribe: function (cb) {
        if (context.subscribers.indexOf(cb) === -1) {
          context.subscribers.push(cb);
          context.fire = chainFunction(context.fire, cb);
        }
      },
      unsubscribe: function (cb) {
        context.subscribers = context.subscribers.filter(function (fn) {
          return fn !== cb;
        });
        context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
      }
    };
    evs[eventName] = rv[eventName] = context;
    return context;
  }
  function addConfiguredEvents(cfg) {
    keys(cfg).forEach(function (eventName) {
      var args = cfg[eventName];
      if (isArray(args)) {
        add(eventName, cfg[eventName][0], cfg[eventName][1]);
      } else if (args === "asap") {
        var context = add(eventName, mirror, function fire() {
          var i2 = arguments.length,
            args2 = new Array(i2);
          while (i2--) args2[i2] = arguments[i2];
          context.subscribers.forEach(function (fn) {
            asap$1(function fireEvent() {
              fn.apply(null, args2);
            });
          });
        });
      } else throw new exceptions.InvalidArgument("Invalid event config");
    });
  }
}
function makeClassConstructor(prototype, constructor) {
  derive(constructor).from({
    prototype
  });
  return constructor;
}
function createTableConstructor(db) {
  return makeClassConstructor(Table.prototype, function Table2(name, tableSchema, trans) {
    this.db = db;
    this._tx = trans;
    this.name = name;
    this.schema = tableSchema;
    this.hook = db._allTables[name] ? db._allTables[name].hook : Events(null, {
      "creating": [hookCreatingChain, nop],
      "reading": [pureFunctionChain, mirror],
      "updating": [hookUpdatingChain, nop],
      "deleting": [hookDeletingChain, nop]
    });
  });
}
function isPlainKeyRange(ctx, ignoreLimitFilter) {
  return !(ctx.filter || ctx.algorithm || ctx.or) && (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
}
function addFilter(ctx, fn) {
  ctx.filter = combine(ctx.filter, fn);
}
function addReplayFilter(ctx, factory, isLimitFilter) {
  var curr = ctx.replayFilter;
  ctx.replayFilter = curr ? () => combine(curr(), factory()) : factory;
  ctx.justLimit = isLimitFilter && !curr;
}
function addMatchFilter(ctx, fn) {
  ctx.isMatch = combine(ctx.isMatch, fn);
}
function getIndexOrStore(ctx, coreSchema) {
  if (ctx.isPrimKey) return coreSchema.primaryKey;
  const index = coreSchema.getIndexByKeyPath(ctx.index);
  if (!index) throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + coreSchema.name + " is not indexed");
  return index;
}
function openCursor(ctx, coreTable, trans) {
  const index = getIndexOrStore(ctx, coreTable.schema);
  return coreTable.openCursor({
    trans,
    values: !ctx.keysOnly,
    reverse: ctx.dir === "prev",
    unique: !!ctx.unique,
    query: {
      index,
      range: ctx.range
    }
  });
}
function iter(ctx, fn, coreTrans, coreTable) {
  const filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
  if (!ctx.or) {
    return iterate(openCursor(ctx, coreTable, coreTrans), combine(ctx.algorithm, filter), fn, !ctx.keysOnly && ctx.valueMapper);
  } else {
    const set = {};
    const union = (item, cursor, advance) => {
      if (!filter || filter(cursor, advance, result => cursor.stop(result), err => cursor.fail(err))) {
        var primaryKey = cursor.primaryKey;
        var key = "" + primaryKey;
        if (key === "[object ArrayBuffer]") key = "" + new Uint8Array(primaryKey);
        if (!hasOwn(set, key)) {
          set[key] = true;
          fn(item, cursor, advance);
        }
      }
    };
    return Promise.all([ctx.or._iterate(union, coreTrans), iterate(openCursor(ctx, coreTable, coreTrans), ctx.algorithm, union, !ctx.keysOnly && ctx.valueMapper)]);
  }
}
function iterate(cursorPromise, filter, fn, valueMapper) {
  var mappedFn = valueMapper ? (x, c, a) => fn(valueMapper(x), c, a) : fn;
  var wrappedFn = wrap(mappedFn);
  return cursorPromise.then(cursor => {
    if (cursor) {
      return cursor.start(() => {
        var c = () => cursor.continue();
        if (!filter || filter(cursor, advancer => c = advancer, val => {
          cursor.stop(val);
          c = nop;
        }, e => {
          cursor.fail(e);
          c = nop;
        })) wrappedFn(cursor.value, cursor, advancer => c = advancer);
        c();
      });
    }
  });
}
function cmp(a, b) {
  try {
    const ta = type(a);
    const tb = type(b);
    if (ta !== tb) {
      if (ta === "Array") return 1;
      if (tb === "Array") return -1;
      if (ta === "binary") return 1;
      if (tb === "binary") return -1;
      if (ta === "string") return 1;
      if (tb === "string") return -1;
      if (ta === "Date") return 1;
      if (tb !== "Date") return NaN;
      return -1;
    }
    switch (ta) {
      case "number":
      case "Date":
      case "string":
        return a > b ? 1 : a < b ? -1 : 0;
      case "binary":
        {
          return compareUint8Arrays(getUint8Array(a), getUint8Array(b));
        }
      case "Array":
        return compareArrays(a, b);
    }
  } catch (_a) {}
  return NaN;
}
function compareArrays(a, b) {
  const al = a.length;
  const bl = b.length;
  const l = al < bl ? al : bl;
  for (let i = 0; i < l; ++i) {
    const res = cmp(a[i], b[i]);
    if (res !== 0) return res;
  }
  return al === bl ? 0 : al < bl ? -1 : 1;
}
function compareUint8Arrays(a, b) {
  const al = a.length;
  const bl = b.length;
  const l = al < bl ? al : bl;
  for (let i = 0; i < l; ++i) {
    if (a[i] !== b[i]) return a[i] < b[i] ? -1 : 1;
  }
  return al === bl ? 0 : al < bl ? -1 : 1;
}
function type(x) {
  const t = typeof x;
  if (t !== "object") return t;
  if (ArrayBuffer.isView(x)) return "binary";
  const tsTag = toStringTag(x);
  return tsTag === "ArrayBuffer" ? "binary" : tsTag;
}
function getUint8Array(a) {
  if (a instanceof Uint8Array) return a;
  if (ArrayBuffer.isView(a)) return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
  return new Uint8Array(a);
}
var Collection = class {
  _read(fn, cb) {
    var ctx = this._ctx;
    return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readonly", fn).then(cb);
  }
  _write(fn) {
    var ctx = this._ctx;
    return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readwrite", fn, "locked");
  }
  _addAlgorithm(fn) {
    var ctx = this._ctx;
    ctx.algorithm = combine(ctx.algorithm, fn);
  }
  _iterate(fn, coreTrans) {
    return iter(this._ctx, fn, coreTrans, this._ctx.table.core);
  }
  clone(props2) {
    var rv = Object.create(this.constructor.prototype),
      ctx = Object.create(this._ctx);
    if (props2) extend(ctx, props2);
    rv._ctx = ctx;
    return rv;
  }
  raw() {
    this._ctx.valueMapper = null;
    return this;
  }
  each(fn) {
    var ctx = this._ctx;
    return this._read(trans => iter(ctx, fn, trans, ctx.table.core));
  }
  count(cb) {
    return this._read(trans => {
      const ctx = this._ctx;
      const coreTable = ctx.table.core;
      if (isPlainKeyRange(ctx, true)) {
        return coreTable.count({
          trans,
          query: {
            index: getIndexOrStore(ctx, coreTable.schema),
            range: ctx.range
          }
        }).then(count2 => Math.min(count2, ctx.limit));
      } else {
        var count = 0;
        return iter(ctx, () => {
          ++count;
          return false;
        }, trans, coreTable).then(() => count);
      }
    }).then(cb);
  }
  sortBy(keyPath, cb) {
    const parts = keyPath.split(".").reverse(),
      lastPart = parts[0],
      lastIndex = parts.length - 1;
    function getval(obj, i) {
      if (i) return getval(obj[parts[i]], i - 1);
      return obj[lastPart];
    }
    var order = this._ctx.dir === "next" ? 1 : -1;
    function sorter(a, b) {
      var aVal = getval(a, lastIndex),
        bVal = getval(b, lastIndex);
      return aVal < bVal ? -order : aVal > bVal ? order : 0;
    }
    return this.toArray(function (a) {
      return a.sort(sorter);
    }).then(cb);
  }
  toArray(cb) {
    return this._read(trans => {
      var ctx = this._ctx;
      if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
        const {
          valueMapper
        } = ctx;
        const index = getIndexOrStore(ctx, ctx.table.core.schema);
        return ctx.table.core.query({
          trans,
          limit: ctx.limit,
          values: true,
          query: {
            index,
            range: ctx.range
          }
        }).then(({
          result
        }) => valueMapper ? result.map(valueMapper) : result);
      } else {
        const a = [];
        return iter(ctx, item => a.push(item), trans, ctx.table.core).then(() => a);
      }
    }, cb);
  }
  offset(offset) {
    var ctx = this._ctx;
    if (offset <= 0) return this;
    ctx.offset += offset;
    if (isPlainKeyRange(ctx)) {
      addReplayFilter(ctx, () => {
        var offsetLeft = offset;
        return (cursor, advance) => {
          if (offsetLeft === 0) return true;
          if (offsetLeft === 1) {
            --offsetLeft;
            return false;
          }
          advance(() => {
            cursor.advance(offsetLeft);
            offsetLeft = 0;
          });
          return false;
        };
      });
    } else {
      addReplayFilter(ctx, () => {
        var offsetLeft = offset;
        return () => --offsetLeft < 0;
      });
    }
    return this;
  }
  limit(numRows) {
    this._ctx.limit = Math.min(this._ctx.limit, numRows);
    addReplayFilter(this._ctx, () => {
      var rowsLeft = numRows;
      return function (cursor, advance, resolve) {
        if (--rowsLeft <= 0) advance(resolve);
        return rowsLeft >= 0;
      };
    }, true);
    return this;
  }
  until(filterFunction, bIncludeStopEntry) {
    addFilter(this._ctx, function (cursor, advance, resolve) {
      if (filterFunction(cursor.value)) {
        advance(resolve);
        return bIncludeStopEntry;
      } else {
        return true;
      }
    });
    return this;
  }
  first(cb) {
    return this.limit(1).toArray(function (a) {
      return a[0];
    }).then(cb);
  }
  last(cb) {
    return this.reverse().first(cb);
  }
  filter(filterFunction) {
    addFilter(this._ctx, function (cursor) {
      return filterFunction(cursor.value);
    });
    addMatchFilter(this._ctx, filterFunction);
    return this;
  }
  and(filter) {
    return this.filter(filter);
  }
  or(indexName) {
    return new this.db.WhereClause(this._ctx.table, indexName, this);
  }
  reverse() {
    this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev";
    if (this._ondirectionchange) this._ondirectionchange(this._ctx.dir);
    return this;
  }
  desc() {
    return this.reverse();
  }
  eachKey(cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    return this.each(function (val, cursor) {
      cb(cursor.key, cursor);
    });
  }
  eachUniqueKey(cb) {
    this._ctx.unique = "unique";
    return this.eachKey(cb);
  }
  eachPrimaryKey(cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    return this.each(function (val, cursor) {
      cb(cursor.primaryKey, cursor);
    });
  }
  keys(cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    var a = [];
    return this.each(function (item, cursor) {
      a.push(cursor.key);
    }).then(function () {
      return a;
    }).then(cb);
  }
  primaryKeys(cb) {
    var ctx = this._ctx;
    if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
      return this._read(trans => {
        var index = getIndexOrStore(ctx, ctx.table.core.schema);
        return ctx.table.core.query({
          trans,
          values: false,
          limit: ctx.limit,
          query: {
            index,
            range: ctx.range
          }
        });
      }).then(({
        result
      }) => result).then(cb);
    }
    ctx.keysOnly = !ctx.isMatch;
    var a = [];
    return this.each(function (item, cursor) {
      a.push(cursor.primaryKey);
    }).then(function () {
      return a;
    }).then(cb);
  }
  uniqueKeys(cb) {
    this._ctx.unique = "unique";
    return this.keys(cb);
  }
  firstKey(cb) {
    return this.limit(1).keys(function (a) {
      return a[0];
    }).then(cb);
  }
  lastKey(cb) {
    return this.reverse().firstKey(cb);
  }
  distinct() {
    var ctx = this._ctx,
      idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
    if (!idx || !idx.multi) return this;
    var set = {};
    addFilter(this._ctx, function (cursor) {
      var strKey = cursor.primaryKey.toString();
      var found = hasOwn(set, strKey);
      set[strKey] = true;
      return !found;
    });
    return this;
  }
  modify(changes) {
    var ctx = this._ctx;
    return this._write(trans => {
      var modifyer;
      if (typeof changes === "function") {
        modifyer = changes;
      } else {
        var keyPaths = keys(changes);
        var numKeys = keyPaths.length;
        modifyer = function (item) {
          var anythingModified = false;
          for (var i = 0; i < numKeys; ++i) {
            var keyPath = keyPaths[i],
              val = changes[keyPath];
            if (getByKeyPath(item, keyPath) !== val) {
              setByKeyPath(item, keyPath, val);
              anythingModified = true;
            }
          }
          return anythingModified;
        };
      }
      const coreTable = ctx.table.core;
      const {
        outbound,
        extractKey
      } = coreTable.schema.primaryKey;
      const limit = this.db._options.modifyChunkSize || 200;
      const totalFailures = [];
      let successCount = 0;
      const failedKeys = [];
      const applyMutateResult = (expectedCount, res) => {
        const {
          failures,
          numFailures
        } = res;
        successCount += expectedCount - numFailures;
        for (let pos of keys(failures)) {
          totalFailures.push(failures[pos]);
        }
      };
      return this.clone().primaryKeys().then(keys2 => {
        const nextChunk = offset => {
          const count = Math.min(limit, keys2.length - offset);
          return coreTable.getMany({
            trans,
            keys: keys2.slice(offset, offset + count),
            cache: "immutable"
          }).then(values => {
            const addValues = [];
            const putValues = [];
            const putKeys = outbound ? [] : null;
            const deleteKeys = [];
            for (let i = 0; i < count; ++i) {
              const origValue = values[i];
              const ctx2 = {
                value: deepClone(origValue),
                primKey: keys2[offset + i]
              };
              if (modifyer.call(ctx2, ctx2.value, ctx2) !== false) {
                if (ctx2.value == null) {
                  deleteKeys.push(keys2[offset + i]);
                } else if (!outbound && cmp(extractKey(origValue), extractKey(ctx2.value)) !== 0) {
                  deleteKeys.push(keys2[offset + i]);
                  addValues.push(ctx2.value);
                } else {
                  putValues.push(ctx2.value);
                  if (outbound) putKeys.push(keys2[offset + i]);
                }
              }
            }
            const criteria = isPlainKeyRange(ctx) && ctx.limit === Infinity && (typeof changes !== "function" || changes === deleteCallback) && {
              index: ctx.index,
              range: ctx.range
            };
            return Promise.resolve(addValues.length > 0 && coreTable.mutate({
              trans,
              type: "add",
              values: addValues
            }).then(res => {
              for (let pos in res.failures) {
                deleteKeys.splice(parseInt(pos), 1);
              }
              applyMutateResult(addValues.length, res);
            })).then(() => (putValues.length > 0 || criteria && typeof changes === "object") && coreTable.mutate({
              trans,
              type: "put",
              keys: putKeys,
              values: putValues,
              criteria,
              changeSpec: typeof changes !== "function" && changes
            }).then(res => applyMutateResult(putValues.length, res))).then(() => (deleteKeys.length > 0 || criteria && changes === deleteCallback) && coreTable.mutate({
              trans,
              type: "delete",
              keys: deleteKeys,
              criteria
            }).then(res => applyMutateResult(deleteKeys.length, res))).then(() => {
              return keys2.length > offset + count && nextChunk(offset + limit);
            });
          });
        };
        return nextChunk(0).then(() => {
          if (totalFailures.length > 0) throw new ModifyError("Error modifying one or more objects", totalFailures, successCount, failedKeys);
          return keys2.length;
        });
      });
    });
  }
  delete() {
    var ctx = this._ctx,
      range = ctx.range;
    if (isPlainKeyRange(ctx) && (ctx.isPrimKey && !hangsOnDeleteLargeKeyRange || range.type === 3)) {
      return this._write(trans => {
        const {
          primaryKey
        } = ctx.table.core.schema;
        const coreRange = range;
        return ctx.table.core.count({
          trans,
          query: {
            index: primaryKey,
            range: coreRange
          }
        }).then(count => {
          return ctx.table.core.mutate({
            trans,
            type: "deleteRange",
            range: coreRange
          }).then(({
            failures,
            lastResult,
            results,
            numFailures
          }) => {
            if (numFailures) throw new ModifyError("Could not delete some values", Object.keys(failures).map(pos => failures[pos]), count - numFailures);
            return count - numFailures;
          });
        });
      });
    }
    return this.modify(deleteCallback);
  }
};
var deleteCallback = (value, ctx) => ctx.value = null;
function createCollectionConstructor(db) {
  return makeClassConstructor(Collection.prototype, function Collection2(whereClause, keyRangeGenerator) {
    this.db = db;
    let keyRange = AnyRange,
      error = null;
    if (keyRangeGenerator) try {
      keyRange = keyRangeGenerator();
    } catch (ex) {
      error = ex;
    }
    const whereCtx = whereClause._ctx;
    const table = whereCtx.table;
    const readingHook = table.hook.reading.fire;
    this._ctx = {
      table,
      index: whereCtx.index,
      isPrimKey: !whereCtx.index || table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name,
      range: keyRange,
      keysOnly: false,
      dir: "next",
      unique: "",
      algorithm: null,
      filter: null,
      replayFilter: null,
      justLimit: true,
      isMatch: null,
      offset: 0,
      limit: Infinity,
      error,
      or: whereCtx.or,
      valueMapper: readingHook !== mirror ? readingHook : null
    };
  });
}
function simpleCompare(a, b) {
  return a < b ? -1 : a === b ? 0 : 1;
}
function simpleCompareReverse(a, b) {
  return a > b ? -1 : a === b ? 0 : 1;
}
function fail(collectionOrWhereClause, err, T) {
  var collection = collectionOrWhereClause instanceof WhereClause ? new collectionOrWhereClause.Collection(collectionOrWhereClause) : collectionOrWhereClause;
  collection._ctx.error = T ? new T(err) : new TypeError(err);
  return collection;
}
function emptyCollection(whereClause) {
  return new whereClause.Collection(whereClause, () => rangeEqual("")).limit(0);
}
function upperFactory(dir) {
  return dir === "next" ? s => s.toUpperCase() : s => s.toLowerCase();
}
function lowerFactory(dir) {
  return dir === "next" ? s => s.toLowerCase() : s => s.toUpperCase();
}
function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp2, dir) {
  var length = Math.min(key.length, lowerNeedle.length);
  var llp = -1;
  for (var i = 0; i < length; ++i) {
    var lwrKeyChar = lowerKey[i];
    if (lwrKeyChar !== lowerNeedle[i]) {
      if (cmp2(key[i], upperNeedle[i]) < 0) return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
      if (cmp2(key[i], lowerNeedle[i]) < 0) return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
      if (llp >= 0) return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
      return null;
    }
    if (cmp2(key[i], lwrKeyChar) < 0) llp = i;
  }
  if (length < lowerNeedle.length && dir === "next") return key + upperNeedle.substr(key.length);
  if (length < key.length && dir === "prev") return key.substr(0, upperNeedle.length);
  return llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1);
}
function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
  var upper,
    lower,
    compare,
    upperNeedles,
    lowerNeedles,
    direction,
    nextKeySuffix,
    needlesLen = needles.length;
  if (!needles.every(s => typeof s === "string")) {
    return fail(whereClause, STRING_EXPECTED);
  }
  function initDirection(dir) {
    upper = upperFactory(dir);
    lower = lowerFactory(dir);
    compare = dir === "next" ? simpleCompare : simpleCompareReverse;
    var needleBounds = needles.map(function (needle) {
      return {
        lower: lower(needle),
        upper: upper(needle)
      };
    }).sort(function (a, b) {
      return compare(a.lower, b.lower);
    });
    upperNeedles = needleBounds.map(function (nb) {
      return nb.upper;
    });
    lowerNeedles = needleBounds.map(function (nb) {
      return nb.lower;
    });
    direction = dir;
    nextKeySuffix = dir === "next" ? "" : suffix;
  }
  initDirection("next");
  var c = new whereClause.Collection(whereClause, () => createRange(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix));
  c._ondirectionchange = function (direction2) {
    initDirection(direction2);
  };
  var firstPossibleNeedle = 0;
  c._addAlgorithm(function (cursor, advance, resolve) {
    var key = cursor.key;
    if (typeof key !== "string") return false;
    var lowerKey = lower(key);
    if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
      return true;
    } else {
      var lowestPossibleCasing = null;
      for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
        var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
        if (casing === null && lowestPossibleCasing === null) firstPossibleNeedle = i + 1;else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
          lowestPossibleCasing = casing;
        }
      }
      if (lowestPossibleCasing !== null) {
        advance(function () {
          cursor.continue(lowestPossibleCasing + nextKeySuffix);
        });
      } else {
        advance(resolve);
      }
      return false;
    }
  });
  return c;
}
function createRange(lower, upper, lowerOpen, upperOpen) {
  return {
    type: 2,
    lower,
    upper,
    lowerOpen,
    upperOpen
  };
}
function rangeEqual(value) {
  return {
    type: 1,
    lower: value,
    upper: value
  };
}
var WhereClause = class {
  get Collection() {
    return this._ctx.table.db.Collection;
  }
  between(lower, upper, includeLower, includeUpper) {
    includeLower = includeLower !== false;
    includeUpper = includeUpper === true;
    try {
      if (this._cmp(lower, upper) > 0 || this._cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper)) return emptyCollection(this);
      return new this.Collection(this, () => createRange(lower, upper, !includeLower, !includeUpper));
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
  }
  equals(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => rangeEqual(value));
  }
  above(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => createRange(value, void 0, true));
  }
  aboveOrEqual(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => createRange(value, void 0, false));
  }
  below(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => createRange(void 0, value, false, true));
  }
  belowOrEqual(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => createRange(void 0, value));
  }
  startsWith(str) {
    if (typeof str !== "string") return fail(this, STRING_EXPECTED);
    return this.between(str, str + maxString, true, true);
  }
  startsWithIgnoreCase(str) {
    if (str === "") return this.startsWith(str);
    return addIgnoreCaseAlgorithm(this, (x, a) => x.indexOf(a[0]) === 0, [str], maxString);
  }
  equalsIgnoreCase(str) {
    return addIgnoreCaseAlgorithm(this, (x, a) => x === a[0], [str], "");
  }
  anyOfIgnoreCase() {
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0) return emptyCollection(this);
    return addIgnoreCaseAlgorithm(this, (x, a) => a.indexOf(x) !== -1, set, "");
  }
  startsWithAnyOfIgnoreCase() {
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0) return emptyCollection(this);
    return addIgnoreCaseAlgorithm(this, (x, a) => a.some(n => x.indexOf(n) === 0), set, maxString);
  }
  anyOf() {
    const set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    let compare = this._cmp;
    try {
      set.sort(compare);
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    if (set.length === 0) return emptyCollection(this);
    const c = new this.Collection(this, () => createRange(set[0], set[set.length - 1]));
    c._ondirectionchange = direction => {
      compare = direction === "next" ? this._ascending : this._descending;
      set.sort(compare);
    };
    let i = 0;
    c._addAlgorithm((cursor, advance, resolve) => {
      const key = cursor.key;
      while (compare(key, set[i]) > 0) {
        ++i;
        if (i === set.length) {
          advance(resolve);
          return false;
        }
      }
      if (compare(key, set[i]) === 0) {
        return true;
      } else {
        advance(() => {
          cursor.continue(set[i]);
        });
        return false;
      }
    });
    return c;
  }
  notEqual(value) {
    return this.inAnyRange([[minKey, value], [value, this.db._maxKey]], {
      includeLowers: false,
      includeUppers: false
    });
  }
  noneOf() {
    const set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0) return new this.Collection(this);
    try {
      set.sort(this._ascending);
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    const ranges = set.reduce((res, val) => res ? res.concat([[res[res.length - 1][1], val]]) : [[minKey, val]], null);
    ranges.push([set[set.length - 1], this.db._maxKey]);
    return this.inAnyRange(ranges, {
      includeLowers: false,
      includeUppers: false
    });
  }
  inAnyRange(ranges, options) {
    const cmp2 = this._cmp,
      ascending = this._ascending,
      descending = this._descending,
      min = this._min,
      max = this._max;
    if (ranges.length === 0) return emptyCollection(this);
    if (!ranges.every(range => range[0] !== void 0 && range[1] !== void 0 && ascending(range[0], range[1]) <= 0)) {
      return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
    }
    const includeLowers = !options || options.includeLowers !== false;
    const includeUppers = options && options.includeUppers === true;
    function addRange2(ranges2, newRange) {
      let i = 0,
        l = ranges2.length;
      for (; i < l; ++i) {
        const range = ranges2[i];
        if (cmp2(newRange[0], range[1]) < 0 && cmp2(newRange[1], range[0]) > 0) {
          range[0] = min(range[0], newRange[0]);
          range[1] = max(range[1], newRange[1]);
          break;
        }
      }
      if (i === l) ranges2.push(newRange);
      return ranges2;
    }
    let sortDirection = ascending;
    function rangeSorter(a, b) {
      return sortDirection(a[0], b[0]);
    }
    let set;
    try {
      set = ranges.reduce(addRange2, []);
      set.sort(rangeSorter);
    } catch (ex) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    let rangePos = 0;
    const keyIsBeyondCurrentEntry = includeUppers ? key => ascending(key, set[rangePos][1]) > 0 : key => ascending(key, set[rangePos][1]) >= 0;
    const keyIsBeforeCurrentEntry = includeLowers ? key => descending(key, set[rangePos][0]) > 0 : key => descending(key, set[rangePos][0]) >= 0;
    function keyWithinCurrentRange(key) {
      return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
    }
    let checkKey = keyIsBeyondCurrentEntry;
    const c = new this.Collection(this, () => createRange(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers));
    c._ondirectionchange = direction => {
      if (direction === "next") {
        checkKey = keyIsBeyondCurrentEntry;
        sortDirection = ascending;
      } else {
        checkKey = keyIsBeforeCurrentEntry;
        sortDirection = descending;
      }
      set.sort(rangeSorter);
    };
    c._addAlgorithm((cursor, advance, resolve) => {
      var key = cursor.key;
      while (checkKey(key)) {
        ++rangePos;
        if (rangePos === set.length) {
          advance(resolve);
          return false;
        }
      }
      if (keyWithinCurrentRange(key)) {
        return true;
      } else if (this._cmp(key, set[rangePos][1]) === 0 || this._cmp(key, set[rangePos][0]) === 0) {
        return false;
      } else {
        advance(() => {
          if (sortDirection === ascending) cursor.continue(set[rangePos][0]);else cursor.continue(set[rangePos][1]);
        });
        return false;
      }
    });
    return c;
  }
  startsWithAnyOf() {
    const set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (!set.every(s => typeof s === "string")) {
      return fail(this, "startsWithAnyOf() only works with strings");
    }
    if (set.length === 0) return emptyCollection(this);
    return this.inAnyRange(set.map(str => [str, str + maxString]));
  }
};
function createWhereClauseConstructor(db) {
  return makeClassConstructor(WhereClause.prototype, function WhereClause2(table, index, orCollection) {
    this.db = db;
    this._ctx = {
      table,
      index: index === ":id" ? null : index,
      or: orCollection
    };
    const indexedDB2 = db._deps.indexedDB;
    if (!indexedDB2) throw new exceptions.MissingAPI();
    this._cmp = this._ascending = indexedDB2.cmp.bind(indexedDB2);
    this._descending = (a, b) => indexedDB2.cmp(b, a);
    this._max = (a, b) => indexedDB2.cmp(a, b) > 0 ? a : b;
    this._min = (a, b) => indexedDB2.cmp(a, b) < 0 ? a : b;
    this._IDBKeyRange = db._deps.IDBKeyRange;
  });
}
function eventRejectHandler(reject) {
  return wrap(function (event) {
    preventDefault(event);
    reject(event.target.error);
    return false;
  });
}
function preventDefault(event) {
  if (event.stopPropagation) event.stopPropagation();
  if (event.preventDefault) event.preventDefault();
}
var DEXIE_STORAGE_MUTATED_EVENT_NAME = "storagemutated";
var STORAGE_MUTATED_DOM_EVENT_NAME = "x-storagemutated-1";
var globalEvents = Events(null, DEXIE_STORAGE_MUTATED_EVENT_NAME);
var Transaction = class {
  _lock() {
    assert(!PSD.global);
    ++this._reculock;
    if (this._reculock === 1 && !PSD.global) PSD.lockOwnerFor = this;
    return this;
  }
  _unlock() {
    assert(!PSD.global);
    if (--this._reculock === 0) {
      if (!PSD.global) PSD.lockOwnerFor = null;
      while (this._blockedFuncs.length > 0 && !this._locked()) {
        var fnAndPSD = this._blockedFuncs.shift();
        try {
          usePSD(fnAndPSD[1], fnAndPSD[0]);
        } catch (e) {}
      }
    }
    return this;
  }
  _locked() {
    return this._reculock && PSD.lockOwnerFor !== this;
  }
  create(idbtrans) {
    if (!this.mode) return this;
    const idbdb = this.db.idbdb;
    const dbOpenError = this.db._state.dbOpenError;
    assert(!this.idbtrans);
    if (!idbtrans && !idbdb) {
      switch (dbOpenError && dbOpenError.name) {
        case "DatabaseClosedError":
          throw new exceptions.DatabaseClosed(dbOpenError);
        case "MissingAPIError":
          throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
        default:
          throw new exceptions.OpenFailed(dbOpenError);
      }
    }
    if (!this.active) throw new exceptions.TransactionInactive();
    assert(this._completion._state === null);
    idbtrans = this.idbtrans = idbtrans || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, {
      durability: this.chromeTransactionDurability
    }) : idbdb.transaction(this.storeNames, this.mode, {
      durability: this.chromeTransactionDurability
    }));
    idbtrans.onerror = wrap(ev => {
      preventDefault(ev);
      this._reject(idbtrans.error);
    });
    idbtrans.onabort = wrap(ev => {
      preventDefault(ev);
      this.active && this._reject(new exceptions.Abort(idbtrans.error));
      this.active = false;
      this.on("abort").fire(ev);
    });
    idbtrans.oncomplete = wrap(() => {
      this.active = false;
      this._resolve();
      if ("mutatedParts" in idbtrans) {
        globalEvents.storagemutated.fire(idbtrans["mutatedParts"]);
      }
    });
    return this;
  }
  _promise(mode, fn, bWriteLock) {
    if (mode === "readwrite" && this.mode !== "readwrite") return rejection(new exceptions.ReadOnly("Transaction is readonly"));
    if (!this.active) return rejection(new exceptions.TransactionInactive());
    if (this._locked()) {
      return new DexiePromise((resolve, reject) => {
        this._blockedFuncs.push([() => {
          this._promise(mode, fn, bWriteLock).then(resolve, reject);
        }, PSD]);
      });
    } else if (bWriteLock) {
      return newScope(() => {
        var p2 = new DexiePromise((resolve, reject) => {
          this._lock();
          const rv = fn(resolve, reject, this);
          if (rv && rv.then) rv.then(resolve, reject);
        });
        p2.finally(() => this._unlock());
        p2._lib = true;
        return p2;
      });
    } else {
      var p = new DexiePromise((resolve, reject) => {
        var rv = fn(resolve, reject, this);
        if (rv && rv.then) rv.then(resolve, reject);
      });
      p._lib = true;
      return p;
    }
  }
  _root() {
    return this.parent ? this.parent._root() : this;
  }
  waitFor(promiseLike) {
    var root = this._root();
    const promise = DexiePromise.resolve(promiseLike);
    if (root._waitingFor) {
      root._waitingFor = root._waitingFor.then(() => promise);
    } else {
      root._waitingFor = promise;
      root._waitingQueue = [];
      var store = root.idbtrans.objectStore(root.storeNames[0]);
      (function spin() {
        ++root._spinCount;
        while (root._waitingQueue.length) root._waitingQueue.shift()();
        if (root._waitingFor) store.get(-Infinity).onsuccess = spin;
      })();
    }
    var currentWaitPromise = root._waitingFor;
    return new DexiePromise((resolve, reject) => {
      promise.then(res => root._waitingQueue.push(wrap(resolve.bind(null, res))), err => root._waitingQueue.push(wrap(reject.bind(null, err)))).finally(() => {
        if (root._waitingFor === currentWaitPromise) {
          root._waitingFor = null;
        }
      });
    });
  }
  abort() {
    if (this.active) {
      this.active = false;
      if (this.idbtrans) this.idbtrans.abort();
      this._reject(new exceptions.Abort());
    }
  }
  table(tableName) {
    const memoizedTables = this._memoizedTables || (this._memoizedTables = {});
    if (hasOwn(memoizedTables, tableName)) return memoizedTables[tableName];
    const tableSchema = this.schema[tableName];
    if (!tableSchema) {
      throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
    }
    const transactionBoundTable = new this.db.Table(tableName, tableSchema, this);
    transactionBoundTable.core = this.db.core.table(tableName);
    memoizedTables[tableName] = transactionBoundTable;
    return transactionBoundTable;
  }
};
function createTransactionConstructor(db) {
  return makeClassConstructor(Transaction.prototype, function Transaction2(mode, storeNames, dbschema, chromeTransactionDurability, parent) {
    this.db = db;
    this.mode = mode;
    this.storeNames = storeNames;
    this.schema = dbschema;
    this.chromeTransactionDurability = chromeTransactionDurability;
    this.idbtrans = null;
    this.on = Events(this, "complete", "error", "abort");
    this.parent = parent || null;
    this.active = true;
    this._reculock = 0;
    this._blockedFuncs = [];
    this._resolve = null;
    this._reject = null;
    this._waitingFor = null;
    this._waitingQueue = null;
    this._spinCount = 0;
    this._completion = new DexiePromise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
    this._completion.then(() => {
      this.active = false;
      this.on.complete.fire();
    }, e => {
      var wasActive = this.active;
      this.active = false;
      this.on.error.fire(e);
      this.parent ? this.parent._reject(e) : wasActive && this.idbtrans && this.idbtrans.abort();
      return rejection(e);
    });
  });
}
function createIndexSpec(name, keyPath, unique, multi, auto, compound, isPrimKey) {
  return {
    name,
    keyPath,
    unique,
    multi,
    auto,
    compound,
    src: (unique && !isPrimKey ? "&" : "") + (multi ? "*" : "") + (auto ? "++" : "") + nameFromKeyPath(keyPath)
  };
}
function nameFromKeyPath(keyPath) {
  return typeof keyPath === "string" ? keyPath : keyPath ? "[" + [].join.call(keyPath, "+") + "]" : "";
}
function createTableSchema(name, primKey, indexes) {
  return {
    name,
    primKey,
    indexes,
    mappedClass: null,
    idxByName: arrayToObject(indexes, index => [index.name, index])
  };
}
function safariMultiStoreFix(storeNames) {
  return storeNames.length === 1 ? storeNames[0] : storeNames;
}
var getMaxKey = IdbKeyRange => {
  try {
    IdbKeyRange.only([[]]);
    getMaxKey = () => [[]];
    return [[]];
  } catch (e) {
    getMaxKey = () => maxString;
    return maxString;
  }
};
function getKeyExtractor(keyPath) {
  if (keyPath == null) {
    return () => void 0;
  } else if (typeof keyPath === "string") {
    return getSinglePathKeyExtractor(keyPath);
  } else {
    return obj => getByKeyPath(obj, keyPath);
  }
}
function getSinglePathKeyExtractor(keyPath) {
  const split = keyPath.split(".");
  if (split.length === 1) {
    return obj => obj[keyPath];
  } else {
    return obj => getByKeyPath(obj, keyPath);
  }
}
function arrayify(arrayLike) {
  return [].slice.call(arrayLike);
}
var _id_counter = 0;
function getKeyPathAlias(keyPath) {
  return keyPath == null ? ":id" : typeof keyPath === "string" ? keyPath : `[${keyPath.join("+")}]`;
}
function createDBCore(db, IdbKeyRange, tmpTrans) {
  function extractSchema(db2, trans) {
    const tables2 = arrayify(db2.objectStoreNames);
    return {
      schema: {
        name: db2.name,
        tables: tables2.map(table => trans.objectStore(table)).map(store => {
          const {
            keyPath,
            autoIncrement
          } = store;
          const compound = isArray(keyPath);
          const outbound = keyPath == null;
          const indexByKeyPath = {};
          const result = {
            name: store.name,
            primaryKey: {
              name: null,
              isPrimaryKey: true,
              outbound,
              compound,
              keyPath,
              autoIncrement,
              unique: true,
              extractKey: getKeyExtractor(keyPath)
            },
            indexes: arrayify(store.indexNames).map(indexName => store.index(indexName)).map(index => {
              const {
                name,
                unique,
                multiEntry,
                keyPath: keyPath2
              } = index;
              const compound2 = isArray(keyPath2);
              const result2 = {
                name,
                compound: compound2,
                keyPath: keyPath2,
                unique,
                multiEntry,
                extractKey: getKeyExtractor(keyPath2)
              };
              indexByKeyPath[getKeyPathAlias(keyPath2)] = result2;
              return result2;
            }),
            getIndexByKeyPath: keyPath2 => indexByKeyPath[getKeyPathAlias(keyPath2)]
          };
          indexByKeyPath[":id"] = result.primaryKey;
          if (keyPath != null) {
            indexByKeyPath[getKeyPathAlias(keyPath)] = result.primaryKey;
          }
          return result;
        })
      },
      hasGetAll: tables2.length > 0 && "getAll" in trans.objectStore(tables2[0]) && !(typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
    };
  }
  function makeIDBKeyRange(range) {
    if (range.type === 3) return null;
    if (range.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
    const {
      lower,
      upper,
      lowerOpen,
      upperOpen
    } = range;
    const idbRange = lower === void 0 ? upper === void 0 ? null : IdbKeyRange.upperBound(upper, !!upperOpen) : upper === void 0 ? IdbKeyRange.lowerBound(lower, !!lowerOpen) : IdbKeyRange.bound(lower, upper, !!lowerOpen, !!upperOpen);
    return idbRange;
  }
  function createDbCoreTable(tableSchema) {
    const tableName = tableSchema.name;
    function mutate({
      trans,
      type: type2,
      keys: keys2,
      values,
      range
    }) {
      return new Promise((resolve, reject) => {
        resolve = wrap(resolve);
        const store = trans.objectStore(tableName);
        const outbound = store.keyPath == null;
        const isAddOrPut = type2 === "put" || type2 === "add";
        if (!isAddOrPut && type2 !== "delete" && type2 !== "deleteRange") throw new Error("Invalid operation type: " + type2);
        const {
          length
        } = keys2 || values || {
          length: 1
        };
        if (keys2 && values && keys2.length !== values.length) {
          throw new Error("Given keys array must have same length as given values array.");
        }
        if (length === 0) return resolve({
          numFailures: 0,
          failures: {},
          results: [],
          lastResult: void 0
        });
        let req;
        const reqs = [];
        const failures = [];
        let numFailures = 0;
        const errorHandler = event => {
          ++numFailures;
          preventDefault(event);
        };
        if (type2 === "deleteRange") {
          if (range.type === 4) return resolve({
            numFailures,
            failures,
            results: [],
            lastResult: void 0
          });
          if (range.type === 3) reqs.push(req = store.clear());else reqs.push(req = store.delete(makeIDBKeyRange(range)));
        } else {
          const [args1, args2] = isAddOrPut ? outbound ? [values, keys2] : [values, null] : [keys2, null];
          if (isAddOrPut) {
            for (let i = 0; i < length; ++i) {
              reqs.push(req = args2 && args2[i] !== void 0 ? store[type2](args1[i], args2[i]) : store[type2](args1[i]));
              req.onerror = errorHandler;
            }
          } else {
            for (let i = 0; i < length; ++i) {
              reqs.push(req = store[type2](args1[i]));
              req.onerror = errorHandler;
            }
          }
        }
        const done = event => {
          const lastResult = event.target.result;
          reqs.forEach((req2, i) => req2.error != null && (failures[i] = req2.error));
          resolve({
            numFailures,
            failures,
            results: type2 === "delete" ? keys2 : reqs.map(req2 => req2.result),
            lastResult
          });
        };
        req.onerror = event => {
          errorHandler(event);
          done(event);
        };
        req.onsuccess = done;
      });
    }
    function openCursor2({
      trans,
      values,
      query: query2,
      reverse,
      unique
    }) {
      return new Promise((resolve, reject) => {
        resolve = wrap(resolve);
        const {
          index,
          range
        } = query2;
        const store = trans.objectStore(tableName);
        const source = index.isPrimaryKey ? store : store.index(index.name);
        const direction = reverse ? unique ? "prevunique" : "prev" : unique ? "nextunique" : "next";
        const req = values || !("openKeyCursor" in source) ? source.openCursor(makeIDBKeyRange(range), direction) : source.openKeyCursor(makeIDBKeyRange(range), direction);
        req.onerror = eventRejectHandler(reject);
        req.onsuccess = wrap(ev => {
          const cursor = req.result;
          if (!cursor) {
            resolve(null);
            return;
          }
          cursor.___id = ++_id_counter;
          cursor.done = false;
          const _cursorContinue = cursor.continue.bind(cursor);
          let _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
          if (_cursorContinuePrimaryKey) _cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor);
          const _cursorAdvance = cursor.advance.bind(cursor);
          const doThrowCursorIsNotStarted = () => {
            throw new Error("Cursor not started");
          };
          const doThrowCursorIsStopped = () => {
            throw new Error("Cursor not stopped");
          };
          cursor.trans = trans;
          cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsNotStarted;
          cursor.fail = wrap(reject);
          cursor.next = function () {
            let gotOne = 1;
            return this.start(() => gotOne-- ? this.continue() : this.stop()).then(() => this);
          };
          cursor.start = callback => {
            const iterationPromise = new Promise((resolveIteration, rejectIteration) => {
              resolveIteration = wrap(resolveIteration);
              req.onerror = eventRejectHandler(rejectIteration);
              cursor.fail = rejectIteration;
              cursor.stop = value => {
                cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsStopped;
                resolveIteration(value);
              };
            });
            const guardedCallback = () => {
              if (req.result) {
                try {
                  callback();
                } catch (err) {
                  cursor.fail(err);
                }
              } else {
                cursor.done = true;
                cursor.start = () => {
                  throw new Error("Cursor behind last entry");
                };
                cursor.stop();
              }
            };
            req.onsuccess = wrap(ev2 => {
              req.onsuccess = guardedCallback;
              guardedCallback();
            });
            cursor.continue = _cursorContinue;
            cursor.continuePrimaryKey = _cursorContinuePrimaryKey;
            cursor.advance = _cursorAdvance;
            guardedCallback();
            return iterationPromise;
          };
          resolve(cursor);
        }, reject);
      });
    }
    function query(hasGetAll2) {
      return request => {
        return new Promise((resolve, reject) => {
          resolve = wrap(resolve);
          const {
            trans,
            values,
            limit,
            query: query2
          } = request;
          const nonInfinitLimit = limit === Infinity ? void 0 : limit;
          const {
            index,
            range
          } = query2;
          const store = trans.objectStore(tableName);
          const source = index.isPrimaryKey ? store : store.index(index.name);
          const idbKeyRange = makeIDBKeyRange(range);
          if (limit === 0) return resolve({
            result: []
          });
          if (hasGetAll2) {
            const req = values ? source.getAll(idbKeyRange, nonInfinitLimit) : source.getAllKeys(idbKeyRange, nonInfinitLimit);
            req.onsuccess = event => resolve({
              result: event.target.result
            });
            req.onerror = eventRejectHandler(reject);
          } else {
            let count = 0;
            const req = values || !("openKeyCursor" in source) ? source.openCursor(idbKeyRange) : source.openKeyCursor(idbKeyRange);
            const result = [];
            req.onsuccess = event => {
              const cursor = req.result;
              if (!cursor) return resolve({
                result
              });
              result.push(values ? cursor.value : cursor.primaryKey);
              if (++count === limit) return resolve({
                result
              });
              cursor.continue();
            };
            req.onerror = eventRejectHandler(reject);
          }
        });
      };
    }
    return {
      name: tableName,
      schema: tableSchema,
      mutate,
      getMany({
        trans,
        keys: keys2
      }) {
        return new Promise((resolve, reject) => {
          resolve = wrap(resolve);
          const store = trans.objectStore(tableName);
          const length = keys2.length;
          const result = new Array(length);
          let keyCount = 0;
          let callbackCount = 0;
          let req;
          const successHandler = event => {
            const req2 = event.target;
            if ((result[req2._pos] = req2.result) != null) ;
            if (++callbackCount === keyCount) resolve(result);
          };
          const errorHandler = eventRejectHandler(reject);
          for (let i = 0; i < length; ++i) {
            const key = keys2[i];
            if (key != null) {
              req = store.get(keys2[i]);
              req._pos = i;
              req.onsuccess = successHandler;
              req.onerror = errorHandler;
              ++keyCount;
            }
          }
          if (keyCount === 0) resolve(result);
        });
      },
      get({
        trans,
        key
      }) {
        return new Promise((resolve, reject) => {
          resolve = wrap(resolve);
          const store = trans.objectStore(tableName);
          const req = store.get(key);
          req.onsuccess = event => resolve(event.target.result);
          req.onerror = eventRejectHandler(reject);
        });
      },
      query: query(hasGetAll),
      openCursor: openCursor2,
      count({
        query: query2,
        trans
      }) {
        const {
          index,
          range
        } = query2;
        return new Promise((resolve, reject) => {
          const store = trans.objectStore(tableName);
          const source = index.isPrimaryKey ? store : store.index(index.name);
          const idbKeyRange = makeIDBKeyRange(range);
          const req = idbKeyRange ? source.count(idbKeyRange) : source.count();
          req.onsuccess = wrap(ev => resolve(ev.target.result));
          req.onerror = eventRejectHandler(reject);
        });
      }
    };
  }
  const {
    schema,
    hasGetAll
  } = extractSchema(db, tmpTrans);
  const tables = schema.tables.map(tableSchema => createDbCoreTable(tableSchema));
  const tableMap = {};
  tables.forEach(table => tableMap[table.name] = table);
  return {
    stack: "dbcore",
    transaction: db.transaction.bind(db),
    table(name) {
      const result = tableMap[name];
      if (!result) throw new Error(`Table '${name}' not found`);
      return tableMap[name];
    },
    MIN_KEY: -Infinity,
    MAX_KEY: getMaxKey(IdbKeyRange),
    schema
  };
}
function createMiddlewareStack(stackImpl, middlewares) {
  return middlewares.reduce((down, {
    create
  }) => ({
    ...down,
    ...create(down)
  }), stackImpl);
}
function createMiddlewareStacks(middlewares, idbdb, {
  IDBKeyRange,
  indexedDB: indexedDB2
}, tmpTrans) {
  const dbcore = createMiddlewareStack(createDBCore(idbdb, IDBKeyRange, tmpTrans), middlewares.dbcore);
  return {
    dbcore
  };
}
function generateMiddlewareStacks({
  _novip: db
}, tmpTrans) {
  const idbdb = tmpTrans.db;
  const stacks = createMiddlewareStacks(db._middlewares, idbdb, db._deps, tmpTrans);
  db.core = stacks.dbcore;
  db.tables.forEach(table => {
    const tableName = table.name;
    if (db.core.schema.tables.some(tbl => tbl.name === tableName)) {
      table.core = db.core.table(tableName);
      if (db[tableName] instanceof db.Table) {
        db[tableName].core = table.core;
      }
    }
  });
}
function setApiOnPlace({
  _novip: db
}, objs, tableNames, dbschema) {
  tableNames.forEach(tableName => {
    const schema = dbschema[tableName];
    objs.forEach(obj => {
      const propDesc = getPropertyDescriptor(obj, tableName);
      if (!propDesc || "value" in propDesc && propDesc.value === void 0) {
        if (obj === db.Transaction.prototype || obj instanceof db.Transaction) {
          setProp(obj, tableName, {
            get() {
              return this.table(tableName);
            },
            set(value) {
              defineProperty(this, tableName, {
                value,
                writable: true,
                configurable: true,
                enumerable: true
              });
            }
          });
        } else {
          obj[tableName] = new db.Table(tableName, schema);
        }
      }
    });
  });
}
function removeTablesApi({
  _novip: db
}, objs) {
  objs.forEach(obj => {
    for (let key in obj) {
      if (obj[key] instanceof db.Table) delete obj[key];
    }
  });
}
function lowerVersionFirst(a, b) {
  return a._cfg.version - b._cfg.version;
}
function runUpgraders(db, oldVersion, idbUpgradeTrans, reject) {
  const globalSchema = db._dbSchema;
  const trans = db._createTransaction("readwrite", db._storeNames, globalSchema);
  trans.create(idbUpgradeTrans);
  trans._completion.catch(reject);
  const rejectTransaction = trans._reject.bind(trans);
  const transless = PSD.transless || PSD;
  newScope(() => {
    PSD.trans = trans;
    PSD.transless = transless;
    if (oldVersion === 0) {
      keys(globalSchema).forEach(tableName => {
        createTable(idbUpgradeTrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
      });
      generateMiddlewareStacks(db, idbUpgradeTrans);
      DexiePromise.follow(() => db.on.populate.fire(trans)).catch(rejectTransaction);
    } else updateTablesAndIndexes(db, oldVersion, trans, idbUpgradeTrans).catch(rejectTransaction);
  });
}
function updateTablesAndIndexes({
  _novip: db
}, oldVersion, trans, idbUpgradeTrans) {
  const queue = [];
  const versions = db._versions;
  let globalSchema = db._dbSchema = buildGlobalSchema(db, db.idbdb, idbUpgradeTrans);
  let anyContentUpgraderHasRun = false;
  const versToRun = versions.filter(v => v._cfg.version >= oldVersion);
  versToRun.forEach(version => {
    queue.push(() => {
      const oldSchema = globalSchema;
      const newSchema = version._cfg.dbschema;
      adjustToExistingIndexNames(db, oldSchema, idbUpgradeTrans);
      adjustToExistingIndexNames(db, newSchema, idbUpgradeTrans);
      globalSchema = db._dbSchema = newSchema;
      const diff = getSchemaDiff(oldSchema, newSchema);
      diff.add.forEach(tuple => {
        createTable(idbUpgradeTrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
      });
      diff.change.forEach(change => {
        if (change.recreate) {
          throw new exceptions.Upgrade("Not yet support for changing primary key");
        } else {
          const store = idbUpgradeTrans.objectStore(change.name);
          change.add.forEach(idx => addIndex(store, idx));
          change.change.forEach(idx => {
            store.deleteIndex(idx.name);
            addIndex(store, idx);
          });
          change.del.forEach(idxName => store.deleteIndex(idxName));
        }
      });
      const contentUpgrade = version._cfg.contentUpgrade;
      if (contentUpgrade && version._cfg.version > oldVersion) {
        generateMiddlewareStacks(db, idbUpgradeTrans);
        trans._memoizedTables = {};
        anyContentUpgraderHasRun = true;
        let upgradeSchema = shallowClone(newSchema);
        diff.del.forEach(table => {
          upgradeSchema[table] = oldSchema[table];
        });
        removeTablesApi(db, [db.Transaction.prototype]);
        setApiOnPlace(db, [db.Transaction.prototype], keys(upgradeSchema), upgradeSchema);
        trans.schema = upgradeSchema;
        const contentUpgradeIsAsync = isAsyncFunction(contentUpgrade);
        if (contentUpgradeIsAsync) {
          incrementExpectedAwaits();
        }
        let returnValue;
        const promiseFollowed = DexiePromise.follow(() => {
          returnValue = contentUpgrade(trans);
          if (returnValue) {
            if (contentUpgradeIsAsync) {
              var decrementor = decrementExpectedAwaits.bind(null, null);
              returnValue.then(decrementor, decrementor);
            }
          }
        });
        return returnValue && typeof returnValue.then === "function" ? DexiePromise.resolve(returnValue) : promiseFollowed.then(() => returnValue);
      }
    });
    queue.push(idbtrans => {
      if (!anyContentUpgraderHasRun || !hasIEDeleteObjectStoreBug) {
        const newSchema = version._cfg.dbschema;
        deleteRemovedTables(newSchema, idbtrans);
      }
      removeTablesApi(db, [db.Transaction.prototype]);
      setApiOnPlace(db, [db.Transaction.prototype], db._storeNames, db._dbSchema);
      trans.schema = db._dbSchema;
    });
  });
  function runQueue() {
    return queue.length ? DexiePromise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) : DexiePromise.resolve();
  }
  return runQueue().then(() => {
    createMissingTables(globalSchema, idbUpgradeTrans);
  });
}
function getSchemaDiff(oldSchema, newSchema) {
  const diff = {
    del: [],
    add: [],
    change: []
  };
  let table;
  for (table in oldSchema) {
    if (!newSchema[table]) diff.del.push(table);
  }
  for (table in newSchema) {
    const oldDef = oldSchema[table],
      newDef = newSchema[table];
    if (!oldDef) {
      diff.add.push([table, newDef]);
    } else {
      const change = {
        name: table,
        def: newDef,
        recreate: false,
        del: [],
        add: [],
        change: []
      };
      if ("" + (oldDef.primKey.keyPath || "") !== "" + (newDef.primKey.keyPath || "") || oldDef.primKey.auto !== newDef.primKey.auto && !isIEOrEdge) {
        change.recreate = true;
        diff.change.push(change);
      } else {
        const oldIndexes = oldDef.idxByName;
        const newIndexes = newDef.idxByName;
        let idxName;
        for (idxName in oldIndexes) {
          if (!newIndexes[idxName]) change.del.push(idxName);
        }
        for (idxName in newIndexes) {
          const oldIdx = oldIndexes[idxName],
            newIdx = newIndexes[idxName];
          if (!oldIdx) change.add.push(newIdx);else if (oldIdx.src !== newIdx.src) change.change.push(newIdx);
        }
        if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
          diff.change.push(change);
        }
      }
    }
  }
  return diff;
}
function createTable(idbtrans, tableName, primKey, indexes) {
  const store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? {
    keyPath: primKey.keyPath,
    autoIncrement: primKey.auto
  } : {
    autoIncrement: primKey.auto
  });
  indexes.forEach(idx => addIndex(store, idx));
  return store;
}
function createMissingTables(newSchema, idbtrans) {
  keys(newSchema).forEach(tableName => {
    if (!idbtrans.db.objectStoreNames.contains(tableName)) {
      createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
    }
  });
}
function deleteRemovedTables(newSchema, idbtrans) {
  [].slice.call(idbtrans.db.objectStoreNames).forEach(storeName => newSchema[storeName] == null && idbtrans.db.deleteObjectStore(storeName));
}
function addIndex(store, idx) {
  store.createIndex(idx.name, idx.keyPath, {
    unique: idx.unique,
    multiEntry: idx.multi
  });
}
function buildGlobalSchema(db, idbdb, tmpTrans) {
  const globalSchema = {};
  const dbStoreNames = slice(idbdb.objectStoreNames, 0);
  dbStoreNames.forEach(storeName => {
    const store = tmpTrans.objectStore(storeName);
    let keyPath = store.keyPath;
    const primKey = createIndexSpec(nameFromKeyPath(keyPath), keyPath || "", false, false, !!store.autoIncrement, keyPath && typeof keyPath !== "string", true);
    const indexes = [];
    for (let j = 0; j < store.indexNames.length; ++j) {
      const idbindex = store.index(store.indexNames[j]);
      keyPath = idbindex.keyPath;
      var index = createIndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== "string", false);
      indexes.push(index);
    }
    globalSchema[storeName] = createTableSchema(storeName, primKey, indexes);
  });
  return globalSchema;
}
function readGlobalSchema({
  _novip: db
}, idbdb, tmpTrans) {
  db.verno = idbdb.version / 10;
  const globalSchema = db._dbSchema = buildGlobalSchema(db, idbdb, tmpTrans);
  db._storeNames = slice(idbdb.objectStoreNames, 0);
  setApiOnPlace(db, [db._allTables], keys(globalSchema), globalSchema);
}
function verifyInstalledSchema(db, tmpTrans) {
  const installedSchema = buildGlobalSchema(db, db.idbdb, tmpTrans);
  const diff = getSchemaDiff(installedSchema, db._dbSchema);
  return !(diff.add.length || diff.change.some(ch => ch.add.length || ch.change.length));
}
function adjustToExistingIndexNames({
  _novip: db
}, schema, idbtrans) {
  const storeNames = idbtrans.db.objectStoreNames;
  for (let i = 0; i < storeNames.length; ++i) {
    const storeName = storeNames[i];
    const store = idbtrans.objectStore(storeName);
    db._hasGetAll = "getAll" in store;
    for (let j = 0; j < store.indexNames.length; ++j) {
      const indexName = store.indexNames[j];
      const keyPath = store.index(indexName).keyPath;
      const dexieName = typeof keyPath === "string" ? keyPath : "[" + slice(keyPath).join("+") + "]";
      if (schema[storeName]) {
        const indexSpec = schema[storeName].idxByName[dexieName];
        if (indexSpec) {
          indexSpec.name = indexName;
          delete schema[storeName].idxByName[dexieName];
          schema[storeName].idxByName[indexName] = indexSpec;
        }
      }
    }
  }
  if (typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
    db._hasGetAll = false;
  }
}
function parseIndexSyntax(primKeyAndIndexes) {
  return primKeyAndIndexes.split(",").map((index, indexNum) => {
    index = index.trim();
    const name = index.replace(/([&*]|\+\+)/g, "");
    const keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split("+") : name;
    return createIndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), indexNum === 0);
  });
}
var Version = class {
  _parseStoresSpec(stores, outSchema) {
    keys(stores).forEach(tableName => {
      if (stores[tableName] !== null) {
        var indexes = parseIndexSyntax(stores[tableName]);
        var primKey = indexes.shift();
        if (primKey.multi) throw new exceptions.Schema("Primary key cannot be multi-valued");
        indexes.forEach(idx => {
          if (idx.auto) throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
          if (!idx.keyPath) throw new exceptions.Schema("Index must have a name and cannot be an empty string");
        });
        outSchema[tableName] = createTableSchema(tableName, primKey, indexes);
      }
    });
  }
  stores(stores) {
    const db = this.db;
    this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;
    const versions = db._versions;
    const storesSpec = {};
    let dbschema = {};
    versions.forEach(version => {
      extend(storesSpec, version._cfg.storesSource);
      dbschema = version._cfg.dbschema = {};
      version._parseStoresSpec(storesSpec, dbschema);
    });
    db._dbSchema = dbschema;
    removeTablesApi(db, [db._allTables, db, db.Transaction.prototype]);
    setApiOnPlace(db, [db._allTables, db, db.Transaction.prototype, this._cfg.tables], keys(dbschema), dbschema);
    db._storeNames = keys(dbschema);
    return this;
  }
  upgrade(upgradeFunction) {
    this._cfg.contentUpgrade = promisableChain(this._cfg.contentUpgrade || nop, upgradeFunction);
    return this;
  }
};
function createVersionConstructor(db) {
  return makeClassConstructor(Version.prototype, function Version2(versionNumber) {
    this.db = db;
    this._cfg = {
      version: versionNumber,
      storesSource: null,
      dbschema: {},
      tables: {},
      contentUpgrade: null
    };
  });
}
function getDbNamesTable(indexedDB2, IDBKeyRange) {
  let dbNamesDB = indexedDB2["_dbNamesDB"];
  if (!dbNamesDB) {
    dbNamesDB = indexedDB2["_dbNamesDB"] = new Dexie$1(DBNAMES_DB, {
      addons: [],
      indexedDB: indexedDB2,
      IDBKeyRange
    });
    dbNamesDB.version(1).stores({
      dbnames: "name"
    });
  }
  return dbNamesDB.table("dbnames");
}
function hasDatabasesNative(indexedDB2) {
  return indexedDB2 && typeof indexedDB2.databases === "function";
}
function getDatabaseNames({
  indexedDB: indexedDB2,
  IDBKeyRange
}) {
  return hasDatabasesNative(indexedDB2) ? Promise.resolve(indexedDB2.databases()).then(infos => infos.map(info => info.name).filter(name => name !== DBNAMES_DB)) : getDbNamesTable(indexedDB2, IDBKeyRange).toCollection().primaryKeys();
}
function _onDatabaseCreated({
  indexedDB: indexedDB2,
  IDBKeyRange
}, name) {
  !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).put({
    name
  }).catch(nop);
}
function _onDatabaseDeleted({
  indexedDB: indexedDB2,
  IDBKeyRange
}, name) {
  !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).delete(name).catch(nop);
}
function vip(fn) {
  return newScope(function () {
    PSD.letThrough = true;
    return fn();
  });
}
function idbReady() {
  var isSafari = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
  if (!isSafari || !indexedDB.databases) return Promise.resolve();
  var intervalId;
  return new Promise(function (resolve) {
    var tryIdb = function () {
      return indexedDB.databases().finally(resolve);
    };
    intervalId = setInterval(tryIdb, 100);
    tryIdb();
  }).finally(function () {
    return clearInterval(intervalId);
  });
}
function dexieOpen(db) {
  const state = db._state;
  const {
    indexedDB: indexedDB2
  } = db._deps;
  if (state.isBeingOpened || db.idbdb) return state.dbReadyPromise.then(() => state.dbOpenError ? rejection(state.dbOpenError) : db);
  debug && (state.openCanceller._stackHolder = getErrorWithStack());
  state.isBeingOpened = true;
  state.dbOpenError = null;
  state.openComplete = false;
  const openCanceller = state.openCanceller;
  function throwIfCancelled() {
    if (state.openCanceller !== openCanceller) throw new exceptions.DatabaseClosed("db.open() was cancelled");
  }
  let resolveDbReady = state.dbReadyResolve,
    upgradeTransaction = null,
    wasCreated = false;
  return DexiePromise.race([openCanceller, (typeof navigator === "undefined" ? DexiePromise.resolve() : idbReady()).then(() => new DexiePromise((resolve, reject) => {
    throwIfCancelled();
    if (!indexedDB2) throw new exceptions.MissingAPI();
    const dbName = db.name;
    const req = state.autoSchema ? indexedDB2.open(dbName) : indexedDB2.open(dbName, Math.round(db.verno * 10));
    if (!req) throw new exceptions.MissingAPI();
    req.onerror = eventRejectHandler(reject);
    req.onblocked = wrap(db._fireOnBlocked);
    req.onupgradeneeded = wrap(e => {
      upgradeTransaction = req.transaction;
      if (state.autoSchema && !db._options.allowEmptyDB) {
        req.onerror = preventDefault;
        upgradeTransaction.abort();
        req.result.close();
        const delreq = indexedDB2.deleteDatabase(dbName);
        delreq.onsuccess = delreq.onerror = wrap(() => {
          reject(new exceptions.NoSuchDatabase(`Database ${dbName} doesnt exist`));
        });
      } else {
        upgradeTransaction.onerror = eventRejectHandler(reject);
        var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion;
        wasCreated = oldVer < 1;
        db._novip.idbdb = req.result;
        runUpgraders(db, oldVer / 10, upgradeTransaction, reject);
      }
    }, reject);
    req.onsuccess = wrap(() => {
      upgradeTransaction = null;
      const idbdb = db._novip.idbdb = req.result;
      const objectStoreNames = slice(idbdb.objectStoreNames);
      if (objectStoreNames.length > 0) try {
        const tmpTrans = idbdb.transaction(safariMultiStoreFix(objectStoreNames), "readonly");
        if (state.autoSchema) readGlobalSchema(db, idbdb, tmpTrans);else {
          adjustToExistingIndexNames(db, db._dbSchema, tmpTrans);
          if (!verifyInstalledSchema(db, tmpTrans)) {
            console.warn(`Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.`);
          }
        }
        generateMiddlewareStacks(db, tmpTrans);
      } catch (e) {}
      connections.push(db);
      idbdb.onversionchange = wrap(ev => {
        state.vcFired = true;
        db.on("versionchange").fire(ev);
      });
      idbdb.onclose = wrap(ev => {
        db.on("close").fire(ev);
      });
      if (wasCreated) _onDatabaseCreated(db._deps, dbName);
      resolve();
    }, reject);
  }))]).then(() => {
    throwIfCancelled();
    state.onReadyBeingFired = [];
    return DexiePromise.resolve(vip(() => db.on.ready.fire(db.vip))).then(function fireRemainders() {
      if (state.onReadyBeingFired.length > 0) {
        let remainders = state.onReadyBeingFired.reduce(promisableChain, nop);
        state.onReadyBeingFired = [];
        return DexiePromise.resolve(vip(() => remainders(db.vip))).then(fireRemainders);
      }
    });
  }).finally(() => {
    state.onReadyBeingFired = null;
    state.isBeingOpened = false;
  }).then(() => {
    return db;
  }).catch(err => {
    state.dbOpenError = err;
    try {
      upgradeTransaction && upgradeTransaction.abort();
    } catch (_a) {}
    if (openCanceller === state.openCanceller) {
      db._close();
    }
    return rejection(err);
  }).finally(() => {
    state.openComplete = true;
    resolveDbReady();
  });
}
function awaitIterator(iterator) {
  var callNext = result => iterator.next(result),
    doThrow = error => iterator.throw(error),
    onSuccess = step(callNext),
    onError = step(doThrow);
  function step(getNext) {
    return val => {
      var next = getNext(val),
        value = next.value;
      return next.done ? value : !value || typeof value.then !== "function" ? isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) : value.then(onSuccess, onError);
    };
  }
  return step(callNext)();
}
function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
  var i = arguments.length;
  if (i < 2) throw new exceptions.InvalidArgument("Too few arguments");
  var args = new Array(i - 1);
  while (--i) args[i - 1] = arguments[i];
  scopeFunc = args.pop();
  var tables = flatten(args);
  return [mode, tables, scopeFunc];
}
function enterTransactionScope(db, mode, storeNames, parentTransaction, scopeFunc) {
  return DexiePromise.resolve().then(() => {
    const transless = PSD.transless || PSD;
    const trans = db._createTransaction(mode, storeNames, db._dbSchema, parentTransaction);
    const zoneProps = {
      trans,
      transless
    };
    if (parentTransaction) {
      trans.idbtrans = parentTransaction.idbtrans;
    } else {
      try {
        trans.create();
        db._state.PR1398_maxLoop = 3;
      } catch (ex) {
        if (ex.name === errnames.InvalidState && db.isOpen() && --db._state.PR1398_maxLoop > 0) {
          console.warn("Dexie: Need to reopen db");
          db._close();
          return db.open().then(() => enterTransactionScope(db, mode, storeNames, null, scopeFunc));
        }
        return rejection(ex);
      }
    }
    const scopeFuncIsAsync = isAsyncFunction(scopeFunc);
    if (scopeFuncIsAsync) {
      incrementExpectedAwaits();
    }
    let returnValue;
    const promiseFollowed = DexiePromise.follow(() => {
      returnValue = scopeFunc.call(trans, trans);
      if (returnValue) {
        if (scopeFuncIsAsync) {
          var decrementor = decrementExpectedAwaits.bind(null, null);
          returnValue.then(decrementor, decrementor);
        } else if (typeof returnValue.next === "function" && typeof returnValue.throw === "function") {
          returnValue = awaitIterator(returnValue);
        }
      }
    }, zoneProps);
    return (returnValue && typeof returnValue.then === "function" ? DexiePromise.resolve(returnValue).then(x => trans.active ? x : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))) : promiseFollowed.then(() => returnValue)).then(x => {
      if (parentTransaction) trans._resolve();
      return trans._completion.then(() => x);
    }).catch(e => {
      trans._reject(e);
      return rejection(e);
    });
  });
}
function pad(a, value, count) {
  const result = isArray(a) ? a.slice() : [a];
  for (let i = 0; i < count; ++i) result.push(value);
  return result;
}
function createVirtualIndexMiddleware(down) {
  return {
    ...down,
    table(tableName) {
      const table = down.table(tableName);
      const {
        schema
      } = table;
      const indexLookup = {};
      const allVirtualIndexes = [];
      function addVirtualIndexes(keyPath, keyTail, lowLevelIndex) {
        const keyPathAlias = getKeyPathAlias(keyPath);
        const indexList = indexLookup[keyPathAlias] = indexLookup[keyPathAlias] || [];
        const keyLength = keyPath == null ? 0 : typeof keyPath === "string" ? 1 : keyPath.length;
        const isVirtual = keyTail > 0;
        const virtualIndex = {
          ...lowLevelIndex,
          isVirtual,
          keyTail,
          keyLength,
          extractKey: getKeyExtractor(keyPath),
          unique: !isVirtual && lowLevelIndex.unique
        };
        indexList.push(virtualIndex);
        if (!virtualIndex.isPrimaryKey) {
          allVirtualIndexes.push(virtualIndex);
        }
        if (keyLength > 1) {
          const virtualKeyPath = keyLength === 2 ? keyPath[0] : keyPath.slice(0, keyLength - 1);
          addVirtualIndexes(virtualKeyPath, keyTail + 1, lowLevelIndex);
        }
        indexList.sort((a, b) => a.keyTail - b.keyTail);
        return virtualIndex;
      }
      const primaryKey = addVirtualIndexes(schema.primaryKey.keyPath, 0, schema.primaryKey);
      indexLookup[":id"] = [primaryKey];
      for (const index of schema.indexes) {
        addVirtualIndexes(index.keyPath, 0, index);
      }
      function findBestIndex(keyPath) {
        const result2 = indexLookup[getKeyPathAlias(keyPath)];
        return result2 && result2[0];
      }
      function translateRange(range, keyTail) {
        return {
          type: range.type === 1 ? 2 : range.type,
          lower: pad(range.lower, range.lowerOpen ? down.MAX_KEY : down.MIN_KEY, keyTail),
          lowerOpen: true,
          upper: pad(range.upper, range.upperOpen ? down.MIN_KEY : down.MAX_KEY, keyTail),
          upperOpen: true
        };
      }
      function translateRequest(req) {
        const index = req.query.index;
        return index.isVirtual ? {
          ...req,
          query: {
            index,
            range: translateRange(req.query.range, index.keyTail)
          }
        } : req;
      }
      const result = {
        ...table,
        schema: {
          ...schema,
          primaryKey,
          indexes: allVirtualIndexes,
          getIndexByKeyPath: findBestIndex
        },
        count(req) {
          return table.count(translateRequest(req));
        },
        query(req) {
          return table.query(translateRequest(req));
        },
        openCursor(req) {
          const {
            keyTail,
            isVirtual,
            keyLength
          } = req.query.index;
          if (!isVirtual) return table.openCursor(req);
          function createVirtualCursor(cursor) {
            function _continue(key) {
              key != null ? cursor.continue(pad(key, req.reverse ? down.MAX_KEY : down.MIN_KEY, keyTail)) : req.unique ? cursor.continue(cursor.key.slice(0, keyLength).concat(req.reverse ? down.MIN_KEY : down.MAX_KEY, keyTail)) : cursor.continue();
            }
            const virtualCursor = Object.create(cursor, {
              continue: {
                value: _continue
              },
              continuePrimaryKey: {
                value(key, primaryKey2) {
                  cursor.continuePrimaryKey(pad(key, down.MAX_KEY, keyTail), primaryKey2);
                }
              },
              primaryKey: {
                get() {
                  return cursor.primaryKey;
                }
              },
              key: {
                get() {
                  const key = cursor.key;
                  return keyLength === 1 ? key[0] : key.slice(0, keyLength);
                }
              },
              value: {
                get() {
                  return cursor.value;
                }
              }
            });
            return virtualCursor;
          }
          return table.openCursor(translateRequest(req)).then(cursor => cursor && createVirtualCursor(cursor));
        }
      };
      return result;
    }
  };
}
var virtualIndexMiddleware = {
  stack: "dbcore",
  name: "VirtualIndexMiddleware",
  level: 1,
  create: createVirtualIndexMiddleware
};
function getObjectDiff(a, b, rv, prfx) {
  rv = rv || {};
  prfx = prfx || "";
  keys(a).forEach(prop => {
    if (!hasOwn(b, prop)) {
      rv[prfx + prop] = void 0;
    } else {
      var ap = a[prop],
        bp = b[prop];
      if (typeof ap === "object" && typeof bp === "object" && ap && bp) {
        const apTypeName = toStringTag(ap);
        const bpTypeName = toStringTag(bp);
        if (apTypeName !== bpTypeName) {
          rv[prfx + prop] = b[prop];
        } else if (apTypeName === "Object") {
          getObjectDiff(ap, bp, rv, prfx + prop + ".");
        } else if (ap !== bp) {
          rv[prfx + prop] = b[prop];
        }
      } else if (ap !== bp) rv[prfx + prop] = b[prop];
    }
  });
  keys(b).forEach(prop => {
    if (!hasOwn(a, prop)) {
      rv[prfx + prop] = b[prop];
    }
  });
  return rv;
}
function getEffectiveKeys(primaryKey, req) {
  if (req.type === "delete") return req.keys;
  return req.keys || req.values.map(primaryKey.extractKey);
}
var hooksMiddleware = {
  stack: "dbcore",
  name: "HooksMiddleware",
  level: 2,
  create: downCore => ({
    ...downCore,
    table(tableName) {
      const downTable = downCore.table(tableName);
      const {
        primaryKey
      } = downTable.schema;
      const tableMiddleware = {
        ...downTable,
        mutate(req) {
          const dxTrans = PSD.trans;
          const {
            deleting,
            creating,
            updating
          } = dxTrans.table(tableName).hook;
          switch (req.type) {
            case "add":
              if (creating.fire === nop) break;
              return dxTrans._promise("readwrite", () => addPutOrDelete(req), true);
            case "put":
              if (creating.fire === nop && updating.fire === nop) break;
              return dxTrans._promise("readwrite", () => addPutOrDelete(req), true);
            case "delete":
              if (deleting.fire === nop) break;
              return dxTrans._promise("readwrite", () => addPutOrDelete(req), true);
            case "deleteRange":
              if (deleting.fire === nop) break;
              return dxTrans._promise("readwrite", () => deleteRange(req), true);
          }
          return downTable.mutate(req);
          function addPutOrDelete(req2) {
            const dxTrans2 = PSD.trans;
            const keys2 = req2.keys || getEffectiveKeys(primaryKey, req2);
            if (!keys2) throw new Error("Keys missing");
            req2 = req2.type === "add" || req2.type === "put" ? {
              ...req2,
              keys: keys2
            } : {
              ...req2
            };
            if (req2.type !== "delete") req2.values = [...req2.values];
            if (req2.keys) req2.keys = [...req2.keys];
            return getExistingValues(downTable, req2, keys2).then(existingValues => {
              const contexts = keys2.map((key, i) => {
                const existingValue = existingValues[i];
                const ctx = {
                  onerror: null,
                  onsuccess: null
                };
                if (req2.type === "delete") {
                  deleting.fire.call(ctx, key, existingValue, dxTrans2);
                } else if (req2.type === "add" || existingValue === void 0) {
                  const generatedPrimaryKey = creating.fire.call(ctx, key, req2.values[i], dxTrans2);
                  if (key == null && generatedPrimaryKey != null) {
                    key = generatedPrimaryKey;
                    req2.keys[i] = key;
                    if (!primaryKey.outbound) {
                      setByKeyPath(req2.values[i], primaryKey.keyPath, key);
                    }
                  }
                } else {
                  const objectDiff = getObjectDiff(existingValue, req2.values[i]);
                  const additionalChanges = updating.fire.call(ctx, objectDiff, key, existingValue, dxTrans2);
                  if (additionalChanges) {
                    const requestedValue = req2.values[i];
                    Object.keys(additionalChanges).forEach(keyPath => {
                      if (hasOwn(requestedValue, keyPath)) {
                        requestedValue[keyPath] = additionalChanges[keyPath];
                      } else {
                        setByKeyPath(requestedValue, keyPath, additionalChanges[keyPath]);
                      }
                    });
                  }
                }
                return ctx;
              });
              return downTable.mutate(req2).then(({
                failures,
                results,
                numFailures,
                lastResult
              }) => {
                for (let i = 0; i < keys2.length; ++i) {
                  const primKey = results ? results[i] : keys2[i];
                  const ctx = contexts[i];
                  if (primKey == null) {
                    ctx.onerror && ctx.onerror(failures[i]);
                  } else {
                    ctx.onsuccess && ctx.onsuccess(req2.type === "put" && existingValues[i] ? req2.values[i] : primKey);
                  }
                }
                return {
                  failures,
                  results,
                  numFailures,
                  lastResult
                };
              }).catch(error => {
                contexts.forEach(ctx => ctx.onerror && ctx.onerror(error));
                return Promise.reject(error);
              });
            });
          }
          function deleteRange(req2) {
            return deleteNextChunk(req2.trans, req2.range, 1e4);
          }
          function deleteNextChunk(trans, range, limit) {
            return downTable.query({
              trans,
              values: false,
              query: {
                index: primaryKey,
                range
              },
              limit
            }).then(({
              result
            }) => {
              return addPutOrDelete({
                type: "delete",
                keys: result,
                trans
              }).then(res => {
                if (res.numFailures > 0) return Promise.reject(res.failures[0]);
                if (result.length < limit) {
                  return {
                    failures: [],
                    numFailures: 0,
                    lastResult: void 0
                  };
                } else {
                  return deleteNextChunk(trans, {
                    ...range,
                    lower: result[result.length - 1],
                    lowerOpen: true
                  }, limit);
                }
              });
            });
          }
        }
      };
      return tableMiddleware;
    }
  })
};
function getExistingValues(table, req, effectiveKeys) {
  return req.type === "add" ? Promise.resolve([]) : table.getMany({
    trans: req.trans,
    keys: effectiveKeys,
    cache: "immutable"
  });
}
function getFromTransactionCache(keys2, cache, clone) {
  try {
    if (!cache) return null;
    if (cache.keys.length < keys2.length) return null;
    const result = [];
    for (let i = 0, j = 0; i < cache.keys.length && j < keys2.length; ++i) {
      if (cmp(cache.keys[i], keys2[j]) !== 0) continue;
      result.push(clone ? deepClone(cache.values[i]) : cache.values[i]);
      ++j;
    }
    return result.length === keys2.length ? result : null;
  } catch (_a) {
    return null;
  }
}
var cacheExistingValuesMiddleware = {
  stack: "dbcore",
  level: -1,
  create: core => {
    return {
      table: tableName => {
        const table = core.table(tableName);
        return {
          ...table,
          getMany: req => {
            if (!req.cache) {
              return table.getMany(req);
            }
            const cachedResult = getFromTransactionCache(req.keys, req.trans["_cache"], req.cache === "clone");
            if (cachedResult) {
              return DexiePromise.resolve(cachedResult);
            }
            return table.getMany(req).then(res => {
              req.trans["_cache"] = {
                keys: req.keys,
                values: req.cache === "clone" ? deepClone(res) : res
              };
              return res;
            });
          },
          mutate: req => {
            if (req.type !== "add") req.trans["_cache"] = null;
            return table.mutate(req);
          }
        };
      }
    };
  }
};
function isEmptyRange(node) {
  return !("from" in node);
}
var RangeSet = function (fromOrTree, to) {
  if (this) {
    extend(this, arguments.length ? {
      d: 1,
      from: fromOrTree,
      to: arguments.length > 1 ? to : fromOrTree
    } : {
      d: 0
    });
  } else {
    const rv = new RangeSet();
    if (fromOrTree && "d" in fromOrTree) {
      extend(rv, fromOrTree);
    }
    return rv;
  }
};
props(RangeSet.prototype, {
  add(rangeSet) {
    mergeRanges(this, rangeSet);
    return this;
  },
  addKey(key) {
    addRange(this, key, key);
    return this;
  },
  addKeys(keys2) {
    keys2.forEach(key => addRange(this, key, key));
    return this;
  },
  [iteratorSymbol]() {
    return getRangeSetIterator(this);
  }
});
function addRange(target, from, to) {
  const diff = cmp(from, to);
  if (isNaN(diff)) return;
  if (diff > 0) throw RangeError();
  if (isEmptyRange(target)) return extend(target, {
    from,
    to,
    d: 1
  });
  const left = target.l;
  const right = target.r;
  if (cmp(to, target.from) < 0) {
    left ? addRange(left, from, to) : target.l = {
      from,
      to,
      d: 1,
      l: null,
      r: null
    };
    return rebalance(target);
  }
  if (cmp(from, target.to) > 0) {
    right ? addRange(right, from, to) : target.r = {
      from,
      to,
      d: 1,
      l: null,
      r: null
    };
    return rebalance(target);
  }
  if (cmp(from, target.from) < 0) {
    target.from = from;
    target.l = null;
    target.d = right ? right.d + 1 : 1;
  }
  if (cmp(to, target.to) > 0) {
    target.to = to;
    target.r = null;
    target.d = target.l ? target.l.d + 1 : 1;
  }
  const rightWasCutOff = !target.r;
  if (left && !target.l) {
    mergeRanges(target, left);
  }
  if (right && rightWasCutOff) {
    mergeRanges(target, right);
  }
}
function mergeRanges(target, newSet) {
  function _addRangeSet(target2, {
    from,
    to,
    l,
    r
  }) {
    addRange(target2, from, to);
    if (l) _addRangeSet(target2, l);
    if (r) _addRangeSet(target2, r);
  }
  if (!isEmptyRange(newSet)) _addRangeSet(target, newSet);
}
function rangesOverlap(rangeSet1, rangeSet2) {
  const i1 = getRangeSetIterator(rangeSet2);
  let nextResult1 = i1.next();
  if (nextResult1.done) return false;
  let a = nextResult1.value;
  const i2 = getRangeSetIterator(rangeSet1);
  let nextResult2 = i2.next(a.from);
  let b = nextResult2.value;
  while (!nextResult1.done && !nextResult2.done) {
    if (cmp(b.from, a.to) <= 0 && cmp(b.to, a.from) >= 0) return true;
    cmp(a.from, b.from) < 0 ? a = (nextResult1 = i1.next(b.from)).value : b = (nextResult2 = i2.next(a.from)).value;
  }
  return false;
}
function getRangeSetIterator(node) {
  let state = isEmptyRange(node) ? null : {
    s: 0,
    n: node
  };
  return {
    next(key) {
      const keyProvided = arguments.length > 0;
      while (state) {
        switch (state.s) {
          case 0:
            state.s = 1;
            if (keyProvided) {
              while (state.n.l && cmp(key, state.n.from) < 0) state = {
                up: state,
                n: state.n.l,
                s: 1
              };
            } else {
              while (state.n.l) state = {
                up: state,
                n: state.n.l,
                s: 1
              };
            }
          case 1:
            state.s = 2;
            if (!keyProvided || cmp(key, state.n.to) <= 0) return {
              value: state.n,
              done: false
            };
          case 2:
            if (state.n.r) {
              state.s = 3;
              state = {
                up: state,
                n: state.n.r,
                s: 0
              };
              continue;
            }
          case 3:
            state = state.up;
        }
      }
      return {
        done: true
      };
    }
  };
}
function rebalance(target) {
  var _a, _b;
  const diff = (((_a = target.r) === null || _a === void 0 ? void 0 : _a.d) || 0) - (((_b = target.l) === null || _b === void 0 ? void 0 : _b.d) || 0);
  const r = diff > 1 ? "r" : diff < -1 ? "l" : "";
  if (r) {
    const l = r === "r" ? "l" : "r";
    const rootClone = {
      ...target
    };
    const oldRootRight = target[r];
    target.from = oldRootRight.from;
    target.to = oldRootRight.to;
    target[r] = oldRootRight[r];
    rootClone[r] = oldRootRight[l];
    target[l] = rootClone;
    rootClone.d = computeDepth(rootClone);
  }
  target.d = computeDepth(target);
}
function computeDepth({
  r,
  l
}) {
  return (r ? l ? Math.max(r.d, l.d) : r.d : l ? l.d : 0) + 1;
}
var observabilityMiddleware = {
  stack: "dbcore",
  level: 0,
  create: core => {
    const dbName = core.schema.name;
    const FULL_RANGE = new RangeSet(core.MIN_KEY, core.MAX_KEY);
    return {
      ...core,
      table: tableName => {
        const table = core.table(tableName);
        const {
          schema
        } = table;
        const {
          primaryKey
        } = schema;
        const {
          extractKey,
          outbound
        } = primaryKey;
        const tableClone = {
          ...table,
          mutate: req => {
            const trans = req.trans;
            const mutatedParts = trans.mutatedParts || (trans.mutatedParts = {});
            const getRangeSet = indexName => {
              const part = `idb://${dbName}/${tableName}/${indexName}`;
              return mutatedParts[part] || (mutatedParts[part] = new RangeSet());
            };
            const pkRangeSet = getRangeSet("");
            const delsRangeSet = getRangeSet(":dels");
            const {
              type: type2
            } = req;
            let [keys2, newObjs] = req.type === "deleteRange" ? [req.range] : req.type === "delete" ? [req.keys] : req.values.length < 50 ? [[], req.values] : [];
            const oldCache = req.trans["_cache"];
            return table.mutate(req).then(res => {
              if (isArray(keys2)) {
                if (type2 !== "delete") keys2 = res.results;
                pkRangeSet.addKeys(keys2);
                const oldObjs = getFromTransactionCache(keys2, oldCache);
                if (!oldObjs && type2 !== "add") {
                  delsRangeSet.addKeys(keys2);
                }
                if (oldObjs || newObjs) {
                  trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs);
                }
              } else if (keys2) {
                const range = {
                  from: keys2.lower,
                  to: keys2.upper
                };
                delsRangeSet.add(range);
                pkRangeSet.add(range);
              } else {
                pkRangeSet.add(FULL_RANGE);
                delsRangeSet.add(FULL_RANGE);
                schema.indexes.forEach(idx => getRangeSet(idx.name).add(FULL_RANGE));
              }
              return res;
            });
          }
        };
        const getRange = ({
          query: {
            index,
            range
          }
        }) => {
          var _a, _b;
          return [index, new RangeSet((_a = range.lower) !== null && _a !== void 0 ? _a : core.MIN_KEY, (_b = range.upper) !== null && _b !== void 0 ? _b : core.MAX_KEY)];
        };
        const readSubscribers = {
          get: req => [primaryKey, new RangeSet(req.key)],
          getMany: req => [primaryKey, new RangeSet().addKeys(req.keys)],
          count: getRange,
          query: getRange,
          openCursor: getRange
        };
        keys(readSubscribers).forEach(method => {
          tableClone[method] = function (req) {
            const {
              subscr
            } = PSD;
            if (subscr) {
              const getRangeSet = indexName => {
                const part = `idb://${dbName}/${tableName}/${indexName}`;
                return subscr[part] || (subscr[part] = new RangeSet());
              };
              const pkRangeSet = getRangeSet("");
              const delsRangeSet = getRangeSet(":dels");
              const [queriedIndex, queriedRanges] = readSubscribers[method](req);
              getRangeSet(queriedIndex.name || "").add(queriedRanges);
              if (!queriedIndex.isPrimaryKey) {
                if (method === "count") {
                  delsRangeSet.add(FULL_RANGE);
                } else {
                  const keysPromise = method === "query" && outbound && req.values && table.query({
                    ...req,
                    values: false
                  });
                  return table[method].apply(this, arguments).then(res => {
                    if (method === "query") {
                      if (outbound && req.values) {
                        return keysPromise.then(({
                          result: resultingKeys
                        }) => {
                          pkRangeSet.addKeys(resultingKeys);
                          return res;
                        });
                      }
                      const pKeys = req.values ? res.result.map(extractKey) : res.result;
                      if (req.values) {
                        pkRangeSet.addKeys(pKeys);
                      } else {
                        delsRangeSet.addKeys(pKeys);
                      }
                    } else if (method === "openCursor") {
                      const cursor = res;
                      const wantValues = req.values;
                      return cursor && Object.create(cursor, {
                        key: {
                          get() {
                            delsRangeSet.addKey(cursor.primaryKey);
                            return cursor.key;
                          }
                        },
                        primaryKey: {
                          get() {
                            const pkey = cursor.primaryKey;
                            delsRangeSet.addKey(pkey);
                            return pkey;
                          }
                        },
                        value: {
                          get() {
                            wantValues && pkRangeSet.addKey(cursor.primaryKey);
                            return cursor.value;
                          }
                        }
                      });
                    }
                    return res;
                  });
                }
              }
            }
            return table[method].apply(this, arguments);
          };
        });
        return tableClone;
      }
    };
  }
};
function trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs) {
  function addAffectedIndex(ix) {
    const rangeSet = getRangeSet(ix.name || "");
    function extractKey(obj) {
      return obj != null ? ix.extractKey(obj) : null;
    }
    const addKeyOrKeys = key => ix.multiEntry && isArray(key) ? key.forEach(key2 => rangeSet.addKey(key2)) : rangeSet.addKey(key);
    (oldObjs || newObjs).forEach((_, i) => {
      const oldKey = oldObjs && extractKey(oldObjs[i]);
      const newKey = newObjs && extractKey(newObjs[i]);
      if (cmp(oldKey, newKey) !== 0) {
        if (oldKey != null) addKeyOrKeys(oldKey);
        if (newKey != null) addKeyOrKeys(newKey);
      }
    });
  }
  schema.indexes.forEach(addAffectedIndex);
}
var Dexie$1 = class {
  constructor(name, options) {
    this._middlewares = {};
    this.verno = 0;
    const deps = Dexie$1.dependencies;
    this._options = options = {
      addons: Dexie$1.addons,
      autoOpen: true,
      indexedDB: deps.indexedDB,
      IDBKeyRange: deps.IDBKeyRange,
      ...options
    };
    this._deps = {
      indexedDB: options.indexedDB,
      IDBKeyRange: options.IDBKeyRange
    };
    const {
      addons
    } = options;
    this._dbSchema = {};
    this._versions = [];
    this._storeNames = [];
    this._allTables = {};
    this.idbdb = null;
    this._novip = this;
    const state = {
      dbOpenError: null,
      isBeingOpened: false,
      onReadyBeingFired: null,
      openComplete: false,
      dbReadyResolve: nop,
      dbReadyPromise: null,
      cancelOpen: nop,
      openCanceller: null,
      autoSchema: true,
      PR1398_maxLoop: 3
    };
    state.dbReadyPromise = new DexiePromise(resolve => {
      state.dbReadyResolve = resolve;
    });
    state.openCanceller = new DexiePromise((_, reject) => {
      state.cancelOpen = reject;
    });
    this._state = state;
    this.name = name;
    this.on = Events(this, "populate", "blocked", "versionchange", "close", {
      ready: [promisableChain, nop]
    });
    this.on.ready.subscribe = override(this.on.ready.subscribe, subscribe => {
      return (subscriber, bSticky) => {
        Dexie$1.vip(() => {
          const state2 = this._state;
          if (state2.openComplete) {
            if (!state2.dbOpenError) DexiePromise.resolve().then(subscriber);
            if (bSticky) subscribe(subscriber);
          } else if (state2.onReadyBeingFired) {
            state2.onReadyBeingFired.push(subscriber);
            if (bSticky) subscribe(subscriber);
          } else {
            subscribe(subscriber);
            const db = this;
            if (!bSticky) subscribe(function unsubscribe() {
              db.on.ready.unsubscribe(subscriber);
              db.on.ready.unsubscribe(unsubscribe);
            });
          }
        });
      };
    });
    this.Collection = createCollectionConstructor(this);
    this.Table = createTableConstructor(this);
    this.Transaction = createTransactionConstructor(this);
    this.Version = createVersionConstructor(this);
    this.WhereClause = createWhereClauseConstructor(this);
    this.on("versionchange", ev => {
      if (ev.newVersion > 0) console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`);else console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`);
      this.close();
    });
    this.on("blocked", ev => {
      if (!ev.newVersion || ev.newVersion < ev.oldVersion) console.warn(`Dexie.delete('${this.name}') was blocked`);else console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${ev.oldVersion / 10}`);
    });
    this._maxKey = getMaxKey(options.IDBKeyRange);
    this._createTransaction = (mode, storeNames, dbschema, parentTransaction) => new this.Transaction(mode, storeNames, dbschema, this._options.chromeTransactionDurability, parentTransaction);
    this._fireOnBlocked = ev => {
      this.on("blocked").fire(ev);
      connections.filter(c => c.name === this.name && c !== this && !c._state.vcFired).map(c => c.on("versionchange").fire(ev));
    };
    this.use(virtualIndexMiddleware);
    this.use(hooksMiddleware);
    this.use(observabilityMiddleware);
    this.use(cacheExistingValuesMiddleware);
    this.vip = Object.create(this, {
      _vip: {
        value: true
      }
    });
    addons.forEach(addon => addon(this));
  }
  version(versionNumber) {
    if (isNaN(versionNumber) || versionNumber < 0.1) throw new exceptions.Type(`Given version is not a positive number`);
    versionNumber = Math.round(versionNumber * 10) / 10;
    if (this.idbdb || this._state.isBeingOpened) throw new exceptions.Schema("Cannot add version when database is open");
    this.verno = Math.max(this.verno, versionNumber);
    const versions = this._versions;
    var versionInstance = versions.filter(v => v._cfg.version === versionNumber)[0];
    if (versionInstance) return versionInstance;
    versionInstance = new this.Version(versionNumber);
    versions.push(versionInstance);
    versions.sort(lowerVersionFirst);
    versionInstance.stores({});
    this._state.autoSchema = false;
    return versionInstance;
  }
  _whenReady(fn) {
    return this.idbdb && (this._state.openComplete || PSD.letThrough || this._vip) ? fn() : new DexiePromise((resolve, reject) => {
      if (this._state.openComplete) {
        return reject(new exceptions.DatabaseClosed(this._state.dbOpenError));
      }
      if (!this._state.isBeingOpened) {
        if (!this._options.autoOpen) {
          reject(new exceptions.DatabaseClosed());
          return;
        }
        this.open().catch(nop);
      }
      this._state.dbReadyPromise.then(resolve, reject);
    }).then(fn);
  }
  use({
    stack,
    create,
    level,
    name
  }) {
    if (name) this.unuse({
      stack,
      name
    });
    const middlewares = this._middlewares[stack] || (this._middlewares[stack] = []);
    middlewares.push({
      stack,
      create,
      level: level == null ? 10 : level,
      name
    });
    middlewares.sort((a, b) => a.level - b.level);
    return this;
  }
  unuse({
    stack,
    name,
    create
  }) {
    if (stack && this._middlewares[stack]) {
      this._middlewares[stack] = this._middlewares[stack].filter(mw => create ? mw.create !== create : name ? mw.name !== name : false);
    }
    return this;
  }
  open() {
    return dexieOpen(this);
  }
  _close() {
    const state = this._state;
    const idx = connections.indexOf(this);
    if (idx >= 0) connections.splice(idx, 1);
    if (this.idbdb) {
      try {
        this.idbdb.close();
      } catch (e) {}
      this._novip.idbdb = null;
    }
    state.dbReadyPromise = new DexiePromise(resolve => {
      state.dbReadyResolve = resolve;
    });
    state.openCanceller = new DexiePromise((_, reject) => {
      state.cancelOpen = reject;
    });
  }
  close() {
    this._close();
    const state = this._state;
    this._options.autoOpen = false;
    state.dbOpenError = new exceptions.DatabaseClosed();
    if (state.isBeingOpened) state.cancelOpen(state.dbOpenError);
  }
  delete() {
    const hasArguments = arguments.length > 0;
    const state = this._state;
    return new DexiePromise((resolve, reject) => {
      const doDelete = () => {
        this.close();
        var req = this._deps.indexedDB.deleteDatabase(this.name);
        req.onsuccess = wrap(() => {
          _onDatabaseDeleted(this._deps, this.name);
          resolve();
        });
        req.onerror = eventRejectHandler(reject);
        req.onblocked = this._fireOnBlocked;
      };
      if (hasArguments) throw new exceptions.InvalidArgument("Arguments not allowed in db.delete()");
      if (state.isBeingOpened) {
        state.dbReadyPromise.then(doDelete);
      } else {
        doDelete();
      }
    });
  }
  backendDB() {
    return this.idbdb;
  }
  isOpen() {
    return this.idbdb !== null;
  }
  hasBeenClosed() {
    const dbOpenError = this._state.dbOpenError;
    return dbOpenError && dbOpenError.name === "DatabaseClosed";
  }
  hasFailed() {
    return this._state.dbOpenError !== null;
  }
  dynamicallyOpened() {
    return this._state.autoSchema;
  }
  get tables() {
    return keys(this._allTables).map(name => this._allTables[name]);
  }
  transaction() {
    const args = extractTransactionArgs.apply(this, arguments);
    return this._transaction.apply(this, args);
  }
  _transaction(mode, tables, scopeFunc) {
    let parentTransaction = PSD.trans;
    if (!parentTransaction || parentTransaction.db !== this || mode.indexOf("!") !== -1) parentTransaction = null;
    const onlyIfCompatible = mode.indexOf("?") !== -1;
    mode = mode.replace("!", "").replace("?", "");
    let idbMode, storeNames;
    try {
      storeNames = tables.map(table => {
        var storeName = table instanceof this.Table ? table.name : table;
        if (typeof storeName !== "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
        return storeName;
      });
      if (mode == "r" || mode === READONLY) idbMode = READONLY;else if (mode == "rw" || mode == READWRITE) idbMode = READWRITE;else throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);
      if (parentTransaction) {
        if (parentTransaction.mode === READONLY && idbMode === READWRITE) {
          if (onlyIfCompatible) {
            parentTransaction = null;
          } else throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
        }
        if (parentTransaction) {
          storeNames.forEach(storeName => {
            if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
              if (onlyIfCompatible) {
                parentTransaction = null;
              } else throw new exceptions.SubTransaction("Table " + storeName + " not included in parent transaction.");
            }
          });
        }
        if (onlyIfCompatible && parentTransaction && !parentTransaction.active) {
          parentTransaction = null;
        }
      }
    } catch (e) {
      return parentTransaction ? parentTransaction._promise(null, (_, reject) => {
        reject(e);
      }) : rejection(e);
    }
    const enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
    return parentTransaction ? parentTransaction._promise(idbMode, enterTransaction, "lock") : PSD.trans ? usePSD(PSD.transless, () => this._whenReady(enterTransaction)) : this._whenReady(enterTransaction);
  }
  table(tableName) {
    if (!hasOwn(this._allTables, tableName)) {
      throw new exceptions.InvalidTable(`Table ${tableName} does not exist`);
    }
    return this._allTables[tableName];
  }
};
var symbolObservable = typeof Symbol !== "undefined" && "observable" in Symbol ? Symbol.observable : "@@observable";
var Observable = class {
  constructor(subscribe) {
    this._subscribe = subscribe;
  }
  subscribe(x, error, complete) {
    return this._subscribe(!x || typeof x === "function" ? {
      next: x,
      error,
      complete
    } : x);
  }
  [symbolObservable]() {
    return this;
  }
};
function extendObservabilitySet(target, newSet) {
  keys(newSet).forEach(part => {
    const rangeSet = target[part] || (target[part] = new RangeSet());
    mergeRanges(rangeSet, newSet[part]);
  });
  return target;
}
function liveQuery(querier) {
  let hasValue = false;
  let currentValue = void 0;
  const observable = new Observable(observer => {
    const scopeFuncIsAsync = isAsyncFunction(querier);
    function execute(subscr) {
      if (scopeFuncIsAsync) {
        incrementExpectedAwaits();
      }
      const exec = () => newScope(querier, {
        subscr,
        trans: null
      });
      const rv = PSD.trans ? usePSD(PSD.transless, exec) : exec();
      if (scopeFuncIsAsync) {
        rv.then(decrementExpectedAwaits, decrementExpectedAwaits);
      }
      return rv;
    }
    let closed = false;
    let accumMuts = {};
    let currentObs = {};
    const subscription = {
      get closed() {
        return closed;
      },
      unsubscribe: () => {
        closed = true;
        globalEvents.storagemutated.unsubscribe(mutationListener);
      }
    };
    observer.start && observer.start(subscription);
    let querying = false,
      startedListening = false;
    function shouldNotify() {
      return keys(currentObs).some(key => accumMuts[key] && rangesOverlap(accumMuts[key], currentObs[key]));
    }
    const mutationListener = parts => {
      extendObservabilitySet(accumMuts, parts);
      if (shouldNotify()) {
        doQuery();
      }
    };
    const doQuery = () => {
      if (querying || closed) return;
      accumMuts = {};
      const subscr = {};
      const ret = execute(subscr);
      if (!startedListening) {
        globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, mutationListener);
        startedListening = true;
      }
      querying = true;
      Promise.resolve(ret).then(result => {
        hasValue = true;
        currentValue = result;
        querying = false;
        if (closed) return;
        if (shouldNotify()) {
          doQuery();
        } else {
          accumMuts = {};
          currentObs = subscr;
          observer.next && observer.next(result);
        }
      }, err => {
        querying = false;
        hasValue = false;
        observer.error && observer.error(err);
        subscription.unsubscribe();
      });
    };
    doQuery();
    return subscription;
  });
  observable.hasValue = () => hasValue;
  observable.getValue = () => currentValue;
  return observable;
}
var domDeps;
try {
  domDeps = {
    indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
    IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
  };
} catch (e) {
  domDeps = {
    indexedDB: null,
    IDBKeyRange: null
  };
}
var Dexie = Dexie$1;
props(Dexie, {
  ...fullNameExceptions,
  delete(databaseName) {
    const db = new Dexie(databaseName, {
      addons: []
    });
    return db.delete();
  },
  exists(name) {
    return new Dexie(name, {
      addons: []
    }).open().then(db => {
      db.close();
      return true;
    }).catch("NoSuchDatabaseError", () => false);
  },
  getDatabaseNames(cb) {
    try {
      return getDatabaseNames(Dexie.dependencies).then(cb);
    } catch (_a) {
      return rejection(new exceptions.MissingAPI());
    }
  },
  defineClass() {
    function Class(content) {
      extend(this, content);
    }
    return Class;
  },
  ignoreTransaction(scopeFunc) {
    return PSD.trans ? usePSD(PSD.transless, scopeFunc) : scopeFunc();
  },
  vip,
  async: function (generatorFn) {
    return function () {
      try {
        var rv = awaitIterator(generatorFn.apply(this, arguments));
        if (!rv || typeof rv.then !== "function") return DexiePromise.resolve(rv);
        return rv;
      } catch (e) {
        return rejection(e);
      }
    };
  },
  spawn: function (generatorFn, args, thiz) {
    try {
      var rv = awaitIterator(generatorFn.apply(thiz, args || []));
      if (!rv || typeof rv.then !== "function") return DexiePromise.resolve(rv);
      return rv;
    } catch (e) {
      return rejection(e);
    }
  },
  currentTransaction: {
    get: () => PSD.trans || null
  },
  waitFor: function (promiseOrFunction, optionalTimeout) {
    const promise = DexiePromise.resolve(typeof promiseOrFunction === "function" ? Dexie.ignoreTransaction(promiseOrFunction) : promiseOrFunction).timeout(optionalTimeout || 6e4);
    return PSD.trans ? PSD.trans.waitFor(promise) : promise;
  },
  Promise: DexiePromise,
  debug: {
    get: () => debug,
    set: value => {
      setDebug(value, value === "dexie" ? () => true : dexieStackFrameFilter);
    }
  },
  derive,
  extend,
  props,
  override,
  Events,
  on: globalEvents,
  liveQuery,
  extendObservabilitySet,
  getByKeyPath,
  setByKeyPath,
  delByKeyPath,
  shallowClone,
  deepClone,
  getObjectDiff,
  cmp,
  asap: asap$1,
  minKey,
  addons: [],
  connections,
  errnames,
  dependencies: domDeps,
  semVer: DEXIE_VERSION,
  version: DEXIE_VERSION.split(".").map(n => parseInt(n)).reduce((p, c, i) => p + c / Math.pow(10, i * 2))
});
Dexie.maxKey = getMaxKey(Dexie.dependencies.IDBKeyRange);
if (typeof dispatchEvent !== "undefined" && typeof addEventListener !== "undefined") {
  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, updatedParts => {
    if (!propagatingLocally) {
      let event;
      if (isIEOrEdge) {
        event = document.createEvent("CustomEvent");
        event.initCustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, true, true, updatedParts);
      } else {
        event = new CustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, {
          detail: updatedParts
        });
      }
      propagatingLocally = true;
      dispatchEvent(event);
      propagatingLocally = false;
    }
  });
  addEventListener(STORAGE_MUTATED_DOM_EVENT_NAME, ({
    detail
  }) => {
    if (!propagatingLocally) {
      propagateLocally(detail);
    }
  });
}
function propagateLocally(updateParts) {
  let wasMe = propagatingLocally;
  try {
    propagatingLocally = true;
    globalEvents.storagemutated.fire(updateParts);
  } finally {
    propagatingLocally = wasMe;
  }
}
var propagatingLocally = false;
if (typeof BroadcastChannel !== "undefined") {
  const bc = new BroadcastChannel(STORAGE_MUTATED_DOM_EVENT_NAME);
  if (typeof bc.unref === "function") {
    bc.unref();
  }
  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, changedParts => {
    if (!propagatingLocally) {
      bc.postMessage(changedParts);
    }
  });
  bc.onmessage = ev => {
    if (ev.data) propagateLocally(ev.data);
  };
} else if (typeof self !== "undefined" && typeof navigator !== "undefined") {
  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, changedParts => {
    try {
      if (!propagatingLocally) {
        if (typeof localStorage !== "undefined") {
          localStorage.setItem(STORAGE_MUTATED_DOM_EVENT_NAME, JSON.stringify({
            trig: Math.random(),
            changedParts
          }));
        }
        if (typeof self["clients"] === "object") {
          [...self["clients"].matchAll({
            includeUncontrolled: true
          })].forEach(client => client.postMessage({
            type: STORAGE_MUTATED_DOM_EVENT_NAME,
            changedParts
          }));
        }
      }
    } catch (_a) {}
  });
  if (typeof addEventListener !== "undefined") {
    addEventListener("storage", ev => {
      if (ev.key === STORAGE_MUTATED_DOM_EVENT_NAME) {
        const data = JSON.parse(ev.newValue);
        if (data) propagateLocally(data.changedParts);
      }
    });
  }
  const swContainer = self.document && navigator.serviceWorker;
  if (swContainer) {
    swContainer.addEventListener("message", propagateMessageLocally);
  }
}
function propagateMessageLocally({
  data
}) {
  if (data && data.type === STORAGE_MUTATED_DOM_EVENT_NAME) {
    propagateLocally(data.changedParts);
  }
}
DexiePromise.rejectionMapper = mapError;
setDebug(debug, dexieStackFrameFilter);

// .beyond/uimport/dexie.3.2.4.js
var dexie_3_2_4_default = Dexie$1;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9kZXhpZS4zLjIuNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZ2xvYmFscy9nbG9iYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy91dGlscy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaGVscGVycy9kZWJ1Zy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZXJyb3JzL2Vycm9ycy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL2NoYWluaW5nLWZ1bmN0aW9ucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaGVscGVycy9wcm9taXNlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9mdW5jdGlvbnMvdGVtcC10cmFuc2FjdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZ2xvYmFscy9jb25zdGFudHMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy9jb21iaW5lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9kYmNvcmUva2V5cmFuZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy93b3JrYXJvdW5kLXVuZGVmaW5lZC1wcmlta2V5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3RhYmxlL3RhYmxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL0V2ZW50cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL21ha2UtY2xhc3MtY29uc3RydWN0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdGFibGUvdGFibGUtY29uc3RydWN0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLWhlbHBlcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy9jbXAudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL2NvbGxlY3Rpb24vY29sbGVjdGlvbi1jb25zdHJ1Y3Rvci50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL2NvbXBhcmUtZnVuY3Rpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3doZXJlLWNsYXVzZS93aGVyZS1jbGF1c2UtaGVscGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy93aGVyZS1jbGF1c2Uvd2hlcmUtY2xhdXNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3doZXJlLWNsYXVzZS93aGVyZS1jbGF1c2UtY29uc3RydWN0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy9ldmVudC13cmFwcGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZ2xvYmFscy9nbG9iYWwtZXZlbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uLWNvbnN0cnVjdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL2luZGV4LXNwZWMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2hlbHBlcnMvdGFibGUtc2NoZW1hLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9mdW5jdGlvbnMvcXVpcmtzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9kYmNvcmUvZ2V0LWtleS1leHRyYWN0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2RiY29yZS9kYmNvcmUtaW5kZXhlZGRiLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL2RleGllL2dlbmVyYXRlLW1pZGRsZXdhcmUtc3RhY2tzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3ZlcnNpb24vc2NoZW1hLWhlbHBlcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdmVyc2lvbi92ZXJzaW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3ZlcnNpb24vdmVyc2lvbi1jb25zdHJ1Y3Rvci50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaGVscGVycy9kYXRhYmFzZS1lbnVtZXJhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL2RleGllL3ZpcC50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9ub2RlX21vZHVsZXMvc2FmYXJpLTE0LWlkYi1maXgvZGlzdC9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9kZXhpZS9kZXhpZS1vcGVuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL3lpZWxkLXN1cHBvcnQudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvZGV4aWUvdHJhbnNhY3Rpb24taGVscGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZGJjb3JlL3ZpcnR1YWwtaW5kZXgtbWlkZGxld2FyZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL2dldC1vYmplY3QtZGlmZi50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZGJjb3JlL2dldC1lZmZlY3RpdmUta2V5cy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaG9va3MvaG9va3MtbWlkZGxld2FyZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZGJjb3JlL2NhY2hlLWV4aXN0aW5nLXZhbHVlcy1taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL3Jhbmdlc2V0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9saXZlLXF1ZXJ5L29ic2VydmFiaWxpdHktbWlkZGxld2FyZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9kZXhpZS9kZXhpZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9vYnNlcnZhYmxlL29ic2VydmFibGUudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2xpdmUtcXVlcnkvZXh0ZW5kLW9ic2VydmFiaWxpdHktc2V0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9saXZlLXF1ZXJ5L2xpdmUtcXVlcnkudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvZGV4aWUvZGV4aWUtZG9tLWRlcGVuZGVuY2llcy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9kZXhpZS9kZXhpZS1zdGF0aWMtcHJvcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2xpdmUtcXVlcnkvcHJvcGFnYXRlLWxvY2FsbHkudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2xpdmUtcXVlcnkvZW5hYmxlLWJyb2FkY2FzdC50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJEZXhpZSIsIlJhbmdlU2V0IiwiZGVmYXVsdCIsImxpdmVRdWVyeSIsIm1lcmdlUmFuZ2VzIiwicmFuZ2VzT3ZlcmxhcCIsIm1vZHVsZSIsIl9nbG9iYWwiLCJnbG9iYWxUaGlzIiwic2VsZiIsIndpbmRvdyIsImdsb2JhbCIsImtleXMiLCJPYmplY3QiLCJpc0FycmF5IiwiQXJyYXkiLCJQcm9taXNlIiwiZXh0ZW5kIiwib2JqIiwiZXh0ZW5zaW9uIiwiZm9yRWFjaCIsImtleSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJfaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJoYXNPd24iLCJwcm9wIiwiY2FsbCIsInByb3BzIiwicHJvdG8iLCJSZWZsZWN0Iiwib3duS2V5cyIsInNldFByb3AiLCJkZWZpbmVQcm9wZXJ0eSIsImZ1bmN0aW9uT3JHZXRTZXQiLCJvcHRpb25zIiwiZ2V0Iiwic2V0IiwiY29uZmlndXJhYmxlIiwidmFsdWUiLCJ3cml0YWJsZSIsImRlcml2ZSIsIkNoaWxkIiwiZnJvbSIsIlBhcmVudCIsInByb3RvdHlwZSIsImNyZWF0ZSIsImJpbmQiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRQcm9wZXJ0eURlc2NyaXB0b3IiLCJwZCIsIl9zbGljZSIsInNsaWNlIiwiYXJncyIsInN0YXJ0IiwiZW5kIiwib3ZlcnJpZGUiLCJvcmlnRnVuYyIsIm92ZXJyaWRlZEZhY3RvcnkiLCJhc3NlcnQiLCJiIiwiRXJyb3IiLCJhc2FwIiwiZm4iLCJzZXRJbW1lZGlhdGUiLCJzZXRUaW1lb3V0IiwiYXJyYXlUb09iamVjdCIsImFycmF5IiwiZXh0cmFjdG9yIiwicmVkdWNlIiwicmVzdWx0IiwiaXRlbSIsImkiLCJuYW1lQW5kVmFsdWUiLCJ0cnlDYXRjaCIsIm9uZXJyb3IiLCJhcHBseSIsImV4IiwiZ2V0QnlLZXlQYXRoIiwia2V5UGF0aCIsInJ2IiwibCIsImxlbmd0aCIsInZhbCIsInB1c2giLCJwZXJpb2QiLCJpbmRleE9mIiwiaW5uZXJPYmoiLCJzdWJzdHIiLCJzZXRCeUtleVBhdGgiLCJpc0Zyb3plbiIsImN1cnJlbnRLZXlQYXRoIiwicmVtYWluaW5nS2V5UGF0aCIsImlzTmFOIiwicGFyc2VJbnQiLCJzcGxpY2UiLCJkZWxCeUtleVBhdGgiLCJtYXAiLCJrcCIsInNoYWxsb3dDbG9uZSIsIm0iLCJjb25jYXQiLCJmbGF0dGVuIiwiYSIsImludHJpbnNpY1R5cGVOYW1lcyIsInNwbGl0IiwibnVtIiwidCIsImZpbHRlciIsImludHJpbnNpY1R5cGVzIiwieCIsImNpcmN1bGFyUmVmcyIsImRlZXBDbG9uZSIsImFueSIsIldlYWtNYXAiLCJpbm5lckRlZXBDbG9uZSIsImNvbnN0cnVjdG9yIiwidG9TdHJpbmciLCJ0b1N0cmluZ1RhZyIsIm8iLCJpdGVyYXRvclN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiZ2V0SXRlcmF0b3JPZiIsIk5PX0NIQVJfQVJSQVkiLCJnZXRBcnJheU9mIiwiYXJyYXlMaWtlIiwiaXQiLCJhcmd1bWVudHMiLCJuZXh0IiwiZG9uZSIsImlzQXN5bmNGdW5jdGlvbiIsImRlYnVnIiwibG9jYXRpb24iLCJ0ZXN0IiwiaHJlZiIsInNldERlYnVnIiwibGlicmFyeUZpbHRlciIsIk5FRURTX1RIUk9XX0ZPUl9TVEFDSyIsInN0YWNrIiwiZ2V0RXJyb3JXaXRoU3RhY2siLCJlIiwicHJldHR5U3RhY2siLCJleGNlcHRpb24iLCJudW1JZ25vcmVkRnJhbWVzIiwibmFtZSIsIm1lc3NhZ2UiLCJmcmFtZSIsImpvaW4iLCJkZXhpZUVycm9yTmFtZXMiLCJpZGJEb21FcnJvck5hbWVzIiwiZXJyb3JMaXN0IiwiZGVmYXVsdFRleHRzIiwiVmVyc2lvbkNoYW5nZWQiLCJEYXRhYmFzZUNsb3NlZCIsIkFib3J0IiwiVHJhbnNhY3Rpb25JbmFjdGl2ZSIsIk1pc3NpbmdBUEkiLCJEZXhpZUVycm9yIiwibXNnIiwiX2UiLCJfc3RhY2siLCJnZXRNdWx0aUVycm9yTWVzc2FnZSIsImZhaWx1cmVzIiwidiIsInMiLCJNb2RpZnlFcnJvciIsInN1Y2Nlc3NDb3VudCIsImZhaWxlZEtleXMiLCJCdWxrRXJyb3IiLCJwb3MiLCJmYWlsdXJlc0J5UG9zIiwiZXJybmFtZXMiLCJCYXNlRXhjZXB0aW9uIiwiZXhjZXB0aW9ucyIsImZ1bGxOYW1lIiwibXNnT3JJbm5lciIsImlubmVyIiwiU3ludGF4IiwiU3ludGF4RXJyb3IiLCJUeXBlIiwiVHlwZUVycm9yIiwiUmFuZ2UiLCJSYW5nZUVycm9yIiwiZXhjZXB0aW9uTWFwIiwibWFwRXJyb3IiLCJkb21FcnJvciIsImZ1bGxOYW1lRXhjZXB0aW9ucyIsIm5vcCIsIm1pcnJvciIsInB1cmVGdW5jdGlvbkNoYWluIiwiZjEiLCJmMiIsImNhbGxCb3RoIiwib24xIiwib24yIiwiaG9va0NyZWF0aW5nQ2hhaW4iLCJyZXMiLCJvbnN1Y2Nlc3MiLCJyZXMyIiwiaG9va0RlbGV0aW5nQ2hhaW4iLCJob29rVXBkYXRpbmdDaGFpbiIsIm1vZGlmaWNhdGlvbnMiLCJyZXZlcnNlU3RvcHBhYmxlRXZlbnRDaGFpbiIsInByb21pc2FibGVDaGFpbiIsInRoZW4iLCJ0aGl6IiwiSU5URVJOQUwiLCJMT05HX1NUQUNLU19DTElQX0xJTUlUIiwiTUFYX0xPTkdfU1RBQ0tTIiwiWk9ORV9FQ0hPX0xJTUlUIiwicmVzb2x2ZWROYXRpdmVQcm9taXNlIiwibmF0aXZlUHJvbWlzZVByb3RvIiwicmVzb2x2ZWRHbG9iYWxQcm9taXNlIiwiZ2xvYmFsUCIsInJlc29sdmUiLCJjcnlwdG8iLCJzdWJ0bGUiLCJuYXRpdmVQIiwiZGlnZXN0IiwiVWludDhBcnJheSIsIm5hdGl2ZVByb21pc2VUaGVuIiwiTmF0aXZlUHJvbWlzZSIsInBhdGNoR2xvYmFsUHJvbWlzZSIsInN0YWNrX2JlaW5nX2dlbmVyYXRlZCIsInNjaGVkdWxlUGh5c2ljYWxUaWNrIiwicGh5c2ljYWxUaWNrIiwiTXV0YXRpb25PYnNlcnZlciIsImhpZGRlbkRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwic2V0QXR0cmlidXRlIiwiY2FsbGJhY2siLCJtaWNyb3RpY2tRdWV1ZSIsIm5lZWRzTmV3UGh5c2ljYWxUaWNrIiwiaXNPdXRzaWRlTWljcm9UaWNrIiwidW5oYW5kbGVkRXJyb3JzIiwicmVqZWN0aW5nRXJyb3JzIiwiY3VycmVudEZ1bGZpbGxlciIsInJlamVjdGlvbk1hcHBlciIsImdsb2JhbFBTRCIsImlkIiwicmVmIiwidW5oYW5kbGVkcyIsIm9udW5oYW5kbGVkIiwiZ2xvYmFsRXJyb3IiLCJwZ3AiLCJlbnYiLCJmaW5hbGl6ZSIsInVoIiwiUFNEIiwibnVtU2NoZWR1bGVkQ2FsbHMiLCJ0aWNrRmluYWxpemVycyIsIkRleGllUHJvbWlzZSIsIl9saXN0ZW5lcnMiLCJvbnVuY2F0Y2hlZCIsIl9saWIiLCJwc2QiLCJfUFNEIiwiX3N0YWNrSG9sZGVyIiwiX3ByZXYiLCJfbnVtUHJldiIsIl9zdGF0ZSIsIl92YWx1ZSIsImhhbmRsZVJlamVjdGlvbiIsImV4ZWN1dGVQcm9taXNlVGFzayIsInRoZW5Qcm9wIiwibWljcm9UYXNrSWQiLCJ0b3RhbEVjaG9lcyIsIm9uRnVsZmlsbGVkIiwib25SZWplY3RlZCIsInBvc3NpYmxlQXdhaXQiLCJjbGVhbnVwIiwiZGVjcmVtZW50RXhwZWN0ZWRBd2FpdHMiLCJyZWplY3QiLCJwcm9wYWdhdGVUb0xpc3RlbmVyIiwiTGlzdGVuZXIiLCJuYXRpdmVBd2FpdENvbXBhdGlibGVXcmFwIiwibGlua1RvUHJldmlvdXNQcm9taXNlIiwiX3RoZW4iLCJjYXRjaCIsInR5cGUiLCJoYW5kbGVyIiwiZXJyIiwiUHJvbWlzZVJlamVjdCIsImZpbmFsbHkiLCJvbkZpbmFsbHkiLCJzdGFja3MiLCJnZXRTdGFjayIsInRpbWVvdXQiLCJtcyIsIkluZmluaXR5IiwiaGFuZGxlIiwiVGltZW91dCIsImNsZWFyVGltZW91dCIsInNuYXBTaG90Iiwiem9uZSIsImFsbCIsInZhbHVlcyIsIm9uUG9zc2libGVQYXJhbGxlbGxBc3luYyIsInJlbWFpbmluZyIsInJhY2UiLCJuZXdQU0QiLCJuZXdTY29wZSIsInVzZVBTRCIsInNjaGVkdWxlciIsImZvbGxvdyIsInpvbmVQcm9wcyIsInJ1bl9hdF9lbmRfb2ZfdGhpc19vcl9uZXh0X3BoeXNpY2FsX3RpY2siLCJhbGxTZXR0bGVkIiwicG9zc2libGVQcm9taXNlcyIsInJlc3VsdHMiLCJwIiwic3RhdHVzIiwicmVhc29uIiwiQWdncmVnYXRlRXJyb3IiLCJmYWlsdXJlIiwicHJvbWlzZSIsInNob3VsZEV4ZWN1dGVUaWNrIiwiYmVnaW5NaWNyb1RpY2tTY29wZSIsInByb3BhZ2F0ZUFsbExpc3RlbmVycyIsImVuZE1pY3JvVGlja1Njb3BlIiwiX3Byb21pc2UiLCJvcmlnUHJvcCIsImFkZFBvc3NpYmx5VW5oYW5kbGVkRXJyb3IiLCJsaXN0ZW5lcnMiLCJsZW4iLCJmaW5hbGl6ZVBoeXNpY2FsVGljayIsImxpc3RlbmVyIiwiY2IiLCJjYWxsTGlzdGVuZXIiLCJyZXQiLCJtYXJrRXJyb3JBc0hhbmRsZWQiLCJsaW1pdCIsImVycm9yTmFtZSIsInByZXYiLCJudW1QcmV2Iiwid2FzUm9vdEV4ZWMiLCJjYWxsYmFja3MiLCJ1bmhhbmRsZWRFcnJzIiwiZmluYWxpemVycyIsImZpbmFsaXplciIsInNvbWUiLCJ3cmFwIiwiZXJyb3JDYXRjaGVyIiwib3V0ZXJTY29wZSIsInN3aXRjaFRvWm9uZSIsInRhc2siLCJhd2FpdHMiLCJlY2hvZXMiLCJ0YXNrQ291bnRlciIsInpvbmVTdGFjayIsInpvbmVFY2hvZXMiLCJ6b25lX2lkX2NvdW50ZXIiLCJhMSIsImEyIiwicGFyZW50IiwiZ2xvYmFsRW52IiwiUHJvbWlzZVByb3AiLCJudGhlbiIsImdldFBhdGNoZWRQcm9taXNlVGhlbiIsImd0aGVuIiwiaW5jcmVtZW50RXhwZWN0ZWRBd2FpdHMiLCJwb3NzaWJsZVByb21pc2UiLCJyZWplY3Rpb24iLCJ6b25lRW50ZXJFY2hvIiwidGFyZ2V0Wm9uZSIsInpvbmVMZWF2ZUVjaG8iLCJwb3AiLCJiRW50ZXJpbmdab25lIiwiY3VycmVudFpvbmUiLCJlbnF1ZXVlTmF0aXZlTWljcm9UYXNrIiwiR2xvYmFsUHJvbWlzZSIsInRhcmdldEVudiIsImEzIiwiam9iIiwib3V0ZXJab25lIiwib3JpZ1RoZW4iLCJvblJlc29sdmVkIiwiVU5IQU5ETEVEUkVKRUNUSU9OIiwiZXZlbnQiLCJldmVudERhdGEiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiZGlzcGF0Y2hFdmVudCIsIlByb21pc2VSZWplY3Rpb25FdmVudCIsIm9udW5oYW5kbGVkcmVqZWN0aW9uIiwiXyIsImRlZmF1bHRQcmV2ZW50ZWQiLCJjb25zb2xlIiwid2FybiIsInRlbXBUcmFuc2FjdGlvbiIsImRiIiwibW9kZSIsInN0b3JlTmFtZXMiLCJpZGJkYiIsIm9wZW5Db21wbGV0ZSIsImxldFRocm91Z2giLCJfdmlwIiwiZGJPcGVuRXJyb3IiLCJpc0JlaW5nT3BlbmVkIiwiX29wdGlvbnMiLCJhdXRvT3BlbiIsIm9wZW4iLCJkYlJlYWR5UHJvbWlzZSIsInRyYW5zIiwiX2NyZWF0ZVRyYW5zYWN0aW9uIiwiX2RiU2NoZW1hIiwiUFIxMzk4X21heExvb3AiLCJJbnZhbGlkU3RhdGUiLCJpc09wZW4iLCJfY2xvc2UiLCJfY29tcGxldGlvbiIsIkRFWElFX1ZFUlNJT04iLCJtYXhTdHJpbmciLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJtaW5LZXkiLCJJTlZBTElEX0tFWV9BUkdVTUVOVCIsIlNUUklOR19FWFBFQ1RFRCIsImNvbm5lY3Rpb25zIiwiaXNJRU9yRWRnZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImhhc0lFRGVsZXRlT2JqZWN0U3RvcmVCdWciLCJoYW5nc09uRGVsZXRlTGFyZ2VLZXlSYW5nZSIsImRleGllU3RhY2tGcmFtZUZpbHRlciIsIkRCTkFNRVNfREIiLCJSRUFET05MWSIsIlJFQURXUklURSIsImNvbWJpbmUiLCJmaWx0ZXIxIiwiZmlsdGVyMiIsIkFueVJhbmdlIiwibG93ZXIiLCJsb3dlck9wZW4iLCJ1cHBlciIsInVwcGVyT3BlbiIsIndvcmthcm91bmRGb3JVbmRlZmluZWRQcmltS2V5IiwiVGFibGUiLCJfdHJhbnMiLCJ3cml0ZUxvY2tlZCIsIl90eCIsInRhYmxlTmFtZSIsImNoZWNrVGFibGVJblRyYW5zYWN0aW9uIiwic2NoZW1hIiwiTm90Rm91bmQiLCJpZGJ0cmFucyIsInRyYW5zbGVzcyIsImtleU9yQ3JpdCIsIndoZXJlIiwiZmlyc3QiLCJjb3JlIiwiaG9vayIsInJlYWRpbmciLCJmaXJlIiwiaW5kZXhPckNyaXQiLCJXaGVyZUNsYXVzZSIsImtleVBhdGhzIiwiZXF1YWxzIiwiY29tcG91bmRJbmRleCIsImluZGV4ZXMiLCJwcmltS2V5IiwiaXgiLCJjb21wb3VuZCIsImV2ZXJ5IiwiX21heEtleSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZHhCeU5hbWUiLCJpZGIiLCJfZGVwcyIsImluZGV4ZWREQiIsImNtcCIsImlkeCIsImZpbHRlckZ1bmN0aW9uIiwicHJldkluZGV4IiwicHJldkZpbHRlckZuIiwiaW5kZXgiLCJtdWx0aSIsInRvQ29sbGVjdGlvbiIsImFuZCIsImNvdW50IiwidGhlblNob3J0Y3V0Iiwib2Zmc2V0IiwibnVtUm93cyIsImVhY2giLCJ0b0FycmF5IiwiQ29sbGVjdGlvbiIsIm9yZGVyQnkiLCJyZXZlcnNlIiwibWFwVG9DbGFzcyIsIm1hcHBlZENsYXNzIiwicmVhZEhvb2siLCJ1bnN1YnNjcmliZSIsImRlZmluZUNsYXNzIiwiQ2xhc3MiLCJjb250ZW50IiwiYWRkIiwiYXV0byIsIm9ialRvQWRkIiwibXV0YXRlIiwibnVtRmFpbHVyZXMiLCJsYXN0UmVzdWx0IiwidXBkYXRlIiwia2V5T3JPYmplY3QiLCJJbnZhbGlkQXJndW1lbnQiLCJfYSIsIm1vZGlmeSIsInB1dCIsImRlbGV0ZSIsImNsZWFyIiwicmFuZ2UiLCJidWxrR2V0IiwiZ2V0TWFueSIsImJ1bGtBZGQiLCJvYmplY3RzIiwia2V5c09yT3B0aW9ucyIsIndhbnRSZXN1bHRzIiwiYWxsS2V5cyIsIm51bU9iamVjdHMiLCJvYmplY3RzVG9BZGQiLCJidWxrUHV0Iiwib2JqZWN0c1RvUHV0IiwiYnVsa0RlbGV0ZSIsIm51bUtleXMiLCJFdmVudHMiLCJjdHgiLCJldnMiLCJldmVudE5hbWUiLCJzdWJzY3JpYmVyIiwic3Vic2NyaWJlIiwiYWRkRXZlbnRUeXBlIiwiY2hhaW5GdW5jdGlvbiIsImRlZmF1bHRGdW5jdGlvbiIsImFkZENvbmZpZ3VyZWRFdmVudHMiLCJjb250ZXh0Iiwic3Vic2NyaWJlcnMiLCJjZmciLCJmaXJlRXZlbnQiLCJtYWtlQ2xhc3NDb25zdHJ1Y3RvciIsImNyZWF0ZVRhYmxlQ29uc3RydWN0b3IiLCJ0YWJsZVNjaGVtYSIsIl9hbGxUYWJsZXMiLCJpc1BsYWluS2V5UmFuZ2UiLCJpZ25vcmVMaW1pdEZpbHRlciIsImFsZ29yaXRobSIsIm9yIiwianVzdExpbWl0IiwicmVwbGF5RmlsdGVyIiwiYWRkRmlsdGVyIiwiYWRkUmVwbGF5RmlsdGVyIiwiZmFjdG9yeSIsImlzTGltaXRGaWx0ZXIiLCJjdXJyIiwiYWRkTWF0Y2hGaWx0ZXIiLCJpc01hdGNoIiwiZ2V0SW5kZXhPclN0b3JlIiwiY29yZVNjaGVtYSIsImlzUHJpbUtleSIsInByaW1hcnlLZXkiLCJnZXRJbmRleEJ5S2V5UGF0aCIsIlNjaGVtYSIsIm9wZW5DdXJzb3IiLCJjb3JlVGFibGUiLCJrZXlzT25seSIsImRpciIsInVuaXF1ZSIsInF1ZXJ5IiwiaXRlciIsImNvcmVUcmFucyIsIml0ZXJhdGUiLCJ2YWx1ZU1hcHBlciIsInVuaW9uIiwiY3Vyc29yIiwiYWR2YW5jZSIsInN0b3AiLCJmYWlsIiwiX2l0ZXJhdGUiLCJjdXJzb3JQcm9taXNlIiwibWFwcGVkRm4iLCJjIiwid3JhcHBlZEZuIiwiY29udGludWUiLCJhZHZhbmNlciIsInRhIiwidGIiLCJOYU4iLCJjb21wYXJlVWludDhBcnJheXMiLCJnZXRVaW50OEFycmF5IiwiY29tcGFyZUFycmF5cyIsImFsIiwiYmwiLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsInRzVGFnIiwiYnVmZmVyIiwiYnl0ZU9mZnNldCIsImJ5dGVMZW5ndGgiLCJfcmVhZCIsIl9jdHgiLCJlcnJvciIsInRhYmxlIiwiX3dyaXRlIiwiX2FkZEFsZ29yaXRobSIsImNsb25lIiwicmF3IiwiTWF0aCIsIm1pbiIsInNvcnRCeSIsInBhcnRzIiwibGFzdFBhcnQiLCJsYXN0SW5kZXgiLCJnZXR2YWwiLCJvcmRlciIsInNvcnRlciIsImFWYWwiLCJiVmFsIiwic29ydCIsIm9mZnNldExlZnQiLCJyb3dzTGVmdCIsInVudGlsIiwiYkluY2x1ZGVTdG9wRW50cnkiLCJsYXN0IiwiaW5kZXhOYW1lIiwiX29uZGlyZWN0aW9uY2hhbmdlIiwiZGVzYyIsImVhY2hLZXkiLCJlYWNoVW5pcXVlS2V5IiwiZWFjaFByaW1hcnlLZXkiLCJwcmltYXJ5S2V5cyIsInVuaXF1ZUtleXMiLCJmaXJzdEtleSIsImxhc3RLZXkiLCJkaXN0aW5jdCIsInN0cktleSIsImZvdW5kIiwiY2hhbmdlcyIsIm1vZGlmeWVyIiwiYW55dGhpbmdNb2RpZmllZCIsIm91dGJvdW5kIiwiZXh0cmFjdEtleSIsIm1vZGlmeUNodW5rU2l6ZSIsInRvdGFsRmFpbHVyZXMiLCJhcHBseU11dGF0ZVJlc3VsdCIsImV4cGVjdGVkQ291bnQiLCJuZXh0Q2h1bmsiLCJjYWNoZSIsImFkZFZhbHVlcyIsInB1dFZhbHVlcyIsInB1dEtleXMiLCJkZWxldGVLZXlzIiwib3JpZ1ZhbHVlIiwiY3JpdGVyaWEiLCJkZWxldGVDYWxsYmFjayIsImNoYW5nZVNwZWMiLCJjb3JlUmFuZ2UiLCJjcmVhdGVDb2xsZWN0aW9uQ29uc3RydWN0b3IiLCJ3aGVyZUNsYXVzZSIsImtleVJhbmdlR2VuZXJhdG9yIiwia2V5UmFuZ2UiLCJ3aGVyZUN0eCIsInJlYWRpbmdIb29rIiwic2ltcGxlQ29tcGFyZSIsInNpbXBsZUNvbXBhcmVSZXZlcnNlIiwiY29sbGVjdGlvbk9yV2hlcmVDbGF1c2UiLCJUIiwiY29sbGVjdGlvbiIsImVtcHR5Q29sbGVjdGlvbiIsInJhbmdlRXF1YWwiLCJ1cHBlckZhY3RvcnkiLCJ0b1VwcGVyQ2FzZSIsInRvTG93ZXJDYXNlIiwibG93ZXJGYWN0b3J5IiwibmV4dENhc2luZyIsImxvd2VyS2V5IiwidXBwZXJOZWVkbGUiLCJsb3dlck5lZWRsZSIsImxscCIsImx3cktleUNoYXIiLCJhZGRJZ25vcmVDYXNlQWxnb3JpdGhtIiwibWF0Y2giLCJuZWVkbGVzIiwic3VmZml4IiwiY29tcGFyZSIsInVwcGVyTmVlZGxlcyIsImxvd2VyTmVlZGxlcyIsImRpcmVjdGlvbiIsIm5leHRLZXlTdWZmaXgiLCJuZWVkbGVzTGVuIiwiaW5pdERpcmVjdGlvbiIsIm5lZWRsZUJvdW5kcyIsIm5lZWRsZSIsIm5iIiwiY3JlYXRlUmFuZ2UiLCJmaXJzdFBvc3NpYmxlTmVlZGxlIiwibG93ZXN0UG9zc2libGVDYXNpbmciLCJjYXNpbmciLCJiZXR3ZWVuIiwiaW5jbHVkZUxvd2VyIiwiaW5jbHVkZVVwcGVyIiwiX2NtcCIsImFib3ZlIiwiYWJvdmVPckVxdWFsIiwiYmVsb3ciLCJiZWxvd09yRXF1YWwiLCJzdGFydHNXaXRoIiwic3RyIiwic3RhcnRzV2l0aElnbm9yZUNhc2UiLCJlcXVhbHNJZ25vcmVDYXNlIiwiYW55T2ZJZ25vcmVDYXNlIiwic3RhcnRzV2l0aEFueU9mSWdub3JlQ2FzZSIsIm4iLCJhbnlPZiIsIl9hc2NlbmRpbmciLCJfZGVzY2VuZGluZyIsIm5vdEVxdWFsIiwiaW5BbnlSYW5nZSIsImluY2x1ZGVMb3dlcnMiLCJpbmNsdWRlVXBwZXJzIiwibm9uZU9mIiwicmFuZ2VzIiwiYXNjZW5kaW5nIiwiZGVzY2VuZGluZyIsIl9taW4iLCJtYXgiLCJfbWF4IiwiYWRkUmFuZ2UiLCJuZXdSYW5nZSIsInNvcnREaXJlY3Rpb24iLCJyYW5nZVNvcnRlciIsInJhbmdlUG9zIiwia2V5SXNCZXlvbmRDdXJyZW50RW50cnkiLCJrZXlJc0JlZm9yZUN1cnJlbnRFbnRyeSIsImtleVdpdGhpbkN1cnJlbnRSYW5nZSIsImNoZWNrS2V5Iiwic3RhcnRzV2l0aEFueU9mIiwiY3JlYXRlV2hlcmVDbGF1c2VDb25zdHJ1Y3RvciIsIm9yQ29sbGVjdGlvbiIsIl9JREJLZXlSYW5nZSIsIklEQktleVJhbmdlIiwiZXZlbnRSZWplY3RIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJzdG9wUHJvcGFnYXRpb24iLCJERVhJRV9TVE9SQUdFX01VVEFURURfRVZFTlRfTkFNRSIsIlNUT1JBR0VfTVVUQVRFRF9ET01fRVZFTlRfTkFNRSIsImdsb2JhbEV2ZW50cyIsIlRyYW5zYWN0aW9uIiwiX2xvY2siLCJfcmVjdWxvY2siLCJsb2NrT3duZXJGb3IiLCJfdW5sb2NrIiwiX2Jsb2NrZWRGdW5jcyIsIl9sb2NrZWQiLCJmbkFuZFBTRCIsInNoaWZ0IiwiT3BlbkZhaWxlZCIsImFjdGl2ZSIsInRyYW5zYWN0aW9uIiwiZHVyYWJpbGl0eSIsImNocm9tZVRyYW5zYWN0aW9uRHVyYWJpbGl0eSIsImV2IiwiX3JlamVjdCIsIm9uYWJvcnQiLCJvbiIsIm9uY29tcGxldGUiLCJfcmVzb2x2ZSIsInN0b3JhZ2VtdXRhdGVkIiwiYldyaXRlTG9jayIsIlJlYWRPbmx5IiwiX3Jvb3QiLCJ3YWl0Rm9yIiwicHJvbWlzZUxpa2UiLCJyb290IiwiX3dhaXRpbmdGb3IiLCJfd2FpdGluZ1F1ZXVlIiwic3RvcmUiLCJvYmplY3RTdG9yZSIsInNwaW4iLCJfc3BpbkNvdW50IiwiY3VycmVudFdhaXRQcm9taXNlIiwiYWJvcnQiLCJtZW1vaXplZFRhYmxlcyIsIl9tZW1vaXplZFRhYmxlcyIsInRyYW5zYWN0aW9uQm91bmRUYWJsZSIsImNyZWF0ZVRyYW5zYWN0aW9uQ29uc3RydWN0b3IiLCJkYnNjaGVtYSIsImNvbXBsZXRlIiwid2FzQWN0aXZlIiwiY3JlYXRlSW5kZXhTcGVjIiwic3JjIiwibmFtZUZyb21LZXlQYXRoIiwiY3JlYXRlVGFibGVTY2hlbWEiLCJzYWZhcmlNdWx0aVN0b3JlRml4IiwiZ2V0TWF4S2V5IiwiSWRiS2V5UmFuZ2UiLCJvbmx5IiwiZ2V0S2V5RXh0cmFjdG9yIiwiZ2V0U2luZ2xlUGF0aEtleUV4dHJhY3RvciIsImFycmF5aWZ5IiwiX2lkX2NvdW50ZXIiLCJnZXRLZXlQYXRoQWxpYXMiLCJjcmVhdGVEQkNvcmUiLCJ0bXBUcmFucyIsImV4dHJhY3RTY2hlbWEiLCJ0YWJsZXMiLCJvYmplY3RTdG9yZU5hbWVzIiwiYXV0b0luY3JlbWVudCIsImluZGV4QnlLZXlQYXRoIiwiaXNQcmltYXJ5S2V5IiwiaW5kZXhOYW1lcyIsIm11bHRpRW50cnkiLCJoYXNHZXRBbGwiLCJtYWtlSURCS2V5UmFuZ2UiLCJpZGJSYW5nZSIsInVwcGVyQm91bmQiLCJsb3dlckJvdW5kIiwiYm91bmQiLCJjcmVhdGVEYkNvcmVUYWJsZSIsImlzQWRkT3JQdXQiLCJyZXEiLCJyZXFzIiwiZXJyb3JIYW5kbGVyIiwiYXJnczEiLCJhcmdzMiIsInNvdXJjZSIsIm9wZW5LZXlDdXJzb3IiLCJfX19pZCIsIl9jdXJzb3JDb250aW51ZSIsIl9jdXJzb3JDb250aW51ZVByaW1hcnlLZXkiLCJjb250aW51ZVByaW1hcnlLZXkiLCJfY3Vyc29yQWR2YW5jZSIsImRvVGhyb3dDdXJzb3JJc05vdFN0YXJ0ZWQiLCJkb1Rocm93Q3Vyc29ySXNTdG9wcGVkIiwiZ290T25lIiwiaXRlcmF0aW9uUHJvbWlzZSIsInJlc29sdmVJdGVyYXRpb24iLCJyZWplY3RJdGVyYXRpb24iLCJndWFyZGVkQ2FsbGJhY2siLCJyZXF1ZXN0Iiwibm9uSW5maW5pdExpbWl0IiwiaWRiS2V5UmFuZ2UiLCJnZXRBbGwiLCJnZXRBbGxLZXlzIiwia2V5Q291bnQiLCJjYWxsYmFja0NvdW50Iiwic3VjY2Vzc0hhbmRsZXIiLCJfcG9zIiwidGFibGVNYXAiLCJNSU5fS0VZIiwiTUFYX0tFWSIsImNyZWF0ZU1pZGRsZXdhcmVTdGFjayIsInN0YWNrSW1wbCIsIm1pZGRsZXdhcmVzIiwiZG93biIsImNyZWF0ZU1pZGRsZXdhcmVTdGFja3MiLCJkYmNvcmUiLCJnZW5lcmF0ZU1pZGRsZXdhcmVTdGFja3MiLCJfbm92aXAiLCJfbWlkZGxld2FyZXMiLCJ0YmwiLCJzZXRBcGlPblBsYWNlIiwib2JqcyIsInRhYmxlTmFtZXMiLCJwcm9wRGVzYyIsImVudW1lcmFibGUiLCJyZW1vdmVUYWJsZXNBcGkiLCJsb3dlclZlcnNpb25GaXJzdCIsIl9jZmciLCJ2ZXJzaW9uIiwicnVuVXBncmFkZXJzIiwib2xkVmVyc2lvbiIsImlkYlVwZ3JhZGVUcmFucyIsImdsb2JhbFNjaGVtYSIsIl9zdG9yZU5hbWVzIiwicmVqZWN0VHJhbnNhY3Rpb24iLCJjcmVhdGVUYWJsZSIsInBvcHVsYXRlIiwidXBkYXRlVGFibGVzQW5kSW5kZXhlcyIsInF1ZXVlIiwidmVyc2lvbnMiLCJfdmVyc2lvbnMiLCJidWlsZEdsb2JhbFNjaGVtYSIsImFueUNvbnRlbnRVcGdyYWRlckhhc1J1biIsInZlcnNUb1J1biIsIm9sZFNjaGVtYSIsIm5ld1NjaGVtYSIsImFkanVzdFRvRXhpc3RpbmdJbmRleE5hbWVzIiwiZGlmZiIsImdldFNjaGVtYURpZmYiLCJ0dXBsZSIsImNoYW5nZSIsInJlY3JlYXRlIiwiVXBncmFkZSIsImFkZEluZGV4IiwiZGVsZXRlSW5kZXgiLCJkZWwiLCJpZHhOYW1lIiwiY29udGVudFVwZ3JhZGUiLCJ1cGdyYWRlU2NoZW1hIiwiY29udGVudFVwZ3JhZGVJc0FzeW5jIiwicmV0dXJuVmFsdWUiLCJwcm9taXNlRm9sbG93ZWQiLCJkZWNyZW1lbnRvciIsImRlbGV0ZVJlbW92ZWRUYWJsZXMiLCJydW5RdWV1ZSIsImNyZWF0ZU1pc3NpbmdUYWJsZXMiLCJvbGREZWYiLCJuZXdEZWYiLCJkZWYiLCJvbGRJbmRleGVzIiwibmV3SW5kZXhlcyIsIm9sZElkeCIsIm5ld0lkeCIsImNyZWF0ZU9iamVjdFN0b3JlIiwiY29udGFpbnMiLCJzdG9yZU5hbWUiLCJkZWxldGVPYmplY3RTdG9yZSIsImNyZWF0ZUluZGV4IiwiZGJTdG9yZU5hbWVzIiwiaiIsImlkYmluZGV4IiwicmVhZEdsb2JhbFNjaGVtYSIsInZlcm5vIiwidmVyaWZ5SW5zdGFsbGVkU2NoZW1hIiwiaW5zdGFsbGVkU2NoZW1hIiwiY2giLCJfaGFzR2V0QWxsIiwiZGV4aWVOYW1lIiwiaW5kZXhTcGVjIiwiV29ya2VyR2xvYmFsU2NvcGUiLCJwYXJzZUluZGV4U3ludGF4IiwicHJpbUtleUFuZEluZGV4ZXMiLCJpbmRleE51bSIsInRyaW0iLCJyZXBsYWNlIiwiVmVyc2lvbiIsIl9wYXJzZVN0b3Jlc1NwZWMiLCJzdG9yZXMiLCJvdXRTY2hlbWEiLCJzdG9yZXNTb3VyY2UiLCJzdG9yZXNTcGVjIiwidXBncmFkZSIsInVwZ3JhZGVGdW5jdGlvbiIsImNyZWF0ZVZlcnNpb25Db25zdHJ1Y3RvciIsInZlcnNpb25OdW1iZXIiLCJnZXREYk5hbWVzVGFibGUiLCJkYk5hbWVzREIiLCJhZGRvbnMiLCJkYm5hbWVzIiwiaGFzRGF0YWJhc2VzTmF0aXZlIiwiZGF0YWJhc2VzIiwiZ2V0RGF0YWJhc2VOYW1lcyIsImluZm9zIiwiaW5mbyIsIl9vbkRhdGFiYXNlQ3JlYXRlZCIsIl9vbkRhdGFiYXNlRGVsZXRlZCIsInZpcCIsImlkYlJlYWR5IiwiaXNTYWZhcmkiLCJ1c2VyQWdlbnREYXRhIiwiaW50ZXJ2YWxJZCIsInRyeUlkYiIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImRleGllT3BlbiIsInN0YXRlIiwiRGVidWcuZGVidWciLCJvcGVuQ2FuY2VsbGVyIiwiRGVidWcuZ2V0RXJyb3JXaXRoU3RhY2siLCJ0aHJvd0lmQ2FuY2VsbGVkIiwicmVzb2x2ZURiUmVhZHkiLCJkYlJlYWR5UmVzb2x2ZSIsInVwZ3JhZGVUcmFuc2FjdGlvbiIsIndhc0NyZWF0ZWQiLCJzYWZhcmkxNFdvcmthcm91bmQiLCJkYk5hbWUiLCJhdXRvU2NoZW1hIiwicm91bmQiLCJvbmJsb2NrZWQiLCJfZmlyZU9uQmxvY2tlZCIsIm9udXBncmFkZW5lZWRlZCIsImFsbG93RW1wdHlEQiIsImNsb3NlIiwiZGVscmVxIiwiZGVsZXRlRGF0YWJhc2UiLCJOb1N1Y2hEYXRhYmFzZSIsIm9sZFZlciIsInBvdyIsIm9udmVyc2lvbmNoYW5nZSIsInZjRmlyZWQiLCJvbmNsb3NlIiwib25SZWFkeUJlaW5nRmlyZWQiLCJyZWFkeSIsImZpcmVSZW1haW5kZXJzIiwicmVtYWluZGVycyIsImF3YWl0SXRlcmF0b3IiLCJjYWxsTmV4dCIsImRvVGhyb3ciLCJ0aHJvdyIsIm9uU3VjY2VzcyIsInN0ZXAiLCJvbkVycm9yIiwiZ2V0TmV4dCIsImV4dHJhY3RUcmFuc2FjdGlvbkFyZ3MiLCJfdGFibGVBcmdzXyIsInNjb3BlRnVuYyIsImVudGVyVHJhbnNhY3Rpb25TY29wZSIsInBhcmVudFRyYW5zYWN0aW9uIiwic2NvcGVGdW5jSXNBc3luYyIsIlByZW1hdHVyZUNvbW1pdCIsInBhZCIsImNyZWF0ZVZpcnR1YWxJbmRleE1pZGRsZXdhcmUiLCJpbmRleExvb2t1cCIsImFsbFZpcnR1YWxJbmRleGVzIiwiYWRkVmlydHVhbEluZGV4ZXMiLCJrZXlUYWlsIiwibG93TGV2ZWxJbmRleCIsImtleVBhdGhBbGlhcyIsImluZGV4TGlzdCIsImtleUxlbmd0aCIsImlzVmlydHVhbCIsInZpcnR1YWxJbmRleCIsInZpcnR1YWxLZXlQYXRoIiwiZmluZEJlc3RJbmRleCIsInRyYW5zbGF0ZVJhbmdlIiwidHJhbnNsYXRlUmVxdWVzdCIsImNyZWF0ZVZpcnR1YWxDdXJzb3IiLCJfY29udGludWUiLCJ2aXJ0dWFsQ3Vyc29yIiwidmlydHVhbEluZGV4TWlkZGxld2FyZSIsImxldmVsIiwiZ2V0T2JqZWN0RGlmZiIsInByZngiLCJhcCIsImJwIiwiYXBUeXBlTmFtZSIsImJwVHlwZU5hbWUiLCJnZXRFZmZlY3RpdmVLZXlzIiwiaG9va3NNaWRkbGV3YXJlIiwiZG93bkNvcmUiLCJkb3duVGFibGUiLCJ0YWJsZU1pZGRsZXdhcmUiLCJkeFRyYW5zIiwiZGVsZXRpbmciLCJjcmVhdGluZyIsInVwZGF0aW5nIiwiYWRkUHV0T3JEZWxldGUiLCJkZWxldGVSYW5nZSIsImdldEV4aXN0aW5nVmFsdWVzIiwiZXhpc3RpbmdWYWx1ZXMiLCJjb250ZXh0cyIsImV4aXN0aW5nVmFsdWUiLCJnZW5lcmF0ZWRQcmltYXJ5S2V5Iiwib2JqZWN0RGlmZiIsImFkZGl0aW9uYWxDaGFuZ2VzIiwicmVxdWVzdGVkVmFsdWUiLCJkZWxldGVOZXh0Q2h1bmsiLCJlZmZlY3RpdmVLZXlzIiwiZ2V0RnJvbVRyYW5zYWN0aW9uQ2FjaGUiLCJjYWNoZUV4aXN0aW5nVmFsdWVzTWlkZGxld2FyZSIsImNhY2hlZFJlc3VsdCIsImlzRW1wdHlSYW5nZSIsIm5vZGUiLCJmcm9tT3JUcmVlIiwidG8iLCJkIiwicmFuZ2VTZXQiLCJhZGRLZXkiLCJhZGRLZXlzIiwiZ2V0UmFuZ2VTZXRJdGVyYXRvciIsImxlZnQiLCJyaWdodCIsInIiLCJyZWJhbGFuY2UiLCJyaWdodFdhc0N1dE9mZiIsIm5ld1NldCIsIl9hZGRSYW5nZVNldCIsInJhbmdlU2V0MSIsInJhbmdlU2V0MiIsImkxIiwibmV4dFJlc3VsdDEiLCJpMiIsIm5leHRSZXN1bHQyIiwia2V5UHJvdmlkZWQiLCJ1cCIsIl9iIiwicm9vdENsb25lIiwib2xkUm9vdFJpZ2h0IiwiY29tcHV0ZURlcHRoIiwib2JzZXJ2YWJpbGl0eU1pZGRsZXdhcmUiLCJGVUxMX1JBTkdFIiwidGFibGVDbG9uZSIsIm11dGF0ZWRQYXJ0cyIsImdldFJhbmdlU2V0IiwicGFydCIsInBrUmFuZ2VTZXQiLCJkZWxzUmFuZ2VTZXQiLCJuZXdPYmpzIiwib2xkQ2FjaGUiLCJvbGRPYmpzIiwidHJhY2tBZmZlY3RlZEluZGV4ZXMiLCJnZXRSYW5nZSIsInJlYWRTdWJzY3JpYmVycyIsIm1ldGhvZCIsInN1YnNjciIsInF1ZXJpZWRJbmRleCIsInF1ZXJpZWRSYW5nZXMiLCJrZXlzUHJvbWlzZSIsInJlc3VsdGluZ0tleXMiLCJwS2V5cyIsIndhbnRWYWx1ZXMiLCJwa2V5IiwiYWRkQWZmZWN0ZWRJbmRleCIsImFkZEtleU9yS2V5cyIsIm9sZEtleSIsIm5ld0tleSIsImRlcHMiLCJkZXBlbmRlbmNpZXMiLCJjYW5jZWxPcGVuIiwiYlN0aWNreSIsIm5ld1ZlcnNpb24iLCJ1c2UiLCJhZGRvbiIsInZlcnNpb25JbnN0YW5jZSIsIl93aGVuUmVhZHkiLCJ1bnVzZSIsIm13IiwiaGFzQXJndW1lbnRzIiwiZG9EZWxldGUiLCJiYWNrZW5kREIiLCJoYXNCZWVuQ2xvc2VkIiwiaGFzRmFpbGVkIiwiZHluYW1pY2FsbHlPcGVuZWQiLCJfdHJhbnNhY3Rpb24iLCJvbmx5SWZDb21wYXRpYmxlIiwiaWRiTW9kZSIsIlN1YlRyYW5zYWN0aW9uIiwiZW50ZXJUcmFuc2FjdGlvbiIsIkludmFsaWRUYWJsZSIsInN5bWJvbE9ic2VydmFibGUiLCJvYnNlcnZhYmxlIiwiT2JzZXJ2YWJsZSIsIl9zdWJzY3JpYmUiLCJleHRlbmRPYnNlcnZhYmlsaXR5U2V0IiwicXVlcmllciIsImhhc1ZhbHVlIiwiY3VycmVudFZhbHVlIiwib2JzZXJ2ZXIiLCJleGVjdXRlIiwiZXhlYyIsImNsb3NlZCIsImFjY3VtTXV0cyIsImN1cnJlbnRPYnMiLCJzdWJzY3JpcHRpb24iLCJtdXRhdGlvbkxpc3RlbmVyIiwicXVlcnlpbmciLCJzdGFydGVkTGlzdGVuaW5nIiwic2hvdWxkTm90aWZ5IiwiZG9RdWVyeSIsImdldFZhbHVlIiwiZG9tRGVwcyIsIm1vekluZGV4ZWREQiIsIndlYmtpdEluZGV4ZWREQiIsIm1zSW5kZXhlZERCIiwid2Via2l0SURCS2V5UmFuZ2UiLCJfRGV4aWUiLCJkYXRhYmFzZU5hbWUiLCJleGlzdHMiLCJpZ25vcmVUcmFuc2FjdGlvbiIsImFzeW5jIiwiZ2VuZXJhdG9yRm4iLCJzcGF3biIsImN1cnJlbnRUcmFuc2FjdGlvbiIsInByb21pc2VPckZ1bmN0aW9uIiwib3B0aW9uYWxUaW1lb3V0IiwiRGVidWcuc2V0RGVidWciLCJzZW1WZXIiLCJtYXhLZXkiLCJhZGRFdmVudExpc3RlbmVyIiwidXBkYXRlZFBhcnRzIiwicHJvcGFnYXRpbmdMb2NhbGx5IiwiaW5pdEN1c3RvbUV2ZW50IiwicHJvcGFnYXRlTG9jYWxseSIsInVwZGF0ZVBhcnRzIiwid2FzTWUiLCJCcm9hZGNhc3RDaGFubmVsIiwiYmMiLCJ1bnJlZiIsImNoYW5nZWRQYXJ0cyIsInBvc3RNZXNzYWdlIiwib25tZXNzYWdlIiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0cmlnIiwicmFuZG9tIiwibWF0Y2hBbGwiLCJpbmNsdWRlVW5jb250cm9sbGVkIiwiY2xpZW50IiwicGFyc2UiLCJuZXdWYWx1ZSIsInN3Q29udGFpbmVyIiwic2VydmljZVdvcmtlciIsInByb3BhZ2F0ZU1lc3NhZ2VMb2NhbGx5IiwiZGV4aWVfM18yXzRfZGVmYXVsdCIsIkRleGllJDEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7QUFBQUM7OztBQ0NPLElBQU1DLFVBQ1QsT0FBT0MsZUFBZSxjQUFjQSxhQUNwQyxPQUFPQyxTQUFTLGNBQWNBLE9BQzlCLE9BQU9DLFdBQVcsY0FBY0EsU0FDaENDO0FDSkcsSUFBTUMsT0FBT0MsT0FBT0Q7QUFDcEIsSUFBTUUsVUFBVUMsTUFBTUQ7QUFDN0IsSUFBSSxPQUFPRSxZQUFZLGVBQWUsQ0FBQ1QsUUFBUVMsU0FBUTtFQUluRFQsUUFBUVMsVUFBVUE7O1NBSU5DLE9BQTBDQyxLQUFRQyxXQUFZO0VBQzFFLElBQUksT0FBT0EsY0FBYyxVQUFVLE9BQU9EO0VBQzFDTixLQUFLTyxTQUFTLEVBQUVDLFFBQVEsVUFBVUMsS0FBRztJQUNqQ0gsSUFBSUcsT0FBT0YsVUFBVUU7R0FDeEI7RUFDRCxPQUFPSDtBQUNYO0FBRU8sSUFBTUksV0FBV1QsT0FBT1U7QUFDeEIsSUFBTUMsVUFBVSxHQUFHQztTQUNWQyxPQUFPUixLQUFLUyxNQUFJO0VBQzVCLE9BQU9ILFFBQVFJLEtBQUtWLEtBQUtTLElBQUk7QUFDakM7U0FFZ0JFLE1BQU9DLE9BQU9YLFdBQVM7RUFDbkMsSUFBSSxPQUFPQSxjQUFjLFlBQVlBLFlBQVlBLFVBQVVHLFNBQVNRLEtBQUssQ0FBQztFQUMxRSxDQUFDLE9BQU9DLFlBQVksY0FBY25CLE9BQU9tQixRQUFRQyxTQUFTYixTQUFTLEVBQUVDLFFBQVFDLE9BQUc7SUFDNUVZLFFBQVFILE9BQU9ULEtBQUtGLFVBQVVFLElBQUk7R0FDckM7QUFDTDtBQUVPLElBQU1hLGlCQUFpQnJCLE9BQU9xQjtTQUVyQkQsUUFB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cUIsS0FBTTtHQUNUO0VBS0QsSUFBSSxPQUFPaXFCLHFCQUFxQixhQUFhO0lBQ3pDQSxpQkFBaUIsV0FBWWxhLE1BQWdCO01BQzdDLElBQUlBLEdBQUcxdUIsUUFBUTB0QixnQ0FBZ0M7UUFDN0MsTUFBTStiLE9BQU90dEIsS0FBSzh0QixNQUFNdmIsR0FBR3diLFFBQVE7UUFDbkMsSUFBSVQsTUFBTVQsaUJBQWlCUyxLQUFLSCxZQUFZOztLQUUvQzs7RUFNSCxNQUFNYSxjQUFjL3FDLEtBQUs2TixZQUFZcU0sVUFBVTh3QjtFQUMvQyxJQUFJRCxhQUFhO0lBRWZBLFlBQVl2QixpQkFBaUIsV0FBV3lCLHVCQUF1Qjs7O0FBSW5FLFNBQVNBLHdCQUF3QjtFQUFFWjtBQUFJLEdBQWdCO0VBQ3JELElBQUlBLFFBQVFBLEtBQUtsNUIsU0FBU21kLGdDQUFnQztJQUN4RHNiLGlCQUFpQlMsS0FBS0gsWUFBWTs7QUFFdEM7QUNoRkEzNkIsYUFBYWQsa0JBQWtCeEQ7QUFHL0JvK0IsU0FBZWpOLE9BQWE5aEIscUJBQXFCOzs7QTFEakJqRCxJQUFPNHdCLHNCQUFRQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpbGVhcm4vZXN0cmFkYS9vdXQifQ==