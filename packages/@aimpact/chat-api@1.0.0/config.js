System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@aimpact/chat-api",
        "version": "1.0.0",
        "languages": {
          "default": "en",
          "supported": ["en", "es"]
        },
        "global.css": true,
        "params": {
          "AGENTS_SERVER": "https://us-central1-aimpact-partners-dev.cloudfunctions.net/agent"
        },
        "ssr": {},
        "backend": {
			"host": "https://aimpact-partners-dev.ue.r.appspot.com/"
		}
      });
    }
  };
});