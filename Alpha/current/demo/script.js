// let arr1 = [1];
// let arr2 = [1];
// const check = function (arr1, arr2) {
//   if (arr1 === arr2) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(check());

let btn = document.createElement("button");
let input = document.createElement("input");
btn.innerText = "click me!";
let dummyOne = document.querySelectorAll("h1");
dummyOne.forEach((element) => {
  element.innerHTML = `<u>${dummyOne.innerText}</u>`;
});
// let dummyOne = document.getElementsByTagName("h1")[0];
// dummyOne.innerHTML = `<u>${dummyOne.innerText}</u>`;

document.body.appendChild(btn);

let img = document.querySelectorAll("button");
img.forEach((data1) => {
  data1.style.color = "blue";
});
// img.style.color = "green";

let text1 = document.querySelector("p");
text1.classList.add("underline");
text1.classList.toggle("underline");
//setAttribut takes only one value at a time.
//contains and such methods are there in classList

let key1 = document.querySelector("#text1");

key1.addEventListener("keydown", function (event) {
  console.log(event.key);
  console.log(event.code);
});
