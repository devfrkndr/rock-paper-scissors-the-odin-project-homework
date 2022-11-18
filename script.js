'use strict';

// get the computer choice by random number and assign them to the rock, paper and scissors
const getComputerChoice = function () {
  const randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;
  if (randomNumber === 0) {
    computerChoice = 'rock';
  } else if (randomNumber === 1) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  return computerChoice;
};

// play round by compare the selections, user will use promt function for choice
const playRound = function (playerSelection, computerSelection) {
  playerSelection = prompt();
  playerSelection = playerSelection.toLowerCase();
  computerSelection = getComputerChoice();
  if (computerSelection === 'rock' && playerSelection === 'scissors') {
    return 'You Lose! Paper beats Rock.';
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    return 'You Lose! Paper beats Rock.';
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    return 'You Lose! Scisssors beats Paper.';
  } else {
    return `You Win ${playerSelection} beats ${computerSelection}.`;
  }
};

// play 5 rounds and calculate the scores

const game = function () {
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
