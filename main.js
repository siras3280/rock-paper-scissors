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
        return [0,0,"It's a Tie"]
    }
    else if (playerSelection =='rock' && computerSelection =='scissors'){
        return [1,0,"You Win! rock beats scissors"]
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'){
        return [0,1,"You Lose! paper beats rock"]
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        return [0,1,"You Lose! rock beats scissors"]
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        return [1,0,"You Win! scissors beats paper"]
        }
    else if (playerSelection == 'scissors' && computerSelection == 'scissors'){
        return [0,0,"It's a Tie"]
    }
    else if (playerSelection == 'paper' && computerSelection == 'paper'){
        return [0,0,"It's a Tie"]
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return [0,1,"You Lose! scissors beats paper"]
    }
    else {
        return [1,0,"You win! Paper beats rock"]
    }
  }
  
  
  function playGame(playerSelection){
    
     let prompt =document.querySelector('.prompt');
     prompt.innerHTML ="Click Your Choice";
    
     console.log(playerSelection);
     
    let computerSelection = getComputerChoice();
    let game = playRound(playerSelection,computerSelection);
    return game;
  };
function gameScore(playerSelection){
    let playerScore = 0;
    let compScore = 0;
    if(playerScore < 5 && compScore < 5){
        let score = playGame(playerSelection);
        playerScore += score[0];
        compScore = score[1];        
    };
      return [playerScore,compScore];
};
function checkWinner(playerSelection){
    let compscore = document.querySelector('#compScore');
    let playerscore = document.querySelector('#playerScore');
    
        let total = gameScore(playerSelection);
        player = total[0];
        comp = total[1];
        compscore.innerHTML =  Number(compscore.innerHTML) + comp ;
        playerscore.innerHTML = Number(playerscore.innerHTML) + player;
        
}
let buttons = document.querySelector('.buttons')
buttons.addEventListener('click',(event)=>{
    
    let playerSelection = event.target.innerHTML;
    let results = document.querySelector(".results")
    checkWinner(playerSelection);
    let compscore = Number(document.querySelector('#compScore').innerHTML);
    let playerscore = Number(document.querySelector('#playerScore').innerHTML);
    if(compscore == 5 && playerscore < 5){
        results.innerHTML = `You lose Computer Score:${compscore} and Player Score: ${playerscore} `;
        setTimeout("location.reload(true);", 10000);
    }
    else if (playerscore == 5 && compscore < 5){
        results.innerHTML = `You win Computer Score:${compscore} and Player Score: ${playerscore}`;
        setTimeout("location.reload(true);", 10000)
    }
})
 

