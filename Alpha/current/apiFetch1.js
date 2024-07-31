let url1 = "https://official-joke-api.appspot.com/random_joke";

fetch(url1)
  .then((res) => {
    // console.log(res);
    // res.json().then((data) => {
    //   console.log(data);
    //   can be refactored into better form
    return res.json();
  })
  .then((data) => {
    console.log(data);
    return fetch(url1);
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("error-", err);
  });
