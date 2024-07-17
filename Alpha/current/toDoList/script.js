let arrOne = [];
let enteredData = prompt("enter one of the four option.");
let bool = true;
let appen = document.getElementsByClassName("append")[0];
while (bool) {
  if (enteredData == "quit") {
    bool = false;
  } else if (enteredData == "insert") {
    let insertData = prompt("write your taks here.");
    // arrOne += insertData;
    arrOne.push(insertData);
    appen.innerHTML = `${arrOne}`;
    bool = false;
  } else if (enteredData == "remove") {
    arrOne.pop();
    break;
  } else {
    bool = false;
  }
}
if (enteredData == "list") {
  for (data of arrOne) {
    console.log(indexOf(arrOne), data);
    bool = false;
  }
}
