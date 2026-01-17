/**
 * Service Worker para Filius Tec
 * Estrategia: Stale-While-Revalidate para CSS/JS, Cache First para imágenes
 * @version 3.0.0
 */

const CACHE_NAME = "filius-v3.0.0";
const RUNTIME_CACHE = "filius-runtime";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/assets/images/logos/FiliusB.png",
  "/FiliusIconN.png",
];

/**
 * Evento de instalación
 * Pre-cache de assets críticos
 */
self.addEventListener("install", (event) => {
  const DEBUG = false; // Cambiar a true para debugging

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        if (DEBUG) console.log("[ServiceWorker] Caching app shell");
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => {
        return self.skipWaiting();
      }),
  );
});

/**
 * Evento de activación
 * Limpieza de caches antiguos
 */
self.addEventListener("activate", (event) => {
  const DEBUG = false;

  if (DEBUG) console.log("[ServiceWorker] Activating...");

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
              if (DEBUG)
                console.log("[ServiceWorker] Removing old cache:", cacheName);
              return caches.delete(cacheName);
            }
          }),
        );
      })
      .then(() => {
        return self.clients.claim();
      }),
  );
});

/**
 * Evento fetch
 * Estrategias optimizadas por tipo de recurso
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

  const { request } = event;
  const url = new URL(request.url);

  // Stale-While-Revalidate para CSS/JS (mostrar cache, actualizar en background)
  if (url.pathname.match(/\.(css|js)$/)) {
    event.respondWith(
      caches.open(RUNTIME_CACHE).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          const fetchPromise = fetch(request)
            .then((networkResponse) => {
              // Actualizar cache en background
              if (networkResponse && networkResponse.status === 200) {
                cache.put(request, networkResponse.clone());
              }
              return networkResponse;
            })
            .catch(() => cachedResponse); // Fallback a cache si falla la red

          // Retornar cache inmediatamente si existe, sino esperar network
          return cachedResponse || fetchPromise;
        });
      }),
    );
    return;
  }

  // Cache First para imágenes y fuentes (máximo rendimiento)
  if (url.pathname.match(/\.(png|jpg|jpeg|svg|gif|webp|woff2|woff|ttf)$/)) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request).then((response) => {
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return response;
        });
      }),
    );
    return;
  }

  // Network First para HTML (siempre fresco)
  if (url.pathname.match(/\.html$/) || url.pathname === "/") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => {
          return caches.match("/index.html");
        }),
    );
    return;
  }
});

/**
 * Mensaje para actualizar cache manualmente
 */
self.addEventListener("message", (event) => {
  if (event.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});
