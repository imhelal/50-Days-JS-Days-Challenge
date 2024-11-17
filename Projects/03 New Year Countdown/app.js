const year = document.getElementById("year");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const countDownContainer = document.getElementById("countdown");
const loadingImg = document.getElementById("loading");

const currentYear = new Date().getFullYear();
year.innerHTML = currentYear + 1;

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountDown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor((diff / 1000 / 60 / 60) % 24);
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = formateNumber(d);
  hours.innerHTML = formateNumber(h);
  minutes.innerHTML = formateNumber(m);
  seconds.innerHTML = formateNumber(s);
}

// formate number
function formateNumber(number) {
  return number < 10 ? "0" + number : number;
}

//updateCountDown();
setInterval(updateCountDown, 1000);

// Hide the animation
function hideAnimation() {
  loadingImg.remove();
  countDownContainer.style.display = "flex";
}
setTimeout(hideAnimation, 1000);
