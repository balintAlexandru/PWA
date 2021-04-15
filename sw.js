self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["https://github.com/balintAlexandru/PWA/blob/main/index.html",
                                 "https://github.com/balintAlexandru/PWA/blob/main/script.js",
                                 "https://github.com/balintAlexandru/PWA/blob/main/style.css",
                                 "https://github.com/balintAlexandru/PWA/blob/main/style.js",
                                 "https://github.com/balintAlexandru/PWA/blob/main/logo.png",
                                 "https://github.com/balintAlexandru/PWA/blob/main/logo1.png",
                                 "https://github.com/balintAlexandru/PWA/blob/main/manifest.json"
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
