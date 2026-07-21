#!/usr/bin/env python3
"""Stiahne fotky receptov z Instagramu na TVOJOM počítači (z domácej IP to funguje).
Spustenie:  python3 stiahni_fotky_lokalne.py
Sťahuje LEN chýbajúce fotky — podľa zoznamu img/_placeholders.txt (ak existuje)
a preskočí aj to, čo už je stiahnuté v priečinku fotky_receptov.
Nové fotky nahraj do repa do priečinka img/ (prepíšu placeholdery).
"""
import re, os, urllib.request

RECEPTY = [
    ("pomazanka-z-mozzarelly", "https://www.instagram.com/reel/Damu7AcsDSZ/"),
    ("bezlepkove-kysnute-kolace", "https://www.instagram.com/reel/DXy8eFLtsUL/"),
    ("livanecky-z-cottage", "https://www.instagram.com/reel/DZRjft2MVcg/"),
    ("pecene-donuty", "https://www.instagram.com/reel/Cq-2kKaujgV/"),
    ("mrkva-orzo-kokos", "https://www.instagram.com/reel/C74VmxIMXlk/"),
    ("obalovany-karfiol-vo-vrecku", "https://www.instagram.com/reel/CddLM8olg3j/"),
    ("cestovinove-tacos", "https://www.instagram.com/reel/DAXrTUGOEMF/"),
    ("kuracie-kung-pao", "https://www.instagram.com/reel/DC9FZgIs-2y/"),
    ("butter-chicken", "https://www.instagram.com/reel/DEfo5c4gBXk/"),
    ("dukatove-buchticky", "https://www.instagram.com/reel/C4GIDNjq_GY/"),
    ("buchty-z-cottage", "https://www.instagram.com/reel/C2w7e9wqe0b/"),
    ("ovocne-knedle", "https://www.instagram.com/reel/DKsJRqlMK7S/"),
    ("zapeceny-chlieb-cottage", "https://www.instagram.com/reel/DOnU5YlDWfY/"),
    ("brokolicova-polievka", "https://www.instagram.com/reel/DGH-EgdMMSd/"),
    ("zeleninove-rezance-kokos", "https://www.instagram.com/reel/DRuzoZVDHNY/"),
    ("syrovo-cesnakovy-snack", "https://www.instagram.com/reel/DZArPERADb0/"),
    ("cottage-kosicky-cokolada", "https://www.instagram.com/reel/DZDFYAIMELo/"),
    ("mini-pizza-cottage", "https://www.instagram.com/reel/DKzpJJhqEAK/"),
    ("cizrnove-cookies", "https://www.instagram.com/reel/DXLgxmNCP3I/"),
    ("jahodova-cottage-pena", "https://www.instagram.com/reel/DYY2CPGMPGO/"),
    ("chia-krekry", "https://www.instagram.com/reel/DWGZj18NVqO/"),
    ("cottage-palacinka-na-plech", "https://www.instagram.com/reel/DXcKtvvjDq6/"),
    ("cesnekove-placky", "https://www.instagram.com/reel/DT47H85DEgQ/"),
    ("misa-dortiky", "https://www.instagram.com/reel/DNyLQQU2PRs/"),
    ("kesu-gulicky-maliny", "https://www.instagram.com/reel/C9-ZO2JMSxA/"),
    ("parene-buchty", "https://www.instagram.com/reel/DUONc0qDBC5/"),
    ("pecene-karbonatky", "https://www.instagram.com/reel/DFMyBGlNbpv/"),
    ("vlacny-pernik", "https://www.instagram.com/reel/DYRXSD8qnnF/"),
]

UAS = [
    {"User-Agent": "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)"},
    {"User-Agent": "Twitterbot/1.0"},
    {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"},
]
UA = UAS[2]
CIEL = os.path.join(os.path.dirname(os.path.abspath(__file__)), "fotky_receptov")
os.makedirs(CIEL, exist_ok=True)

# stahuj len to, co este chyba
_placeholders = os.path.join(os.path.dirname(os.path.abspath(__file__)), "img", "_placeholders.txt")
if os.path.exists(_placeholders):
    chybajuce = {r.strip() for r in open(_placeholders) if r.strip()}
    RECEPTY = [(rid, url) for rid, url in RECEPTY if rid in chybajuce]
RECEPTY = [(rid, url) for rid, url in RECEPTY
           if not os.path.exists(os.path.join(CIEL, rid + ".jpg"))]
if not RECEPTY:
    print("Vsetky fotky uz su stiahnute — nie je co robit.")
    raise SystemExit

def najdi_og(url):
    for ua in UAS:
        try:
            html = urllib.request.urlopen(urllib.request.Request(url, headers=ua), timeout=20).read().decode("utf-8", "ignore")
        except Exception:
            continue
        m = re.search(r'property=["\']og:image["\']\s+content=["\']([^"\']+)["\']', html) or \
            re.search(r'content=["\']([^"\']+)["\']\s+property=["\']og:image["\']', html)
        if m:
            return m.group(1).replace("&amp;", "&")
    return None

ok, zle = 0, []
for rid, url in RECEPTY:
    try:
        img_url = najdi_og(url)
        if not img_url:
            raise RuntimeError("og:image nenajdene (mozno obmedzeny ucet)")
        data = urllib.request.urlopen(urllib.request.Request(img_url, headers=UA), timeout=30).read()
        if len(data) < 5000:
            raise RuntimeError("podozrivo mala fotka")
        open(os.path.join(CIEL, rid + ".jpg"), "wb").write(data)
        ok += 1
        print(f"OK: {rid} ({len(data)//1024} kB)")
    except Exception as e:
        zle.append(rid)
        print(f"CHYBA {rid}: {e}")

print(f"\nHotovo: {ok} fotiek v priecinku: {CIEL}")
if zle:
    print("Nepodarilo sa:", ", ".join(zle))
    print("Tieto ostanu s placeholderom — mozes ich nahradit vlastnym screenshotom.")
