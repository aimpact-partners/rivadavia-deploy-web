System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "swiper@8.4.7", "@beyond-js/reactive@1.0.1/model", "pragmate-ui@0.0.36/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, SwiperSlider, __beyond_pkg, hmr;
  _export("SwiperSlider", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_swiper) {
      dependency_2 = _swiper;
    }, function (_beyondJsReactive101Model) {
      dependency_3 = _beyondJsReactive101Model;
    }, function (_pragmateUi0036Icons) {
      dependency_4 = _pragmateUi0036Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_5 = _beyondJsKernel019Styles;
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
          "vspecifier": "pragmate-ui@0.0.36/swiper-component"
        },
        "type": "code",
        "name": "swiper-component"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['swiper', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['pragmate-ui/icons', dependency_4], ['@beyond-js/kernel/styles', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/swiper-component');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 296935815,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSwiperContext = exports.SwiperContext = void 0;
          var React = require("react");
          const SwiperContext = React.createContext([]);
          exports.SwiperContext = SwiperContext;
          const useSwiperContext = () => React.useContext(SwiperContext);
          exports.useSwiperContext = useSwiperContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 29158988,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var Swiper = require("swiper");
          var _model = require("@beyond-js/reactive/model");
          const SwiperCasted = Swiper.Swiper;
          class Controller extends _model.ReactiveModel {
            #swiper;
            get swiper() {
              return this.#swiper;
            }
            #onEnd;
            #props;
            setSwiper = (element, props, ref) => {
              this.#props = props;
              const specs = Object.assign({
                slidesPerView: props.slidesPerView ?? 1,
                modules: [Swiper.Navigation, Swiper.Pagination]
              }, props);
              if (!Swiper) {
                console.warn('Swiper keeps without been loaded');
                return;
              }
              if (props.pagination || props.footer) {
                specs.pagination = {
                  el: ref.pagination.current,
                  clickable: true,
                  type: props.typePagination ?? 'bullets',
                  dynamicBullets: props.dynamicBullets ?? false
                };
              }
              if (props.navigation) {
                specs.navigation = {
                  nextEl: ref.next.current,
                  prevEl: ref.prev.current
                };
              }
              this.#swiper = new SwiperCasted(element, specs);
              if (props.activeSlide) this.#swiper.slideTo(parseInt(props.activeSlide));
              const nextSlide = () => {
                if (this.#swiper) this.#swiper.slideNext();
              };
              const prevSlide = () => {
                if (this.#swiper) this.#swiper.slidePrev();
              };
              const slideTo = index => {
                if (this.#swiper) this.#swiper.slideTo(parseInt(index));
              };
              if (props.nextSlide && typeof props.nextSlide === 'function') props.nextSlide(nextSlide);
              if (props.prevSlide && typeof props.prevSlide === 'function') props.prevSlide(prevSlide);
              if (props.slideTo && typeof props.slideTo === 'function') props.slideTo(slideTo);
              this.#swiper.on('slideChange', () => {
                if (this.#swiper?.isEnd) {
                  this.#onEnd = true;
                  this.triggerEvent();
                } else {
                  this.#onEnd = false;
                  this.triggerEvent();
                }
              });
            };
            nextSlide = () => {
              if (!this.#swiper?.isEnd) {
                this.#swiper?.slideNext(500, false);
                return;
              }
              if (!this.#onEnd) return;
              if (this.#props.functionNext) this.#props.functionNext();else this.#swiper?.slideNext(500, false);
            };
            next = () => {
              if (!this.#swiper?.isEnd) {
                this.#swiper?.slideNext(500, false);
                return;
              }
              if (!this.#onEnd) return;
              this.#props.functionNext();
            };
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3468585756,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SwiperSlider = SwiperSlider;
          var React = require("react");
          var _swiperFooter = require("./swiper-footer");
          var _swiperNavigation = require("./swiper-navigation");
          var _slide = require("./slide");
          var _useSwiper = require("./use-swiper");
          var _context = require("./context");
          /*bundle*/
          function SwiperSlider(props) {
            const {
              refs,
              state,
              prev,
              container
            } = (0, _useSwiper.useSwiperSlider)(props);
            const contextValue = {};
            const footer = props.footer === true;
            const {
              controller
            } = state;
            const cls = props.className ? `${props.className} pragmate-element-swiper-slider` : "pragmate-element-swiper-slider";
            return React.createElement(_context.SwiperContext.Provider, {
              value: contextValue
            }, React.createElement("div", {
              className: cls
            }, React.createElement("div", {
              ref: container,
              className: "swiper-container"
            }, React.createElement("div", {
              className: "swiper-wrapper"
            }, React.createElement(_slide.SlideItems, {
              props: props
            })), props.pagination && React.createElement("div", {
              ref: refs?.pagination,
              className: "swiper-pagination"
            }), React.createElement(_swiperFooter.SwiperFooter, {
              footer: footer,
              controller: controller,
              refs: refs
            }), React.createElement(_swiperNavigation.SwiperNavigation, {
              navigation: props.navigation,
              controller: controller,
              prev: prev
            }))));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./interface
      ***************************/

      ims.set('./interface', {
        hash: 3704574833,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./slide/index
      *****************************/

      ims.set('./slide/index', {
        hash: 63497929,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SlideItems = SlideItems;
          var React = require("react");
          var _slide = require("./slide");
          function SlideItems({
            props
          }) {
            const slides = props.children.map((slide, index) => React.createElement(_slide.Slide, {
              key: index
            }, slide));
            return React.createElement(React.Fragment, null, slides);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./slide/slide
      *****************************/

      ims.set('./slide/slide', {
        hash: 2634860187,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Slide = Slide;
          var React = require("react");
          function Slide(props) {
            return React.createElement("div", {
              className: "swiper-slide"
            }, props.children);
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./swiper-footer
      *******************************/

      ims.set('./swiper-footer', {
        hash: 3881607008,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SwiperFooter = SwiperFooter;
          var React = require("react");
          function SwiperFooter(props) {
            const {
              footer,
              controller,
              refs
            } = props;
            if (!footer) return null;
            return React.createElement(React.Fragment, null, !controller?.swiper.isEnd && React.createElement("button", {
              className: "swiper-button-prev",
              onClick: props.functionNext
            }, "SKIP"), React.createElement("div", {
              ref: refs.pagination,
              className: "swiper-pagination"
            }), React.createElement("button", {
              className: "swiper-button-next ",
              onClick: controller?.next
            }, "Next"));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./swiper-navigation
      ***********************************/

      ims.set('./swiper-navigation', {
        hash: 888793971,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SwiperNavigation = SwiperNavigation;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          function SwiperNavigation(props) {
            const {
              navigation,
              controller,
              prev
            } = props;
            if (!navigation) return null;
            return React.createElement(React.Fragment, null, React.createElement("div", {
              ref: prev,
              className: "swiper-button-prev"
            }, React.createElement(_icons.Icon, {
              icon: "left"
            })), React.createElement("div", {
              onClick: controller?.nextSlide,
              className: "swiper-button-next"
            }, React.createElement(_icons.Icon, {
              icon: "right"
            })));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./use-swiper
      ****************************/

      ims.set('./use-swiper', {
        hash: 1047845688,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSwiperSlider = void 0;
          var React = require("react");
          var _controller = require("./controller");
          const useSwiperSlider = props => {
            /* const { props } = useSwiperContext(); */
            const refs = {
              next: React.useRef(),
              container: React.useRef(),
              pagination: React.useRef(),
              prev: React.useRef()
            };
            const {
              slideTo
            } = props;
            const {
              container,
              prev
            } = refs;
            const [state, setState] = React.useState({});
            React.useEffect(() => {
              const controller = new _controller.Controller();
              const onChange = () => setState({
                ...state,
                ready: true,
                swiper: controller.swiper,
                controller,
                lastIndex: controller.lastIndex
              });
              controller.bind("change", onChange);
              if (!controller.destroyed) controller.setSwiper(container.current, props, refs);
              onChange();
              return () => controller.unbind("change", onChange);
            }, []);
            React.useEffect(() => {
              if (!state.swiper || !slideTo) return;
              state.swiper.slideTo(slideTo);
            }, [slideTo]);
            return {
              refs,
              state,
              prev,
              container
            };
          };
          exports.useSwiperSlider = useSwiperSlider;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "SwiperSlider",
        "name": "SwiperSlider"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'SwiperSlider') && _export("SwiperSlider", SwiperSlider = require ? require('./index').SwiperSlider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxNQUFNb0UsUUFBUSxHQUFlLE1BQzNCSCxRQUFRLENBQUM7Z0JBQ1AsR0FBR3RCLEtBQUs7Z0JBQ1IwQixLQUFLLEVBQUUsSUFBSTtnQkFDWG5FLE1BQU0sRUFBRTRDLFVBQVUsQ0FBQzVDLE1BQU07Z0JBQ3pCNEMsVUFBVTtnQkFDVndCLFNBQVMsRUFBRXhCLFVBQVUsQ0FBQ3dCO2VBQ3ZCLENBQUM7Y0FDSnhCLFVBQVUsQ0FBQ3lCLElBQUksQ0FBQyxRQUFRLEVBQUVILFFBQVEsQ0FBQztjQUNuQyxJQUFJLENBQUN0QixVQUFVLENBQUMwQixTQUFTLEVBQ3ZCMUIsVUFBVSxDQUFDM0MsU0FBUyxDQUFDeUMsU0FBUyxDQUFDekIsT0FBTyxFQUFFZCxLQUFLLEVBQUVxQyxJQUFJLENBQUM7Y0FDdEQwQixRQUFRLEVBQUU7Y0FDVixPQUFPLE1BQU10QixVQUFVLENBQUMyQixNQUFNLENBQUMsUUFBUSxFQUFFTCxRQUFRLENBQUM7WUFDcEQsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUVOM0UsS0FBSyxDQUFDMEUsU0FBUyxDQUFDLE1BQUs7Y0FDbkIsSUFBSSxDQUFDeEIsS0FBSyxDQUFDekMsTUFBTSxJQUFJLENBQUM0QixPQUFPLEVBQUU7Y0FDL0JhLEtBQUssQ0FBQ3pDLE1BQU0sQ0FBQzRCLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDO1lBQy9CLENBQUMsRUFBRSxDQUFDQSxPQUFPLENBQUMsQ0FBQztZQUViLE9BQU87Y0FBRVksSUFBSTtjQUFFQyxLQUFLO2NBQUVmLElBQUk7Y0FBRWdCO1lBQVMsQ0FBRTtVQUN6QyxDQUFDO1VBQUNqRCIsIm5hbWVzIjpbIlN3aXBlckNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJleHBvcnRzIiwidXNlU3dpcGVyQ29udGV4dCIsInVzZUNvbnRleHQiLCJTd2lwZXJDYXN0ZWQiLCJTd2lwZXIiLCJDb250cm9sbGVyIiwiUmVhY3RpdmVNb2RlbCIsInN3aXBlciIsInNldFN3aXBlciIsImVsZW1lbnQiLCJwcm9wcyIsInJlZiIsInNwZWNzIiwiT2JqZWN0IiwiYXNzaWduIiwic2xpZGVzUGVyVmlldyIsIm1vZHVsZXMiLCJOYXZpZ2F0aW9uIiwiUGFnaW5hdGlvbiIsImNvbnNvbGUiLCJ3YXJuIiwicGFnaW5hdGlvbiIsImZvb3RlciIsImVsIiwiY3VycmVudCIsImNsaWNrYWJsZSIsInR5cGUiLCJ0eXBlUGFnaW5hdGlvbiIsImR5bmFtaWNCdWxsZXRzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsIm5leHQiLCJwcmV2RWwiLCJwcmV2IiwiYWN0aXZlU2xpZGUiLCJzbGlkZVRvIiwicGFyc2VJbnQiLCJuZXh0U2xpZGUiLCJzbGlkZU5leHQiLCJwcmV2U2xpZGUiLCJzbGlkZVByZXYiLCJpbmRleCIsIm9uIiwiaXNFbmQiLCJ0cmlnZ2VyRXZlbnQiLCJmdW5jdGlvbk5leHQiLCJTd2lwZXJTbGlkZXIiLCJyZWZzIiwic3RhdGUiLCJjb250YWluZXIiLCJjb250ZXh0VmFsdWUiLCJjb250cm9sbGVyIiwiY2xzIiwiY2xhc3NOYW1lIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIlNsaWRlSXRlbXMiLCJTd2lwZXJGb290ZXIiLCJTd2lwZXJOYXZpZ2F0aW9uIiwic2xpZGVzIiwiY2hpbGRyZW4iLCJtYXAiLCJzbGlkZSIsIlNsaWRlIiwia2V5Iiwib25DbGljayIsIkljb24iLCJpY29uIiwidXNlU3dpcGVyU2xpZGVyIiwidXNlUmVmIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm9uQ2hhbmdlIiwicmVhZHkiLCJsYXN0SW5kZXgiLCJiaW5kIiwiZGVzdHJveWVkIiwidW5iaW5kIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250ZXh0LnRzeCIsInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9pbmRleC50c3giLCJ0cy9pbnRlcmZhY2UudHMiLCJ0cy9zbGlkZS9pbmRleC50c3giLCJ0cy9zbGlkZS9zbGlkZS50c3giLCJ0cy9zd2lwZXItZm9vdGVyLnRzeCIsInRzL3N3aXBlci1uYXZpZ2F0aW9uLnRzeCIsInRzL3VzZS1zd2lwZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==