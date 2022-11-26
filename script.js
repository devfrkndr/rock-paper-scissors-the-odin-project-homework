'use strict';

const headerFragment = document.createDocumentFragment();

const headerRound = document.createElement('header');

const headerContainer = document.createElement('div');
headerContainer.classList.add('container');

let round = 1;
const headerText = document.createElement('h1');
headerText.classList.add('roundHeader');
headerText.innerText = `Round ${round}`;

const roundResult = document.createElement('p');
roundResult.classList.add('roundResult');
roundResult.innerText = 'Waiting for you to select...';

const nextButton = document.createElement('button');
nextButton.classList.add('nextButton');
nextButton.innerText = 'Next Round';

headerFragment.appendChild(headerRound);
headerRound.appendChild(headerContainer);
headerContainer.appendChild(headerText);
headerContainer.appendChild(roundResult);
headerContainer.appendChild(nextButton);

const gameFragment = document.createDocumentFragment();

const gameSection = document.createElement('section');
gameSection.classList.add('gameSection');

const gameContainer = document.createElement('div');
gameContainer.classList.add('container');

const userDiv = document.createElement('div');
userDiv.classList.add('userDiv');

const circlesDiv = document.createElement('div');
circlesDiv.classList.add('circlesDiv');

const userP = document.createElement('p');
userP.classList.add('userP');
userP.innerText = `You:  `;

gameFragment.appendChild(gameSection);
gameSection.appendChild(gameContainer);
gameContainer.appendChild(userDiv);
userDiv.appendChild(userP);
userDiv.appendChild(circlesDiv);

const rpsImgs = ['✊', '🖐️', '✌️'];

rpsImgs.forEach((e) => {
  const imgsUserDiv = document.createElement('div');
  imgsUserDiv.classList.add('imgsUserDiv');
  imgsUserDiv.textContent = e;

  circlesDiv.append(imgsUserDiv);
});

const computerDiv = document.createElement('div');
computerDiv.classList.add('computerDiv');

const computerP = document.createElement('p');
computerP.classList.add('userP');
computerP.innerText = `Computer:`;

const computerCirclesDiv = document.createElement('div');
computerCirclesDiv.classList.add('circlesDiv');

gameContainer.appendChild(computerDiv);
computerDiv.appendChild(computerP);
computerDiv.appendChild(computerCirclesDiv);

rpsImgs.forEach((e) => {
  const imgsComputerDiv = document.createElement('div');
  imgsComputerDiv.classList.add('imgsComputerDiv');
  imgsComputerDiv.innerText = e;
  computerCirclesDiv.append(imgsComputerDiv);
});

const finalFragment = document.createDocumentFragment();

const finalSection = document.createElement('section');
finalSection.classList.add('finalSection');

const finalContainer = document.createElement('div');
finalContainer.classList.add('container');

const scoreFinalDiv = document.createElement('div');
scoreFinalDiv.classList.add('scoreFinalDiv');

const scoreText = document.createElement('p');
scoreText.classList.add('scoreText');
scoreText.innerText = `Scores`;

const playerssScoresDiv = document.createElement('div');
playerssScoresDiv.classList.add('playersScoresDiv');

const userScoreText = document.createElement('p');
userScoreText.classList.add('userScoreText');
userScoreText.innerText = `You:`;

let userScore = 0;

const userScoreDiv = document.createElement('div');
userScoreDiv.classList.add('userScoreDiv');

const userScoreP = document.createElement('p');
userScoreP.innerText = userScore;

const computerScoreText = document.createElement('p');
computerScoreText.classList.add('computerScoreText');
computerScoreText.innerText = `Computer:`;

let computerScore = 0;

const computerScoreDiv = document.createElement('div');
computerScoreDiv.classList.add('computerScoreDiv');

const computerScoreP = document.createElement('p');
computerScoreP.innerText = computerScore;

const resultP = document.createElement('p');
resultP.classList.add('resultP');

finalFragment.appendChild(finalSection);
finalSection.appendChild(finalContainer);
finalContainer.appendChild(scoreFinalDiv);
scoreFinalDiv.appendChild(scoreText);
scoreFinalDiv.appendChild(playerssScoresDiv);
userScoreDiv.appendChild(userScoreP);
computerScoreDiv.appendChild(computerScoreP);
playerssScoresDiv.append(
  userScoreText,
  userScoreDiv,
  computerScoreText,
  computerScoreDiv,
  resultP
);
document.body.append(headerFragment, gameFragment, finalFragment);

