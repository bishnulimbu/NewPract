let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");

let arrOne = [one, two, three, four];
let clicker = arrOne.map(
  addEventListener("click", function () {
    console.log(`${arrOne.value}`);
  }),
);
