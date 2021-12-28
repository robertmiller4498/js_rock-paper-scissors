//Rock Paper Scissors game
//Set up well, only results in tie at the moment.
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

let playerSelection = 'ROCK' || 'PAPER' || 'SCISSORS';
let computerSelection = 'ROCK' || 'PAPER' || 'SCISSORS';

function computerPlay(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return roundWinner = 'tie';
    } else if (playerSelection > computerSelection) {
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
        return roundWinner = `Player wins round! ${playerSelection} beats ${computerSelection}!`;
    } else if (computerSelection > playerSelection) {
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')
        return roundWinner = `Computer wins round! ${computerSelection} beats ${playerSelection}!`;
    } else {
        return roundWinner = 'Not a tie.';
    }
}
    function getRandomChoice () {
        let randomNumber = Math.floor(Math.random() * 3)
        switch (randomNumber) {
            case 0:
                return 'ROCK'
            case 1:
                return 'PAPER'
            case 2:
                return 'SCISSORS'
            }
        }
    

console.log(computerPlay(playerSelection, computerSelection));

