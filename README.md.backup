# Nasaditelný projekt pro Vercel a Netlify

Tento repozitář obsahuje jednoduchý statický web v češtině a serverless funkci, která vrací JSON. Projekt lze přímo nasadit na platformy [Vercel](https://vercel.com/) a [Netlify](https://www.netlify.com/).

## Struktura projektu

```
/ (kořen)
 ├── index.html         – základní HTML stránka
 ├── style.css          – jednoduché styly
 ├── script.js          – skript načítající data ze serverless funkce
 ├── api/
 │   └── hello.js       – serverless funkce s pozdravem
 ├── vercel.json        – konfigurace pro Vercel podle jejich dokumentace【17†L55-L80】
 ├── netlify.toml       – konfigurace pro Netlify, specifikuje, co publikovat【22†L13-L23】
 └── README.md          – tento popis
```

- `vercel.json` nastavuje, co Vercel dělá: `cleanUrls: true` odstraní přípony `.html` z URL a přesměruje například `/about.html` na `/about`【8†L80-L92】. Rewriter chceme, aby všechny neexistující cesty (například `/kontakt`) byly zpracovány main stránkou `index.html`, což je běžné pro single‑page aplikace【17†L55-L80】.
- `netlify.toml` definuje, že se publikuje kořenový adresář (všechny soubory jsou v jedné větvi) a není potřeba build krok. Přesměrování v tomto souboru umožní jednolistovou navigaci.

## Jak projekt nasadit

1. **Vercel**
   - Nainstalujte [Vercel CLI](https://vercel.com/docs/cli).
   - Z příkazové řádky se v kořenové složce tohoto projektu přihlaste pomocí `vercel login`.
   - Spusťte `vercel` a postupujte podle instrukcí. Vercel automaticky rozpozná složku `api` jako serverless funkce a použije `vercel.json` pro konfiguraci【19†L8-L12】.

2. **Netlify**
   - Přihlaste se na [netlify.com](https://www.netlify.com/).
   - Vytvořte nový projekt a místo build skriptu zvolte *None*, protože není potřeba. Jako `publish directory` vyberte kořen projektu.
   - Přetažením ZIP archivu nebo propojením přes Git se projekt nasadí. Netlify použije `netlify.toml` pro řízení publikace a přesměrování.

## Jak projekt vyzkoušet lokálně

Stačí spustit jednoduchý HTTP server například pomocí Pythonu:

```bash
python3 -m http.server 3000
```

Poté otevřete prohlížeč na `http://localhost:3000` a zobrazíte statický obsah. Při kliknutí na odkaz „Načítám pozdrav ze serverless funkce…“ se zobrazí odpověď z funkce.
