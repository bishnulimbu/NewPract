function main(data, success, failure) {
  let randomSpeed = Math.floor(Math.random() * 10) + 1;
  if (randomSpeed > 4) {
    success(data);
  } else {
    failure(data);
  }
}

main(
  "data1",
  () => {
    console.log("data1 is saved.");
    main(
      "data2",
      () => {
        console.log("data2 was saved.");
        main(
          "data3",
          () => {
            console.log("data3 was saved.");
          },
          () => {
            console.log("data3 failed");
          },
        );
      },
      () => {
        console.log("data2 failed");
      },
    );
  },
  () => {
    console.log("data1 failed");
  },
);
