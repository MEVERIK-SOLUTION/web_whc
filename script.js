// Načte zprávu ze serverless funkce Vercel/Netlify a zobrazí ji v elementu #message
// Timeout pro fetch požadavek
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 sekund timeout

fetch('/api/hello', { signal: controller.signal })
  .then((response) => {
    clearTimeout(timeoutId);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Validace odpovědi z API
    if (data && typeof data.message === 'string') {
      document.getElementById('message').innerText = data.message;
    } else {
      throw new Error('Neplatný formát odpovědi z API');
    }
  })
  .catch((error) => {
    console.error('Chyba při načítání zprávy:', error);
    const messageEl = document.getElementById('message');
    if (error.name === 'AbortError') {
      messageEl.innerText = 'Chyba: Vypršel časový limit požadavku.';
    } else {
      messageEl.innerText = `Chyba při načítání zprávy: ${error.message}`;
    }
    messageEl.style.color = '#d32f2f';
  });
