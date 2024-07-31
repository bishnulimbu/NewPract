let text1 = document.querySelector("h1");

// function changeColor(color, delay, callFn1) {
//   setTimeout(() => {
//     text1.style.color = color;
//     if (callFn1) {
//       callFn1();
//     }
//   }, delay);
// }
// changeColor("red", 1000, () => {
//   changeColor("blue", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("orange", 1000);
//     });
//   });
// });
//callback hell demo
//promises will be used for meditaing the problem

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      text1.style.color = color;
    }, delay);
    resolve("color changed");
  });
}

let requestPromise = changeColor("red", 1000)
  .then(() => {
    console.log("color changed");
    changeColor("blue", 2000).then(() => {
      console.log("blue color");
      changeColor("green", 1000).then(() => {
        console.log("green color");
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });
