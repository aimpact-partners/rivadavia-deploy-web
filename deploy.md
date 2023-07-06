# Para publicar la Web AIlearn Estrada

## URL de la aplicacion web

[https://cheerful-treacle-e0b3f4.netlify.app]

## Actualizar propiedades de urls cloud en la propiedad "params" del package.json

Hay 2 opciones

-   Actualizarlas en el `package.json`, previo a la compilacion

-   Actualizarlas en el archivo `config.js`, luego de la compilacion

```json
{
	"params": {
		"url": "https://southamerica-west1-aimpact-partners-dev.cloudfunctions.net/upload",
		"DOCUMENTS_SERVER": "https://southamerica-west1-aimpact-partners-dev.cloudfunctions.net",
		"CHAT_API_SERVER": "https://southamerica-west1-aimpact-partners-dev.cloudfunctions.net/chat-api-uploader"
	}
}
```

## En el codigo ya compilado, agregar el backend al paquete chat-api para que apunte a la url del AppEngine

Ruta del archivo desde la raiz de la compilacion: `/packages/@aimpact/chat-api@0.0.1/config.json`

`NOTA: esta url corresponde a la url del app engine`

En este mismo archivo, validar que la url del agente apunte a la cloud function en la propiedad `AGENTS_SERVER` dentro
de la propiedad `"params"`

```json
	"AGENTS_SERVER": "https://us-central1-aimpact-partners-dev.cloudfunctions.net/agent"

	"backend": {
		"host": "https://aimpact-partners-dev.ue.r.appspot.com/"
	}
}
```
