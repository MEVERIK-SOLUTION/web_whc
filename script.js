// Načte zprávu ze serverless funkce Vercel/Netlify a zobrazí ji v elementu #message
fetch('/api/hello')
  .then((response) => response.json())
  .then((data) => {
    document.getElementById('message').innerText = data.message;
  })
  .catch((error) => {
    console.error('Chyba při načítání zprávy:', error);
    document.getElementById('message').innerText = 'Chyba při načítání zprávy.';
  });
