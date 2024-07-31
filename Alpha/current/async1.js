async function greet() {
  throw "show error";
  // return "hello";
  // console.log("hello");
}
greet()
  .then((result) => {
    console.log("success");
  })
  .catch((err) => {
    console.log("error", err);
  });

let demo = async () => {
  console.log(5);
};
demo();
