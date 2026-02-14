// Změna čísla verze vynutí aktualizaci u uživatelů
const CACHE_NAME = 'boom-doom-v2.0.0.3';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'img/icon-192.png',
  'img/icon-512.png',
  'https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.11.0/css/flag-icons.min.css'
];

// 1. Install Event - Cache Assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// 2. Fetch Event - Serve from Cache
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

// 3. Activate Event - Cleanup Old Caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// 4. Message Event - Listen for "SKIP_WAITING"
// Toto je ta nová část pro vyskakovací okno
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
