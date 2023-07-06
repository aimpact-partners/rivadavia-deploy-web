System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/image", "pragmate-ui@0.0.36/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, DragAndDrop, __beyond_pkg, hmr;
  _export("DragAndDrop", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi0036Image) {
      dependency_3 = _pragmateUi0036Image;
    }, function (_pragmateUi0036Icons) {
      dependency_4 = _pragmateUi0036Icons;
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
          "vspecifier": "pragmate-ui@0.0.36/drag-and-drop"
        },
        "type": "code",
        "name": "drag-and-drop"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/image', dependency_3], ['pragmate-ui/icons', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/drag-and-drop');
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./area
      **********************/
      ims.set('./area', {
        hash: 816388730,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Area = Area;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("./context");
          function Area() {
            const {
              files,
              count,
              formats,
              showMessage,
              state,
              dispatch,
              onUpload
            } = (0, _context.useDragAndDropContext)();
            const accept = formats && Array.isArray(formats) && formats.map(item => `.${item}`);
            const cls = count && files.length < count ? "hover FilesDragAndDrop__area" : "FilesDragAndDrop__area";
            const attrs = {};
            if (formats) attrs.accept = accept.join(", ");
            if (count && count > 1) attrs.multiple = true;
            const onFileDrop = event => {
              const newFile = [...event.target.files];
              if (count && count < newFile.length) {
                showMessage(`Solo puese cargar ${count} archivo${count !== 1 ? "s" : ""} a la ves`, "error", 2000);
                return;
              }
              if (newFile) {
                dispatch({
                  case: "files",
                  files: state.files.concat(newFile)
                });
                showMessage(`Archivo${newFile.length > 1 ? "s" : ""} cargado${newFile.length > 1 ? "s" : ""} para importar`, "success", 2000);
                onUpload(newFile);
              }
            };
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_image.Image, {
              src: `${globalThis.baseDir}assets/cloud-upload-regular-240.png`,
              alt: ""
            }), count && files.length < count && _react.default.createElement("input", {
              ...attrs,
              type: "file",
              onChange: onFileDrop
            }), _react.default.createElement("span", null, "Arrastra y suelta tu archivo"));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 2273647033,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDragAndDropContext = exports.DragAndDropContext = void 0;
          var _react = require("react");
          const DragAndDropContext = (0, _react.createContext)({
            files: []
          });
          exports.DragAndDropContext = DragAndDropContext;
          const useDragAndDropContext = () => (0, _react.useContext)(DragAndDropContext);
          exports.useDragAndDropContext = useDragAndDropContext;
        }
      });

      /******************************
      INTERNAL MODULE: ./image-config
      ******************************/

      ims.set('./image-config', {
        hash: 2695271879,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ImageConfig = void 0;
          const ImageConfig = {
            default: `${globalThis.baseDir}assets/file-blank-solid-240.png`,
            pdf: `${globalThis.baseDir}assets/file-css-solid-240.png`,
            png: `${globalThis.baseDir}assets/file-pdf-solid-240.png`,
            css: `${globalThis.baseDir}assets/file-png-solid-240.png`
          };
          exports.ImageConfig = ImageConfig;
        }
      });

      /*************************
      INTERNAL MODULE: ./imports
      *************************/

      ims.set('./imports', {
        hash: 1964123607,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Imports = Imports;
          var _react = require("react");
          var _area = require("./area");
          var _context = require("./context");
          var _message = require("./message");
          var _preview = require("./preview");
          function Imports({
            children
          }) {
            const {
              state,
              count,
              drop,
              drag,
              formats
            } = (0, _context.useDragAndDropContext)();
            const textFormats = formats && Array.isArray(formats) && `Formato${formats.length > 1 ? "s" : ""} disponibles: ${formats.join(", ")}`;
            const textAlertInfo = `${count && `Puede cargar un máximo de ${count} archivo${count !== 1 ? "s" : ""}`} <br /> ${textFormats}`;
            const disabled = {};
            if (state.dragging || !state.files.length) disabled.disabled = true;
            return _react.default.createElement("div", {
              className: "drag-and-drop-container"
            }, count !== Infinity && _react.default.createElement("div", {
              className: "info-drag",
              dangerouslySetInnerHTML: {
                __html: textAlertInfo
              }
            }), _react.default.createElement("div", {
              ref: drop,
              "data-type": "import",
              className: "FilesDragAndDrop"
            }, _react.default.createElement(_message.Message, null), state.dragging && _react.default.createElement("div", {
              ref: drag,
              className: "FilesDragAndDrop__placeholder"
            }, " "), _react.default.createElement(_area.Area, null)), _react.default.createElement(_preview.Preview, null), children);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3102003195,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DragAndDrop = void 0;
          var _react = require("react");
          var _context = require("./context");
          var _reducer = require("./reducer");
          var _view = require("./view");
          /*bundle*/
          const DragAndDrop = props => {
            const drop = (0, _react.useRef)(null);
            const [state, dispatch] = (0, _react.useReducer)(_reducer.reducer, _reducer.initialState);
            const {
              onUpload,
              count,
              formats,
              children,
              clean,
              userPhoto,
              textUserPhoto
            } = props;
            const drag = (0, _react.useRef)(null);
            const showMessage = (text, type, timeout) => {
              dispatch({
                case: "message",
                show: true,
                text,
                type
              });
              setTimeout(() => dispatch({
                case: "hideMessage"
              }), timeout);
            };
            const handleDragEnter = event => {
              event.preventDefault();
              event.stopPropagation();
              if (event.target !== drag.current) dispatch({
                case: "dragging",
                dragging: true
              });
            };
            const handleDragLeave = event => {
              event.preventDefault();
              event.stopPropagation();
              if (event.target === drag.current) dispatch({
                case: "dragging",
                dragging: false
              });
            };
            const handleDragOver = event => {
              event.preventDefault();
              event.stopPropagation();
            };
            const handleDrop = event => {
              event.preventDefault();
              event.stopPropagation();
              dispatch({
                case: "dragging",
                dragging: false
              });
              const newFiles = [...event.dataTransfer.files];
              const {
                dataset: {
                  type
                }
              } = event.currentTarget;
              if (type === "photo" && newFiles.length > 1) {
                return;
              }
              ;
              if (count && count < newFiles.length) {
                showMessage(`Solo puese cargar ${count} archivo${count !== 1 ? 's' : ''} a la ves`, 'error', 2000);
                return;
              }
              ;
              if (formats && newFiles.some(file => !formats.some(format => file.name.toLowerCase().endsWith(format.toLowerCase())))) {
                const filesFormats = newFiles.map(item => item.type.split("/")[1]);
                showMessage(`Los siguientes formatos no están disponibles: ${filesFormats.join(", ")}`, "error", 2000);
                return;
              }
              ;
              if (newFiles && newFiles.length && type !== "photo") {
                showMessage(`Archivo${newFiles.length > 1 ? "s" : ""} cargado${newFiles.length > 1 ? "s" : ""} para importar`, "success", 2000);
                dispatch({
                  case: "files",
                  files: state.files.concat(newFiles)
                });
                onUpload(newFiles);
              }
              ;
              if (type === "photo") {
                const img = URL.createObjectURL(newFiles[0]);
                dispatch({
                  case: "img",
                  img
                });
                onUpload(newFiles);
              }
              ;
            };
            (0, _react.useEffect)(() => {
              if (count && state.files.length >= count || !drop.current) return;
              drop.current.addEventListener('dragover', handleDragOver);
              drop.current.addEventListener('drop', handleDrop);
              drop.current.addEventListener('dragenter', handleDragEnter);
              drop.current.addEventListener('dragleave', handleDragLeave);
              return () => {
                if (!drop.current) return;
                drop.current.removeEventListener('dragover', handleDragOver);
                drop.current.removeEventListener('drop', handleDrop);
                drop.current.removeEventListener('dragenter', handleDragEnter);
                drop.current.removeEventListener('dragleave', handleDragLeave);
              };
            }, [state.files]);
            const value = {
              files: state.files,
              message: state.message,
              count,
              formats,
              showMessage,
              dispatch,
              onUpload,
              state,
              clean,
              drop,
              drag,
              userPhoto,
              textUserPhoto
            };
            return _react.default.createElement(_context.DragAndDropContext.Provider, {
              value: value
            }, _react.default.createElement(_view.View, {
              children: children
            }));
          };
          exports.DragAndDrop = DragAndDrop;
          DragAndDrop.defaultProps = {
            clean: false,
            textUserPhoto: "Haga clic o arraste su imagen para cambiar foto"
          };
        }
      });

      /*************************
      INTERNAL MODULE: ./message
      *************************/

      ims.set('./message', {
        hash: 3628827464,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = Message;
          var _react = require("react");
          var _context = require("./context");
          function Message() {
            const {
              message
            } = (0, _context.useDragAndDropContext)();
            return _react.default.createElement(_react.default.Fragment, null, "  ", message.show && _react.default.createElement("div", {
              className: `FilesDragAndDrop__placeholder FilesDragAndDrop__placeholder--${message.type}`
            }, message.text, _react.default.createElement("span", {
              role: 'img',
              "aria-label": 'emoji',
              className: 'area__icon'
            }, message.type === 'error' ? _react.default.createElement(_react.default.Fragment, null) : _react.default.createElement(_react.default.Fragment, null, "\uD83D\uDC4F"))));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./preview
      *************************/

      ims.set('./preview', {
        hash: 2117760862,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preview = Preview;
          var _react = require("react");
          var _context = require("./context");
          var _imageConfig = require("./image-config");
          function Preview() {
            const {
              files,
              dispatch
            } = (0, _context.useDragAndDropContext)();
            const deleteFile = event => {
              const {
                dataset
              } = event.currentTarget;
              const fileFilter = files.filter(file => file.name !== dataset.name);
              dispatch({
                case: "files",
                files: [...fileFilter]
              });
            };
            const preview = files.map((item, index) => _react.default.createElement("div", {
              key: index,
              className: "drop-file-preview__item"
            }, _react.default.createElement("img", {
              src: _imageConfig.ImageConfig["default"],
              alt: ""
            }), _react.default.createElement("div", {
              className: "drop-file-preview__item__info"
            }, _react.default.createElement("p", null, item.name), _react.default.createElement("p", null, item.size, "B")), _react.default.createElement("span", {
              "data-name": item.name,
              onClick: deleteFile,
              className: "drop-file-preview__item__del"
            }, "x")));
            return _react.default.createElement(_react.default.Fragment, null, " ", !!files.length && _react.default.createElement("div", {
              className: "drop-file-preview"
            }, _react.default.createElement("p", {
              className: "drop-file-preview__title"
            }, "Listo para Importar"), preview));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./reducer
      *************************/

      ims.set('./reducer', {
        hash: 3335817071,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.reducer = exports.initialState = void 0;
          const reducer = (state, payload) => {
            switch (payload.case) {
              case "dragging":
                {
                  return {
                    ...state,
                    dragging: payload.dragging
                  };
                }
                ;
              case "files":
                {
                  return {
                    ...state,
                    files: payload.files
                  };
                }
                ;
              case "message":
                {
                  return {
                    ...state,
                    message: {
                      show: payload.show,
                      text: payload.text,
                      type: payload.type
                    }
                  };
                }
                ;
              case "hideMessage":
                {
                  return {
                    ...state,
                    message: {
                      show: false,
                      text: null,
                      type: null
                    }
                  };
                }
                ;
              case "img":
                {
                  return {
                    ...state,
                    img: payload.img
                  };
                }
                ;
              default:
                return;
            }
            ;
          };
          exports.reducer = reducer;
          const initialState = {
            dragging: false,
            files: [],
            message: {
              show: false,
              text: null,
              type: null
            },
            img: ""
          };
          exports.initialState = initialState;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1227271531,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          ;
          ;
        }
      });

      /****************************
      INTERNAL MODULE: ./user-photo
      ****************************/

      ims.set('./user-photo', {
        hash: 623146599,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserPhoto = UserPhoto;
          var _react = require("react");
          var _context = require("./context");
          var _icons = require("pragmate-ui/icons");
          var _image = require("pragmate-ui/image");
          function UserPhoto() {
            const {
              drop,
              textUserPhoto,
              state,
              dispatch
            } = (0, _context.useDragAndDropContext)();
            const onImageChange = event => {
              const [file] = event.target.files;
              if (!file) return;
              const img = URL.createObjectURL(file);
              dispatch({
                case: "img",
                img
              });
            };
            const cls = state.img ? "drag-and-drop-container-user" : "drag-and-drop-container-user border";
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("div", {
              ref: drop,
              "data-type": "photo",
              className: "file-drag-and-drop-user"
            }, _react.default.createElement(_icons.Icon, {
              icon: "camera"
            }), _react.default.createElement("span", null, textUserPhoto), _react.default.createElement("input", {
              placeholder: "Select image",
              accept: "image/*",
              multiple: false,
              type: "file",
              onChange: onImageChange
            })), state.img && _react.default.createElement(_image.Image, {
              alt: "photo user",
              src: state.img
            }));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./view
      **********************/

      ims.set('./view', {
        hash: 3281426199,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _context = require("./context");
          var _imports = require("./imports");
          var _userPhoto = require("./user-photo");
          function View({
            children
          }) {
            const {
              userPhoto
            } = (0, _context.useDragAndDropContext)();
            const Control = userPhoto ? _userPhoto.UserPhoto : _imports.Imports;
            return _react.default.createElement(Control, {
              children: children
            });
          }
          ;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "DragAndDrop",
        "name": "DragAndDrop"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'DragAndDrop') && _export("DragAndDrop", DragAndDrop = require ? require('./index').DragAndDrop : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDZ0Y7WUFBRyxFQUFJLENBQ3BEO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaENBO1VBQ0E7VUFDQTtVQUNBO1VBRU0sU0FBVVEsSUFBSSxDQUFDO1lBQUVuRDtVQUFRLENBQTJCO1lBQ3hELE1BQU07Y0FBRWtCO1lBQVMsQ0FBRSxHQUFHLGtDQUFxQixHQUFFO1lBQzdDLE1BQU1rRCxPQUFPLEdBQUdsRCxTQUFTLEdBQUc2QyxvQkFBUyxHQUFHaEUsZ0JBQU87WUFDL0MsT0FBT2pCLDZCQUFDc0YsT0FBTztjQUFDcEUsUUFBUSxFQUFFQTtZQUFRLEVBQUk7VUFDeEM7VUFBQyIsIm5hbWVzIjpbIkFyZWEiLCJmaWxlcyIsImNvdW50IiwiZm9ybWF0cyIsInNob3dNZXNzYWdlIiwic3RhdGUiLCJkaXNwYXRjaCIsIm9uVXBsb2FkIiwiYWNjZXB0IiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiaXRlbSIsImNscyIsImxlbmd0aCIsImF0dHJzIiwiam9pbiIsIm11bHRpcGxlIiwib25GaWxlRHJvcCIsImV2ZW50IiwibmV3RmlsZSIsInRhcmdldCIsImNhc2UiLCJjb25jYXQiLCJSZWFjdCIsImNsYXNzTmFtZSIsIkltYWdlIiwic3JjIiwiZ2xvYmFsVGhpcyIsImJhc2VEaXIiLCJhbHQiLCJ0eXBlIiwib25DaGFuZ2UiLCJEcmFnQW5kRHJvcENvbnRleHQiLCJleHBvcnRzIiwidXNlRHJhZ0FuZERyb3BDb250ZXh0IiwiSW1hZ2VDb25maWciLCJkZWZhdWx0IiwicGRmIiwicG5nIiwiY3NzIiwiSW1wb3J0cyIsImNoaWxkcmVuIiwiZHJvcCIsImRyYWciLCJ0ZXh0Rm9ybWF0cyIsInRleHRBbGVydEluZm8iLCJkaXNhYmxlZCIsImRyYWdnaW5nIiwiSW5maW5pdHkiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInJlZiIsIk1lc3NhZ2UiLCJQcmV2aWV3IiwiRHJhZ0FuZERyb3AiLCJwcm9wcyIsInJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJjbGVhbiIsInVzZXJQaG90byIsInRleHRVc2VyUGhvdG8iLCJ0ZXh0IiwidGltZW91dCIsInNob3ciLCJzZXRUaW1lb3V0IiwiaGFuZGxlRHJhZ0VudGVyIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwiaGFuZGxlRHJhZ0xlYXZlIiwiaGFuZGxlRHJhZ092ZXIiLCJoYW5kbGVEcm9wIiwibmV3RmlsZXMiLCJkYXRhVHJhbnNmZXIiLCJkYXRhc2V0IiwiY3VycmVudFRhcmdldCIsInNvbWUiLCJmaWxlIiwiZm9ybWF0IiwibmFtZSIsInRvTG93ZXJDYXNlIiwiZW5kc1dpdGgiLCJmaWxlc0Zvcm1hdHMiLCJzcGxpdCIsImltZyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidmFsdWUiLCJtZXNzYWdlIiwiUHJvdmlkZXIiLCJWaWV3IiwiZGVmYXVsdFByb3BzIiwicm9sZSIsImRlbGV0ZUZpbGUiLCJmaWxlRmlsdGVyIiwiZmlsdGVyIiwicHJldmlldyIsImluZGV4Iiwia2V5Iiwic2l6ZSIsIm9uQ2xpY2siLCJwYXlsb2FkIiwiVXNlclBob3RvIiwib25JbWFnZUNoYW5nZSIsIkljb24iLCJpY29uIiwicGxhY2Vob2xkZXIiLCJDb250cm9sIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2FyZWEudHN4IiwiY29kZS90cy9jb250ZXh0LnRzeCIsImNvZGUvdHMvaW1hZ2UtY29uZmlnLnRzIiwiY29kZS90cy9pbXBvcnRzLnRzeCIsImNvZGUvdHMvaW5kZXgudHN4IiwiY29kZS90cy9tZXNzYWdlLnRzeCIsImNvZGUvdHMvcHJldmlldy50c3giLCJjb2RlL3RzL3JlZHVjZXIudHMiLCJjb2RlL3RzL3R5cGVzLnRzIiwiY29kZS90cy91c2VyLXBob3RvLnRzeCIsImNvZGUvdHMvdmlldy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==