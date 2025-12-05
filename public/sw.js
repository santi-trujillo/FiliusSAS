/**
 * Service Worker para Filius Tec
 * Estrategia: Cache First con Network Fallback
 * @version 2.0.0
 */

const CACHE_NAME = "filius-v2.0.0";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/styles/main.css",
  "/scripts/main.js",
  "/assets/images/logos/FiliusB.png",
  "/FiliusIconN.png",
];

/**
 * Evento de instalación
 * Pre-cache de assets críticos
 */
self.addEventListener("install", (event) => {
  console.log("[ServiceWorker] Installing...");

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("[ServiceWorker] Caching app shell");
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

/**
 * Evento de activación
 * Limpieza de caches antiguos
 */
self.addEventListener("activate", (event) => {
  console.log("[ServiceWorker] Activating...");

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log("[ServiceWorker] Removing old cache:", cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

/**
 * Evento fetch
 * Estrategia Cache First con Network Fallback
 */
self.addEventListener("fetch", (event) => {
  // Solo cachear GET requests
  if (event.request.method !== "GET") {
    return;
  }

  // Ignorar requests a dominios externos (CDN, analytics, etc)
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Si está en cache, devolver desde cache
      if (cachedResponse) {
        return cachedResponse;
      }

      // Si no está en cache, hacer fetch y cachear
      return fetch(event.request)
        .then((response) => {
          // Solo cachear respuestas válidas
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response;
          }

          const responseToCache = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          // Si falla la red, devolver página offline (opcional)
          return caches.match("/index.html");
        });
    })
  );
});

/**
 * Mensaje para actualizar cache manualmente
 */
self.addEventListener("message", (event) => {
  if (event.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});
