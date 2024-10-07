function loadCalendar() {
  // Hier bindest du den Google Calendar ein, wenn du die Google Calendar API nutzt.
  // Du kannst die src-URL durch die ID deines Google Kalenders ersetzen.
  const calendarUrl = "https://calendar.google.com/calendar/embed?src=your_calendar_id";

  // Hier wird das Kalender-Widget in das HTML-Element mit der ID 'calendar' eingefügt.
  document.getElementById('calendar').innerHTML = '<iframe src="' + calendarUrl + '" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>';
}

// Lade den Kalender, wenn die Seite geladen wird
window.onload = loadCalendar;
