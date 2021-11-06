const CACHE_ELEMENTS = [
    "./",
    "https://unpkg.com/react@17/umd/react.production.min.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "./style.css",
    "./components/Contador.js"
]

const CACHE_NAME ="V1_cache_contador_react"

self.addEventListener("install", () => {
    e.waitUntil(
    );
});

self.addEventListener("activate", (e) => {
    const cacheWhilelist = [CACHE_NAME];

    e.waitUntil( 
        caches.keys().then((cacheNames) => {
            console.log(cacheNames);
        })
    );
});