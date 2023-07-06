System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, AudioPlayer, __beyond_pkg, hmr;
  _export("AudioPlayer", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
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
          "vspecifier": "@aimpact/media-manager@1.0.0/player"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/media-manager@1.0.0/player');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 3080543951,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var React = require("react");
          /*bundle*/
          function AudioPlayer({
            src
          }) {
            const canPlayType = new Audio().canPlayType(src.type);
            const [data, setData] = React.useState({
              uri: undefined,
              type: undefined
            });
            const ref = React.useRef(null);
            const updateState = async () => {
              const audioElement = ref.current;
              try {
                console.log(44, audioElement);
                audioElement.load(); // Load the audio file
                audioElement.play(); // Play the audio
                console.log(1111);
              } catch (e) {
                console.log(222, e);
              }
            };
            React.useEffect(() => {
              let reader = new FileReader();
              reader.onload = e => {
                let base64URL = e.target.result;
                let BlobType = src.type.includes(";") ? src.type.substr(0, src.type.indexOf(";")) : src.type;
                setData({
                  uri: base64URL,
                  type: BlobType
                });
                setTimeout(() => {
                  updateState();
                }, 1000);
              };
              reader.readAsDataURL(src);
            }, []);
            const {
              uri,
              type
            } = data;
            return React.createElement("div", {
              className: "audio-player"
            }, React.createElement("audio", {
              controls: true,
              preload: "metadata",
              ref: ref
            }, React.createElement("source", {
              src: uri,
              type: type
            }), "Your browser does not support the audio element."));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./control",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./control').AudioPlayer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBRU87VUFBVSxTQUFVQSxXQUFXLENBQUM7WUFBRUM7VUFBRyxDQUFFO1lBQzVDLE1BQU1DLFdBQVcsR0FBRyxJQUFJQyxLQUFLLEVBQUUsQ0FBQ0QsV0FBVyxDQUFDRCxHQUFHLENBQUNHLElBQUksQ0FBQztZQUVyRCxNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDO2NBQUVDLEdBQUcsRUFBRUMsU0FBUztjQUFFTixJQUFJLEVBQUVNO1lBQVMsQ0FBRSxDQUFDO1lBRTNFLE1BQU1DLEdBQUcsR0FBR0osS0FBSyxDQUFDSyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRTlCLE1BQU1DLFdBQVcsR0FBRyxZQUFXO2NBQzdCLE1BQU1DLFlBQVksR0FBR0gsR0FBRyxDQUFDSSxPQUFPO2NBQ2hDLElBQUk7Z0JBQ0ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEVBQUUsRUFBRUgsWUFBWSxDQUFDO2dCQUM3QkEsWUFBWSxDQUFDSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQkosWUFBWSxDQUFDSyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQkgsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDO2VBQ2xCLENBQUMsT0FBT0csQ0FBQyxFQUFFO2dCQUNWSixPQUFPLENBQUNDLEdBQUcsQ0FBQyxHQUFHLEVBQUVHLENBQUMsQ0FBQzs7WUFFdkIsQ0FBQztZQUVEYixLQUFLLENBQUNjLFNBQVMsQ0FBQyxNQUFLO2NBQ25CLElBQUlDLE1BQU0sR0FBRyxJQUFJQyxVQUFVLEVBQUU7Y0FDN0JELE1BQU0sQ0FBQ0UsTUFBTSxHQUFJSixDQUFDLElBQUk7Z0JBQ3BCLElBQUlLLFNBQVMsR0FBR0wsQ0FBQyxDQUFDTSxNQUFNLENBQUNDLE1BQU07Z0JBQy9CLElBQUlDLFFBQVEsR0FBRzNCLEdBQUcsQ0FBQ0csSUFBSSxDQUFDeUIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHNUIsR0FBRyxDQUFDRyxJQUFJLENBQUMwQixNQUFNLENBQUMsQ0FBQyxFQUFFN0IsR0FBRyxDQUFDRyxJQUFJLENBQUMyQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRzlCLEdBQUcsQ0FBQ0csSUFBSTtnQkFDNUZFLE9BQU8sQ0FBQztrQkFBRUcsR0FBRyxFQUFFZ0IsU0FBUztrQkFBRXJCLElBQUksRUFBRXdCO2dCQUFRLENBQUUsQ0FBQztnQkFDM0NJLFVBQVUsQ0FBQyxNQUFLO2tCQUNkbkIsV0FBVyxFQUFFO2dCQUNmLENBQUMsRUFBRSxJQUFJLENBQUM7Y0FDVixDQUFDO2NBRURTLE1BQU0sQ0FBQ1csYUFBYSxDQUFDaEMsR0FBRyxDQUFDO1lBQzNCLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixNQUFNO2NBQUVRLEdBQUc7Y0FBRUw7WUFBSSxDQUFFLEdBQUdDLElBQUk7WUFFMUIsT0FDRUU7Y0FBSzJCLFNBQVMsRUFBQztZQUFjLEdBQzNCM0I7Y0FBTzRCLFFBQVE7Y0FBQ0MsT0FBTyxFQUFDLFVBQVU7Y0FBQ3pCLEdBQUcsRUFBRUE7WUFBRyxHQUN6Q0o7Y0FBUU4sR0FBRyxFQUFFUSxHQUFHO2NBQUVMLElBQUksRUFBRUE7WUFBSSxFQUFJLHFEQUUxQixDQUNKO1VBRVYiLCJuYW1lcyI6WyJBdWRpb1BsYXllciIsInNyYyIsImNhblBsYXlUeXBlIiwiQXVkaW8iLCJ0eXBlIiwiZGF0YSIsInNldERhdGEiLCJSZWFjdCIsInVzZVN0YXRlIiwidXJpIiwidW5kZWZpbmVkIiwicmVmIiwidXNlUmVmIiwidXBkYXRlU3RhdGUiLCJhdWRpb0VsZW1lbnQiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsImxvYWQiLCJwbGF5IiwiZSIsInVzZUVmZmVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJiYXNlNjRVUkwiLCJ0YXJnZXQiLCJyZXN1bHQiLCJCbG9iVHlwZSIsImluY2x1ZGVzIiwic3Vic3RyIiwiaW5kZXhPZiIsInNldFRpbWVvdXQiLCJyZWFkQXNEYXRhVVJMIiwiY2xhc3NOYW1lIiwiY29udHJvbHMiLCJwcmVsb2FkIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2NvbnRyb2wudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19