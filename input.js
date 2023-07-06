System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/form", "@beyond-js/react-18-widgets@1.0.0/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, ChatInput, RecordingButton, __beyond_pkg, hmr;
  _export({
    ChatInput: void 0,
    RecordingButton: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_2 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Form) {
      dependency_3 = _pragmateUi0036Form;
    }, function (_beyondJsReact18Widgets100Hooks) {
      dependency_4 = _beyondJsReact18Widgets100Hooks;
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['pragmate-ui/form', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsR0FBRyxHQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsTUFBTVQsT0FBTyxHQUFHZSxJQUFJLENBQUNDLEtBQUssQ0FBRVAsSUFBSSxHQUFHLElBQUksR0FBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hELE1BQU1WLEtBQUssR0FBR2dCLElBQUksQ0FBQ0MsS0FBSyxDQUFDUCxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUV6QyxPQUFPLENBQUNWLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksQ0FBQztVQUMvQyIsIm5hbWVzIjpbIklucHV0Q29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsImV4cG9ydHMiLCJ1c2VJbnB1dENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ2hhdElucHV0IiwidGV4dCIsInNldFRleHQiLCJzdG9yZSIsInJlY29yZGluZyIsInNldFJlY29yZGluZyIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIndhaXRpbmciLCJzZXRXYWl0aW5nIiwid2FpdGluZ1Jlc3BvbnNlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsInZhbHVlIiwic3R5bGUiLCJoZWlnaHQiLCJsZW5ndGgiLCJzY3JvbGxIZWlnaHQiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsInJlcGxhY2VBbGwiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwiY2IiLCJwcmV2VmFsdWUiLCJzaGlmdEtleSIsImhhbmRsZVNlbmQiLCJkaXNhYmxlZCIsImF1ZGlvTWFuYWdlciIsInJlY29yZGVyIiwic2VuZEF1ZGlvIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImF1ZGlvIiwic3RvcCIsIml0ZW0iLCJzYXZlUmVjb3JkaW5nIiwidHJhbnNjcmlwdGlvbiIsInJlc3BvbnNlIiwic2VuZE1lc3NhZ2UiLCJvblN1Ym1pdCIsInRyaW0iLCJkaXNhYmxlZFRleHRhcmVhIiwiY2xhc3NOYW1lIiwiUHJvdmlkZXIiLCJGb3JtIiwicm93cyIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwiYXV0b0ZvY3VzIiwiSWNvbkJ1dHRvbiIsImljb24iLCJ2YXJpYW50Iiwib25DbGljayIsIlJlY29yZGluZ0J1dHRvbiIsIlBsYXllciIsImNhbmNlbCIsIlRpbWVyIiwiYWN0aW9uIiwicGxheUFjdGlvbiIsInJlY29yZCIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwidXNlRWZmZWN0IiwidXNlVGltZXIiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29kZS90cy9jb250ZXh0LnRzeCIsImNvZGUvdHMvaW5kZXgudHN4IiwiY29kZS90cy9wbGF5ZXIudHN4IiwiY29kZS90cy9yZWNvcmRpbmcudHN4IiwiY29kZS90cy90aW1lci9pbmRleC50c3giLCJjb2RlL3RzL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19