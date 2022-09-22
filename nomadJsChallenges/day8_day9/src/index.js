const randomNumber = document.querySelector("#numberInput #randomInput");
const guessNumber = document.querySelector("#numberInput #guessInput");
const resultP = document.querySelector("#result");
const winAble = document.querySelector("#win");
const numberInput = document.querySelector("#numberInput");
// console.log(resultP);
// console.log(randomNumber);
// console.log(guessNumber.value);

function handleNumberInput(event) {
  event.preventDefault();
  const randomKey = parseInt(randomNumber.value, 10);
  const myGuessNumber = parseInt(guessNumber.value, 10);
  const randomValue = Math.floor(Math.random() * (randomKey + 1));
  resultP.innerText = `You chose:${myGuessNumber}, the machine chose: ${randomValue}`;

  if (myGuessNumber === randomValue) {
    winAble.innerText = "You won!";
  } else {
    winAble.innerText = "You lost!";
  }
}

numberInput.addEventListener("submit", handleNumberInput);