const uRock = document.querySelector(
  'body > section.gameSection > div > div.userDiv > div > div:nth-child(1)'
);
const uPaper = document.querySelector(
  'body > section.gameSection > div > div.userDiv > div > div:nth-child(2)'
);
const uScissors = document.querySelector(
  'body > section.gameSection > div > div.userDiv > div > div:nth-child(3)'
);

const cRock = document.querySelector(
  'body > section.gameSection > div > div.computerDiv > div > div:nth-child(1)'
);

const cPaper = document.querySelector(
  'body > section.gameSection > div > div.computerDiv > div > div:nth-child(2)'
);

const cScissors = document.querySelector(
  'body > section.gameSection > div > div.computerDiv > div > div:nth-child(3)'
);

const userChoices = [uRock, uPaper, uScissors];

// get the computer choice by random number and assign them to the rock, paper and scissors
const getComputerChoice = function () {
  const randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;
  if (randomNumber === 0) {
    computerChoice = 'Rock';
  } else if (randomNumber === 1) {
    computerChoice = 'Paper';
  } else {
    computerChoice = 'Scissors';
  }
  return computerChoice;
};

const playRound = function () {
  let userSelection;
  let computerSelection;
  userChoices.forEach((e) => {
    e.addEventListener('click', function () {
      if (e === uRock) {
        userSelection = 'Rock';
        uRock.style.backgroundColor = '#b3aa99';
      } else if (e === uPaper) {
        userSelection = 'Paper';
        uPaper.style.backgroundColor = '#b3aa99';
      } else if (e === uScissors) {
        userSelection = 'Scissors';
        uScissors.style.backgroundColor = '#b3aa99';
      }

      computerSelection = getComputerChoice();

      if (computerSelection === 'Rock') {
        cRock.style.backgroundColor = '#b3aa99';
      } else if (computerSelection === 'Paper') {
        cPaper.style.backgroundColor = '#b3aa99';
      } else if (computerSelection === 'Scissors') {
        cScissors.style.backgroundColor = '#b3aa99';
      }

      if (userSelection === computerSelection) {
        roundResult.innerText =
          "It's draw, please press the next round button.";
      } else if (userSelection === 'Rock' && computerSelection === 'Scissors') {
        roundResult.innerText = `You Win, ${userSelection} beats ${computerSelection}!`;
        userScore++;
        userScoreP.innerText = userScore;
      } else if (userSelection === 'Paper' && computerSelection === 'Rock') {
        roundResult.innerText = `You Win, ${userSelection} beats ${computerSelection}!`;
        userScore++;
        userScoreP.innerText = userScore;
      } else if (
        userSelection === 'Scissors' &&
        computerSelection === 'Paper'
      ) {
        roundResult.innerText = `You Win, ${userSelection} beats ${computerSelection}!`;
        userScore++;
        userScoreP.innerText = userScore;
      } else {
        roundResult.innerText = `You Lose, ${computerSelection} beats ${userSelection}!`;
        computerScore++;
        computerScoreP.innerText = computerScore;
      }
      if (computerScore === 5) {
        computerScoreP.innerText = computerScore;
        alert('You Lost, please refresh the page for play again.');
      } else if (userScore === 5) {
        userScoreP.innerText = userScore;
        alert('You Win, please refresh the page for play again.');
      }
    });
  });
};

const nextRound = function () {
  const allChoices = [uRock, uPaper, uScissors, cRock, cPaper, cScissors];
  allChoices.forEach((e) => {
    e.style.backgroundColor = '#4a3747';
  });
  roundResult.innerText = 'Waiting for you to select...';
  round++;
  headerText.innerText = `Round ${round}`;
};

nextButton.addEventListener('click', nextRound);

window.onload = function () {
  playRound();
};

// play 5 rounds and calculate the scores

/* const game = function () {
  let computerScore = 0;
  let playerScore = 0;
  const scores = [];
  for (let i = 0; i < 5; i++) {
    const result = playRound();
    console.log(result);
    if (result.includes('Lose')) {
      computerScore++;
    } else {
      playerScore++;
    }
    scores.push(computerScore, playerScore);
  }
  let scoresResult = `Computer: ${scores[scores.length - 2]} You: ${
    scores[scores.length - 1]
  }`;
  return scoresResult;
};

console.log(game());
*/
