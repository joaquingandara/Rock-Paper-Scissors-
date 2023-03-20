var choiseOptions= ["Rock", "Paper", "Scissors"]; 

function getComputersChoice(){
    let randomIndex = Math.floor(Math.random() * 3);
    return choiseOptions[randomIndex];
} 

function playRound(e){
    let playerSelection = e.textContent;
    let computerSelection = getComputersChoice();
    console.log(playerSelection);

    if(playerSelection == computerSelection){
        p.textContent = 'It is a tie'; 
        return;
    }

   
    if (isPlayerTheWinner(playerSelection,computerSelection)){
        p.textContent = 'The winner is the player'; 
    }else{
        p.textContent = 'The winner is the computer';   
    }
    return;
} 

function isPlayerTheWinner(playerSelection,computerSelection){
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

function whoIsTheWinner(playersResult,computerResult){
    if(playersResult > computerResult){
        console.log("The winner is the player");
    }else if(playersResult < computerResult){
        console.log("The winner is the computer");
    }else{
        console.log("It's a tie");
    }
}

// Implementation UI 
const result = document.querySelector('#results');
const p = document.createElement('p');
result.appendChild(p);

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