// Ярлык CRM «СК БАРАКАТ»: нужен браузеру, чтобы предложить «Установить приложение». Ничего не хранит.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
