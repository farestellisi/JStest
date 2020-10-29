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

computerPlay();
let round;

function playRound(computerItem, playerItem){
    if (playerItem.toLowerCase() === "paper" && computerItem === "rock"){
        round = "You Win! Paper beats Rock"
    }
    if (playerItem.toLowerCase()  === "paper" && computerItem === "scissors"){
        round = "You Lose! Scissors beats Paper"
    }
    if (playerItem.toLowerCase()  === "scissors" && computerItem === "paper"){
        round = "You Win! Scissors beats Paper"
    }
    if (playerItem.toLowerCase()  === "scissors" && computerItem === "rock"){
        round = "You Lose! Rock beats Scissors"
    }
    if (playerItem.toLowerCase()  === "rock" && computerItem === "scissors"){
        round =  "You Win! Rock beats Scissors"
    }
    if (playerItem.toLowerCase() === "rock" && computerItem === "paper"){
        round = "You Lose! Paper beats Rock"
    }
    else if (playerItem.toLowerCase()  === computerItem) {
        round = "It looks like it is a tie!"
    }
    else { 
        round = "Something has gone wrong. Choose only Rock, Paper, or Scissors."
    }
};

let playerItem = "paper";

function game(){
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++){
       playRound(computerItem, playerItem)
       if (round.includes("Win")){
           playerScore++
       }
       if (round.includes("Lose")){
           computerScore++
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
