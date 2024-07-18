const contries = ["nepal", "china", "japan", "america", "russia"];
function giveLongestName(contries) {
  let lName = "";
  contries.forEach((name) => {
    if (name.length > lName.length) {
      lName = name;
    }
  });
  return lName;
}
console.log(giveLongestName(contries));
