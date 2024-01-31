function getComputerChoice(){
    let choices = ["rock","paper","scissors"] ;
    let choice = choices[Math.floor(Math.random() * choices.length)] ;
    return choice;
}





function playRound(playerSelection, computerSelection) {
    // first item in the array represents player score for a single game
    // second item in the array represents computer score
    // 1 - score for a tie , 2 - score for a win , 0 - score for a loss
    if (playerSelection =='rock' && computerSelection == 'rock'){
        return [1,1,"It's a Tie"]
    }
    else if (playerSelection =='rock' && computerSelection =='scissors'){
        return [2,0,"You Win! rock beats scissors"]
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'){
        return [0,2,"You Lose! paper beats rock"]
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        return [0,2,"You Lose! rock beats"]
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        return [2,0,"You Win! scissors beats paper"]
        }
    else if (playerSelection == 'scissors' && computerSelection == 'scissors'){
        return [1,1,"It's a Tie"]
    }
    else if (playerSelection == 'paper' && computerSelection == 'paper'){
        return [1,1,"It's a Tie"]
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return [0,2,"You Lose! scissors beats paper"]
    }
    else {
        return [2,0,"You win! Paper beats rock"]
    }
  }
  
  
  function playGame(){
    let playerScore = 0;
    let compScore = 0;
    for (let i = 0 ; i < 5; i++ ){
        let playerSelection = prompt("Enter your choice:").toLowerCase();
        let computerSelection = getComputerChoice();
        let game = playRound(playerSelection,computerSelection);
        playerScore += game[0];
        compScore += game[1];
        console.log(game[2]);
    }
    if (playerScore > compScore){
        return `You win, player score: ${playerScore} computer score:${compScore}`;
    }
    else if (playerScore < compScore){
        return `You Lose, player score:${playerScore} computer score: ${compScore}`;
    }
    else{
        return `It's a Tie, player score:${playerScore} computer score: ${compScore}`
    }
  }
  console.log(playGame())