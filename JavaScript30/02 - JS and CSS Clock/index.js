const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const timeDisplay = document.querySelector(".time");
const hands = document.querySelectorAll(".hand");
//event listners
//date?
//animation?
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minuteDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hoursDegrees = (minutes / 12) * 190;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  // timeDisplay.textContent = `${now.toLocaleTimeString()}`;

  if (seconds === 59) {
    hands.forEach((hand) => {
      hand.style.transition = "";
    });
  } else if (seconds != 59) {
    hands.forEach((hand) => {
      hand.style.transition = `all 0.05s;`;
    });
  }
}

setInterval(setDate, 1000);
