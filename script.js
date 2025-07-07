const percentText = document.getElementById("percent");
const progressBar = document.getElementById("progress");
const audio = document.getElementById("loading-audio");

let percent = 0;
let interval;

function startLoading() {
  // Play loading audio
  audio.currentTime = 0;
  audio.play();

  // Adjust for 12 seconds total duration
  interval = setInterval(() => {
    percent++;
    percentText.textContent = `${percent}%`;
    progressBar.style.width = `${percent}%`;

    if (percent >= 100) {
      clearInterval(interval);

      // Stop audio
      audio.pause();
      audio.currentTime = 0;

      setTimeout(() => {
        percent = 0;
        percentText.textContent = "0%";
        progressBar.style.width = "0%";
        startLoading(); // Optional: remove if you want one-time load
      }, 2000);
    }
  }, 120); // 12 seconds total: 100 steps × 120ms = 12000ms
}

// Start loading on click
window.addEventListener("click", () => {
  if (interval) return;
  startLoading();
});
