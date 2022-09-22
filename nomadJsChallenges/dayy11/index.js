const button = document.querySelector("button");
const body = document.querySelector("body");
console.log(body);
console.log(button);

const colors = ["#ef5777", "#575fcf", "#4bcffa", "#34e7e4", "#0be881", "#f53b57", "#3c40c6", "#0fbcf9", "#00d8d6", "#05c46b", "#ffc048", "#ffdd59", "#ff5e57", "#d2dae2", "#485460", "#ffa801", "#ffd32a", "#ff3f34"];

// const quote = document.querySelector("#quote span:first-child");
// const author = document.querySelector("#quote span:last-child");
// const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// quote.innerText = todaysQuote.quote;
// author.innerText = todaysQuote.author;
// author.style.color = "red";

function buttonClick() {
  while (true) {
    let randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    let randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    console.log(`${randomColor1}, ${randomColor2}`);
    if (randomColor1 === randomColor2) continue;
    if (randomColor1 !== randomColor2) {
      body.style.backgroundImage = `linear-gradient(${randomColor1}, ${randomColor2})`;

      break;
    }
  }
}

button.addEventListener("click", buttonClick);
