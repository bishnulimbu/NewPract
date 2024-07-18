const money = {
  ram: 10,
  sam: 20,
  sumTotal(ram, sam) {
    console.log(this.ram + this.sam);
  },
};
// console.log(money.sumTotal(money.ram, money.sam));
money.sumTotal();
