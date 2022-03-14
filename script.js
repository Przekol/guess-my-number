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
	again.addEventListener('click', againGame);
	window.addEventListener('keydown', runKey);
};

const runKey = e => {
	if (e.keyCode === 13 || e.keyCode === 32 || e.keyCode === 27) {
		switch (e.keyCode) {
			case 13:
				checkNumber();
				break;
			case 27:
				againGame();
				break;
			case 32:
				checkClear();
				break;
			default:
				break;
		}
	}
};
const checkClear = () => {
	guessInput.value = '';
};

const displayContent = (variable, content) => {
	variable.textContent = content;
};

const checkNumber = () => {
	guess = Number(guessInput.value);

	if (guess >= 1 && guess <= 20) {
		checkScore();
	} else {
		displayContent(message, '🔢 Choose a number in between 1 and 20 ! ');
	}
};
const againGame = () => {
	secretNumber = Math.trunc(Math.random() * 20 + 1);
	guessInput.value = '';
	score = 20;
	displayContent(number, '?');
	displayContent(message, 'Start guessing...');
	displayContent(scoreNumber, score);
	body.classList.remove('winner');
	body.classList.remove('lost');
};

const checkScore = () => {
	if (score > 1) {
		comparisonNumber();
		displayContent(scoreNumber, score);
	} else {
		displayContent(message, '💥 You lost the game! ');
		displayContent(scoreNumber, 0);
		displayContent(number, secretNumber);
		body.classList.add('lost');
	}
};

const comparisonNumber = () => {
	if (guess === secretNumber) {
		displayContent(message, '🎉 Correct Number!');
		displayContent(number, secretNumber);
		body.classList.add('winner');
		displayHigthScore();
	} else if (guess !== secretNumber) {
		displayContent(message, guess > secretNumber ? '📈 Too high!' : '📉 To low!');
		score--;
	}
};

const displayHigthScore = () => {
	if (score > hightScore) {
		hightScore = score;
		displayContent(highScoreNumber, hightScore);
	}
};

document.addEventListener('DOMContentLoaded', main);
