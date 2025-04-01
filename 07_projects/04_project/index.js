// const randomNumber = Math.floor((Math.random() * 100) + 1);
// const submitButton = document.querySelector('#subt')
// const form = document.querySelector('form')

// form.addEventListener('submit', (event) => {
//   event.preventDefault()
//   const guess = document.querySelector('#guessField').value
//   if (randomNumber > guess) {
//     document.querySelector('.guesses').innerHTML +=` guess`
//     parseInt(document.querySelector('.lastResult').innerHTML) -= 1;
//     document.querySelector('.lowOrHi').innerHTML = `High`
//   } else if (randomNumber < guess) {
//     document.querySelector('.guesses').innerHTML +=` guess`
//     parseInt(document.querySelector('.lastResult').innerHTML) -= 1;
//     document.querySelector('.lowOrHi').innerHTML = `Low`
//   } else {
//     document.querySelector('.guesses').innerHTML +=` guess`
//     parseInt(document.querySelector('.lastResult').innerHTML) -= 1;
//     document.querySelector('.lowOrHi').innerHTML = `Correct!`
//   }
// })

let randomNumber = Math.floor(Math.random() * 100 + 1);
const submitButton = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (!isNaN(guess) && guess > 1 && guess < 100) {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. The random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
    checkGuess(guess);
  } else {
    alert('Please Enter a valid Number.');
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (guess > randomNumber) {
    displayMessage(`The Number is TOOO High`);
  } else if (guess < randomNumber) {
    displayMessage(`The Number is TOOO Low`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', (event) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
