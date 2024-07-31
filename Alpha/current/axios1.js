let url1 = "https://official-joke-api.appspot.com/random_joke";
let btn1 = document.querySelector("#btn1");
let ans = document.querySelector("#ans");

function jokes() {
  return axios
    .get(url1)
    .then((res) => {
      // console.log(res.data.setup);
      // let total = res.data.setup + res.data.punchline;
      // ans.innerHTML = total;
      ans.innerHTML = res.data.setup + "<br>" + res.data.punchline;
      console.log(res.data);
    })
    .catch((err) => {
      console.log("error", err);
    });
}

async function fn() {
  jokes();
}
btn1.addEventListener("click", fn);

//value.setAttribute("src",link); can be used for inserting image dynamically
