var timeRange = document.querySelector(".progress-slider");
var volumeRange = document.querySelector(".volume-slider");
var awakenAud = document.querySelector(".awaken");
var awakenPlay = document.querySelector(".awaken-card-control");
var awakenTimer = document.querySelector(".awaken-timer");

var LNDAud = document.querySelector(".LND");
var LNDPlay = document.querySelector(".LND-card-control");
var LNDTimer = document.querySelector(".LND-timer");

var curDuration = document.querySelector(".current-duration");
var totalDuration = document.querySelector(".total-duration");
var BGImg = document.querySelector(".bg-img");
var aud = LNDAud;
var band = document.querySelector(".band");
var pageTitle = document.querySelector(".page-title");
var controlsTitle = document.querySelector(".controls-title");
var volumeHigh = document.querySelector(".volume-high");
var volumeMute = document.querySelector(".volume-mute");

curDuration.textContent = formatTime(aud.currentTime);
console.log(aud.currentTime);
function playAwaken() {
  aud = awakenAud;
  aud.load();
}
function playLND() {
  aud = LNDAud;
  aud.load();
}
window.addEventListener("load", function () {
  timeRange.setAttribute("max", aud.duration);
  totalDuration.textContent = formatTime(aud.duration);
});
function changeRange() {
  timeRange.value = aud.currentTime;
  console.log(Number(Number(aud.currentTime)));
  curDuration.textContent = formatTime(aud.currentTime);
}
function changeTime() {
  aud.currentTime = timeRange.value;
}
function playAudio() {
  aud.play();
}
function pauseAudio() {
  aud.pause();
}
function stopAudio() {
  aud.load();
  aud.pause();
}
function muteAudio() {
  aud.muted = !aud.muted;
  if (aud.muted) {
    volumeRange.value = 0;
  } else {
    volumeRange.value = aud.volume;
  }
  volumeHigh.classList.toggle("hidden");
  volumeMute.classList.toggle("hidden");
}
function changeVol(volumeRange) {
  aud.volume = volumeRange.value;
}
function setTimer(audio) {
  curDuration.textContent = formatTime(audio.currentTime);
  totalDuration.textContent = formatTime(audio.duration);
  timeRange.setAttribute("max", audio.duration);
}
function playAwaken() {
  stopAudio();
  aud = awakenAud;
  playAudio();
  setTimer(aud);
  BGImg.setAttribute("src", "/Riven.png");
  pageTitle.textContent = "Awaken";
  band.textContent = "Valerie";
  controlsTitle.textContent = "Awaken";
  console.log(aud);
}
function playLND() {
  stopAudio();
  aud = LNDAud;
  playAudio();
  setTimer(aud);
  BGImg.setAttribute("src", "/Yasuo.png");
  pageTitle.textContent = "Legends Never Die";
  band.textContent = "Against the current";
  controlsTitle.textContent = "Legends Never Die";
  console.log(aud);
}
function formatTime(totalSeconds) {
  totalSeconds = Math.floor(totalSeconds);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

LNDTimer.textContent = formatTime(LNDAud.duration);
awakenTimer.textContent = formatTime(awakenAud.duration);
