#!/usr/bin/env python3
"""Generátor detailných stránok receptov.
Použitie: python3 generator.py davka.json
 - vygeneruje <id>.html pre každý recept
 - vygeneruje placeholder obrázok img/<id>.jpg, ak obrázok neexistuje
 - vloží záznamy na začiatok poľa RECEPTY v data.js (ak tam ID ešte nie je)
Vstupný JSON: pole objektov, polia navyše oproti data.js:
  emoji, lead, fakty:[["⏱️ Celkovo","~25 min"],...], kroky:[...], tipy:[...],
  metaAutor ("Instagram · @autor"), zdrojText (text riadku Zdroj)
"""
import json, sys, os, html, re

BASE_URL = "https://marty37.github.io/cookbook/"   # pre absolútne og:image (Signal/WhatsApp náhľady)

SABLONA = """<!DOCTYPE html>
<html lang="sk">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<meta name="theme-color" content="#c05621">
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'unsafe-inline'; img-src 'self' https: data:; connect-src 'self'; manifest-src 'self'; base-uri 'none'; form-action 'none'; object-src 'none'">
<meta property="og:type" content="article">
<meta property="og:title" content="{emoji} {nazov}">
<meta property="og:description" content="{ogpopis}">
<meta property="og:image" content="{ogobrazok}">
<link rel="manifest" href="manifest.json">
<link rel="icon" type="image/png" href="img/icon-192.png">
<title>{nazov}</title>
<style>
  :root{{--bg:#faf7f2;--card:#fff;--ink:#2d2a26;--muted:#6f695e;--accent:#c05621;--chip:#f0e9df;}}
  *{{box-sizing:border-box;margin:0;padding:0}}
  body{{font-family:Georgia,'Times New Roman',serif;background:var(--bg);color:var(--ink);line-height:1.65}}
  .wrap{{max-width:720px;margin:0 auto;padding:32px 24px 64px}}
  .back{{font-family:system-ui,sans-serif;font-size:.85rem;color:var(--accent);text-decoration:none}}
  h1{{font-size:2rem;font-weight:500;margin:16px 0 10px;line-height:1.25}}
  .meta{{font-family:system-ui,sans-serif;font-size:.8rem;color:var(--muted);display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-bottom:6px}}
  .tags{{display:flex;gap:6px;flex-wrap:wrap;margin:10px 0 20px}}
  .tag{{font-family:system-ui,sans-serif;font-size:.72rem;padding:4px 11px;border-radius:999px;background:var(--chip);color:#6b6357}}
  .hero{{width:100%;border-radius:14px;margin:6px 0 22px;max-height:420px;object-fit:cover}}
  .lead{{font-style:italic;color:#5a5347;margin-bottom:26px}}
  .facts{{font-family:system-ui,sans-serif;font-size:.85rem;background:var(--card);border-radius:12px;padding:14px 18px;display:flex;gap:24px;flex-wrap:wrap;margin-bottom:30px;box-shadow:0 1px 3px rgba(0,0,0,.06)}}
  h2{{font-size:1.15rem;font-weight:600;margin:28px 0 12px;padding-bottom:6px;border-bottom:2px solid var(--chip)}}
  ul.ing{{list-style:none}}
  ul.ing li{{padding:9px 0;border-bottom:1px dashed #e5ddd0;display:flex;gap:10px;align-items:baseline}}
  ul.ing li label{{display:flex;gap:10px;align-items:baseline;cursor:pointer;width:100%}}
  ul.ing input{{accent-color:var(--accent);transform:translateY(2px)}}
  ol.steps{{counter-reset:s;list-style:none}}
  ol.steps li{{counter-increment:s;position:relative;padding:0 0 18px 46px}}
  ol.steps li::before{{content:counter(s);position:absolute;left:0;top:0;width:30px;height:30px;border-radius:50%;background:var(--accent);color:#fff;font-family:system-ui,sans-serif;font-size:.85rem;display:flex;align-items:center;justify-content:center}}
  .tip{{background:#fdf3e7;border-left:4px solid var(--accent);border-radius:0 10px 10px 0;padding:12px 16px;margin:14px 0;font-size:.95rem}}
  .source{{margin-top:36px;font-family:system-ui,sans-serif;font-size:.82rem;color:var(--muted)}}
  .source a{{color:var(--accent)}}
  .actions{{display:flex;gap:8px;flex-wrap:wrap;margin:22px 0 4px}}
  .abtn{{font-family:system-ui,sans-serif;font-size:.83rem;padding:9px 16px;border-radius:999px;border:1px solid #ddd4c8;background:#fff;cursor:pointer;color:var(--ink);text-decoration:none;display:inline-block}}
  .abtn:hover{{border-color:var(--accent)}}
  @media (prefers-color-scheme: dark){{
    :root{{--bg:#1f1c18;--card:#2b2723;--ink:#ece7df;--muted:#a59d90;--chip:#3a352e;}}
    .tag{{color:#c9c1b2}}
    .lead{{color:#b8b0a2}}
    .tip{{background:#38301f}}
    .abtn{{background:var(--card);border-color:#4a443c;color:var(--ink)}}
    ul.ing li{{border-color:#4a443c}}
    .facts{{box-shadow:none;border:1px solid #3a352e}}
  }}
  body.kuchyna ol.steps li{{font-size:1.2rem;line-height:1.75;padding-bottom:24px}}
  body.kuchyna ul.ing{{font-size:1.15rem}}
  .abtn.on{{background:var(--accent);border-color:var(--accent);color:#fff}}
  @media print{{.back,.actions{{display:none}}body{{background:#fff}}.hero{{max-height:240px}}.facts{{box-shadow:none;border:1px solid #eee}}}}
</style>
</head>
<body>
<div class="wrap">
  <a class="back" href="index.html">← všetky recepty</a>
  <h1>{emoji} {nazov}</h1>
  <div class="meta"><span>{metaAutor}</span><span>·</span><span>pridané zo Signalu {datum}</span></div>
  <div class="tags">{tagy}</div>

  <img class="hero" src="{obrazok}" alt="{nazov}">

  <p class="lead">{lead}</p>

  <div class="facts">{fakty}</div>

  <h2>Suroviny</h2>
  <ul class="ing">
{suroviny}
  </ul>

  <h2>Postup</h2>
  <ol class="steps">
{kroky}
  </ol>

{tipy}
  <div class="actions">
    <button class="abtn" id="copyIng">📋 Kopírovať suroviny (pre Rohlík)</button>
    <button class="abtn" id="kuchyna">🍳 Kuchynský režim</button>
{videobtn}    <button class="abtn" id="share">🔗 Zdieľať</button>
    <button class="abtn" onclick="window.print()">🖨️ Vytlačiť</button>
  </div>

  <p class="source">Zdroj: {zdrojText}</p>
</div>
<script>
document.getElementById("copyIng").onclick=e=>{{
  e.target.style.minWidth=e.target.offsetWidth+"px";
  const t="Nákupný zoznam ("+document.querySelector("h1").textContent.trim()+"):\\n"+
    [...document.querySelectorAll("ul.ing li span")].map(s=>"- "+s.textContent.trim()).join("\\n");
  navigator.clipboard.writeText(t).then(()=>{{e.target.textContent="✓ Skopírované";
    setTimeout(()=>e.target.textContent="📋 Kopírovať suroviny (pre Rohlík)",1800);}});
}};
document.getElementById("share").onclick=e=>{{
  e.target.style.minWidth=e.target.offsetWidth+"px";
  const d={{title:document.title,url:location.href}};
  if(navigator.share){{navigator.share(d).catch(()=>{{}});}}
  else navigator.clipboard.writeText(d.url).then(()=>{{e.target.textContent="✓ Link skopírovaný";
    setTimeout(()=>e.target.textContent="🔗 Zdieľať",1800);}});
}};
const kb=document.getElementById("kuchyna");let wakeLock=null,kuchynaZap=false;
async function wlReq(){{try{{wakeLock=await navigator.wakeLock.request("screen");}}catch(e){{}}}}
kb.onclick=()=>{{kuchynaZap=!kuchynaZap;
  kb.style.minWidth=kb.offsetWidth+"px";
  const yK=kb.getBoundingClientRect().top;
  document.body.classList.toggle("kuchyna",kuchynaZap);
  kb.classList.toggle("on",kuchynaZap);
  kb.textContent=kuchynaZap?"✓ Kuchynský režim":"🍳 Kuchynský režim";
  window.scrollBy(0,kb.getBoundingClientRect().top-yK);
  if(kuchynaZap)wlReq();else if(wakeLock){{wakeLock.release();wakeLock=null;}}}};
document.addEventListener("visibilitychange",()=>{{if(kuchynaZap&&document.visibilityState==="visible")wlReq();}});
if("serviceWorker" in navigator)navigator.serviceWorker.register("sw.js").catch(()=>{{}});
</script>
</body>
</html>
"""

