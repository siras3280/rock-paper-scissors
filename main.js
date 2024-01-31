function getComputerChoice(){
    let choices = ["rock","paper","scissors"] ;
    let choice = choices[Math.floor(Math.random() * choices.length)] ;
    return choice;
}



let playerSelection = prompt("Enter your choice:").toLowerCase();
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    // first item in the array represents player score for a single game
    // second item in the array represents computer score
    // 1 - score for a tie , 2 - score for a win , 0 - score for a loss
    if (playerSelection =='rock' && computerSelection == 'rock'){
        return [1,1]
    }
    else if (playerSelection =='rock' && computerSelection =='scissors'){
        return [2,0]
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'){
        return [0,2]
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        return [0,2]
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        return [2,0]
        }
    else if (playerSelection == 'scissors' && computerSelection == 'scissors'){
        return [,1]
    }
    else if (playerSelection == 'paper' && computerSelection == 'paper'){
        return ["It's a Tie!",1]
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return ["You Lose! scissors beats paper",1]
    }
    else {
        return ["You Win! Paper beats rock",1]
    }
  }
  console.log(playRound(playerSelection, computerSelection))