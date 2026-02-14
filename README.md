# Nasaditelný projekt pro Vercel a Netlify

Tento repozitář obsahuje jednoduchý statický web v češtině a serverless funkci, která vrací JSON. Projekt lze přímo nasadit na platformy [Vercel](https://vercel.com/) a [Netlify](https://www.netlify.com/).

## ⚠️ Nedávné opravy

Projekt byl nedávno aktualizován s následujícími kritickými opravami:
- ✅ Opravena neplatná JSON syntaxe v `vercel.json` (komentáře)
- ✅ Opraveno API routing v `vercel.json` a `netlify.toml`
- ✅ Přidány CORS hlavičky do serverless funkce
- ✅ Vylepšeno error handling a validace v JavaScriptu
- ✅ Přidána responzivnost a accessibility do CSS
- ✅ Vytvořen `.gitignore` soubor

📄 **Podrobný seznam všech oprav najdete v souboru [BUG_REPORT.md](BUG_REPORT.md)**

## Struktura projektu

```
/ (kořen)
 ├── index.html         – základní HTML stránka s sémantickými elementy
 ├── style.css          – responzivní styly s accessibility
 ├── script.js          – skript s error handling a timeoutem
 ├── api/
 │   └── hello.js       – serverless funkce s CORS hlavičkami
 ├── vercel.json        – konfigurace pro Vercel (opraveno)
 ├── netlify.toml       – konfigurace pro Netlify (opraveno)
 ├── .gitignore         – ignorované soubory pro git
 ├── BUG_REPORT.md      – detailní zpráva o chybách a opravách
 └── README.md          – tento popis
```

- `vercel.json` nastavuje, co Vercel dělá: `cleanUrls: true` odstraní přípony `.html` z URL. Rewrite pravidlo zajišťuje, že všechny cesty kromě `/api/*` jsou zpracovány `index.html`, což je běžné pro single‑page aplikace.
- `netlify.toml` definuje, že se publikuje kořenový adresář a není potřeba build krok. Přesměrování v tomto souboru umožní jednolistovou navigaci, ale zachovává API endpoints.

## Jak projekt nasadit

1. **Vercel**
   - Nainstalujte [Vercel CLI](https://vercel.com/docs/cli).
   - Z příkazové řádky se v kořenové složce tohoto projektu přihlaste pomocí `vercel login`.
   - Spusťte `vercel` a postupujte podle instrukcí. Vercel automaticky rozpozná složku `api` jako serverless funkce a použije `vercel.json` pro konfiguraci.

2. **Netlify**
   - Přihlaste se na [netlify.com](https://www.netlify.com/).
   - Vytvořte nový projekt a místo build skriptu zvolte *None*, protože není potřeba. Jako `publish directory` vyberte kořen projektu.
   - Přetažením ZIP archivu nebo propojením přes Git se projekt nasadí. Netlify použije `netlify.toml` pro řízení publikace a přesměrování.

## Jak projekt vyzkoušet lokálně

Stačí spustit jednoduchý HTTP server například pomocí Pythonu:

```bash
python3 -m http.server 3000
```

Poté otevřete prohlížeč na `http://localhost:3000` a zobrazíte statický obsah. 

**Poznámka:** Při lokálním testování nebude fungovat serverless funkce `/api/hello`, protože vyžaduje Vercel nebo Netlify runtime. Pro plné testování nasaďte na jednu z těchto platforem.

## Vylepšení v této verzi

### Bezpečnost a Stabilita
- ✅ CORS hlavičky pro cross-origin požadavky
- ✅ Validace API odpovědí před použitím
- ✅ Timeout handling pro síťové požadavky (10s)
- ✅ Try-catch bloky v serverless funkci

### Uživatelská zkušenost
- ✅ Responzivní design pro mobilní zařízení
- ✅ Vizuální feedback pro loading a error stavy
- ✅ Informativní chybové zprávy

### Accessibility
- ✅ Sémantické HTML elementy (`<main>`)
- ✅ Focus states pro klávesnicovou navigaci
- ✅ Správné labeling a struktura

### Deployment
- ✅ Platná JSON konfigurace pro Vercel
- ✅ Správné routing pro API endpoints
- ✅ .gitignore pro bezpečnost repozitáře
