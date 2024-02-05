// "use strict";

const btnEl = document.getElementById("btn");
const apiKey = "https://api.quotable.io/random";
let quoteEl = document.getElementById("quote");
let nameEl = document.getElementById("name");

btnEl.addEventListener("click", async () => {
  try {
    quoteEl.textContent = "Updating...";
    nameEl.textContent = "updating...";
    const response = await fetch(apiKey);
    const data = await response.json();
    quoteEl.textContent = data.content;
    nameEl.textContent = `~ ${data.author}`;
  } catch (error) {
    quoteEl.textContent = "Internet Problem...Try after Some time";
    nameEl.textContent = "";
  }
});

// async function generate() {
//   const response = (await fetch(apiKey)).json();
//   quoteEl.textContent = "hello World...";
// }

// btnEl.addEventListener("click", generate);
