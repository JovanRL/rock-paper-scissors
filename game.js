import rock from './images/rock.png'
import paper from './images/paper.png'
import scissorsRight from './images/scissors-right.png'
import scissorsLeft from './images/scissors-left.png'
import clappingHands from './images/clapping-hands.png'
import thumbsDown from './images/thumbs-down.png'
import ball from './images/ball.png'


const result = document.querySelector('.result');
const userScoreText = document.querySelector('.user-score');
const computerScoreText = document.querySelector('.computer-score');
const computerSelectedOption = document.querySelector('.computer-selected-option');
const userSelectedOption = document.querySelector('.user-selected-option');
const userSelection = Array.from(document.getElementsByClassName('option'));
const playAgainBtn = document.querySelector('.play-again-btn');
const modalText = document.querySelector('.modalText');
const modalImage = document.querySelector('.modalImage');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

playAgainBtn.addEventListener("click", () => {resetGame()});

let userScore = 0;
let computerScore = 0;

const getUserSelection = option => {
  option.forEach(element => {
    element.addEventListener('click', () => {
      playRound(element.alt, getComputerSelection());
    })
  });
};

getUserSelection(userSelection);

const randomChoice = (arr) => {
  return arr[Math.floor(arr.length * Math.random())];
};

const getComputerSelection = () => {
  const options = ['rock', 'paper', 'scissors'];
  return randomChoice(options);
};



const playRound = (userSelection, computerSelection) => {

  const roundResult = {
    rock: {
      rock: ["It's a tie", `${rock}`, `${rock}`],
      paper: ["You loose", `${rock}`, `${paper}`],
      scissors: ["You win", `${rock}`, `${scissorsLeft}`]
    },
    paper: {
      rock: ["You win", `${paper}`, `${rock}`],
      paper: ["It's a tie", `${paper}`, `${paper}`],
      scissors: ["You loose", `${paper}`, `${scissorsLeft}`]
    },
    scissors: {
      rock: ["You loose", `${scissorsRight}`, `${rock}`],
      paper: ["You win", `${scissorsRight}`, `${paper}`],
      scissors: ["It's a tie", `${scissorsRight}`, `${scissorsLeft}`]
    }
  };

  [result.innerText, userSelectedOption.src, computerSelectedOption.src] = roundResult[userSelection][computerSelection];

  if (result.innerText === "You win") {
    userScoreText.innerText = `User score: ${++userScore}`;
  } else if (result.innerText === "You loose") {
    computerScoreText.innerText = `Computer score: ${++computerScore}`;
  }

  checkScore();
};

const resetGame = () => {
  userScore = 0;
  computerScore = 0;
  result.innerText = "Pick an option!";
  userScoreText.innerText = `User score: ${userScore}`;
  computerScoreText.innerText = `Computer score: ${computerScore}`;
  userSelectedOption.src = `${ball}`;
  computerSelectedOption.src = `${ball}`;
  modal.classList.remove('active');
  overlay.classList.remove('active');
};

const checkScore = () => {

  if (userScore == 5) {
    modalText.innerText = "You won the game!";
    modalImage.src = `${clappingHands}`;
    openModal();
  }
  if (computerScore == 5) {
    modalText.innerText = "You lost the game!";
    modalImage.src = `${thumbsDown}`;
    openModal();
  }

  
};

function openModal() {
  modal.classList.add('active');
  overlay.classList.add('active');
}