System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/image", "pragmate-ui@0.0.36/swiper-component"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Opinions, __beyond_pkg, hmr;
  _export("Opinions", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_pragmateUi0036Image) {
      dependency_3 = _pragmateUi0036Image;
    }, function (_pragmateUi0036SwiperComponent) {
      dependency_4 = _pragmateUi0036SwiperComponent;
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
          "vspecifier": "pragmate-ui@0.0.36/opinions"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/image', dependency_3], ['pragmate-ui/swiper-component', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/opinions');
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./card
      **********************/
      ims.set('./card', {
        hash: 3472612627,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CardOpinion = CardOpinion;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          function CardOpinion(props) {
            const {
              name,
              src,
              profession,
              comment,
              alt
            } = props;
            return React.createElement("div", {
              className: "container__card-opinions"
            }, React.createElement(_image.Image, {
              src: "image/comillas.png",
              alt: "icon"
            }), React.createElement("div", {
              className: "img__icon-circle"
            }, React.createElement(_image.Image, {
              src: src,
              alt: alt
            })), React.createElement("div", {
              className: "content-p"
            }, React.createElement("p", {
              className: "opinions__p"
            }, comment)), React.createElement("div", {
              className: "content-opinions"
            }, React.createElement("h3", null, React.createElement("strong", null, name)), React.createElement("span", null, profession)));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1951850634,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Opinions = Opinions;
          var React = require("react");
          var _swiperComponent = require("pragmate-ui/swiper-component");
          var _card = require("./card");
          /* bundle */
          function Opinions(props) {
            const items = props.opinions.map((opinion, index) => {
              return React.createElement(_card.CardOpinion, {
                key: index,
                name: opinion.name,
                src: opinion.src,
                comment: opinion.comment,
                profession: opinion.profession,
                alt: opinion.alt
              });
            });
            return React.createElement("section", {
              className: "container__opinion"
            }, React.createElement(_swiperComponent.SwiperSlider, {
              loop: true,
              slidesPerView: "auto",
              spaceBetween: 0,
              pagination: true,
              navigation: true,
              className: "swiper-implementation"
            }, items));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Opinions",
        "name": "Opinions"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Opinions') && _export("Opinions", Opinions = require ? require('./index').Opinions : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBQ00sU0FBVUEsV0FBVyxDQUFDQyxLQUFLO1lBQy9CLE1BQU07Y0FBRUMsSUFBSTtjQUFFQyxHQUFHO2NBQUVDLFVBQVU7Y0FBRUMsT0FBTztjQUFFQztZQUFHLENBQUUsR0FBR0wsS0FBSztZQUVyRCxPQUNFTTtjQUFLQyxTQUFTLEVBQUM7WUFBMEIsR0FDdkNELG9CQUFDRSxZQUFLO2NBQUNOLEdBQUcsRUFBQyxvQkFBb0I7Y0FBQ0csR0FBRyxFQUFDO1lBQU0sRUFBRyxFQUM3Q0M7Y0FBS0MsU0FBUyxFQUFDO1lBQWtCLEdBQy9CRCxvQkFBQ0UsWUFBSztjQUFDTixHQUFHLEVBQUVBLEdBQUc7Y0FBRUcsR0FBRyxFQUFFQTtZQUFHLEVBQUksQ0FDekIsRUFDTkM7Y0FBS0MsU0FBUyxFQUFDO1lBQVcsR0FDeEJEO2NBQUdDLFNBQVMsRUFBQztZQUFhLEdBQUVILE9BQU8sQ0FBSyxDQUNwQyxFQUVORTtjQUFLQyxTQUFTLEVBQUM7WUFBa0IsR0FDL0JELGdDQUNFQSxvQ0FBU0wsSUFBSSxDQUFVLENBQ3BCLEVBQ0xLLGtDQUFPSCxVQUFVLENBQVEsQ0FDckIsQ0FDRjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQTtVQUNBO1VBQ0E7VUFjTztVQUFZLFNBQVVNLFFBQVEsQ0FBQ1QsS0FBYTtZQUNqRCxNQUFNVSxLQUFLLEdBQUdWLEtBQUssQ0FBQ1csUUFBUSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsT0FBTyxFQUFFQyxLQUFLLEtBQUk7Y0FDbEQsT0FDRVIsb0JBQUNQLGlCQUFXO2dCQUNWZ0IsR0FBRyxFQUFFRCxLQUFLO2dCQUNWYixJQUFJLEVBQUVZLE9BQU8sQ0FBQ1osSUFBSTtnQkFDbEJDLEdBQUcsRUFBRVcsT0FBTyxDQUFDWCxHQUFHO2dCQUNoQkUsT0FBTyxFQUFFUyxPQUFPLENBQUNULE9BQU87Z0JBQ3hCRCxVQUFVLEVBQUVVLE9BQU8sQ0FBQ1YsVUFBVTtnQkFDOUJFLEdBQUcsRUFBRVEsT0FBTyxDQUFDUjtjQUFHLEVBQ2hCO1lBRU4sQ0FBQyxDQUFDO1lBRUYsT0FDRUM7Y0FBU0MsU0FBUyxFQUFDO1lBQW9CLEdBQ3JDRCxvQkFBQ1UsNkJBQVk7Y0FDWEMsSUFBSSxFQUFFLElBQUk7Y0FDVkMsYUFBYSxFQUFDLE1BQU07Y0FDcEJDLFlBQVksRUFBRSxDQUFDO2NBQ2ZDLFVBQVUsRUFBRSxJQUFJO2NBQ2hCQyxVQUFVLEVBQUUsSUFBSTtjQUNoQmQsU0FBUyxFQUFDO1lBQXVCLEdBRWhDRyxLQUFLLENBQ08sQ0FDUDtVQUVkIiwibmFtZXMiOlsiQ2FyZE9waW5pb24iLCJwcm9wcyIsIm5hbWUiLCJzcmMiLCJwcm9mZXNzaW9uIiwiY29tbWVudCIsImFsdCIsIlJlYWN0IiwiY2xhc3NOYW1lIiwiSW1hZ2UiLCJPcGluaW9ucyIsIml0ZW1zIiwib3BpbmlvbnMiLCJtYXAiLCJvcGluaW9uIiwiaW5kZXgiLCJrZXkiLCJTd2lwZXJTbGlkZXIiLCJsb29wIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsInBhZ2luYXRpb24iLCJuYXZpZ2F0aW9uIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2NhcmQudHN4IiwiY29kZS90cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==