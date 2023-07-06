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
        hash: 1077619937,
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
            text,
            setText,
            store
          }) => {
            const [recording, setRecording] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(false);
            const [waiting, setWaiting] = _react.default.useState(false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksR0FBRyxHQUFHLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNVCxPQUFPLEdBQUdlLElBQUksQ0FBQ0MsS0FBSyxDQUFFUCxJQUFJLEdBQUcsSUFBSSxHQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsTUFBTVYsS0FBSyxHQUFHZ0IsSUFBSSxDQUFDQyxLQUFLLENBQUNQLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRXpDLE9BQU8sQ0FBQ1YsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxDQUFDO1VBQy9DIiwibmFtZXMiOlsiSW5wdXRDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiZXhwb3J0cyIsInVzZUlucHV0Q29udGV4dCIsInVzZUNvbnRleHQiLCJDaGF0SW5wdXQiLCJ0ZXh0Iiwic2V0VGV4dCIsInN0b3JlIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwid2FpdGluZyIsInNldFdhaXRpbmciLCJ3YWl0aW5nUmVzcG9uc2UiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwidmFsdWUiLCJzdHlsZSIsImhlaWdodCIsImxlbmd0aCIsInNjcm9sbEhlaWdodCIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwicmVwbGFjZUFsbCIsImhhbmRsZUtleURvd24iLCJrZXkiLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5IiwiaGFuZGxlU2VuZCIsImRpc2FibGVkIiwiYXVkaW9NYW5hZ2VyIiwicmVjb3JkZXIiLCJzZW5kQXVkaW8iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYXVkaW8iLCJzdG9wIiwiaXRlbSIsInNhdmVSZWNvcmRpbmciLCJ0cmFuc2NyaXB0aW9uIiwicmVzcG9uc2UiLCJzZW5kTWVzc2FnZSIsIm9uU3VibWl0IiwidHJpbSIsImRpc2FibGVkVGV4dGFyZWEiLCJjbGFzc05hbWUiLCJQcm92aWRlciIsIkZvcm0iLCJyb3dzIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJhdXRvRm9jdXMiLCJJY29uQnV0dG9uIiwiaWNvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiUmVjb3JkaW5nQnV0dG9uIiwiUGxheWVyIiwiY2FuY2VsIiwiVGltZXIiLCJhY3Rpb24iLCJwbGF5QWN0aW9uIiwicmVjb3JkIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJ1c2VFZmZlY3QiLCJ1c2VUaW1lciIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2NvbnRleHQudHN4IiwiY29kZS90cy9pbmRleC50c3giLCJjb2RlL3RzL3BsYXllci50c3giLCJjb2RlL3RzL3JlY29yZGluZy50c3giLCJjb2RlL3RzL3RpbWVyL2luZGV4LnRzeCIsImNvZGUvdHMvdGltZXIvdXNlLXRpbWVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=