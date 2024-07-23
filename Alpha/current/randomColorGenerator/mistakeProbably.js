let btn1 = document.getElementsByName("button")[0];
let answer = document.querySelector(".answer");
let bgColor = document.querySelector("textarea");

//rgb(255,255,255) generator
let random = () => Math.floor(Math.random() * 256);

let r, g, b;
let colors = [r, g, b];

const selector = () => {
  colors.map(() => random());
};

// foreach wont work here because it won't change the original array.
// colors.forEach((data1)=>{
//   data1=random;
// })

btn1.addEventListener("click", selector(){
  answer.innerHTML = `${colors}`;
  answer.innerHTML = `Colors: [R: ${colors[0]}, G: ${colors[1]}, B: ${colors[2]}]`;

  // Update the textarea background color
  bgColor.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
});
