const options = ['rock', 'paper', 'scissors'];


function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)]
    return choice;
}

function getPlayerChoice() {
     const choice = prompt('Rock, Paper, Scissors');
    return choice.toLowerCase();
   
    
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Draw';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'Player';
    } else
        return 'Computer';
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);

    if (result == 'Draw') {
        return `Draw! Your score: ${playerScore}, Enemy score: ${computerScore}`;
    } else if (result == 'Player') {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}. Your score: ${playerScore}, Enemy score: ${computerScore}`;
    } else {
        computerScore++;
        return `You lost! ${computerSelection} beats ${playerSelection}. Your score: ${playerScore}, Enemy score: ${computerScore}`;
    }
}

function getScore() {
    if (playerScore == computerScore) {
        return `DRAW! Your score: ${playerScore}, Enemy score: ${computerScore}`;
    } else if (playerScore > computerScore) {
        return `You WON! Congratulations! Your score: ${playerScore}`;
    } else
        return `You LOSE! Better luck next time! Your score: ${playerScore}`;
}

let playerScore = 0;
let computerScore = 0;


function game() {
  
for(let i=0; i<5; i++){
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}
     
console.log(`Game Over!`);
console.log(getScore());

}

game();