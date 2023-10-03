let questions = [
  "programming ",
  "science ",
  "beautiful",
  "mathematics",
  "development",
  "satisfaction",
  "entertainment",
  "entertainment",
  "administration",
  "opportunity",
  "mouse",
  "happy",
  "doctor",
  "bicycle",
  "freedom",
  "morning",
  "keyboard",
  "peaceful",
  "boolean",
  "method",
  "hyperlink",
];

let word = document.querySelector(".word");
let gameBoard = document.querySelector(".gameBoard");
let answer = document.querySelector(".answer");
let check = document.querySelector(".check");
let refreshWord = document.querySelector(".refresh");
let correctFlag;
let score = document.querySelector("#score");
let slider = document.querySelector(".slider");
let scoring = 0;
let result = document.querySelector("#result");
let gameOver = document.querySelector(".gameOver");
let restart = document.querySelector("#restart");

window.onload = function () {
  word.innerText = questions[randomNum()];

  scoring = 0;
  score.innerText = `score: ${scoring}`;
  slider.classList.add("sliderAni");
  setTimeout(() => {
    slider.classList.remove("sliderAni");
  }, 5000);
  setTimeout(() => {
    checking();
  }, 5000);
  blinkCursor();
};

function randomNum() {
  let num = Math.floor(Math.random() * 22);
  console.log(num);
  return num.toString();
}

function refresh() {
  answer.style.backgroundColor = "white";
  answer.value = "";
  word.innerText = questions[randomNum()];
  slider.classList.add("sliderAni");
  setTimeout(() => {
    slider.classList.remove("sliderAni");
  }, 5000);
  setTimeout(() => {
    checking();
  }, 5000);
}

function checking() {
  let answerCheck = answer.value.toLowerCase();
  if (answerCheck === word.innerText) {
    scoring += 10;
    correctFlag = true;
    answer.style.backgroundColor = "green";
    score.innerText = `score: ${scoring}`;
    setTimeout(() => {
      refresh();
    }, 400);
  } else {
    answer.style.backgroundColor = "red";
    document.querySelector("body").style.background = "rgb(227, 71, 71)";
    score.innerText = `score: ${scoring}`;
    setTimeout(() => {
      gameBoard.style.display = " none";
      gameOver.style.display = "block";
      result.innerText = scoring;
    }, 800);
  }
}
restart.addEventListener("click", function () {
  window.location.reload();
});

function blinkCursor() {
  answer.classList.toggle("blink");
  setTimeout(blinkCursor, 100);
}
