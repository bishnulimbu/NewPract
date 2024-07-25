let h2 = document.querySelector("h2");

let arr1 = [];
let arr2 = [];
let btn = ["red", "blue", "green", "purple"];

let level = 0;
let start = false;

document.addEventListener("keypress", function () {
  if (start === false) {
    console.log("game started");
    start = true;
    levelup();
  }
});

function flash(button) {
  button.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}

function levelup() {
  level++;
  h2.innerHTML = `you are currently on level: ${level}`;

  let random = Math.floor(Math.random() * 3);
  let randomColor = btn[random];
  let randomBtn = document.querySelector(`.${randomColor}`);

  console.log(random);
  console.log(randomColor);
  console.log(randomBtn);

  flash(randomBtn);
}
function pressBtn() {
  console.log(this);
  btn.addEventListener(click, function () {
    console.log("button was pressed");
  });
}
let allButton = document.querySelectorAll("btn");

for (let button of allButton) {
  button.addEventListener("click", pressBtn);
}
