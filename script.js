const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const question = document.getElementById("question");
const placeholder = document.querySelector(".no-placeholder");
const catImage = document.getElementById("catImage");
const backBtn = document.getElementById("backBtn");
const yesCat = document.getElementById("yesCat");
const yesBackBtn = document.getElementById("yesBackBtn");

const noTexts = [
  "Are you sure? 😅",
  "Really sure?? 🥺",
  "Think again 😭",
  "Last chance 😳",
  "Okay okay chill 😬",
  "Still no?? 😐",
  "You’re persistent 👀",
  "This is impressive",
  "One more try…",
  "Fine. Click me.",
];

let noCount = 0;
let noReady = false;
let noClickable = false;

/* Position No button without animation */
window.addEventListener("load", () => {
  resetNoButton();
});

/* Escape logic */
noBtn.addEventListener("click", () => {
  if (!noReady || noClickable) return;

  moveNoButton();

  if (noCount < noTexts.length) {
    noBtn.textContent = noTexts[noCount];
    noCount++;
  }

  if (noCount >= 10) {
    noClickable = true;
    noBtn.textContent = "Okay… you win 😼";
    noBtn.style.transition = "none";
  }
});

/* No clicked after 10 tries */
noBtn.addEventListener("click", () => {
  if (!noClickable) return;

  showCatScreen();
});

/* Yes clicked */
/* Yes button clicked — show dancing cat */
yesBtn.addEventListener("click", () => {
  question.textContent =
    "YAYYYYY 💖💖💖 I am the happiest man in the world now";
  message.textContent = "This is how happy I am 😘";
  message.classList.remove("hidden");

  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  yesCat.classList.remove("hidden");
  yesBackBtn.classList.remove("hidden");
});

/* Yes cat back button */
yesBackBtn.addEventListener("click", () => {
  yesCat.classList.add("hidden");
  yesBackBtn.classList.add("hidden");
  message.classList.add("hidden");

  question.textContent = "Will you be my Valentine? 💘";

  yesBtn.style.display = "inline-block";
  noBtn.style.display = "inline-block";

  resetNoButton();
});

/* Back button */
backBtn.addEventListener("click", () => {
  catImage.classList.add("hidden");
  backBtn.classList.add("hidden");
  message.classList.add("hidden");

  question.textContent = "Will you be my Valentine? 💘";

  yesBtn.style.display = "inline-block";
  noBtn.style.display = "inline-block";

  resetNoButton();
});

/* ---------- Helpers ---------- */

function showCatScreen() {
  question.textContent = "Stop it";
  message.textContent = "Mr Kitty is not happy";
  message.classList.remove("hidden");

  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  catImage.classList.remove("hidden");
  backBtn.classList.remove("hidden");
}

function moveNoButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

function resetNoButton() {
  noCount = 0;
  noClickable = false;
  noReady = false;

  noBtn.textContent = "No 🙃";
  noBtn.style.transition = "none";

  const rect = placeholder.getBoundingClientRect();
  noBtn.style.left = `${rect.left}px`;
  noBtn.style.top = `${rect.top}px`;

  requestAnimationFrame(() => {
    noBtn.style.transition = "left 0.4s ease, top 0.4s ease";
    noReady = true;
  });
}


