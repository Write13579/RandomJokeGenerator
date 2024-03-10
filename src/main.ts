const jokeContainer = document.getElementById("joke") as HTMLParagraphElement;
const btn = document.getElementById("btn") as HTMLButtonElement;
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=single";

async function getJoke() {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("couldnt fetch joke");
  } else {
    const joke = await response.json();
    jokeContainer.textContent = joke.joke;
  }
}
