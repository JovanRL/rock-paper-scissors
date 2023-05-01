import rock from './images/rock.png'
import paper from './images/paper.png'
import scissorsRight from './images/scissors-right.png'
import scissorsLeft from './images/scissors-left.png'
import clappingHands from './images/clapping-hands.png'
import thumbsDown from './images/thumbs-down.png'

let userScore = 0;
let computerScore = 0;

export const getUserSelection = option => {
  option.forEach(element => {
    element.addEventListener('click', () => {
      playRound(element.alt);
    })
  });
};

const randomChoice = (arr) => {
  return arr[Math.floor(arr.length * Math.random())];
};

export const getComputerSelection = () => {
  const options = ['rock', 'paper', 'scissors'];
  return randomChoice(options);
};


export const playRound = (userSelection) => {
  const computerSelection = getComputerSelection();
  const result = document.querySelector('.result');
  const userScoreText = document.querySelector('.user-score');
  const computerScoreText = document.querySelector('.computer-score');
  const computerSelectedOption = document.querySelector('.computer-selected-option');
  const userSelectedOption = document.querySelector('.user-selected-option');

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

const checkScore = () => {
  let modalText = '';
  let modalImage = '';
  let finishedGame = false;

  if (userScore == 5) {
    modalText = "You won!";
    modalImage = clappingHands;
    finishedGame = true;
  }
  if (computerScore == 5) {
    modalText = "You lost!";
    modalImage = thumbsDown;
    finishedGame = true;
  }

  if (finishedGame) {
    document.querySelector('#app').innerHTML += `
    <dialog class="modal">
      <div class="flex">
      <div>
          <h3>${modalText}</h3>
        </div>
        <img src="${modalImage}" width="50px" height="50px" alt="user" />
      </div>
      

      <button class="btn-play-again">Play again</button>
    </dialog>
    `;

    const modal = document.querySelector(".modal");
    const playAgainBtn = document.querySelector(".btn-play-again");

    const openModal = function () {
      modal.showModal();
    };

    openModal();

    playAgainBtn.addEventListener("click", () => { document.location.reload() });
  }
};