FARBY = {  # placeholder pozadie podľa chodu
  "raňajky/desiata":"#d9a441","polievka":"#b5651d","hlavné jedlo":"#c05621",
  "príloha":"#a8894f","šalát":"#7a8c4f","nátierka":"#c98a2e","pečivo":"#b07d4f",
  "dezert/sladké":"#8c5a3c","chuťovka":"#a06235","omáčka/základ":"#96593b"
}

def placeholder(r):
    cesta = f"img/{r['id']}.jpg"
    if os.path.exists(cesta): return
    from PIL import Image, ImageDraw, ImageFont
    im = Image.new("RGB",(800,500),FARBY.get(r["chod"],"#c05621"))
    d = ImageDraw.Draw(im)
    d.ellipse([250,100,550,400],fill="#faf7f2")
    try:
        f = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf",160)
    except Exception:
        f = ImageFont.load_default()
    pismeno = r["nazov"][0].upper()
    bb = d.textbbox((0,0),pismeno,font=f)
    d.text((400-(bb[2]-bb[0])/2-bb[0], 250-(bb[3]-bb[1])/2-bb[1]), pismeno,
           fill=FARBY.get(r["chod"],"#c05621"), font=f)
    im.save(cesta, quality=85)

def fmt_datum(d):
    y,m,dd = d.split("-"); return f"{int(dd)}. {int(m)}. {y}"

