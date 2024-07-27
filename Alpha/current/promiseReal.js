function saveToDB(data) {
  return new Promise((resolve, reject) => {
    let randomSpeed = Math.floor(Math.random() * 10) + 1;
    if (randomSpeed > 4) {
      resolve("success");
    } else {
      reject("failure");
    }
  });
}

// let request = saveToDB("data1");
// request
//   .then(() => {
//     console.log(request);
//   })
//   .catch(() => {
//     console.log(request);
//   });
saveToDB("data1")
  .then(() => {
    console.log("data1 saved");
    saveToDB("data2").then(() => {
      console.log("data2 saved");
      saveToDB("data3").then((result) => {
        console.log(result, "data3 saved");
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });
