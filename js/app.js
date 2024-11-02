<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kalender und Cookie-Banner</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="calendar"></div>

  <!-- Cookie-Banner -->
  <div id="cookie-banner" class="cookie-banner cookie-hidden">
    <p>Diese Website verwendet Cookies, um das Nutzererlebnis zu verbessern. Möchten Sie Cookies akzeptieren?</p>
    <button id="accept-cookies" class="cookie-btn">Akzeptieren</button>
    <button id="decline-cookies" class="cookie-btn">Nicht akzeptieren</button>
  </div>

  <script>
    function loadCalendar() {
      const calendarUrl = "https://calendar.google.com/calendar/embed?src=your_calendar_id";
      document.getElementById('calendar').innerHTML = '<iframe src="' + calendarUrl + '" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>';
    }

    window.onload = loadCalendar;

    document.addEventListener('DOMContentLoaded', function() {
      const cookieBanner = document.getElementById('cookie-banner');
      const acceptCookiesBtn = document.getElementById('accept-cookies');
      const declineCookiesBtn = document.getElementById('decline-cookies');

      if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.classList.remove('cookie-hidden');
      }

      acceptCookiesBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'yes');
        cookieBanner.classList.add('cookie-hidden');
      });

      declineCookiesBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'no');
        cookieBanner.classList.add('cookie-hidden');
      });
    });
  </script>
</body>
</html>

// Funktion zum Abrufen der Wetterdaten
function fetchWeather() {
  const apiKey = "0b400104905183857022958dc4e8ad48"; // Dein OpenWeatherMap API-Schlüssel
  const city = "Heilbronn"; // Stadt kann nach Bedarf angepasst werden
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=de`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const iconCode = data.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

      document.getElementById("weather-info").innerHTML = `
        <img src="${iconUrl}" alt="${description}" />
        <span>${city}: ${temperature}°C, ${description}</span>
      `;
    })
    .catch(error => {
      console.error("Fehler beim Laden der Wetterdaten:", error);
      document.getElementById("weather-info").innerText = "Wetterdaten konnten nicht geladen werden.";
    });
}

// Wetterdaten abrufen, wenn das Dokument geladen ist
document.addEventListener("DOMContentLoaded", fetchWeather);