def stranka(r):
    e = html.escape
    tagy = "".join(f'<span class="tag">{e(t)}</span>' for t in [r["chod"], *r["dieta"], *r["prakticke"]])
    fakty = "".join(f"<span>{f[0].split(' ')[0]} <strong>{e(' '.join(f[0].split(' ')[1:]))}:</strong> {e(f[1])}</span>" for f in r["fakty"])
    sur = "\n".join(f'    <li><label><input type="checkbox"><span>{e(s["t"])}</span></label></li>' for s in r["suroviny"])
    kroky = "\n".join(f"    <li>{e(k)}</li>" for k in r["kroky"])
    tipy = "".join(f'  <div class="tip">💡 {e(t)}</div>\n' for t in r.get("tipy",[]))
    video = f'    <a class="abtn" href="{e(r["video"])}" target="_blank" rel="noopener">▶️ Pozrieť video</a>\n' if r.get("video") else ""
    if r.get("url"):
        zdroj = f'<a href="{e(r["url"])}" target="_blank" rel="noopener">{e(r["zdrojText"])}</a>'
    else:
        zdroj = e(r["zdrojText"])
    ogobrazok = r["obrazok"] if r["obrazok"].startswith("http") else BASE_URL + r["obrazok"]
    return SABLONA.format(
        emoji=r["emoji"], nazov=e(r["nazov"]), ogpopis=e(r["lead"][:180]), obrazok=e(r["obrazok"]),
        ogobrazok=e(ogobrazok),
        metaAutor=e(r["metaAutor"]), datum=fmt_datum(r["pridane"]), tagy=tagy, lead=e(r["lead"]),
        fakty=fakty, suroviny=sur, kroky=kroky, tipy=tipy, videobtn=video, zdrojText=zdroj)

def zaznam_js(r):
    poliaData = {k: r[k] for k in ["id","nazov","chod","dieta","surovina","prakticke","stav","cas",
                                   "porcie","suroviny","obrazok","zdroj","url","pridane","hladanie"]}
    if r.get("video"): poliaData["video"] = r["video"]
    return "  " + json.dumps(poliaData, ensure_ascii=False, indent=2).replace("\n","\n  ")

def main():
    davka = json.load(open(sys.argv[1]))
    datajs = open("data.js").read()
    nove = []
    for r in davka:
        if f'"{r["id"]}"' in datajs or f"\"{r['id']}\"" in datajs:
            print(f"preskakujem (duplicita): {r['id']}"); continue
        placeholder(r)
        open(f"{r['id']}.html","w").write(stranka(r))
        nove.append(r)
        print(f"OK: {r['id']}.html")
    if nove:
        vlozka = ",\n".join(zaznam_js(r) for r in nove) + ",\n"
        datajs = datajs.replace("const RECEPTY = [\n", "const RECEPTY = [\n" + vlozka, 1)
        open("data.js","w").write(datajs)
        print(f"data.js: +{len(nove)} receptov")

if __name__ == "__main__":
    main()
