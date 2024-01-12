//
//file: app.js
//author: Yug Patel
//last modified: 9 January 2024

let message = document.querySelector("#msg");
let userScore= 0;
let computerScore= 0;

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");


const choices=document.querySelectorAll(".choice");

const generateCompChoice = () =>{
    //rock, paper, scissors
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("Game was Draw");
    message.innerText = "Draw. Play again.";
    message.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        message.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";

    }else{
        computerScore++;
        compScorePara.innerText = computerScore;
        console.log("you lose");
        message.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) =>{
    //generate computer choice
    const compChoice = generateCompChoice();

    if(userChoice === compChoice){//Draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){ // scissors,paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){ // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{ // paper, rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});