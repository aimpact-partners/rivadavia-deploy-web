System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/form", "@beyond-js/react-18-widgets@1.0.0/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, ChatInput, RecordingButton, __beyond_pkg, hmr;
  _export({
    ChatInput: void 0,
    RecordingButton: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_3 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Form) {
      dependency_4 = _pragmateUi0036Form;
    }, function (_beyondJsReact18Widgets100Hooks) {
      dependency_5 = _beyondJsReact18Widgets100Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.0.1"], ["@aimpact/chat-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.6"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.8"], ["dexie", "3.2.4"], ["dompurify", "3.0.3"], ["firebase", "9.22.2"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.0"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.2.1"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.6.2"], ["uuid", "9.0.0"], ["@aimpact/ailearn-estrada", "0.0.2"], ["@aimpact/ailearn-estrada", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-estrada@0.0.2/input"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/form', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-estrada@0.0.2/input');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 3419520777,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useInputContext = exports.InputContext = void 0;
          var React = require("react");
          const InputContext = React.createContext(null);
          exports.InputContext = InputContext;
          const useInputContext = () => React.useContext(InputContext);
          exports.useInputContext = useInputContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3768593965,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatInput = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _form = require("pragmate-ui/form");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _recording = require("./recording");
          var _context = require("./context");
          /*bundle*/
          const ChatInput = ({
            store
          }) => {
            const [recording, setRecording] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(false);
            const [waiting, setWaiting] = _react.default.useState(false);
            const [text, setText] = _react.default.useState('');
            (0, _hooks.useBinder)([store], () => setWaiting(store.waitingResponse));
            const handleInputChange = e => {
              const {
                currentTarget: target
              } = e;
              const {
                value
              } = e.target;
              target.style.height = 'auto';
              target.style.height = value.length == 1 ? 'auto' : target.scrollHeight + 'px';
              if (['undefined', undefined].includes(value.replaceAll('\n'))) return;
              setText(value);
            };
            const handleKeyDown = e => {
              if (e.key !== 'Enter') return;
              const cb = prevValue => prevValue + '\n';
              const value = e.target.value.replaceAll('\n');
              if (['', undefined, null].includes(value)) return;
              e.shiftKey ? setText(cb) : handleSend();
            };
            const disabled = {
              disabled: false
            };
            const {
              audioManager,
              audioManager: {
                recorder
              }
            } = store;
            const sendAudio = async event => {
              setFetching(true);
              event.preventDefault();
              const audio = await recorder.stop();
              const item = audioManager.saveRecording(audio, recorder.transcription);
              setRecording(!recording);
              setFetching(false);
            };
            const handleSend = async () => {
              setText('');
              setFetching(true);
              const response = await store.sendMessage(text);
              setFetching(false);
            };
            const onSubmit = !!text.length ? handleSend : sendAudio;
            if (['', undefined, null].includes(text.replaceAll('\n')) || !text.trim().length) disabled.disabled = true;
            const disabledTextarea = {
              disabled: fetching || recording || waiting
            };
            return _react.default.createElement("div", {
              className: 'input-container'
            }, _react.default.createElement(_context.InputContext.Provider, {
              value: {
                store,
                onSubmit,
                recorder,
                setRecording,
                recording
              }
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement("textarea", {
              ...disabledTextarea,
              rows: 1,
              value: text,
              onChange: handleInputChange,
              onKeyDown: handleKeyDown,
              autoFocus: true
            }), _react.default.createElement("span", {
              className: `input__icon  input__icon--right`
            }, !!text.length ? _react.default.createElement(_icons.IconButton, {
              icon: 'pencil',
              className: 'circle',
              variant: 'primary',
              onClick: handleSend,
              disabled: disabled.disabled || store.waitingResponse
            }) : _react.default.createElement(_recording.RecordingButton, {
              store: store,
              disabled: recording || store.waitingResponse
            })))));
          };
          exports.ChatInput = ChatInput;
        }
      });

      /************************
      INTERNAL MODULE: ./player
      ************************/

      ims.set('./player', {
        hash: 3643079613,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Player = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _timer = require("./timer");
          var _context = require("./context");
          const Player = () => {
            const {
              onSubmit,
              recorder,
              setRecording
            } = (0, _context.useInputContext)();
            const cancel = async event => {
              event.preventDefault();
              const audio = await recorder.stop();
              setRecording(false);
            };
            return _react.default.createElement("div", {
              className: "recording-player__container"
            }, _react.default.createElement(_icons.IconButton, {
              className: "circle",
              icon: "delete",
              onClick: cancel
            }), _react.default.createElement(_timer.Timer, {
              action: "start"
            }), _react.default.createElement(_icons.IconButton, {
              icon: "send",
              className: "circle",
              variant: "primary",
              onClick: onSubmit
            }));
          };
          exports.Player = Player;
        }
      });

      /***************************
      INTERNAL MODULE: ./recording
      ***************************/

      ims.set('./recording', {
        hash: 3946950066,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingButton = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _player = require("./player");
          var _context = require("./context");
          /*bundle*/
          const RecordingButton = ({
            store: {
              audioManager
            },
            disabled
          }) => {
            const {
              recorder,
              recording,
              setRecording
            } = (0, _context.useInputContext)();
            const playAction = event => {
              event.preventDefault();
              recorder.record();
              setRecording(!recording);
            };
            if (recording) {
              return _react.default.createElement(_player.Player, null);
            }
            return _react.default.createElement(_icons.IconButton, {
              icon: 'mic',
              onClick: playAction,
              className: 'circle',
              variant: 'primary',
              disabled: disabled
            });
          };
          exports.RecordingButton = RecordingButton;
        }
      });

      /*****************************
      INTERNAL MODULE: ./timer/index
      *****************************/

      ims.set('./timer/index', {
        hash: 4054718920,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Timer = Timer;
          var React = require("react");
          var _useTimer = require("./use-timer");
          // Timer.tsx

          function Timer({
            action
          }) {
            const isRunning = ['restart', 'start'].includes(action);
            const restart = action === 'restart';
            const [hours, minutes, seconds, milliseconds] = (0, _useTimer.useTimer)(isRunning, restart);
            const secRendered = seconds.toString().padStart(2, '0');
            const minutesRendered = minutes.toString().padStart(2, '0');
            return React.createElement("div", {
              className: 'timer__container'
            }, React.createElement("span", null, `${minutesRendered}`, ":"), React.createElement("span", null, `${secRendered}`));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./timer/use-timer
      *********************************/

      ims.set('./timer/use-timer', {
        hash: 738678139,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTimer = useTimer;
          var React = require("react");
          // useTimer.ts

          const {
            useState,
            useEffect
          } = React;
          function useTimer(isRunning, restart) {
            const [time, setTime] = useState(0);
            useEffect(() => {
              let intervalId;
              if (isRunning) {
                intervalId = setInterval(() => {
                  setTime(prevTime => prevTime + 1);
                }, 10); // 10 ms interval for tracking milliseconds
              }

              return () => {
                clearInterval(intervalId);
              };
            }, [isRunning]);
            useEffect(() => {
              if (restart) {
                setTime(0);
              }
            }, [restart]);
            const milliseconds = time % 100; // 1000 ms in a second, but we're updating every 10 ms
            const seconds = Math.floor(time / 100 % 60); // Converted to seconds
            const minutes = Math.floor(time / 6000 % 60); // Converted to minutes
            const hours = Math.floor(time / 360000); // Converted to hours
            return [hours, minutes, seconds, milliseconds];
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ChatInput",
        "name": "ChatInput"
      }, {
        "im": "./recording",
        "from": "RecordingButton",
        "name": "RecordingButton"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ChatInput') && _export("ChatInput", ChatInput = require ? require('./index').ChatInput : value);
        (require || prop === 'RecordingButton') && _export("RecordingButton", RecordingButton = require ? require('./recording').RecordingButton : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFDakMsTUFBTVIsT0FBTyxHQUFHYyxJQUFJLENBQUNDLEtBQUssQ0FBRVAsSUFBSSxHQUFHLEdBQUcsR0FBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU1ULE9BQU8sR0FBR2UsSUFBSSxDQUFDQyxLQUFLLENBQUVQLElBQUksR0FBRyxJQUFJLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoRCxNQUFNVixLQUFLLEdBQUdnQixJQUFJLENBQUNDLEtBQUssQ0FBQ1AsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFekMsT0FBTyxDQUFDVixLQUFLLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxZQUFZLENBQUM7VUFDL0MiLCJuYW1lcyI6WyJJbnB1dENvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJleHBvcnRzIiwidXNlSW5wdXRDb250ZXh0IiwidXNlQ29udGV4dCIsIkNoYXRJbnB1dCIsInN0b3JlIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJ0ZXh0Iiwic2V0VGV4dCIsIndhaXRpbmdSZXNwb25zZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0eWxlIiwiaGVpZ2h0IiwibGVuZ3RoIiwic2Nyb2xsSGVpZ2h0IiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJyZXBsYWNlQWxsIiwiaGFuZGxlS2V5RG93biIsImtleSIsImNiIiwicHJldlZhbHVlIiwic2hpZnRLZXkiLCJoYW5kbGVTZW5kIiwiZGlzYWJsZWQiLCJhdWRpb01hbmFnZXIiLCJyZWNvcmRlciIsInNlbmRBdWRpbyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhdWRpbyIsInN0b3AiLCJpdGVtIiwic2F2ZVJlY29yZGluZyIsInRyYW5zY3JpcHRpb24iLCJyZXNwb25zZSIsInNlbmRNZXNzYWdlIiwib25TdWJtaXQiLCJ0cmltIiwiZGlzYWJsZWRUZXh0YXJlYSIsImNsYXNzTmFtZSIsIlByb3ZpZGVyIiwiRm9ybSIsInJvd3MiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsImF1dG9Gb2N1cyIsIkljb25CdXR0b24iLCJpY29uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJSZWNvcmRpbmdCdXR0b24iLCJQbGF5ZXIiLCJjYW5jZWwiLCJUaW1lciIsImFjdGlvbiIsInBsYXlBY3Rpb24iLCJyZWNvcmQiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInVzZUVmZmVjdCIsInVzZVRpbWVyIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvY29udGV4dC50c3giLCJjb2RlL3RzL2luZGV4LnRzeCIsImNvZGUvdHMvcGxheWVyLnRzeCIsImNvZGUvdHMvcmVjb3JkaW5nLnRzeCIsImNvZGUvdHMvdGltZXIvaW5kZXgudHN4IiwiY29kZS90cy90aW1lci91c2UtdGltZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==