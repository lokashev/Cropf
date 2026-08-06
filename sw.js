// ПОМЕНЯЙ ЦИФРУ ВЕРСИИ ЗДЕСЬ ПРИ КАЖДОМ ОБНОВЛЕНИИ (v2, v3, v4...)
const CACHE_NAME = 'frame-2-39-v13'; 
const urlsToCache = ['./', './index.html', './manifest.json'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
  self.skipWaiting(); // Принудительно активирует новый SW без ожидания закрытия вкладок
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            return caches.delete(name); // Удаляем старый кэш
          }
        })
      );
    })
  );
  self.clients.claim(); // Перехватываем управление страницей сразу
});

// Слушаем команду на мгновенное обновление от страницы
self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
