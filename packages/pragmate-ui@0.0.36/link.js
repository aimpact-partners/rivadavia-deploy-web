System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Link, __beyond_pkg, hmr;
  _export("Link", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_beyondJsKernel019Routing) {
      dependency_2 = _beyondJsKernel019Routing;
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
          "vspecifier": "pragmate-ui@0.0.36/link"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/routing', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 4032292245,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Link = Link;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function Link({
            href,
            ...props
          }) {
            const isExternal = href?.startsWith('http');
            const target = isExternal ? '_blank' : '';
            const onClick = event => {
              if (!isExternal) event.preventDefault();
              event.stopPropagation();
              if (props.onClick && typeof props.onClick === 'function') {
                props.onClick(event);
              }
              !isExternal && _routing.routing.pushState(href);
            };
            const properties = {
              ...props
            };
            ['href', 'onClick'].forEach(prop => delete properties[prop]);
            return React.createElement("a", {
              ...properties,
              href: href,
              onClick: onClick,
              target: props.target || target
            }, props.children);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Link",
        "name": "Link"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Link') && _export("Link", Link = require ? require('./index').Link : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUVPO1VBQVUsU0FDUkEsSUFBSSxDQUFDO1lBQUVDLElBQUk7WUFBRSxHQUFHQztVQUFLLENBQWlEO1lBQzlFLE1BQU1DLFVBQVUsR0FBR0YsSUFBSSxFQUFFRyxVQUFVLENBQUMsTUFBTSxDQUFDO1lBQzNDLE1BQU1DLE1BQU0sR0FBR0YsVUFBVSxHQUFHLFFBQVEsR0FBRyxFQUFFO1lBRXpDLE1BQU1HLE9BQU8sR0FBSUMsS0FBMEMsSUFBVTtjQUNwRSxJQUFJLENBQUNKLFVBQVUsRUFBRUksS0FBSyxDQUFDQyxjQUFjLEVBQUU7Y0FDdkNELEtBQUssQ0FBQ0UsZUFBZSxFQUFFO2NBRXZCLElBQUlQLEtBQUssQ0FBQ0ksT0FBTyxJQUFJLE9BQU9KLEtBQUssQ0FBQ0ksT0FBTyxLQUFLLFVBQVUsRUFBRTtnQkFDekRKLEtBQUssQ0FBQ0ksT0FBTyxDQUFDQyxLQUFLLENBQUM7O2NBR3JCLENBQUNKLFVBQVUsSUFBSU8sZ0JBQU8sQ0FBQ0MsU0FBUyxDQUFDVixJQUFJLENBQUM7WUFDdkMsQ0FBQztZQUVELE1BQU1XLFVBQVUsR0FBRztjQUFFLEdBQUdWO1lBQUssQ0FBRTtZQUMvQixDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQ1csT0FBTyxDQUFDQyxJQUFJLElBQUksT0FBT0YsVUFBVSxDQUFDRSxJQUFJLENBQUMsQ0FBQztZQUU1RCxPQUNDQztjQUFBLEdBQU9ILFVBQVU7Y0FBRVgsSUFBSSxFQUFFQSxJQUFJO2NBQUVLLE9BQU8sRUFBRUEsT0FBTztjQUFFRCxNQUFNLEVBQUVILEtBQUssQ0FBQ0csTUFBTSxJQUFJQTtZQUFNLEdBQzdFSCxLQUFLLENBQUNjLFFBQVEsQ0FDWjtVQUVOIiwibmFtZXMiOlsiTGluayIsImhyZWYiLCJwcm9wcyIsImlzRXh0ZXJuYWwiLCJzdGFydHNXaXRoIiwidGFyZ2V0Iiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwicHJvcGVydGllcyIsImZvckVhY2giLCJwcm9wIiwiUmVhY3QiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19