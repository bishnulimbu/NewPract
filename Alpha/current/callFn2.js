function one() {
  return 1;
}
function two() {
  return one() + one();
}
(function () {
  let ans = two() + one();
  console.log(ans);
})();
//this is for viewing the call stack in the browser and so on and on forth.
