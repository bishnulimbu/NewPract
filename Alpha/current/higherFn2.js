//odd even
//with user request as argument;

const oddChecker = (n) => {
  console.log("oddone:", !(n % 2 == 0));
};
const evenChecker = (n) => {
  console.log("evenOne:", n % 2 == 0);
};
const argument = (request, fun1, fun2) => {
  fun1(request);
  fun2(request);
};
argument(10, oddChecker, evenChecker);
