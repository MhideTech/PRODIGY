const display = document.querySelector("#display");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector("#reset");
const lapBtn = document.querySelector("#lap");
const lapsList = document.querySelector("#laps");

let startTime;
let timerInterval;
let pausedTime = 0;
let start;

function startTimer() {
  startTime = Date.now() - pausedTime;
  timerInterval = setInterval(updateDisplay, 10);
}

function pauseTimer() {
  clearInterval(timerInterval);
  pausedTime = Date.now() - startTime;
}

function resetTimer() {
  clearInterval(timerInterval);
  display.textContent = "00 : 00 : 00";
  lapsList.innerHTML = "";
}

function updateDisplay() {
  const elapsedTime = Date.now() - startTime;
  const formattedTime = formatTime(elapsedTime);
  console.log(formattedTime.split(":"));
  display.textContent = formattedTime;
}

function formatTime(time) {
  const totalSeconds = Math.floor(time / 1000);
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  const milliseconds = Math.floor((time % 1000) / 10)
    .toString()
    .padStart(2, "0");
  return `${minutes} : ${seconds} : ${milliseconds}`;
}

function lap() {
  const lapTime = display.textContent;
  const lapItem = document.createElement("li");
  lapItem.textContent = `🕧 ${lapTime}`;
  lapsList.appendChild(lapItem);
}

resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", lap);

startBtn.addEventListener("click", function () {
  start = !start;

  if (start) {
    startTimer();
    startBtn.classList.remove("fa-circle-play");
    startBtn.classList.add("fa-circle-pause");
  } else {
    pauseTimer();
    startBtn.classList.remove("fa-circle-pause");
    startBtn.classList.add("fa-circle-play");
  }
});
