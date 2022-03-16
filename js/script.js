const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const data = fetch(
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,explicit&type=single"
  )
    .then((response) => response.json())
    .then((data) => {
      joke.innerText = data.joke;
    });
});