let url1 = "https://official-joke-api.appspot.com/random_joke";

function jokes() {
  return fetch(url1)
    .then((res) => {
      if (!res.ok) {
        throw new erro(`http error ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("error", err);
    });
}

async function fn() {
  await jokes();
  await jokes();
  await jokes();
}

fn();
