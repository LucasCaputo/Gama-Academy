const baseURL = "http://api.icndb.com/";

const body = document.getElementById("body");
const main = document.getElementById("main-category");

axios.get(baseURL + "jokes/random/4").then((res) => {
  let data = res.data.value;
  console.log(data);

  body.innerHTML = data
    .map(
      (main) =>
        `<div class="card style="width: 18rem">
      <div class="card-body">
          <p class="card-text">${main.joke}</p>
      </div>
    </div>`
    )
    .join();
});

function findJoke() {
  let inputJokeValue = document.getElementById("jokeValue").value;

  axios(baseURL + "search?query=" + inputJokeValue).then((res) => {});

  console.log(inputJokeValue);

  axios.get(baseURL + "jokes/random/4").then((res) => {
    let data = res.data.value;
    console.log(data);

    body.innerHTML = data
      .map(
        (main) =>
          `<div class="card style="width: 18rem">
      <div class="card-body">
          <p class="card-text">${main.joke}</p>
      </div>
    </div>`
      )
      .join();
  });
}
