#!/usr/bin/env python3
"""Stiahne náhľadové fotky (og:image) pre recepty s placeholder obrázkom.
Beží v GitHub Action (nie lokálne). Zoznam placeholderov: img/_placeholders.txt —
úspešne stiahnuté fotky sa zo zoznamu odstránia, placeholder sa prepíše.
"""
import json, re, subprocess, urllib.request, sys, os

UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"}

def recepty():
    js = open("data.js").read() + '\n;console.log(JSON.stringify(RECEPTY));'
    out = subprocess.run(["node", "-e", js], capture_output=True, text=True, check=True)
    return json.loads(out.stdout)

def og_image(url):
    req = urllib.request.Request(url, headers=UA)
    html = urllib.request.urlopen(req, timeout=20).read().decode("utf-8", "ignore")
    m = re.search(r'property="og:image"\s+content="([^"]+)"', html) or \
        re.search(r'content="([^"]+)"\s+property="og:image"', html)
    return m.group(1).replace("&amp;", "&") if m else None

def main():
    zoznam_subor = "img/_placeholders.txt"
    if not os.path.exists(zoznam_subor):
        print("ziadne placeholdery"); return
    zoznam = [r.strip() for r in open(zoznam_subor) if r.strip()]
    mapa = {r["id"]: r for r in recepty()}
    zostavaju = []
    for rid in zoznam:
        r = mapa.get(rid)
        url = (r or {}).get("video") or (r or {}).get("url") or ""
        if not r or "instagram.com" not in url:
            zostavaju.append(rid); print(f"preskocene (nie IG): {rid}"); continue
        try:
            img_url = og_image(url)
            if not img_url:
                raise RuntimeError("og:image nenajdene")
            data = urllib.request.urlopen(urllib.request.Request(img_url, headers=UA), timeout=30).read()
            if len(data) < 5000:
                raise RuntimeError("podozrivo mala fotka")
            open(f"img/{rid}.jpg", "wb").write(data)
            print(f"OK: {rid} ({len(data)//1024} kB)")
        except Exception as e:
            zostavaju.append(rid); print(f"CHYBA {rid}: {e}")
    open(zoznam_subor, "w").write("\n".join(zostavaju) + ("\n" if zostavaju else ""))
    print(f"hotovo, zostava placeholderov: {len(zostavaju)}")

if __name__ == "__main__":
    main()
