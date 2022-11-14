"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".ques").textContent = secretNumber;
let score = 20;
let highscore = 0;

document.querySelector(".boot").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number 💀";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "You Won 🎉";
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".ques").textContent = secretNumber;
    document.querySelector(".ques").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High 📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost 👎";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low 📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost 👎";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".btn").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".ques").textContent = secretNumber;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".ques").textContent = "?";
  document.querySelector(".ques").style.width = "15rem";
  document.querySelector(".guess").value = " ";
});
