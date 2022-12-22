
let choices = ["rock","paper","scissors"];

function getComputerChoice(){
    return choices[Math.floor(Math.random()*3)];
}

function playRound(playerSelection){
    let computerSelection = getComputerChoice();
    if(playerSelection == computerSelection){
        console.log(`Tie! You both selected ${playerSelection}`)
        return;
    }
    let selections = [playerSelection,computerSelection];
    if(!selections.includes("rock")){
        let winner = playerSelection == "scissors" ? "Player" : "Computer";
        console.log(`Scissors beats Paper, ${winner} wins.`)
        return winner;
    }
    else if(!selections.includes("paper")){
        let winner = playerSelection == "rock" ? "Player" : "Computer";
        console.log(`Rock beats Scissors, ${winner} wins.`)
        return winner;
    }
    else if(!selections.includes("scissors")){
        let winner = playerSelection == "paper" ? "Player" : "Computer";
        console.log(`Paper beats Rock, ${winner} wins.`)
        return winner;
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let winner;

    
}

function checkWinner(winner){
    if(playerScore < 5 && computerScore < 5){
        if(winner == "Player"){
            playerScore++;
        }else if(winner == "Computer"){
            computerScore++;
        };
    }
    console.log(`Player Score: ${playerScore}\nComputer Score: ${computerScore}`)
    if(playerScore>computerScore){
        console.log("You win")
    }
    else if(playerScore == computerScore){
        console.log("You tied")
    }
    else{
        console.log("Computer wins")
    }
}
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventSelector("click", e => {
        console.log("hello")
        checkWinner(playRound(button.textContent));
    })
})
game()