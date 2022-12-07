let keyClicked = document.querySelectorAll(".key");
let audioSources = document.querySelectorAll("audio");

keyClicked.forEach((key) => {
  key.addEventListener("click", () => {
    let dataKey = key.getAttribute("data-key");
    key.classList.add("playing");
    findAudioSource(dataKey);
    key.addEventListener("transitionend", () => {
      key.classList.remove("playing");
    });
  });
});

let findAudioSource = (dataKey) => {
  let audioSource = document.querySelector(`audio[data-key="${dataKey}`);
  audioSource.currentTime = 0;
  audioSource.play();
};
