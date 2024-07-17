let arrOne = [];
let dummyOne = document.getElementsByClassName("output")[0];
let data1 = document.getElementById("data1");
let list1 = document.getElementById("list");

const insertOpr = function () {
  arrOne.push(data1.value);
  data1.value = ""; //clear the text field.
  // dummyOne.innerHTML = ""; //clear the previous output probably
};

const deleteOpr = () => {
  arrOne.pop();
};

const list = () => {
  list1.innerHTML = "";
  for (const data of arrOne) {
    list1.innerHTML += `<li>${data}</li>`;
  }
};
