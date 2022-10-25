const numberContainer = document.querySelector('#number-container');
const guessInput = document.querySelector('#guess-input');
const guessSubmit = document.querySelector('#guess-submit');
const message = document.querySelector('#message');
const scoreOutput = document.querySelector('#score-output')
const highScoreOutput = document.querySelector('#highscore-output');
const gameReset = document.querySelector('#game-reset');


let secretNumber = Math.trunc((Math.random() * 20) + 1);
let score = 20;
let highScore = 0;


guessSubmit.addEventListener('click', function() {

  let guess = Number(guessInput.value);

  if(!guess) {
    message.textContent = 'Enter a valid guess';

  } else if(guess === secretNumber) {
    message.textContent = 'You Win!';
    numberContainer.textContent = secretNumber;

      if(score > highScore) {
        highScore = score;
        highScoreOutput.textContent = highScore;}

  } else if(guess !== secretNumber) {

    score--;
    scoreOutput.textContent = score;
    message.textContent = (guess > secretNumber ? 'Guess too high!' : 'Guess too low!')
}
});
