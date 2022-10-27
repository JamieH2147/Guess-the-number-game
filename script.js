const numberContainer = document.querySelector('#number-container');
const guessInput = document.querySelector('#guess-input');
const guessSubmit = document.querySelector('#guess-submit');
const message = document.querySelector('#message');
const scoreOutput = document.querySelector('#score-output')
const highScoreOutput = document.querySelector('#highscore-output');
const gameReset = document.querySelector('#game-reset');
const background = document.querySelector('body');

const dynamicText = document.querySelectorAll('.green-text');

let secretNumber = Math.trunc((Math.random() * 20) + 1);
let score = 20;
let highScore = 0;


guessSubmit.addEventListener('click', function() {

  let guess = Number(guessInput.value);

  if(!guess) {
    
    message.textContent = 'Enter a valid guess!';
    guessInput.focus();

  } else if(guess === secretNumber) {
    message.textContent = '🥳 You Win!';
    numberContainer.textContent = secretNumber;

      if(score > highScore) {
        highScore = score;
        highScoreOutput.textContent = highScore;}

  } else if(guess !== secretNumber) {
    
    score--;
    scoreOutput.textContent = score;
    message.textContent = (guess > secretNumber ? '🤔 Guess too high!' : '🤔 Guess too low!');
    guessInput.focus();

    if(score < 1) {

      message.textContent = '😿 You lose!';
      scoreOutput.textContent = '0';
      score = 0;
      background.style.backgroundColor = 'red';
      dynamicText.forEach(element => {
        element.classList.remove('green-text');

      })
    
      guessInput.classList.remove('green-background');
     }
    }
  })

gameReset.addEventListener('click', function () {

      score = 20;
      scoreOutput.textContent = score;
      secretNumber = Math.trunc((Math.random() * 20) + 1);
      numberContainer.textContent = '?';
      message.textContent = 'Start guessing...';
      guessInput.value = '';
      guessInput.focus();
      background.style.backgroundColor = '#009a22';
      dynamicText.forEach(element => {
        element.classList.add('green-text');
      })
      guessInput.classList.add('green-background');
})
