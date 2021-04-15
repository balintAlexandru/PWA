self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["/PWA/index.html","/PWA/script.js","/PWA/style.css","/PWA/style.js","/PWA/logo.png","/PWA/logo1.png","/PWA/manifest.json"]);
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
