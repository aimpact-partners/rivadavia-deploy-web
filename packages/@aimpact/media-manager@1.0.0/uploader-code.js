System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@aimpact/media-manager@1.0.0/uploader"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, useUploader, UploaderProvider, __beyond_pkg, hmr;
  _export({
    useUploader: void 0,
    UploaderProvider: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_2 = _aimpactMediaManager100Uploader;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.6"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/reactive", "1.0.2"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["socket.io-client", "4.6.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/ailearn-estrada", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/media-manager@1.0.0/uploader-code"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@aimpact/media-manager/uploader', dependency_2]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 1514890813,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useUploader = useUploader;
          var React = require("react");
          var _uploader = require("@aimpact/media-manager/uploader");
          /*bundle*/
          function useUploader({
            url,
            name = 'file',
            multiple = false
          }) {
            const [uploader, setUploader] = React.useState();
            const [fetching, setFetching] = React.useState();
            const [total, setTotalFiles] = React.useState(0);
            const drag = React.useRef(null);
            const button = React.useRef(null);
            const clearFiles = () => {
              uploader?.clean();
              setTotalFiles(0);
            };
            React.useEffect(() => {
              const uploader = new _uploader.Uploader({
                url,
                name,
                multiple
              });
              uploader.create(button.current, drag.current);
              const onChange = () => {
                setTotalFiles(uploader.files.items?.size ?? 0);
                if (uploader.fetching !== fetching) setFetching(uploader.fetching);
              };
              uploader.on('change', onChange);
              setUploader(uploader);
              return () => uploader.off('change', onChange);
            }, [url]);
            const uploadFiles = uploader?.publish;
            const deleteFile = uploader?.delete;
            return {
              uploadFiles,
              clearFiles,
              deleteFile,
              files: uploader?.files.items,
              fetching,
              button,
              drag,
              totalFiles: total
            };
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./provider
      **************************/

      ims.set('./provider', {
        hash: 891411025,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UploaderProvider = UploaderProvider;
          var React = require("react");
          var _control = require("./control");
          const UploaderContext = React.createContext({});
          /*bundle*/
          function UploaderProvider({
            specs,
            children
          }) {
            const {
              uploadFiles,
              clearFiles,
              files,
              button,
              drag,
              deleteFile
            } = (0, _control.useUploader)(specs);
            const value = {
              deleteFile,
              clearFiles,
              files,
              uploadFiles,
              button,
              drag
            };
            return React.createElement(UploaderContext.Provider, {
              value: value
            }, children);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./control",
        "from": "useUploader",
        "name": "useUploader"
      }, {
        "im": "./provider",
        "from": "UploaderProvider",
        "name": "UploaderProvider"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'useUploader') && _export("useUploader", useUploader = require ? require('./control').useUploader : value);
        (require || prop === 'UploaderProvider') && _export("UploaderProvider", UploaderProvider = require ? require('./provider').UploaderProvider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXIiLCJ1cmwiLCJuYW1lIiwibXVsdGlwbGUiLCJ1cGxvYWRlciIsInNldFVwbG9hZGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ0b3RhbCIsInNldFRvdGFsRmlsZXMiLCJkcmFnIiwidXNlUmVmIiwiYnV0dG9uIiwiY2xlYXJGaWxlcyIsImNsZWFuIiwidXNlRWZmZWN0IiwiVXBsb2FkZXIiLCJjcmVhdGUiLCJjdXJyZW50Iiwib25DaGFuZ2UiLCJmaWxlcyIsIml0ZW1zIiwic2l6ZSIsIm9uIiwib2ZmIiwidXBsb2FkRmlsZXMiLCJwdWJsaXNoIiwiZGVsZXRlRmlsZSIsImRlbGV0ZSIsInRvdGFsRmlsZXMiLCJVcGxvYWRlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiVXBsb2FkZXJQcm92aWRlciIsInNwZWNzIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2NvbnRyb2wudHMiLCJjb2RlL3RzL3Byb3ZpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19