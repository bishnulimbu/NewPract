//return array number larger than given num;
let arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const returnArrNum = (n) => {
  // forEach(arrOne){
  //   if(n>arrOne[i]);
  // }
  // mistake one
  arrOne.forEach((data) => {
    if (data > n) {
      console.log(data);
      // break;
      // break cannot be used in forEach loop
    }
  });
};
returnArrNum(3);
