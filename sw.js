// Service worker mínimo: no cachea nada, solo permite que el navegador
// considere el sitio "instalable" en el celular.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
