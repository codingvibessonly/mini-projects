function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();

  let h = now.getHours();
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');

  const ampm = h >= 12 ? 'PM' : 'AM';

  h = h % 12;
  h = h ? h : 12; // if hour is 0, show 12

  const hour = String(h).padStart(2, '0');
  clock.textContent = `${hour}:${m}:${s} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();
