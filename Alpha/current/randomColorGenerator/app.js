let ans = document.querySelector(".answer");
let btn1 = document.querySelector("button");
let area = document.querySelector("#area");
const random = () => Math.floor(Math.random() * 256);

btn1.addEventListener("click", function () {
  console.log("button clicked.");
  let r = random();
  let g = random();
  let b = random();
  let colors = [r, g, b];
  console.log(colors);
  ans.innerHTML = `r:${r}, g:${g}, b:${b}`;
  area.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
