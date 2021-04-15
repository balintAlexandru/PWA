self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["https://balintalexandru.github.io/PWA/index.html",
                                 "https://balintalexandru.github.io/PWA/script.js",
                                 "https://balintalexandru.github.io/PWA/style.css",
                                 "https://balintalexandru.github.io/PWA/style.js",
                                 "https://balintalexandru.github.io/PWA/logo.png",
                                 "https://balintalexandru.github.io/PWA/logo1.png",
                                 "https://balintalexandru.github.io/PWA/manifest.json"
                                ])
        })
    );
});


self.addEventListener("fetch", e=>{
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    )
});
