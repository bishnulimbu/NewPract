//square
let arrOne = [1, 2, 3, 4, 5];
console.log(arrOne);
arrOne.forEach((data, index) => {
  arrOne[index] = data * data;
});
console.log(arrOne);

//sum
let sum = arrOne.reduce((acc, curr) => {
  return curr + acc;
});
console.log(arrOne);

//avg of array
console.log("average is: ", sum / arrOne.length);
