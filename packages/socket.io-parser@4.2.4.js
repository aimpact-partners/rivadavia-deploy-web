System.register(["@socket.io/component-emitter@3.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@socket.io/component-emitter","3.1.0"],["socket.io-parser","4.2.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@socket.io/component-emitter@3.1.0', dep)],
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

// .beyond/uimport/socket.io-parser.4.2.4.js
var socket_io_parser_4_2_4_exports = {};
__export(socket_io_parser_4_2_4_exports, {
  Decoder: () => Decoder,
  Encoder: () => Encoder,
  PacketType: () => PacketType,
  protocol: () => protocol
});
module.exports = __toCommonJS(socket_io_parser_4_2_4_exports);

// node_modules/socket.io-parser/build/esm/is-binary.js
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = obj => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
  return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (let i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}

// node_modules/socket.io-parser/build/esm/binary.js
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length;
  return {
    packet: pack,
    buffers
  };
}
function _deconstructPacket(data, buffers) {
  if (!data) return data;
  if (isBinary(data)) {
    const placeholder = {
      _placeholder: true,
      num: buffers.length
    };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    const newData = new Array(data.length);
    for (let i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === "object" && !(data instanceof Date)) {
    const newData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        newData[key] = _deconstructPacket(data[key], buffers);
      }
    }
    return newData;
  }
  return data;
}
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  delete packet.attachments;
  return packet;
}
function _reconstructPacket(data, buffers) {
  if (!data) return data;
  if (data && data._placeholder === true) {
    const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
    if (isIndexValid) {
      return buffers[data.num];
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === "object") {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }
  return data;
}

// node_modules/socket.io-parser/build/esm/index.js
var import_component_emitter = require("@socket.io/component-emitter@3.1.0");
var RESERVED_EVENTS = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
var protocol = 5;
var PacketType;
(function (PacketType2) {
  PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
  PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
  PacketType2[PacketType2["ACK"] = 3] = "ACK";
  PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
var Encoder = class {
  constructor(replacer) {
    this.replacer = replacer;
  }
  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if (hasBinary(obj)) {
        return this.encodeAsBinary({
          type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
          nsp: obj.nsp,
          data: obj.data,
          id: obj.id
        });
      }
    }
    return [this.encodeAsString(obj)];
  }
  encodeAsString(obj) {
    let str = "" + obj.type;
    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    }
    if (obj.nsp && "/" !== obj.nsp) {
      str += obj.nsp + ",";
    }
    if (null != obj.id) {
      str += obj.id;
    }
    if (null != obj.data) {
      str += JSON.stringify(obj.data, this.replacer);
    }
    return str;
  }
  encodeAsBinary(obj) {
    const deconstruction = deconstructPacket(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack);
    return buffers;
  }
};
function isObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}
var Decoder = class extends import_component_emitter.Emitter {
  constructor(reviver) {
    super();
    this.reviver = reviver;
  }
  add(obj) {
    let packet;
    if (typeof obj === "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }
      packet = this.decodeString(obj);
      const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
      if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
        packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
        this.reconstructor = new BinaryReconstructor(packet);
        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        super.emitReserved("decoded", packet);
      }
    } else if (isBinary(obj) || obj.base64) {
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) {
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  decodeString(str) {
    let i = 0;
    const p = {
      type: Number(str.charAt(0))
    };
    if (PacketType[p.type] === void 0) {
      throw new Error("unknown packet type " + p.type);
    }
    if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
      const start = i + 1;
      while (str.charAt(++i) !== "-" && i != str.length) {}
      const buf = str.substring(start, i);
      if (buf != Number(buf) || str.charAt(i) !== "-") {
        throw new Error("Illegal attachments");
      }
      p.attachments = Number(buf);
    }
    if ("/" === str.charAt(i + 1)) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if ("," === c) break;
        if (i === str.length) break;
      }
      p.nsp = str.substring(start, i);
    } else {
      p.nsp = "/";
    }
    const next = str.charAt(i + 1);
    if ("" !== next && Number(next) == next) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if (null == c || Number(c) != c) {
          --i;
          break;
        }
        if (i === str.length) break;
      }
      p.id = Number(str.substring(start, i + 1));
    }
    if (str.charAt(++i)) {
      const payload = this.tryParse(str.substr(i));
      if (Decoder.isPayloadValid(p.type, payload)) {
        p.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    return p;
  }
  tryParse(str) {
    try {
      return JSON.parse(str, this.reviver);
    } catch (e) {
      return false;
    }
  }
  static isPayloadValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return isObject(payload);
      case PacketType.DISCONNECT:
        return payload === void 0;
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || isObject(payload);
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
      this.reconstructor = null;
    }
  }
};
var BinaryReconstructor = class {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  takeBinaryData(binData) {
    this.buffers.push(binData);
    if (this.buffers.length === this.reconPack.attachments) {
      const packet = reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  }
  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9zb2NrZXQuaW8tcGFyc2VyLjQuMi40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvYnVpbGQvZXNtL2lzLWJpbmFyeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2J1aWxkL2VzbS9iaW5hcnkuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9idWlsZC9lc20vaW5kZXguanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJEZWNvZGVyIiwiRW5jb2RlciIsIlBhY2tldFR5cGUiLCJwcm90b2NvbCIsIm1vZHVsZSIsIndpdGhOYXRpdmVBcnJheUJ1ZmZlciIsIkFycmF5QnVmZmVyIiwiaXNWaWV3Iiwib2JqIiwiYnVmZmVyIiwidG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ3aXRoTmF0aXZlQmxvYiIsIkJsb2IiLCJjYWxsIiwid2l0aE5hdGl2ZUZpbGUiLCJGaWxlIiwiaXNCaW5hcnkiLCJoYXNCaW5hcnkiLCJ0b0pTT04iLCJBcnJheSIsImlzQXJyYXkiLCJpIiwibCIsImxlbmd0aCIsImFyZ3VtZW50cyIsImtleSIsImhhc093blByb3BlcnR5IiwiZGVjb25zdHJ1Y3RQYWNrZXQiLCJwYWNrZXQiLCJidWZmZXJzIiwicGFja2V0RGF0YSIsImRhdGEiLCJwYWNrIiwiX2RlY29uc3RydWN0UGFja2V0IiwiYXR0YWNobWVudHMiLCJwbGFjZWhvbGRlciIsIl9wbGFjZWhvbGRlciIsIm51bSIsInB1c2giLCJuZXdEYXRhIiwiRGF0ZSIsInJlY29uc3RydWN0UGFja2V0IiwiX3JlY29uc3RydWN0UGFja2V0IiwiaXNJbmRleFZhbGlkIiwiRXJyb3IiLCJyZXF1aXJlIiwiUkVTRVJWRURfRVZFTlRTIiwiY29uc3RydWN0b3IiLCJyZXBsYWNlciIsImVuY29kZSIsInR5cGUiLCJFVkVOVCIsIkFDSyIsImVuY29kZUFzQmluYXJ5IiwiQklOQVJZX0VWRU5UIiwiQklOQVJZX0FDSyIsIm5zcCIsImlkIiwiZW5jb2RlQXNTdHJpbmciLCJzdHIiLCJKU09OIiwic3RyaW5naWZ5IiwiZGVjb25zdHJ1Y3Rpb24iLCJ1bnNoaWZ0IiwiaXNPYmplY3QiLCJ2YWx1ZSIsImltcG9ydF9jb21wb25lbnRfZW1pdHRlciIsInJldml2ZXIiLCJhZGQiLCJyZWNvbnN0cnVjdG9yIiwiZGVjb2RlU3RyaW5nIiwiaXNCaW5hcnlFdmVudCIsIkJpbmFyeVJlY29uc3RydWN0b3IiLCJlbWl0UmVzZXJ2ZWQiLCJiYXNlNjQiLCJ0YWtlQmluYXJ5RGF0YSIsInAiLCJOdW1iZXIiLCJjaGFyQXQiLCJzdGFydCIsImJ1ZiIsInN1YnN0cmluZyIsImMiLCJuZXh0IiwicGF5bG9hZCIsInRyeVBhcnNlIiwic3Vic3RyIiwiaXNQYXlsb2FkVmFsaWQiLCJwYXJzZSIsImUiLCJDT05ORUNUIiwiRElTQ09OTkVDVCIsIkNPTk5FQ1RfRVJST1IiLCJpbmRleE9mIiwiZGVzdHJveSIsImZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24iLCJyZWNvblBhY2siLCJiaW5EYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7QUNBQSxJQUFNQyx3QkFBd0IsT0FBT0MsZ0JBQWdCO0FBQ3JELElBQU1DLFNBQVVDLE9BQVE7RUFDcEIsT0FBTyxPQUFPRixZQUFZQyxXQUFXLGFBQy9CRCxZQUFZQyxPQUFPQyxHQUFHLElBQ3RCQSxJQUFJQyxrQkFBa0JIO0FBQ2hDO0FBQ0EsSUFBTUksV0FBV0MsT0FBT0MsVUFBVUY7QUFDbEMsSUFBTUcsaUJBQWlCLE9BQU9DLFNBQVMsY0FDbEMsT0FBT0EsU0FBUyxlQUNiSixTQUFTSyxLQUFLRCxJQUFJLE1BQU07QUFDaEMsSUFBTUUsaUJBQWlCLE9BQU9DLFNBQVMsY0FDbEMsT0FBT0EsU0FBUyxlQUNiUCxTQUFTSyxLQUFLRSxJQUFJ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LE9BQU9sQixJQUFJc0IsVUFBVUYsT0FBTzFELElBQUksQ0FBQyxDQUFDO0lBQzdDO0lBRUEsSUFBSXNDLElBQUltQixPQUFPLEVBQUV6RCxDQUFDLEdBQUc7TUFDakIsTUFBTStELFVBQVUsS0FBS0MsU0FBUzFCLElBQUkyQixPQUFPakUsQ0FBQyxDQUFDO01BQzNDLElBQUl2QixRQUFReUYsZUFBZVgsRUFBRTFCLE1BQU1rQyxPQUFPLEdBQUc7UUFDekNSLEVBQUU3QyxPQUFPcUQ7TUFDYixPQUNLO1FBQ0QsTUFBTSxJQUFJeEMsTUFBTSxpQkFBaUI7TUFDckM7SUFDSjtJQUNBLE9BQU9nQztFQUNYO0VBQ0FTLFNBQVMxQixLQUFLO0lBQ1YsSUFBSTtNQUNBLE9BQU9DLEtBQUs0QixNQUFNN0IsS0FBSyxLQUFLUSxPQUFPO0lBQ3ZDLFNBQ09zQixHQUFQO01BQ0ksT0FBTztJQUNYO0VBQ0o7RUFDQSxPQUFPRixlQUFlckMsTUFBTWtDLFNBQVM7SUFDakMsUUFBUWxDO01BQUEsS0FDQ2xELFdBQVcwRjtRQUNaLE9BQU8xQixTQUFTb0IsT0FBTztNQUFBLEtBQ3RCcEYsV0FBVzJGO1FBQ1osT0FBT1AsWUFBWTtNQUFBLEtBQ2xCcEYsV0FBVzRGO1FBQ1osT0FBTyxPQUFPUixZQUFZLFlBQVlwQixTQUFTb0IsT0FBTztNQUFBLEtBQ3JEcEYsV0FBV21EO01BQUEsS0FDWG5ELFdBQVdzRDtRQUNaLE9BQVFuQyxNQUFNQyxRQUFRZ0UsT0FBTyxNQUN4QixPQUFPQSxRQUFRLE9BQU8sWUFDbEIsT0FBT0EsUUFBUSxPQUFPLFlBQ25CdEMsZ0JBQWdCK0MsUUFBUVQsUUFBUSxFQUFFLE1BQU07TUFBQSxLQUNuRHBGLFdBQVdvRDtNQUFBLEtBQ1hwRCxXQUFXdUQ7UUFDWixPQUFPcEMsTUFBTUMsUUFBUWdFLE9BQU87SUFBQTtFQUV4QztFQUlBVSxVQUFVO0lBQ04sSUFBSSxLQUFLekIsZUFBZTtNQUNwQixLQUFLQSxjQUFjMEIsd0JBQXVCO01BQzFDLEtBQUsxQixnQkFBZ0I7SUFDekI7RUFDSjtBQUNKO0FBU0EsSUFBTUcsc0JBQU4sTUFBMEI7RUFDdEJ6QixZQUFZbkIsUUFBUTtJQUNoQixLQUFLQSxTQUFTQTtJQUNkLEtBQUtDLFVBQVUsRUFBQztJQUNoQixLQUFLbUUsWUFBWXBFO0VBQ3JCO0VBU0ErQyxlQUFlc0IsU0FBUztJQUNwQixLQUFLcEUsUUFBUVMsS0FBSzJELE9BQU87SUFDekIsSUFBSSxLQUFLcEUsUUFBUU4sV0FBVyxLQUFLeUUsVUFBVTlELGFBQWE7TUFFcEQsTUFBTU4sU0FBU2Esa0JBQWtCLEtBQUt1RCxXQUFXLEtBQUtuRSxPQUFPO01BQzdELEtBQUtrRSx3QkFBdUI7TUFDNUIsT0FBT25FO0lBQ1g7SUFDQSxPQUFPO0VBQ1g7RUFJQW1FLHlCQUF5QjtJQUNyQixLQUFLQyxZQUFZO0lBQ2pCLEtBQUtuRSxVQUFVLEVBQUM7RUFDcEI7QUFDSiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpbGVhcm4vZXN0cmFkYS9vdXQifQ==