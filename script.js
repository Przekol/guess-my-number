let message;
let number;
let scoreNumber;
let guessInput;
let check;
let again;
let highScoreNumber;
let body;
let guess;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let hightScore = 0;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	message = document.querySelector('.message');
	number = document.querySelector('.number');
	scoreNumber = document.querySelector('.score');
	guessInput = document.querySelector('.guess');
	check = document.querySelector('.check');
	again = document.querySelector('.again');
	highScoreNumber = document.querySelector('.highscore');
	body = document.querySelector('body');
};

const prepareDOMEvents = () => {
	check.addEventListener('click', checkNumber);
	again.addEventListener('click', playAgain);
	window.addEventListener('keydown', selectBehavior);
};

const selectBehavior = e => {
	const enter = 'Enter';
	const space = ' ';
	const escape = 'Escape';
	
	if (e.key == enter || e.key == space || e.key == escape) {
		switch (e.key) {
			case enter:
				checkNumber();
				break;
			case escape:
				playAgain();
				break;
			case space:
				clearGuessInput();
				break;
			default:
				break;
		}
	}
};
const clearGuessInput = () => {
	guessInput.value = '';
};

const setContent = (variable, content) => {
	variable.textContent = content;
};

const checkNumber = () => {
	guess = Number(guessInput.value);

	if (guess >= 1 && guess <= 20) {
		setResult();
	} else {
		setContent(message, '🔢 Choose a number in between 1 and 20 ! ');
	}
};
const playAgain = () => {
	secretNumber = Math.trunc(Math.random() * 20 + 1);
	guessInput.value = '';
	score = 20;
	setContent(number, '?');
	setContent(message, 'Start guessing...');
	setContent(scoreNumber, score);
	body.classList.remove('winner');
	body.classList.remove('lost');
};

const setResult = () => {
	if (score > 1) {
		checIfInputIsValid();
		setContent(scoreNumber, score);
	} else {
		setContent(message, '💥 You lost the game! ');
		setContent(scoreNumber, 0);
		setContent(number, secretNumber);
		body.classList.add('lost');
	}
};

const checIfInputIsValid = () => {
	if (guess === secretNumber) {
		setContent(message, '🎉 Correct Number!');
		setContent(number, secretNumber);
		body.classList.add('winner');
		displayHigthScore();
	} else if (guess !== secretNumber) {
		setContent(message, guess > secretNumber ? '📈 Too high!' : '📉 To low!');
		score--;
	}
};

const displayHigthScore = () => {
	if (score > hightScore) {
		hightScore = score;
		setContent(highScoreNumber, hightScore);
	}
};

document.addEventListener('DOMContentLoaded', main);
