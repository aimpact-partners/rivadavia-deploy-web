System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/form"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, ICONS, AppIcon, AppIconButton, AppButton, __beyond_pkg, hmr;
  _export({
    ICONS: void 0,
    AppIcon: void 0,
    AppIconButton: void 0,
    AppButton: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_pragmateUi0036Icons) {
      dependency_2 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Form) {
      dependency_3 = _pragmateUi0036Form;
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
          "vspecifier": "@aimpact/ailearn-estrada@0.0.2/shared/icons"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['pragmate-ui/form', dependency_3]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./icons
      ***********************/
      ims.set('./icons', {
        hash: 2886711071,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ICONS = void 0;
          /* bundle */
          const ICONS = {
            'aip-chat-logo': {
              viewBox: '0 0 103.589 17.696',
              icon: `  <g id="Group_47" data-name="Group 47" transform="translate(-110.047 -16.639)">
    <g id="Group_119" data-name="Group 119" transform="translate(242.309)">
      <g id="Group_241" data-name="Group 241" transform="translate(1 6)">
        <path id="Path_178" data-name="Path 178" d="M178.97,89.066a2.177,2.177,0,0,1,.723-1.555,2.31,2.31,0,0,1,1.666-.751h3.612a9.786,9.786,0,0,1,3.665.626,8.561,8.561,0,0,1,2.724,1.735,8.123,8.123,0,0,1,1.835,2.626,8.33,8.33,0,0,1,.277,5.779,8.667,8.667,0,0,1-1.069,2.181,8.007,8.007,0,0,1-1.638,1.764,9.406,9.406,0,0,1-2.1,1.266,9.955,9.955,0,0,1-3.333.638h-3.973a2.31,2.31,0,0,1-1.138-.249,1.7,1.7,0,0,1-.277-.14,1.409,1.409,0,0,1-.277-.221,2.086,2.086,0,0,1-.695-1.695v-12Zm4.584,9.693h1.806a4.026,4.026,0,0,0,1.5-.277,3.9,3.9,0,0,0,1.221-.763,3.314,3.314,0,0,0,.818-1.166,3.726,3.726,0,0,0,.292-1.484,3.524,3.524,0,0,0-.638-2.126,3.768,3.768,0,0,0-1.695-1.292,2.937,2.937,0,0,0-1.029-.251,2.277,2.277,0,0,1-.5.028h-1.776Z" transform="translate(-284.709 -76.085)" fill="#164194"/>
        <path id="Path_179" data-name="Path 179" d="M56.358,92.065q0-5.3-5.168-5.305H45.247c-.053,0-.1,0-.148.006V86.76H43.05v2.308h0q.058,2.305,2.221,2.3h6.166c.612,0,.915.233.915.695s-.306.695-.915.695H45.662q-2.582,0-2.584,2.75,0,.945,1.8,2.361l4.771,4.74,0,0,1.8,1.8,1.482-1.48c.069-.063.136-.13.2-.2l.03-.03,0,0c.018-.018.032-.034.049-.053q1.415-1.664-.249-3.39l-1.974-1.887h.472Q56.359,97.232,56.358,92.065Z" transform="translate(-176.312 -76.085)" fill="#164194"/>
        <path id="Path_180" data-name="Path 180" d="M121.009,87.866a2.5,2.5,0,0,0-1.28-1.11,2.432,2.432,0,0,0-1.735-.028,2.1,2.1,0,0,0-1.237,1.363L113.9,95.423l-2.649-6.792h0l0-.012-.207-.531c-.024-.069-.055-.134-.083-.2l-.518-1.308h-1.5a2.593,2.593,0,0,0-.871.174,2.5,2.5,0,0,0-1.278,1.11,2.091,2.091,0,0,0-.055,1.833l4.528,10.991h0l1.035,2.537h1.632v0c.028,0,.055,0,.083,0a2.21,2.21,0,0,0,2.11-1.529l4.945-12A2.087,2.087,0,0,0,121.009,87.866Z" transform="translate(-226.953 -75.941)" fill="#164194"/>
      </g>
    </g>
  </g>
  <g id="Group_255" data-name="Group 255" transform="translate(0 20)">
    <g id="Group_254" data-name="Group 254">
      <g id="Group_172" data-name="Group 172" transform="translate(27.951 -18.095)">
        <path id="Path_119" data-name="Path 119" d="M8.382,17.393a7.54,7.54,0,0,1-5.409-2.051A6.963,6.963,0,0,1,.816,10.061,6.954,6.954,0,0,1,2.973,4.768a7.562,7.562,0,0,1,5.409-2.04,6.337,6.337,0,0,1,5.909,3.464L11.7,7.468A3.9,3.9,0,0,0,10.327,5.99a3.514,3.514,0,0,0-1.945-.584,4.244,4.244,0,0,0-3.2,1.318,4.624,4.624,0,0,0-1.265,3.337A4.624,4.624,0,0,0,5.184,13.4a4.244,4.244,0,0,0,3.2,1.318,3.514,3.514,0,0,0,1.945-.584A3.9,3.9,0,0,0,11.7,12.653l2.593,1.254A6.388,6.388,0,0,1,8.382,17.393Zm20.467-.255H25.81V11.166H19.115v5.972H16.1V2.962h3.018V8.53H25.81V2.962H28.85Zm16,0H41.432l-.893-2.4H34.461l-.893,2.4H30.146L35.608,2.962h3.783ZM39.71,12.08,37.5,5.98l-2.21,6.1Zm11.413,5.058H48.084V5.619H43.94V2.962H55.247V5.619H51.123Z" transform="translate(20.391 -3.648)" fill="#1dafed"/>
      </g>
    </g>
  </g>`
            },
            logo: {
              viewBox: '0 0 42.414 17.696',
              icon: `<g><g id="Group_47" data-name="Group 47" transform="translate(-110.047 -16.639)">
    <g id="Group_119" data-name="Group 119" transform="translate(242.309)">
      <g id="Group_241" data-name="Group 241" transform="translate(1 6)">
        <path id="Path_178" data-name="Path 178" d="M178.97,89.066a2.177,2.177,0,0,1,.723-1.555,2.31,2.31,0,0,1,1.666-.751h3.612a9.786,9.786,0,0,1,3.665.626,8.561,8.561,0,0,1,2.724,1.735,8.123,8.123,0,0,1,1.835,2.626,8.33,8.33,0,0,1,.277,5.779,8.667,8.667,0,0,1-1.069,2.181,8.007,8.007,0,0,1-1.638,1.764,9.406,9.406,0,0,1-2.1,1.266,9.955,9.955,0,0,1-3.333.638h-3.973a2.31,2.31,0,0,1-1.138-.249,1.7,1.7,0,0,1-.277-.14,1.409,1.409,0,0,1-.277-.221,2.086,2.086,0,0,1-.695-1.695v-12Zm4.584,9.693h1.806a4.026,4.026,0,0,0,1.5-.277,3.9,3.9,0,0,0,1.221-.763,3.314,3.314,0,0,0,.818-1.166,3.726,3.726,0,0,0,.292-1.484,3.524,3.524,0,0,0-.638-2.126,3.768,3.768,0,0,0-1.695-1.292,2.937,2.937,0,0,0-1.029-.251,2.277,2.277,0,0,1-.5.028h-1.776Z" transform="translate(-284.709 -76.085)" fill="#164194"/>
        <path id="Path_179" data-name="Path 179" d="M56.358,92.065q0-5.3-5.168-5.305H45.247c-.053,0-.1,0-.148.006V86.76H43.05v2.308h0q.058,2.305,2.221,2.3h6.166c.612,0,.915.233.915.695s-.306.695-.915.695H45.662q-2.582,0-2.584,2.75,0,.945,1.8,2.361l4.771,4.74,0,0,1.8,1.8,1.482-1.48c.069-.063.136-.13.2-.2l.03-.03,0,0c.018-.018.032-.034.049-.053q1.415-1.664-.249-3.39l-1.974-1.887h.472Q56.359,97.232,56.358,92.065Z" transform="translate(-176.312 -76.085)" fill="#164194"/>
        <path id="Path_180" data-name="Path 180" d="M121.009,87.866a2.5,2.5,0,0,0-1.28-1.11,2.432,2.432,0,0,0-1.735-.028,2.1,2.1,0,0,0-1.237,1.363L113.9,95.423l-2.649-6.792h0l0-.012-.207-.531c-.024-.069-.055-.134-.083-.2l-.518-1.308h-1.5a2.593,2.593,0,0,0-.871.174,2.5,2.5,0,0,0-1.278,1.11,2.091,2.091,0,0,0-.055,1.833l4.528,10.991h0l1.035,2.537h1.632v0c.028,0,.055,0,.083,0a2.21,2.21,0,0,0,2.11-1.529l4.945-12A2.087,2.087,0,0,0,121.009,87.866Z" transform="translate(-226.953 -75.941)" fill="#164194"/>
      </g>
    </g>
  </g></g>`
            },
            'icon-menu': {
              viewBox: '0 0 24 24',
              icon: `<g><path id="Trazado_154" data-name="Trazado 154" d="M0,0H24V24H0Z" fill="none"/><path id="Trazado_158" data-name="Trazado 158" d="M3,18H16V16H3Zm0-5H13V11H3ZM3,6V8H16V6Zm18,9.59L17.42,12,21,8.41,19.59,7l-5,5,5,5Z"/></g>`
            },
            'ai-profile': {
              viewBox: `0 0 38 38`,
              icon: `<g> <defs>
    <linearGradient id="linear-gradient" x1="-0.109" y1="0.256" x2="0.989" y2="0.558" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#115efa"/>
      <stop offset="0.058" stop-color="#1461fa"/>
      <stop offset="0.209" stop-color="#1c67fa"/>
      <stop offset="0.329" stop-color="#2c74fa"/>
      <stop offset="0.513" stop-color="#367bfa"/>
      <stop offset="0.599" stop-color="#348ff8"/>
      <stop offset="0.776" stop-color="#30c3f6"/>
      <stop offset="0.951" stop-color="#2cfdf3"/>
      <stop offset="1" stop-color="#2cfdf3"/>
    </linearGradient>
    <clipPath id="clip-path">
      <rect id="Rectángulo_89" data-name="Rectángulo 89" width="26.779" height="26.796" fill="url(#linear-gradient)"/>
    </clipPath>
    <clipPath id="clip-path-2">
      <path id="Trazado_113" data-name="Trazado 113" d="M2.515,35.593a2.209,2.209,0,0,0-2.11,1.669A13.338,13.338,0,0,0,0,40.495v.058A13.386,13.386,0,0,0,13.388,53.923h0A13.385,13.385,0,0,0,26.4,37.376a2.209,2.209,0,1,0-4.292,1.044,8.971,8.971,0,1,1-17.417-.076A2.217,2.217,0,0,0,2.6,35.593H2.515m9.291,4.932a1.583,1.583,0,1,1,1.584,1.583,1.552,1.552,0,0,1-1.584-1.583m-4.419,0a6,6,0,1,0,6-6,6.036,6.036,0,0,0-6,6" transform="translate(0 -34.522)" fill="url(#linear-gradient)"/>
    </clipPath>
    <clipPath id="clip-path-3">
      <path id="Trazado_114" data-name="Trazado 114" d="M21.127,3.867a.476.476,0,0,0-.12.021,9.9,9.9,0,0,0-4.341,2.854h0A1.251,1.251,0,0,1,14.88,4.992a.465.465,0,0,0-.022-.657h0a.467.467,0,0,0-.657.022,2.175,2.175,0,0,0,2.98,3.159.466.466,0,0,0,.131-.1l0,0h0a.447.447,0,0,0,.031-.033,8.965,8.965,0,0,1,3.948-2.6.465.465,0,0,0,.3-.586h0a.465.465,0,0,0-.442-.32h-.025M30.305,4a.465.465,0,0,0,.1.65h0A10.705,10.705,0,0,1,31.839,5.9a.465.465,0,0,0,.672-.643,11.653,11.653,0,0,0-1.555-1.36.467.467,0,0,0-.261-.088h-.015a.466.466,0,0,0-.375.19m-7.6-.5a.465.465,0,0,0,.128.922A8.967,8.967,0,0,1,28.822,5.69a.465.465,0,0,0,.641-.148h0a.466.466,0,0,0-.149-.641,9.9,9.9,0,0,0-4.884-1.494q-.175-.006-.351-.006a9.933,9.933,0,0,0-1.376.1m2.263-1.409a.465.465,0,0,0,.407.517h0a10.664,10.664,0,0,1,3.705,1.158.465.465,0,1,0,.434-.822h0a11.583,11.583,0,0,0-4.027-1.259.447.447,0,0,0-.054,0h0a.465.465,0,0,0-.462.41m-1.215-.418a11.639,11.639,0,0,0-8.08,3.61.465.465,0,0,0,.015.658h0a.465.465,0,0,0,.658-.016h0A10.708,10.708,0,0,1,23.782,2.6a.465.465,0,0,0,.451-.479h0a.465.465,0,0,0-.465-.451h-.014m6.087.142a.465.465,0,0,0,.186.631h0a12.455,12.455,0,0,1,3.213,2.5l.012.013a1.251,1.251,0,1,1-1.807,1.728l0,0-.009-.011a9.857,9.857,0,0,0-.729-.728.465.465,0,0,0-.623.691h0a9.093,9.093,0,0,1,.66.66l.013.016a2.179,2.179,0,1,0,3.193-2.967l-.025-.031a13.386,13.386,0,0,0-3.451-2.691.463.463,0,0,0-.217-.057h-.005a.465.465,0,0,0-.409.244M19,1A13.389,13.389,0,0,0,15.345,3.24a.465.465,0,0,0,.607.705,12.446,12.446,0,0,1,3.4-2.084.466.466,0,0,0,.254-.607h0a.465.465,0,0,0-.422-.29h-.006A.466.466,0,0,0,19,1m5.064-1q-.157,0-.314,0a13.4,13.4,0,0,0-3.129.45.466.466,0,0,0,.241.9h0a12.448,12.448,0,0,1,7.709.415.465.465,0,0,0,.6-.265h0a.465.465,0,0,0-.266-.6h0A13.389,13.389,0,0,0,24.8.018Q24.446,0,24.092,0Z" transform="translate(-13.615 0.001)" fill="url(#linear-gradient)"/>
    </clipPath>
    <clipPath id="clip-path-5">
      <rect id="Rectángulo_87" data-name="Rectángulo 87" width="26.543" height="13.497" fill="url(#linear-gradient)"/>
    </clipPath>
  </defs>
  <circle id="Elipse_3" data-name="Elipse 3" cx="19" cy="19" r="19" fill="#11395d"/>
  <g id="Grupo_166" data-name="Grupo 166" transform="translate(5.611 5.602)" clip-path="url(#clip-path)">
    <g id="Grupo_158" data-name="Grupo 158" transform="translate(0 7.395)">
      <g id="Grupo_157" data-name="Grupo 157" clip-path="url(#clip-path-2)">
        <rect id="Rectángulo_85" data-name="Rectángulo 85" width="28.427" height="32.986" transform="translate(-6.782 16.636) rotate(-67.82)" fill="url(#linear-gradient)"/>
      </g>
    </g>
    <g id="Grupo_160" data-name="Grupo 160" transform="translate(2.917 0)">
      <g id="Grupo_159" data-name="Grupo 159" clip-path="url(#clip-path-3)">
        <rect id="Rectángulo_86" data-name="Rectángulo 86" width="18.051" height="22.466" transform="matrix(0.518, -0.856, 0.856, 0.518, -3.862, 6.02)" fill="url(#linear-gradient)"/>
      </g>
    </g>
    <g id="Grupo_165" data-name="Grupo 165">
      <g id="Grupo_164" data-name="Grupo 164" clip-path="url(#clip-path)">
        <g id="Grupo_163" data-name="Grupo 163" transform="translate(0.097 13.299)" opacity="0.2">
          <g id="Grupo_162" data-name="Grupo 162">
            <g id="Grupo_161" data-name="Grupo 161" clip-path="url(#clip-path-5)">
              <path id="Trazado_115" data-name="Trazado 115" d="M22.672,65.861a8.97,8.97,0,0,1-17.885,0q-2.2.418-4.332,1.037A13.383,13.383,0,0,0,27,66.9q-2.124-.615-4.325-1.036" transform="translate(-0.455 -65.05)" fill="url(#linear-gradient)"/>
              <path id="Trazado_116" data-name="Trazado 116" d="M40.442,68.181a6.033,6.033,0,0,0,5.989-5.753q-2.179-.273-4.416-.348c0,.034.009.065.009.1a1.583,1.583,0,0,1-3.166,0c0-.034.007-.066.01-.1q-2.236.073-4.416.348a6.034,6.034,0,0,0,5.99,5.753" transform="translate(-27.169 -62.08)" fill="url(#linear-gradient)"/>
            </g>
          </g>
        </g>
      </g>
    </g>
  </g></g>`
            }
          };
          exports.ICONS = ICONS;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2165047059,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppButton = AppButton;
          exports.AppIcon = AppIcon;
          exports.AppIconButton = AppIconButton;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _form = require("pragmate-ui/form");
          var _icons2 = require("./icons");
          /*bundle*/
          function AppIcon({
            icon
          }) {
            icon = _icons2.ICONS.hasOwnProperty(icon) ? _icons2.ICONS[icon] : icon;
            return React.createElement(_icons.Icon, {
              icon: icon
            });
          }
          /*bundle*/
          function AppIconButton(props) {
            const attrs = {
              ...props
            };
            delete attrs.children;
            if (props.icon) {
              let {
                icon
              } = props;
              icon = _icons2.ICONS.hasOwnProperty(icon) ? _icons2.ICONS[icon] : icon;
              attrs.icon = icon;
            }
            return React.createElement(_icons.IconButton, {
              ...attrs
            });
          }
          /*bundle */
          function AppButton(props) {
            const attrs = {
              ...props
            };
            delete attrs.children;
            if (props.icon) {
              let {
                icon
              } = props;
              icon = _icons2.ICONS.hasOwnProperty(icon) ? _icons2.ICONS[icon] : icon;
              attrs.icon = icon;
            }
            return React.createElement(_form.Button, {
              ...attrs
            }, props.children);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./icons",
        "from": "ICONS",
        "name": "ICONS"
      }, {
        "im": "./index",
        "from": "AppIcon",
        "name": "AppIcon"
      }, {
        "im": "./index",
        "from": "AppIconButton",
        "name": "AppIconButton"
      }, {
        "im": "./index",
        "from": "AppButton",
        "name": "AppButton"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ICONS') && _export("ICONS", ICONS = require ? require('./icons').ICONS : value);
        (require || prop === 'AppIcon') && _export("AppIcon", AppIcon = require ? require('./index').AppIcon : value);
        (require || prop === 'AppIconButton') && _export("AppIconButton", AppIconButton = require ? require('./index').AppIconButton : value);
        (require || prop === 'AppButton') && _export("AppButton", AppButton = require ? require('./index').AppButton : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFPO1VBQWEsTUFBTUEsS0FBSyxHQUFHO1lBQ2pDLGVBQWUsRUFBRTtjQUNoQkMsT0FBTyxFQUFFLG9CQUFvQjtjQUM3QkMsSUFBSSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O2FBZ0JOO1lBQ0RDLElBQUksRUFBRTtjQUNMRixPQUFPLEVBQUUsbUJBQW1CO2NBQzVCQyxJQUFJLEVBQUU7Ozs7Ozs7OzthQVNOO1lBQ0QsV0FBVyxFQUFFO2NBQ1pELE9BQU8sRUFBRSxXQUFXO2NBQ3BCQyxJQUFJLEVBQUU7YUFDTjtZQUNELFlBQVksRUFBRTtjQUNiRCxPQUFPLEVBQUUsV0FBVztjQUNwQkMsSUFBSSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0FtRFA7VUFBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6RkY7VUFDQTtVQUNBO1VBQ0E7VUFDTztVQUFVLFNBQVVDLE9BQU8sQ0FBQztZQUFDSDtVQUFJLENBQUM7WUFDeENBLElBQUksR0FBR0YsYUFBSyxDQUFDTSxjQUFjLENBQUNKLElBQUksQ0FBQyxHQUFHRixhQUFLLENBQUNFLElBQUksQ0FBQyxHQUFHQSxJQUFJO1lBRXRELE9BQU9LLG9CQUFDQyxXQUFJO2NBQUNOLElBQUksRUFBRUE7WUFBSSxFQUFJO1VBQzVCO1VBRU87VUFBVSxTQUFVTyxhQUFhLENBQUNDLEtBQUs7WUFDN0MsTUFBTUMsS0FBSyxHQUFHO2NBQUMsR0FBR0Q7WUFBSyxDQUFDO1lBQ3hCLE9BQU9DLEtBQUssQ0FBQ0MsUUFBUTtZQUNyQixJQUFJRixLQUFLLENBQUNSLElBQUksRUFBRTtjQUNmLElBQUk7Z0JBQUNBO2NBQUksQ0FBQyxHQUFHUSxLQUFLO2NBQ2xCUixJQUFJLEdBQUdGLGFBQUssQ0FBQ00sY0FBYyxDQUFDSixJQUFJLENBQUMsR0FBR0YsYUFBSyxDQUFDRSxJQUFJLENBQUMsR0FBR0EsSUFBSTtjQUN0RFMsS0FBSyxDQUFDVCxJQUFJLEdBQUdBLElBQUk7O1lBR2xCLE9BQU9LLG9CQUFDTSxpQkFBVTtjQUFBLEdBQUtGO1lBQUssRUFBSTtVQUNqQztVQUVPO1VBQVcsU0FBVUcsU0FBUyxDQUFDSixLQUFLO1lBQzFDLE1BQU1DLEtBQUssR0FBRztjQUFDLEdBQUdEO1lBQUssQ0FBQztZQUN4QixPQUFPQyxLQUFLLENBQUNDLFFBQVE7WUFDckIsSUFBSUYsS0FBSyxDQUFDUixJQUFJLEVBQUU7Y0FDZixJQUFJO2dCQUFDQTtjQUFJLENBQUMsR0FBR1EsS0FBSztjQUNsQlIsSUFBSSxHQUFHRixhQUFLLENBQUNNLGNBQWMsQ0FBQ0osSUFBSSxDQUFDLEdBQUdGLGFBQUssQ0FBQ0UsSUFBSSxDQUFDLEdBQUdBLElBQUk7Y0FDdERTLEtBQUssQ0FBQ1QsSUFBSSxHQUFHQSxJQUFJOztZQUdsQixPQUFPSyxvQkFBQ1EsWUFBTTtjQUFBLEdBQUtKO1lBQUssR0FBR0QsS0FBSyxDQUFDRSxRQUFRLENBQVU7VUFDcEQiLCJuYW1lcyI6WyJJQ09OUyIsInZpZXdCb3giLCJpY29uIiwibG9nbyIsImV4cG9ydHMiLCJBcHBJY29uIiwiaGFzT3duUHJvcGVydHkiLCJSZWFjdCIsIkljb24iLCJBcHBJY29uQnV0dG9uIiwicHJvcHMiLCJhdHRycyIsImNoaWxkcmVuIiwiSWNvbkJ1dHRvbiIsIkFwcEJ1dHRvbiIsIkJ1dHRvbiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29kZS90cy9pY29ucy50cyIsImNvZGUvdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXX0=