const again = document.querySelector(".again");
const lineBox = document.querySelector(".linebox");
const input = document.querySelector(".number");
const check = document.querySelector(".check");
const massage = document.querySelector(".massage");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const currentScore = document.querySelector(".townty");
const body = document.querySelector(".body");
let h1 = document.querySelector(".h1");
let allTimeHighScore = document.querySelector(".hs");
let random = Math.trunc(Math.random() * 20) + 1;
let a = 20;
let b = 0;
currentScore.innerHTML = a;
allTimeHighScore.innerHTML = b;
check.addEventListener("click", function () {
  if (input.value > random) {
    massage.innerHTML = "too hight";
    currentScore.innerHTML = --a;
    input.value = "";
  } else if (input.value < random) {
    massage.innerHTML = "too low";
    input.value = "";
    currentScore.innerHTML = --a;
  } else if (input.value == random) {
    lineBox.innerHTML = input.value;

    massage.innerHTML = "correct number";
    body.style.backgroundColor = "rgb(108, 174, 10)";
    input.style.backgroundColor = "rgb(108, 174, 10)";
    if (a > allTimeHighScore.innerHTML) {
      allTimeHighScore.innerHTML = a;
      h1.innerHTML = "YOU HAVE A NEW HIGH SCORE";
    }
  }
});

again.addEventListener("click", function () {
  input.value = "";
  body.style.backgroundColor = "rgb(37, 36, 36)";
  input.style.backgroundColor = "rgb(37, 36, 36)";
  lineBox.innerHTML = "?";
  lineBox.style.width = "150px";
  massage.innerHTML = "start guessing...";
  currentScore.innerHTML = 20;
  a = 20;
  random = Math.trunc(Math.random() * 20) + 1;
  console.log(random);
  h1.innerHTML = "Guess my Number!";
});

console.log(random);
