let url1 = "http://universities.hipolabs.com/search?name=";
//url for the api fetch

let btn1 = document.querySelector("#btn1");

let ansDiv = document.querySelector("#div1");

btn1.addEventListener("click", retrive);

async function retrive() {
  let text = document.querySelector("#input1").value;
  try {
    let fullData = url1 + text;
    let res = await axios.get(fullData);
    ansDiv.innerHTML = "";

    res.data.forEach((university) => {
      let li = document.createElement("li");
      li.textContent = university.name;
      ansDiv.append(li);
    });
  } catch (err) {
    console.log(err);
  }
}

// retrive();
