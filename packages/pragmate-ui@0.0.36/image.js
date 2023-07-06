System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.36/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Image, __beyond_pkg, hmr;
  _export("Image", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_2 = _pragmateUi0036Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_3 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.6.2"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-estrada", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/image"
        },
        "type": "code",
        "name": "image"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/image');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./image
      ***********************/
      ims.set('./image', {
        hash: 3578672948,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Image = Image;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function Image(props) {
            const initialState = {
              size: "200x200",
              loaded: false
            };
            const {
              className,
              onClick,
              children,
              src,
              alt,
              onError
            } = props;
            const [image, setImage] = (0, _react.useState)();
            const [state, setState] = (0, _react.useState)(initialState);
            const onLoad = () => setState({
              ...state,
              error: false,
              htmlLoaded: true
            });
            const loadImage = (url, size) => {
              let finalSrc = url;
              const newImage = new globalThis.Image();
              newImage.onload = () => setState({
                ...state,
                loaded: true,
                error: false
              });
              newImage.onerror = () => setState({
                ...state,
                error: true,
                loaded: false
              });
              newImage.src = finalSrc;
              setImage(newImage);
              setState({
                ...state,
                url,
                size,
                src: finalSrc,
                loaded: true
              });
            };
            (0, _react.useEffect)(() => {
              const currentSrc = src;
              if (state.url !== currentSrc) {
                let size = props.size ?? state.size;
                loadImage(currentSrc, size);
              }
              return () => setImage({
                ...state,
                onload: undefined,
                onerror: undefined
              });
              // eslint-disable-next-line
            }, [src]);
            const {
              error,
              loaded,
              htmlLoaded
            } = state;
            let output;
            const onClickError = event => {
              event.stopPropagation();
              if (onError && typeof onError === "function") onError(event);
            };
            let cls = `beyond-element-image ${className ? ` ${className}` : ""}`;
            if (1 === 1 || !loaded && !htmlLoaded) cls += " beyond-element-image-preload";
            if (error) cls += " beyond-element-image-error";
            const Error = _react.default.createElement("div", {
              key: "error",
              "data-src": src,
              className: "content-error"
            }, onError && _react.default.createElement(_icons.IconButton, {
              onClick: onClickError,
              icon: "refresh"
            }));
            const Loaded = _react.default.createElement("img", {
              src: src,
              onLoad: onLoad,
              loading: props.loading ?? "eager",
              alt: alt
            });
            output = error ? Error : Loaded;
            const properties = {
              ...props,
              className: cls,
              onClick
            };
            ["src", "alt", "onError", "children", "size", "loading", "error"].forEach(prop => delete properties[prop]);
            return _react.default.createElement("figure", {
              "data-src": src,
              ...properties
            }, output, children);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./image",
        "from": "Image",
        "name": "Image"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Image') && _export("Image", Image = require ? require('./image').Image : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksNkJBQTZCO1lBQy9DLE1BQU1DLEtBQUssR0FDVEM7Y0FBS0MsR0FBRyxFQUFDLE9BQU87Y0FBQSxZQUFXMUIsR0FBRztjQUFFSCxTQUFTLEVBQUM7WUFBZSxHQUN0REssT0FBTyxJQUFJdUIsNkJBQUNFLGlCQUFVO2NBQUM3QixPQUFPLEVBQUVzQixZQUFZO2NBQUVRLElBQUksRUFBQztZQUFTLEVBQUcsQ0FFbkU7WUFDRCxNQUFNQyxNQUFNLEdBQ1ZKO2NBQ0V6QixHQUFHLEVBQUVBLEdBQUc7Y0FDUk8sTUFBTSxFQUFFQSxNQUFNO2NBQ2R1QixPQUFPLEVBQUVyQyxLQUFLLENBQUNxQyxPQUFPLElBQUksT0FBTztjQUNqQzdCLEdBQUcsRUFBRUE7WUFBRyxFQUVYO1lBQ0RrQixNQUFNLEdBQUdYLEtBQUssR0FBR2dCLEtBQUssR0FBR0ssTUFBTTtZQUUvQixNQUFNRSxVQUFVLEdBQVU7Y0FBRSxHQUFHdEMsS0FBSztjQUFFSSxTQUFTLEVBQUUwQixHQUFHO2NBQUV6QjtZQUFPLENBQUU7WUFDL0QsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQ2tDLE9BQU8sQ0FDdEVDLElBQUksSUFBSyxPQUFPRixVQUFVLENBQUNFLElBQUksQ0FBQyxDQUNsQztZQUVELE9BQ0VSO2NBQUEsWUFBa0J6QixHQUFHO2NBQUEsR0FBTStCO1lBQVUsR0FDbENaLE1BQU0sRUFDTnBCLFFBQVEsQ0FDRjtVQUViIiwibmFtZXMiOlsiSW1hZ2UiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsInNpemUiLCJsb2FkZWQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJzcmMiLCJhbHQiLCJvbkVycm9yIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInN0YXRlIiwic2V0U3RhdGUiLCJvbkxvYWQiLCJlcnJvciIsImh0bWxMb2FkZWQiLCJsb2FkSW1hZ2UiLCJ1cmwiLCJmaW5hbFNyYyIsIm5ld0ltYWdlIiwiZ2xvYmFsVGhpcyIsIm9ubG9hZCIsIm9uZXJyb3IiLCJjdXJyZW50U3JjIiwidW5kZWZpbmVkIiwib3V0cHV0Iiwib25DbGlja0Vycm9yIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjbHMiLCJFcnJvciIsIlJlYWN0Iiwia2V5IiwiSWNvbkJ1dHRvbiIsImljb24iLCJMb2FkZWQiLCJsb2FkaW5nIiwicHJvcGVydGllcyIsImZvckVhY2giLCJwcm9wIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2ltYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==