self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["/index.html","/script.js","/style.css","/style.js","/logo.png","/logo1.png","/manifest.json"]);
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
