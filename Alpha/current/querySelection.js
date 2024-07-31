const { default: axios } = require("axios");

let url1 = "http://universities.hipolabs.com/search?name=";
let name = "nepal";

async function fn() {
  try {
    let res = await axios.get(url1 + name);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}

fn();

//will do the listing of the data in html in another day.
