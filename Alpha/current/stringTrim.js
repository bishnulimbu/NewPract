let name = "rraam";
//changing string to charArray;
//string cannot be changed, so new stringarr;
let temp = new Set();
name.split("").forEach((char) => {
  temp.add(char);
});
console.log(temp);
let result = Array.from(temp).join("");
console.log(result);
