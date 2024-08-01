let url1 = "https://icanhazdadjoke.com/";
//url for the api fetch

let btn1 = document.querySelector("#btn1");

let ansDiv = document.querySelector("#div1");

btn1.addEventListener("click", retrive);

async function retrive() {
  try {
    const config = { headers: { Accept: "application/json" } };
    let res = await axios.get(url1, config);
    // ansDiv.innerHTML = "";

    // res.data.joke.forEach((university) => {
    //   let li = document.createElement("li");
    //   li.textContent = university.name;
    //   ansDiv.append(li);
    //
    ansDiv.innerHTML = res.data.joke;
  } catch (err) {
    console.log(err);
  }
}

// retrive();
