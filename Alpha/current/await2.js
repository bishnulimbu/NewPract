let text1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      text1.style.color = color;
      console.log(`color changed to ${color}`);
      if (color == "black") {
        reject("promise reject cuz u are black.");
      }
      resolve();
    }, delay);
  });
}

async function chg() {
  try {
    await changeColor("red", 1000);
    await changeColor("blue", 1000);
    await changeColor("pink", 1000);
    await changeColor("black", 1000);
  } catch (err) {
    console.log("error", err);
  }
}

chg();
