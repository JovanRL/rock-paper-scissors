import rock from './images/rock.png'
import paper from './images/paper.png'
import scissorsRight from './images/scissors-right.png'
import scissorsLeft from './images/scissors-left.png'
import clappingHands from './images/clapping-hands.png'
import thumbsDown from './images/thumbs-down.png'

let userScore = 0
let computerScore = 0;

export const getUserSelection = option => {
  option.forEach(element => {
    element.addEventListener('click', () => {
      playRound(element.alt);
    })
  });
}

const randomChoice = (arr) => {
  return arr[Math.floor(arr.length * Math.random())];
}

export const getComputerSelection = () => {
  const options = ['rock', 'paper', 'scissors'];
  return randomChoice(options);
}


export const playRound = (userSelection) => {
  const computerSelection = getComputerSelection();
  const result = document.querySelector('.result');
  const userScoreText = document.querySelector('.user-score');
  const computerScoreText = document.querySelector('.computer-score');
  const computerSelectedOption = document.querySelector('.computer-selected-option')
  const userSelectedOption = document.querySelector('.user-selected-option')


  if (userSelection == 'rock' && computerSelection == 'rock') {
    result.innerText = "It's a tie";
    userSelectedOption.src = `${rock}`;
    computerSelectedOption.src = `${rock}`;
  }
  else if (userSelection == 'rock' && computerSelection == 'paper')
  {
    result.innerText =  'You loose';
    computerScoreText.innerText = `Computer score: ${++computerScore}`;
    userSelectedOption.src = `${rock}`;
    computerSelectedOption.src = `${paper}`;
  }
  else if (userSelection == 'rock' && computerSelection == 'scissors') {
    result.innerText = 'You win';
    userScoreText.innerText = `User score: ${++userScore}`;
    userSelectedOption.src = `${rock}`;
    computerSelectedOption.src = `${scissorsLeft}`;
  }
  else if (userSelection == 'paper' && computerSelection == 'paper') {
    result.innerText = "It's a tie";
    userSelectedOption.src = `${paper}`;
    computerSelectedOption.src = `${paper}`;
  }
  else if (userSelection == 'paper' && computerSelection == 'scissors') {
    result.innerText = 'You loose';
    computerScoreText.innerText = `Computer score: ${++computerScore}`;
    userSelectedOption.src = `${paper}`;
    computerSelectedOption.src = `${scissorsLeft}`;
  }
  else if (userSelection == 'paper' && computerSelection == 'rock') {
    result.innerText = 'You win';
    userScoreText.innerText = `User score: ${++userScore}`;
    userSelectedOption.src = `${paper}`;
    computerSelectedOption.src = `${rock}`;
  }
  else if (userSelection == 'scissors' && computerSelection == 'paper') {
    result.innerText = 'You win';
    userScoreText.innerText = `User score: ${++userScore}`;
    userSelectedOption.src = `${scissorsRight}`;
    computerSelectedOption.src = `${paper}`;
  }
  else if (userSelection == 'scissors' && computerSelection == 'scissors') {
    result.innerText = "It's a tie";
    userSelectedOption.src = `${scissorsRight}`;
    computerSelectedOption.src = `${scissorsLeft}`;
  }
  else if (userSelection == 'scissors' && computerSelection == 'rock') {
    result.innerText = 'You loose';
    computerScoreText.innerText = `Computer score: ${++computerScore}`;
    userSelectedOption.src = `${scissorsRight}`;
    computerSelectedOption.src = `${rock}`;
  }
  checkScore(userScore, computerScore);
}

const resetGame = () => {
  document.location.reload()
}


const checkScore = (userScore, computerScore) => {
  let modalText = null;
  let modalImage = null;
  let isFinished = false;

  if(userScore == 5)
  {
    modalText = "You won!";
    modalImage = clappingHands;
    isFinished = true;
  }
  if(computerScore == 5)
  {
    modalText = "You lost!";
    modalImage = thumbsDown;
    isFinished = true;
  }

  if(isFinished)
  {
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

    const closeModal = function () {
      modal.close();
      resetGame();
    };

    openModal();

    playAgainBtn.addEventListener("click", closeModal);
  }
}