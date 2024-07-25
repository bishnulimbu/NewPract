//js ia a single threaded.

setTimeout(() => {
  console.log("this will be printed in 2 sec.");
}, 2000);

console.log("this will be printed immediately");
