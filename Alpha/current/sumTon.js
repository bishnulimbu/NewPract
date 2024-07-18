let num = 0;
sum = (n) => {
  for (let i = 1; i <= n; i++) {
    num += i;
  }
  return num;
};
console.log(sum(5));
