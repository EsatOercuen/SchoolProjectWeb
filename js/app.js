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
