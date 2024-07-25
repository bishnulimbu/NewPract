let text1 = document.querySelector("h1");

function changeColor(color, delay, callFn1) {
  setTimeout(() => {
    text1.style.color = color;
    if (callFn1) {
      callFn1();
    }
  }, delay);
}
changeColor("red", 1000, () => {
  changeColor("blue", 1000, () => {
    changeColor("green", 1000, () => {
      changeColor("orange", 1000);
    });
  });
});
//callback hell demo
//promises will be used for meditaing the problem
