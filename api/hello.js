// Tato serverless funkce vrací jednoduchý JSON objekt se zprávou.
// Funkce je rozpoznána automaticky umístěním souboru do podadresáře "api" podle Vercel dokumentace
export default function handler(req, res) {
  // Nastavení CORS hlaviček pro cross-origin požadavky
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Content-Type', 'application/json');
  
  // Obsluha OPTIONS požadavků (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  try {
    res.status(200).json({ message: 'Ahoj ze serverless funkce!' });
  } catch (error) {
    res.status(500).json({ error: 'Chyba při zpracování požadavku' });
  }
}
