// Tato serverless funkce vrací jednoduchý JSON objekt se zprávou.
// Funkce je rozpoznána automaticky umístěním souboru do podadresáře "api" podle Vercel dokumentace【8†L80-L92】
export default function handler(req, res) {
  res.status(200).json({ message: 'Ahoj ze serverless funkce!' });
}
