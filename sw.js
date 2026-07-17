/* Service worker — offline režim.
   Stratégia: network-first pre HTML/data.js (nech sú recepty čerstvé),
   stale-while-revalidate pre obrázky a ostatné (zobrazí sa cache,
   na pozadí sa stiahne nová verzia — zmenené fotky sa samy vymenia). */

const CACHE = "recepty-v3";
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
      : caches.match(e.request).then(rCache => {
          const zoSiete = fetch(e.request).then(r2 => {
            if (r2.ok || r2.type === "opaque") { const kopia = r2.clone(); caches.open(CACHE).then(c => c.put(e.request, kopia)); }
            return r2;
          }).catch(() => rCache);
          return rCache || zoSiete;   /* cache hneď, sieť obnoví na pozadí */
        })
  );
});
