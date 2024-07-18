function greet() {
  console.log("waw!");
}
function repeat(funct, n) {
  while (n > 0) {
    funct();
    n = n - 1;
  }
}
repeat(greet, 2);
