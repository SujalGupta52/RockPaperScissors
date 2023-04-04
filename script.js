function getComputerChoice() {
    let choice='';
    let randomNumber= Math.floor(Math.random()*3)+1;
    if(randomNumber===1)
    choice='rock';
    else if(randomNumber===2)
    choice='paper';
    else
    choice='scissor'
    return choice;
}

function playRound(playerSelection,computerSelection) {
    playerSelection= playerSelection.toLowerCase();
    let winner='';
    if(computerSelection === 'rock' && playerSelection === 'paper')
    winner='player';
    else if(computerSelection === 'scissor' && playerSelection === 'paper')
    winner="computer";
    else if(computerSelection === 'paper' && playerSelection === 'rock')
    winner='computer';
    else if(computerSelection === 'scissor' && playerSelection === 'rock')
    winner='player';
    else if(computerSelection === 'paper' && playerSelection === 'scissor')
    winner='player';
    else if(computerSelection === 'rock' && playerSelection === 'scissor')
    winner='computer';
    else 
    winner='none';
    return winner;
}

function game() {
    let playerSelection='';
    let computerSelection='';
    let playerScore=0;
    let computerScore=0;
    for(i=1;i<=5;i++) {
        playerSelection=prompt("Enter rock, paper or scissor");
        computerSelection=getComputerChoice();
        if(playRound(playerSelection, computerSelection)==='player'){
        console.log(`You Won Round ${i}! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
        }
        else if(playRound(playerSelection, computerSelection)==='computer'){
        console.log(`You Lost Round ${i}! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
        }
        else
        console.log(`Round ${i} tied`);
    }
    if(playerScore > computerScore)
    console.log('You Won');
    else if(computerScore > playerScore)
    console.log('You Lost');
    else if(computerScore==playerScore)
    console.log('Match tied');
}

const playButton = document.querySelector('.play');
const instruction = document.querySelector('.instruction');
playButton.addEventListener('click', () => {
    instruction.textContent = 'You clicked';
    setTimeout(() => instruction.textContent = 'Click on icon below to start a new game',3000);
});