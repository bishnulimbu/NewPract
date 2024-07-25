let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let text1 = document.querySelector("#text1");

let arrOne = [one, two, three, four];
// arrOne.map((element) => {
//   element.addEventListener("click", function () {
//     console.dir(`${element.value}`);
//   });
// });

let random = Math.floor(Math.random() * 4 + 1);

document.addEventListener("keydown", function () {
  console.log("the game will now start!");
  text1.innerHTML = "<h3>game no.1</h3>";
  let rand = arrOne[random];
  rand.classList.add("flash");
  setTimeout(() => {
    rand.classList.remove("flash");
  }, 1000);
});
