const CACHE = 'cache-only-v1';

// При установке воркера мы должны закешировать часть данных (статику).
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            return cache.addAll([
                '/images/',
				'/images/icons/cloud-saved.svg',
				'/images/icons/download.svg',
				'/images/icons/moon.svg',
				'/images/icons/moon-dark.svg',
				'/scripts/',
				'/scripts/index.js',
				'/scripts/vue.min.js',
				'/scripts/tippy.all.min.js',
				'/styles/',
				'/styles/index.css',
				'index.html'
            ]);
        })
    );
});

// При запросе на сервер (событие fetch), используем только данные из кэша.
self.addEventListener('fetch', (event) => {
	event.respondWith(fromCache(event.request));
});

function fromCache(request) {
    return caches.open(CACHE).then((cache) =>
      cache.match(request)
          .then((matching) => matching || Promise.reject('no-match'))
    );
}