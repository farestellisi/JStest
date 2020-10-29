let computerItem

function computerPlay(){
    let num = Math.floor(Math.random()*3)
    if (num === 0){
        return computerItem = "paper" 
    }
    if (num === 1){
        return computerItem = "rock"
    }
    else if (num === 2){
        return computerItem = "scissors"
    }
};

let round;

function playRound(computerItem, playerItem){
    if (playerItem.toLowerCase() === "paper" && computerItem === "rock"){
        round = "You Win! Paper beats Rock"
        return round
    }
    if (playerItem.toLowerCase()  === "paper" && computerItem === "scissors"){
        round = "You Lose! Scissors beats Paper"
        return round
    }
    if (playerItem.toLowerCase()  === "scissors" && computerItem === "paper"){
        round = "You Win! Scissors beats Paper"
        return round
    }
    if (playerItem.toLowerCase()  === "scissors" && computerItem === "rock"){
        round = "You Lose! Rock beats Scissors"
        return round
    }
    if (playerItem.toLowerCase()  === "rock" && computerItem === "scissors"){
        round =  "You Win! Rock beats Scissors"
        return round
    }
    if (playerItem.toLowerCase() === "rock" && computerItem === "paper"){
        round = "You Lose! Paper beats Rock"
        return round
    }
    else if (playerItem.toLowerCase()  === computerItem) {
        round = "It looks like it is a tie!"
        return round
    }
    else { 
        round = "Something has gone wrong. Choose only Rock, Paper, or Scissors."
        return round
    }
};

let playerItem = "paper";

function game(){
    let playerScore = 0
    let computerScore = 0
    let tie = 0
    for (let i = 0; i < 5; i++){
        computerItem = computerPlay()
       playRound(computerItem, playerItem)
       if (round.includes("Win")){
           playerScore++
       }
       if (round.includes("Lose")){
           computerScore++
       }
       else if (round.includes("tie")){
            tie++
       }

       }
    
    if (playerScore > computerScore){
        return "Congratulations, you have won by " + playerScore + " rounds to " + computerScore 
    }
    if (playerScore < computerScore){
        return "Comiserations, you have lost by " + playerScore + " rounds to " + computerScore 
    }
};

console.log(game());
