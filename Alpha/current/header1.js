const { default: axios } = require("axios");

let url1 = "https://icanhazdadjoke.com/";

let fn1 = async function getJokes() {
  const config = { headers: { Accept: "application/json" } };

  try {
    let res = await axios.get(url1, config);
    console.log(res.data.joke);
  } catch (err) {
    console.log("error-", err);
  }
};

fn1();
