import './style.css'
import computerIcon from './images/computer.png'
import userIcon from './images/user.png'
import rock from './images/rock.png'
import paper from './images/paper.png'
import scissors from './images/scissors-right.png'
import ballIcon from './images/ball.png'
import { getUserSelection, playRound } from './game.js'

document.querySelector('#app').innerHTML = `
  <header><p>Rock Paper Scissors</p></header>
  <div>
      <div class="display">
      <div class="user">
        <img src="${userIcon}" class="icon user-logo" alt="User" />
        <img src="${ballIcon}" class="user-selected-option" />
      </div>
      <div class="computer">
        <img src="${computerIcon}" class="icon computer-logo" alt="Computer" />
        <img src="${ballIcon}" class="computer-selected-option" />
      </div>
      </div>

    <h1 class="result">Pick an option!</h1>
    <div class="options">
      <img src="${rock}" class="icon rock-option option" alt="rock" />
      <img src="${paper}" class="icon paper-option option" alt="paper" />
      <img src="${scissors}" class="icon scissors-option option" alt="scissors" />
    </div>
    <div class="score">
      <div class="user-score">User score: 0</div>
      <div class="computer-score">Computer score: 0</div>
    </div>
  </div>
`;

const option = Array.from(document.getElementsByClassName('option'));

getUserSelection(option);