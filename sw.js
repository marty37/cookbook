/* Service worker — offline režim.
   Stratégia: network-first pre HTML/data.js (nech sú recepty čerstvé),
   cache-first pre obrázky a ostatné. Všetko navštívené sa ukladá do cache. */

const CACHE = "recepty-v2";
const CORE = ["index.html", "data.js", "manifest.json"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const svieze = e.request.destination === "document" || e.request.url.endsWith("data.js");

  e.respondWith(
    svieze
      ? fetch(e.request, { cache: "no-store" })   /* obíď HTTP cache — vždy čerstvé zo servera */
          .then(r => { const kopia = r.clone(); caches.open(CACHE).then(c => c.put(e.request, kopia)); return r; })
          .catch(() => caches.match(e.request).then(r => r || caches.match("index.html")))
      : caches.match(e.request).then(r => r || fetch(e.request).then(r2 => {
          if (r2.ok || r2.type === "opaque") { const kopia = r2.clone(); caches.open(CACHE).then(c => c.put(e.request, kopia)); }
          return r2;
        }))
  );
});
