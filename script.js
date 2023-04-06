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
    playerSelection = playerSelection.toLowerCase();
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
    const button = document.querySelector('.buttons');
    button.removeChild(playButton);
    button.appendChild(rockButton);
    button.appendChild(paperButton);
    button.appendChild(scissorButton);
    
    for(i=1;i<5;i++) {
        playerSelection = getComputerChoice();
        computerSelection=getComputerChoice();
        if(playRound(playerSelection, computerSelection) === 'player'){
        instruction.textContent=`You Won Round ${i}! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        }
        else if(playRound(playerSelection, computerSelection) === 'computer'){
        instruction.textContent=`You Lost Round ${i}! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
        }
        else
        instruction.textContent=`Round ${i} tied`;
        if(playerScore === 5 || computerScore === 5)
        break;
    }
    if(playerScore > computerScore)
    setTimeout(() => instruction.textContent=('You Won'),3000);
    else if(computerScore > playerScore)
    setTimeout(() => instruction.textContent=('You Lost'),3000);
    else if(computerScore==playerScore)
    setTimeout(() => instruction.textContent=('Match tied'));
}

function changeButtons() { /* remove play button and add rock paper scissor button */
    const rockButton = document.createElement('button');
    const paperButton = document.createElement('button');
    const scissorButton = document.createElement('button');
    
    const img = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');
    
    const button = document.querySelector('.buttons');

    rockButton.classList.add('rock');
    img.src = "images/rock.svg";
    img.height = "100px";
    img.width = 'auto';  
    rockButton.appendChild(img);
    button.appendChild(rockButton); /*  create buttons and add img to it */
    
    paperButton.classList.add('paper');
    img2.height = "90px";
    img2.width = 'auto';
    img2.src = 'images/paper.svg';
    paperButton.appendChild(img2);
    button.appendChild(paperButton);

    scissorButton.classList.add('scissor');
    img3.height = "100px";
    img3.width = 'auto';
    img3.src = 'images/scissor.svg';
    scissorButton.appendChild(img3);
    button.appendChild(scissorButton); 
    
}

function addScoreToPage() { /* Add player and computer score in ui */
    const body = document.querySelector('body');

    const div = document.createElement('div');

    const player = document.createElement('div');
    const computer = document.createElement('div');

    const playerScoreText = document.createElement('div');
    const playerScoreValue = document.createElement('div');
    const computerScoreText = document.createElement('div');
    const computerScoreValue = document.createElement('div');

    div.classList.add('score');
    player.classList.add('player');
    computer.classList.add('computer');
    playerScoreText.classList.add('text');
    playerScoreValue.classList.add('score-player');
    computerScoreText.classList.add('text');
    computerScoreValue.classList.add('score-computer');

    playerScoreText.textContent = 'Player';
    computerScoreText.textContent = 'Computer';
    playerScoreValue.textContent = '0';
    computerScoreValue.textContent = '0';

    player.appendChild(playerScoreText);
    player.appendChild(playerScoreValue);
    computer.appendChild(computerScoreText);
    computer.appendChild(computerScoreValue);
    div.append(player);
    div.append(computer);
    body.appendChild(div);
}

function updateScoreUI() {
    document.querySelector('.score-player').textContent = `${playerScore}`;
    document.querySelector('.score-computer').textContent = `${computerScore}`;
}

function end() {
    document.querySelectorAll('button').forEach(item => {
        document.querySelector('.buttons').removeChild(item);
    });
    document.querySelector('body').removeChild(document.querySelector('.score'));
    playerScore = 0;
    computerScore = 0;
    instruction.textContent = 'Play another match?';
    const playButton = document.createElement('button');
    playButton.classList.add('play');
    playButton.addEventListener('click', () => {
        const button = document.querySelector('.buttons');
        button.removeChild(playButton); 
        game();
    });
    document.querySelector('.buttons').append(playButton);
}

function playGame() { 
    document.querySelectorAll('button').forEach(item => {
        item.addEventListener('click', event => {
            let playerSelection = item.classList.value;
            let computerSelection = getComputerChoice();
                if(playRound(playerSelection,computerSelection) === 'player'){
                   instruction.textContent=`You Won This Round! ${playerSelection} beats ${computerSelection}`;
                   playerScore++;
                   updateScoreUI();
                   if(playerScore === 5) {
                    instruction.textContent=('You Won');
                    
                    setTimeout(end, 3000);
                    }
                }
                else if(playRound(playerSelection, computerSelection) === 'computer'){
                    instruction.textContent=`You Lost This Round! ${computerSelection} beats ${playerSelection}`;
                    computerScore++;
                    updateScoreUI();
                    if(computerScore === 5) {
                        instruction.textContent=('You Lost');
                        setTimeout(end, 3000);
                    }
                }
                else
                    instruction.textContent=`Round tied`;
            })
      })
}

function game() {
    changeButtons();
    addScoreToPage();
    instruction.textContent = 'Select Rock, Paper or Scissor';
    playGame();
}

const playButton = document.querySelector('.play');
const instruction = document.querySelector('.instruction');

playButton.addEventListener('click',() => {
    const button = document.querySelector('.buttons');
    button.removeChild(playButton); 
    game();
});

let playerScore = 0;
let computerScore = 0;