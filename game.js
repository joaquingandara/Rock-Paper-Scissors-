var choiseOptions= ["Rock", "Paper", "Scissors"]; 

function getComputersChoice(){
    let randomIndex = Math.floor(Math.random() * 3);
    return choiseOptions[randomIndex];
} 

function areYouTheWinnerAgainst(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let playerWinner;
    switch(playerSelection){
        case "paper":
            playerWinner = paperAgainst(computerSelection);
            break; 
        case "rock": 
            playerWinner = rockAgainst(computerSelection);
            break;
        case "scissors":
            playerWinner = scissorsAgainst(computerSelection);
            break;
    } 
    return playerWinner;
}

function paperAgainst(opponent){
    return opponent == "rock";
} 
function rockAgainst(opponent){
    return opponent == "scissors";
}
function scissorsAgainst(opponent){
    return opponent == "paper";
}

function isTheWinner(participant,opponent){
    if(participant > opponent){
        return true;
    }else if(playersResult < computerResult){
        console.log("The winner is the computer");
    }else{
        console.log("It's a tie");
    }
}

function showWinnerOfRound(playerSelection,computerSelection){
    if(playerSelection == computerSelection){
        p.textContent = "It's a Tie"; 
        return;
    }

    if (areYouTheWinnerAgainst(playerSelection,computerSelection)){
        p.textContent = 'The winner is the player'; 
    }else{
        p.textContent = 'The winner is the computer';   
    }

    return;
} 

function updateScore(winner){
    const score = document.getElementById(winner);
    score.textContent = Number(score.textContent) + 1;
}
function resetScore(){
    let playerScore = document.getElementById("playerScore");
    let computerScore = document.getElementById("computerScore");

    playerScore.textContent = 0; 
    computerScore.textContent = 0;
}
function checkForWinner(){
    const playerScore = Number(document.getElementById("playerScore").textContent);
    const computerScore = Number(document.getElementById("computerScore").textContent);

    if(playerScore == 5 || computerScore == 5)resetScore(); 
    
    if(playerScore == 5){
        p.textContent = "Congratulations! You are the winner";
    }else if(computerScore == 5){
        p.textContent = "You lost the game";
    }

}
function showSelections(playerSelection,computerSelection){
    selection.textContent = "You choose " + String(playerSelection) +  " and Computer choose " + String(computerSelection);
}

function playRound(e){
    let playerSelection = e.textContent;
    let computerSelection = getComputersChoice();
    showSelections(playerSelection,computerSelection);
    showWinnerOfRound(playerSelection,computerSelection);
    
    if(playerSelection == computerSelection)return; 

    if(areYouTheWinnerAgainst(playerSelection,computerSelection)){
        updateScore("playerScore");
    }else{
       updateScore("computerScore");
    } 

    checkForWinner(); 

    return;
} 

// Implementation UI 
const result = document.querySelector('#results');
const p = document.createElement('p');
result.appendChild(p);

const selection = document.createElement('p');
result.appendChild(selection);

const buttons = document.querySelectorAll('button'); 
buttons.forEach(key => key.addEventListener('click',() => playRound(key)));

/* 

rock - paper = loose 
rock - scissors = win 
rock - rock =  tie 

paper - paper = tie 
paper - scissors = loose 
paper - rock = win 

scissors - paper = win 
scissors - 

*/