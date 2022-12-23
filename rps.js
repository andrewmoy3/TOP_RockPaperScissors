
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

function checkWinner(winner,playerScore,computerScore){
    if(playerScore < 5 && computerScore < 5){
        if(winner == "Player"){
            playerScore++;
        }else if(winner == "Computer"){
            computerScore++;
        };
    }
    console.log(`Player Score: ${playerScore}\nComputer Score: ${computerScore}`)
}

function game(){
    let pS = 0
    let cS = 0
    let winner;
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", e => {
            winner = playRound(button.textContent.toLowerCase());
            if(pS < 5 && cS < 5){
                if(winner == "Player"){
                    pS++;
                }else if(winner == "Computer"){
                    cS++;
                };
            }
            console.log(`Player Score: ${pS}\nComputer Score: ${cS}`)                
            if(pS == 5){
                const winMessage = document.createElement("div");
                winMessage.textContent = `Player won the game!`
                document.querySelector("body").appendChild(winMessage);
            }else if(cS == 5){
                const winMessage = document.createElement("div");
                winMessage.textContent = `Computer won the game!`
                document.querySelector("body").appendChild(winMessage);
            }
        })
    })
}

game()

