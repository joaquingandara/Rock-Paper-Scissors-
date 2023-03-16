var choiseOptions= ["Rock", "Paper", "Scissors"]; 

function getComputersChoice(){
    let randomIndex = Math.floor(Math.random() * 3);
    return choiseOptions[randomIndex];
} 

function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase(); 
    
    if(playerSelection == computerSelection){
        return "It's a tie";
    }

    if (isPlayerTheWinner(playerSelection,computerSelection)){
        return true;
    }else{
        return false;
    }
} 

function isPlayerTheWinner(playerSelection,computerSelection){
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

function game(){
    let playersResult = 0; 
    let computerResult = 0; 

    for (let i = 0; i < 5; i++) {
        let roundResult = playRound(prompt("Rock, Paper or Scissors?","Rock"),getComputersChoice());
        let msgResult = "The results are: Player = ";
        if(roundResult){
            playersResult++;
            console.log("You Win!" + " " + msgResult + playersResult + " " + "Computer = " + computerResult);
        }else{
            computerResult++;
            console.log("You Loose!" + " " + msgResult + playersResult + " " + "Computer = " + computerResult);
        }
    } 

    whoIsTheWinner(playersResult,computerResult);
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