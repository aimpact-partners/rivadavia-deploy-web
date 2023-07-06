System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, prompt, systemResumen, __beyond_pkg, hmr;
  _export({
    prompt: void 0,
    systemResumen: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
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
          "vspecifier": "@aimpact/ailearn-estrada@0.0.2/system-prompt"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3557908600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.systemResumen = exports.prompt = void 0;
          /*bundle*/
          const prompt = {
            definition: 'Eres Max, un docente',
            mission: 'Debes ayudar a tu alumno a aprender para su clase',
            restriction: 'Debes validar si existe alguna funcion que te suministre informacion adicional para responder.' + ' Responde solo a las preguntas relacionadas con la clase, si el alumno hace una pregunta fuera de contexto, pidele que se enfoque en la clase.'
          };
          exports.prompt = prompt;
          /*bundle*/
          const systemResumen = (system = 'main', user = 'Henry', knowledgeBox) => {
            const prompts = {
              main: `Eres un docente llamado Max, que está asistiendo a ${user} a desarrollar pensamiento crítico.\n ` + `Cualquier pregunta que haga ${user}, no respondas de manera directa, sino sólo a través de pistas que la hagan pensar o recordar. Por ejemplo, si consulta "qué es A?", puedes decirle algo como "recuerdas que A tiene vínculo con B?".\n ` + `Intenta enfocar a ${user} si sus preguntas no están en relación con el tema de estudio, y respóndele pidiendo que se enfoque.\n ` + `El tema de estudio es "Los primeros pobladores de América",  "La Hipótesis Clovis" de la asignatura "Historia de segundo año de secundaria".\n ` + `Características de ${user}:\n  1. Prefiere las respuestas a través de analogías.\n  2. Le gusta el deporte.\n  3. Vive en Buenos Aires (Argentina).`,
              knowledge: `
		Eres un docente llamado Max, que está asistiendo a ${user} a desarrollar pensamiento crítico. Ayuda a que ${user} entienda el siguiente artículo de actualidad, que lo vincule con su realidad actual y su impacto en el futuro, y que pueda sacar sus propias conclusiones.

		El artículo analiza el triunfo de Luiz Inácio Lula da Silva en las elecciones presidenciales de Brasil, marcando su regreso al poder después de dos décadas. Analiza la contienda electoral y las implicaciones de su victoria, que fue por un estrecho margen sobre el actual presidente Jair Bolsonaro. Se destacan varios puntos, como la eficacia del sistema de urnas electrónicas, la crítica a las encuestadoras por no prever un margen tan estrecho, y la necesidad de diálogo social y acciones urgentes en derechos humanos, medio ambiente y combate a la pobreza. También se enfatiza el impacto que tiene el retorno de un gobierno progresista a la escena política de Brasil y la importancia del reconocimiento del resultado por parte de Bolsonaro para evitar más tensiones y enfrentamientos.
		Características de ${user}:\n  1. Prefiere las respuestas a través de analogías.\n  2. Le gusta el deporte.\n  3. Vive en Buenos Aires (Argentina).
		`
            };
            return prompts[system];
          };
          exports.systemResumen = systemResumen;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "prompt",
        "name": "prompt"
      }, {
        "im": "./index",
        "from": "systemResumen",
        "name": "systemResumen"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'prompt') && _export("prompt", prompt = require ? require('./index').prompt : value);
        (require || prop === 'systemResumen') && _export("systemResumen", systemResumen = require ? require('./index').systemResumen : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBTztVQUFXLE1BQU1BLE1BQU0sR0FBRztZQUNoQ0MsVUFBVSxFQUFFLHNCQUFzQjtZQUNsQ0MsT0FBTyxFQUFFLG1EQUFtRDtZQUM1REMsV0FBVyxFQUNWLGdHQUFnRyxHQUNoRztXQUNEO1VBQUNDO1VBRUs7VUFBVyxNQUFNQyxhQUFhLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLE1BQU0sRUFBRUMsSUFBSSxHQUFHLE9BQU8sRUFBRUMsWUFBWSxLQUFJO1lBQ3pGLE1BQU1DLE9BQU8sR0FBRztjQUNmQyxJQUFJLEVBQ0gsc0RBQXNESCxJQUFJLHdDQUF3QyxHQUNsRywrQkFBK0JBLElBQUksME1BQTBNLEdBQzdPLHFCQUFxQkEsSUFBSSx5R0FBeUcsR0FDbEksaUpBQWlKLEdBQ2pKLHNCQUFzQkEsSUFBSSwySEFBMkg7Y0FDdEpJLFNBQVMsRUFBRTt1REFDMENKLElBQUksbURBQW1EQSxJQUFJOzs7dUJBRzNGQSxJQUFJOzthQUV6QjtZQUNELE9BQU9FLE9BQU8sQ0FBQ0gsTUFBTSxDQUFDO1VBQ3ZCLENBQUM7VUFBQ0YiLCJuYW1lcyI6WyJwcm9tcHQiLCJkZWZpbml0aW9uIiwibWlzc2lvbiIsInJlc3RyaWN0aW9uIiwiZXhwb3J0cyIsInN5c3RlbVJlc3VtZW4iLCJzeXN0ZW0iLCJ1c2VyIiwia25vd2xlZGdlQm94IiwicHJvbXB0cyIsIm1haW4iLCJrbm93bGVkZ2UiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19