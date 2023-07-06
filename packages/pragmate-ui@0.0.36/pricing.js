System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Pricing, __beyond_pkg, hmr;
  _export("Pricing", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_pragmateUi0036Form) {
      dependency_3 = _pragmateUi0036Form;
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
          "vspecifier": "pragmate-ui@0.0.36/pricing"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/form', dependency_3], ['pragmate-ui/icons', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/pricing');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./free-plan
      ***************************/
      ims.set('./free-plan', {
        hash: 2849506604,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FreePlan = FreePlan;
          var React = require("react");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          function FreePlan(props) {
            const {
              title,
              description,
              btnText,
              advantages,
              primary,
              secondary
            } = props;
            const HEADER = title.charAt(0).toUpperCase() + title.slice(1);
            const listAdvanges = advantages.map((advantage, index) => React.createElement("li", {
              key: index
            }, React.createElement(_icons.Icon, {
              icon: "circle-checks",
              className: "md"
            }), " ", advantage));
            return React.createElement("section", {
              className: "container-component container__component-free"
            }, React.createElement("h3", {
              className: "component__h3"
            }, HEADER), React.createElement("p", {
              className: "component__p"
            }, description), React.createElement("div", {
              className: "view-price"
            }, React.createElement("h2", {
              className: "price__h2"
            }, "Free Forever"), React.createElement(_form.Button, {
              variant: "primary"
            }, btnText)), React.createElement("div", {
              className: "container-advantages"
            }, React.createElement("ul", null, listAdvanges)));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 812753311,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Pricing = Pricing;
          var React = require("react");
          var _freePlan = require("./free-plan");
          var _premiumPlan = require("./premium-plan");
          /* bundle */
          function Pricing({
            level = "free",
            ...props
          }) {
            const planComponents = {
              free: _freePlan.FreePlan,
              premium: _premiumPlan.PremiumPlan
            };
            const PlanComponent = planComponents[level];
            return React.createElement("div", {
              className: "container_princigs"
            }, React.createElement(PlanComponent, {
              ...props
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./premium-plan
      ******************************/

      ims.set('./premium-plan', {
        hash: 2448779174,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PremiumPlan = PremiumPlan;
          var React = require("react");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          function PremiumPlan(props) {
            const {
              title,
              price,
              description,
              btnText,
              advantages,
              primary,
              secondary
            } = props;
            const HEADER = title.charAt(0).toUpperCase() + title.slice(1);
            const listAdvanges = advantages.map((advantage, index) => React.createElement("li", {
              key: index
            }, React.createElement(_icons.Icon, {
              icon: "circle-checks",
              className: "md"
            }), advantage));
            return React.createElement("section", {
              className: "container-component container__component-prop"
            }, React.createElement("h3", {
              className: "component__h3"
            }, HEADER), React.createElement("p", {
              className: "component__p"
            }, description), React.createElement("div", {
              className: "view-price"
            }, React.createElement("h2", {
              className: "price__h2"
            }, price, " \u20AC/month"), React.createElement(_form.Button, {
              variant: "primary"
            }, btnText)), React.createElement("div", {
              className: "container-advantages"
            }, React.createElement("ul", null, listAdvanges)));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 4252164912,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Pricing",
        "name": "Pricing"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Pricing') && _export("Pricing", Pricing = require ? require('./index').Pricing : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLEdBQUVsQixPQUFPLENBQVUsQ0FDeEMsRUFFTlk7Y0FBS0ksU0FBUyxFQUFDO1lBQXNCLEdBQ25DSixnQ0FBS0osWUFBWSxDQUFNLENBQ25CLENBQ0U7VUFFZDs7Ozs7Ozs7Ozs7VUM1QkE7O1VBRUFtQjtZQUNBQztVQUNBIiwibmFtZXMiOlsiRnJlZVBsYW4iLCJwcm9wcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJidG5UZXh0IiwiYWR2YW50YWdlcyIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJIRUFERVIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwibGlzdEFkdmFuZ2VzIiwibWFwIiwiYWR2YW50YWdlIiwiaW5kZXgiLCJSZWFjdCIsImtleSIsIkljb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwidmFyaWFudCIsIlByaWNpbmciLCJsZXZlbCIsInBsYW5Db21wb25lbnRzIiwiZnJlZSIsInByZW1pdW0iLCJQcmVtaXVtUGxhbiIsIlBsYW5Db21wb25lbnQiLCJwcmljZSIsIk9iamVjdCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2ZyZWUtcGxhbi50c3giLCJjb2RlL3RzL2luZGV4LnRzeCIsImNvZGUvdHMvcHJlbWl1bS1wbGFuLnRzeCIsImNvZGUvdHMvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=