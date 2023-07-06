System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@aimpact/ailearn-estrada",
        "version": "0.0.2",
        "languages": {
          "default": "en",
          "supported": ["en", "es"]
        },
        "global.css": true,
        "layout": "default-layout",
        "params": {
          "container": "file",
          "project": "ailearn-estrada",
          "url": "https://southamerica-west1-aimpact-partners-dev.cloudfunctions.net/upload",
		  "DOCUMENTS_SERVER": "https://southamerica-west1-aimpact-partners-dev.cloudfunctions.net",
		  "CHAT_API_SERVER": "https://southamerica-west1-aimpact-partners-dev.cloudfunctions.net/chat-api-uploader",
          "elevenlabs": {
            "key": "ebe05ca0a4d9aafb4024d0666471a0c7",
            "id": "pNInz6obpgDQGcFmaJgB"
          }
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});