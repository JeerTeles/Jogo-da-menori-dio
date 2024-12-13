const emojis = [
    "🐱",
    "🐱",
    "🦝",
    "🦝",
    "🦊",
    "🦊",
    "🐶",
    "🐶",
    "🐵",
    "🐵",
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🐮",
    "🐮",
];

let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shuffleEmojis[i];
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}

function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
  
  console.log(openCards);
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
    playSound("correct")
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
    playSoundOver("fail");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    playSoundVictory("victory")
    alert("Você venceu !");
  }
}

function playSoundOver(audiomane) {
  let audio = new Audio(`./audios/${audiomane}.mp3`);
  audio.volume = 0.2;
  audio.play();
}

function playSound(audiomane) {
  let audio = new Audio(`./audios/${audiomane}.mp3`);
  audio.volume = 0.2;
  audio.play();
}

function playSoundVictory(audiomane) {
  let audio = new Audio(`./audios/${audiomane}.mp3`);
  audio.volume = 0.2;
  audio.play();
}