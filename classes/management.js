System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.0/page", "react@18.2.0", "@beyond-js/reactive@1.0.1/model", "@aimpact/chat-api@1.0.0/entities/models", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "@aimpact/ailearn-estrada@0.0.2/shared/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets100Page) {
      dependency_2 = _beyondJsReact18Widgets100Page;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_beyondJsReactive101Model) {
      dependency_4 = _beyondJsReactive101Model;
    }, function (_aimpactChatApi100EntitiesModels) {
      dependency_5 = _aimpactChatApi100EntitiesModels;
    }, function (_pragmateUi0036Form) {
      dependency_6 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Icons) {
      dependency_7 = _pragmateUi0036Icons;
    }, function (_aimpactAilearnEstrada002SharedComponents) {
      dependency_8 = _aimpactAilearnEstrada002SharedComponents;
    }, function (_beyondJsKernel019Styles) {
      dependency_9 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.0.1"], ["@aimpact/chat-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.6"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.8"], ["dexie", "3.2.4"], ["dompurify", "3.0.3"], ["firebase", "9.22.2"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.0"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.2.1"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.6.2"], ["uuid", "9.0.0"], ["@aimpact/ailearn-estrada", "0.0.2"], ["@aimpact/ailearn-estrada", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-estrada@0.0.2/classes/management"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['react', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-api/entities/models', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/icons', dependency_7], ['@aimpact/ailearn-estrada/shared/components', dependency_8], ['@beyond-js/kernel/styles', dependency_9]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "class-management",
        "vspecifier": "@aimpact/ailearn-estrada@0.0.2/classes/management",
        "is": "page",
        "route": "/classes/management",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-estrada@0.0.2/classes/management');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 616333004,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _views.Page;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***************************************
      INTERNAL MODULE: ./hooks/useBulletPoints
      ***************************************/

      ims.set('./hooks/useBulletPoints', {
        hash: 3549953620,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBulletPoints = useBulletPoints;
          var _react = require("react");
          function useBulletPoints(handleChange, {
            minBulletPoints,
            maxBulletPoints
          }) {
            const [bulletPoints, setBulletPoints] = (0, _react.useState)(['']);
            const bulletPointRefs = (0, _react.useRef)([]);
            const [draggedIndex, setDraggedIndex] = (0, _react.useState)(null);
            const [droppedIndex, setDroppedIndex] = (0, _react.useState)(null);
            const handleBulletPointsChange = updatedBulletPoints => handleChange({
              currentTarget: {
                name: 'objectives',
                value: updatedBulletPoints
              }
            });
            (0, _react.useEffect)(() => {
              handleBulletPointsChange(bulletPoints);
            }, [bulletPoints]);
            const handleDragStart = (_, index) => setDraggedIndex(index);
            const handleDragOver = droppedPosition => {
              if (draggedIndex !== droppedPosition) {
                setDroppedIndex(droppedPosition);
              }
            };
            const handleDragEnd = () => {
              const newBulletPoints = [...bulletPoints];
              const movedBulletPoint = bulletPoints[draggedIndex];
              newBulletPoints.splice(draggedIndex, 1);
              newBulletPoints.splice(droppedIndex, 0, movedBulletPoint);
              setBulletPoints(newBulletPoints);
              setDraggedIndex(null);
            };
            const handleInputChange = (index, event) => {
              const {
                value
              } = event.target;
              const updatedBulletPoints = [...bulletPoints];
              updatedBulletPoints[index] = value;
              setBulletPoints(updatedBulletPoints);
            };
            const handleKeyDown = (index, event) => {
              const isLastBulletPoint = index === bulletPoints.length - 1;
              const isNotEmpty = bulletPoints[index].trim() !== '';
              if (event.key === 'Enter' || event.key === 'Tab') {
                event.preventDefault();
                if (isLastBulletPoint && isNotEmpty) {
                  addBulletPoint();
                } else if (event.key === 'Enter' || !event.shiftKey && event.key === 'Tab') {
                  focusBulletPoint(index + 1);
                } else if (event.key === 'Tab' && event.shiftKey) {
                  focusBulletPoint(index - 1);
                }
              } else if (event.key === 'Backspace' && bulletPoints[index] === '' && bulletPoints.length > 1) {
                event.preventDefault();
                removeBulletPoint(index);
              }
            };
            const addBulletPoint = () => {
              if (bulletPoints.length < maxBulletPoints) {
                setBulletPoints(prevBulletPoints => [...prevBulletPoints, '']);
                setTimeout(() => {
                  focusBulletPoint(bulletPoints.length);
                }, 0);
              }
            };
            const removeBulletPoint = index => {
              if (bulletPoints.length > minBulletPoints) {
                setBulletPoints(prevBulletPoints => {
                  const updatedBulletPoints = [...prevBulletPoints];
                  updatedBulletPoints.splice(index, 1);
                  focusBulletPoint(updatedBulletPoints.length - 1);
                  return updatedBulletPoints;
                });
              }
            };
            const focusBulletPoint = index => {
              const inputElement = bulletPointRefs.current[index];
              if (inputElement) {
                inputElement.focus();
                inputElement.setSelectionRange(0, inputElement.value.length);
              }
            };
            const registerBulletPointRef = (index, element) => {
              bulletPointRefs.current[index] = element;
            };
            const canRemoveBulletPoint = bulletPoints.length > minBulletPoints;
            return {
              bulletPoints,
              handleInputChange,
              handleKeyDown,
              addBulletPoint,
              removeBulletPoint,
              registerBulletPointRef,
              canRemoveBulletPoint,
              handleDragOver,
              handleDragEnd,
              handleDragStart
            };
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 2939338696,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            constructor() {
              super();
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/bullet-points
      *************************************/

      ims.set('./views/bullet-points', {
        hash: 3830322781,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _useBulletPoints = require("../hooks/useBulletPoints");
          const BulletPointForm = ({
            handleChange,
            minBulletPoints = 1,
            maxBulletPoints = 10
          }) => {
            const {
              addBulletPoint,
              bulletPoints,
              canRemoveBulletPoint,
              handleInputChange,
              handleKeyDown,
              registerBulletPointRef,
              removeBulletPoint,
              handleDragEnd,
              handleDragOver,
              handleDragStart
            } = (0, _useBulletPoints.useBulletPoints)(handleChange, {
              maxBulletPoints,
              minBulletPoints
            });
            return _react.default.createElement("div", {
              className: 'bullet-points-form'
            }, bulletPoints.map((point, index) => _react.default.createElement("span", {
              key: index,
              className: 'bullet-points-item',
              draggable: true,
              onDragStart: event => handleDragStart(event, index),
              onDragOver: () => handleDragOver(index),
              onDragEnd: handleDragEnd
            }, _react.default.createElement(_icons.Icon, {
              icon: 'drag',
              className: 'drag-bullet-point'
            }), _react.default.createElement("p", null, " ", index + 1, ". "), _react.default.createElement("input", {
              className: 'bullet-points-input',
              type: 'text',
              value: point,
              onChange: event => handleInputChange(index, event),
              onKeyDown: event => handleKeyDown(index, event),
              ref: element => registerBulletPointRef(index, element)
            }), canRemoveBulletPoint && _react.default.createElement(_icons.Icon, {
              icon: 'delete',
              className: 'delete-bullet-point',
              onClick: () => removeBulletPoint(index)
            }))), _react.default.createElement(_form.Button, {
              onClick: addBulletPoint,
              icon: 'add',
              label: 'Add Item',
              disabled: !(bulletPoints.length < maxBulletPoints)
            }));
          };
          var _default = BulletPointForm;
          exports.default = _default;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2499563210,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var React = require("react");
          var _components = require("@aimpact/ailearn-estrada/shared/components");
          var _form = require("pragmate-ui/form");
          var _bulletPoints = require("./bullet-points");
          function Page({
            store
          }) {
            const defaultValues = {
              title: '',
              objectives: ['']
            };
            const [values, setValues] = React.useState(defaultValues);
            const [error, setError] = React.useState('');
            const [fetching, setFetching] = React.useState(false);
            const handleChange = ({
              currentTarget: target
            }) => {
              const currentValue = {
                ...values
              };
              currentValue[target.name] = target.value;
              setValues(currentValue);
              setError('');
            };
            const formDisabled = {};
            const {
              objectives,
              title
            } = values;
            if (!objectives || !title) formDisabled.disabled = true;
            function onSubmit(event) {
              try {
                event.preventDefault();
                store.create(values);
                setValues(defaultValues);
              } catch (error) {}
            }
            return React.createElement("div", {
              className: 'class-view'
            }, React.createElement("div", {
              className: 'section-title'
            }, React.createElement("h1", null, "Crea una nueva clase")), React.createElement("form", {
              className: 'class-form'
            }, React.createElement("span", null, React.createElement(_components.Input, {
              label: 'T\u00EDtulo de la clase',
              name: 'title',
              type: 'text',
              onChange: handleChange,
              required: true
            })), React.createElement("span", null, React.createElement("h3", null, "Objetivos"), React.createElement("p", null, "Agrega la lista de puntos a repasar como objetivos en la clase."), React.createElement(_bulletPoints.default, {
              handleChange: handleChange
            })), React.createElement(_form.Button, {
              label: 'Crear clase',
              type: 'submit',
              icon: 'save',
              onClick: onSubmit,
              loading: fetching,
              ...formDisabled
            })));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VCxVQUFVO2NBQUVEO1lBQUssQ0FBRSxHQUFHRSxNQUFNO1lBQ3BDLElBQUksQ0FBQ0QsVUFBVSxJQUFJLENBQUNELEtBQUssRUFBRVUsWUFBWSxDQUFDYixRQUFRLEdBQUcsSUFBSTtZQUV2RCxTQUFTYyxRQUFRLENBQUN6RCxLQUFLO2NBQ3RCLElBQUk7Z0JBQ0hBLEtBQUssQ0FBQ1EsY0FBYyxFQUFFO2dCQUN0Qm9DLEtBQUssQ0FBQ2MsTUFBTSxDQUFDVixNQUFNLENBQUM7Z0JBQ3BCQyxTQUFTLENBQUNKLGFBQWEsQ0FBQztlQUN4QixDQUFDLE9BQU9NLEtBQUssRUFBRTtZQUNqQjtZQUVBLE9BQ0N6QjtjQUFLQyxTQUFTLEVBQUM7WUFBWSxHQUMxQkQ7Y0FBS0MsU0FBUyxFQUFDO1lBQWUsR0FDN0JELHVEQUE2QixDQUN4QixFQUNOQTtjQUFNQyxTQUFTLEVBQUM7WUFBWSxHQUMzQkQsa0NBQ0NBLG9CQUFDaUMsaUJBQUs7Y0FBQ2pCLEtBQUssRUFBQyx5QkFBb0I7Y0FBQ3RELElBQUksRUFBQyxPQUFPO2NBQUNnRCxJQUFJLEVBQUMsTUFBTTtjQUFDQyxRQUFRLEVBQUU5RCxZQUFZO2NBQUVxRixRQUFRO1lBQUEsRUFBRyxDQUN4RixFQUVQbEMsa0NBQ0NBLDRDQUFrQixFQUNsQkEsaUdBQXNFLEVBQ3RFQSxvQkFBQ0QscUJBQWU7Y0FBQ2xELFlBQVksRUFBRUE7WUFBWSxFQUFJLENBQ3pDLEVBQ1BtRCxvQkFBQ2UsWUFBTTtjQUNOQyxLQUFLLEVBQUMsYUFBYTtjQUNuQk4sSUFBSSxFQUFDLFFBQVE7Y0FDYkQsSUFBSSxFQUFDLE1BQU07Y0FDWEssT0FBTyxFQUFFaUIsUUFBUTtjQUNqQkksT0FBTyxFQUFFUixRQUFRO2NBQUEsR0FDYkc7WUFBWSxFQUNmLENBQ0ksQ0FDRjtVQUVSIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJQYWdlIiwiZXhwb3J0cyIsInVzZUJ1bGxldFBvaW50cyIsImhhbmRsZUNoYW5nZSIsIm1pbkJ1bGxldFBvaW50cyIsIm1heEJ1bGxldFBvaW50cyIsImJ1bGxldFBvaW50cyIsInNldEJ1bGxldFBvaW50cyIsImJ1bGxldFBvaW50UmVmcyIsImRyYWdnZWRJbmRleCIsInNldERyYWdnZWRJbmRleCIsImRyb3BwZWRJbmRleCIsInNldERyb3BwZWRJbmRleCIsImhhbmRsZUJ1bGxldFBvaW50c0NoYW5nZSIsInVwZGF0ZWRCdWxsZXRQb2ludHMiLCJjdXJyZW50VGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlRHJhZ1N0YXJ0IiwiXyIsImluZGV4IiwiaGFuZGxlRHJhZ092ZXIiLCJkcm9wcGVkUG9zaXRpb24iLCJoYW5kbGVEcmFnRW5kIiwibmV3QnVsbGV0UG9pbnRzIiwibW92ZWRCdWxsZXRQb2ludCIsInNwbGljZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJoYW5kbGVLZXlEb3duIiwiaXNMYXN0QnVsbGV0UG9pbnQiLCJsZW5ndGgiLCJpc05vdEVtcHR5IiwidHJpbSIsImtleSIsInByZXZlbnREZWZhdWx0IiwiYWRkQnVsbGV0UG9pbnQiLCJzaGlmdEtleSIsImZvY3VzQnVsbGV0UG9pbnQiLCJyZW1vdmVCdWxsZXRQb2ludCIsInByZXZCdWxsZXRQb2ludHMiLCJzZXRUaW1lb3V0IiwiaW5wdXRFbGVtZW50IiwiY3VycmVudCIsImZvY3VzIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJyZWdpc3RlckJ1bGxldFBvaW50UmVmIiwiZWxlbWVudCIsImNhblJlbW92ZUJ1bGxldFBvaW50IiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsImNvbnN0cnVjdG9yIiwiQnVsbGV0UG9pbnRGb3JtIiwiUmVhY3QiLCJjbGFzc05hbWUiLCJtYXAiLCJwb2ludCIsImRyYWdnYWJsZSIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnT3ZlciIsIm9uRHJhZ0VuZCIsIkljb24iLCJpY29uIiwidHlwZSIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwicmVmIiwib25DbGljayIsIkJ1dHRvbiIsImxhYmVsIiwiZGlzYWJsZWQiLCJzdG9yZSIsImRlZmF1bHRWYWx1ZXMiLCJ0aXRsZSIsIm9iamVjdGl2ZXMiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiY3VycmVudFZhbHVlIiwiZm9ybURpc2FibGVkIiwib25TdWJtaXQiLCJjcmVhdGUiLCJJbnB1dCIsInJlcXVpcmVkIiwibG9hZGluZyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL2hvb2tzL3VzZUJ1bGxldFBvaW50cy50cyIsInRzL3N0b3JlL2luZGV4LnRzIiwidHMvdmlld3MvYnVsbGV0LXBvaW50cy50c3giLCJ0cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==