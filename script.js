let tieCount = 0;
let userScore = 0;
let computerScore = 0;

const paper = 'paper';
const rock = 'rock';
const scrs = 'scissors';

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 9) + 1;
(computerChoice >= 1 && computerChoice <= 3) ? computerChoice = rock : (computerChoice >= 4 && computerChoice <= 6) ? computerChoice = paper : computerChoice = scrs;
}

let game = (player, computer) => {
  
const message = document.getElementById("message");
  
    if(player == computer) {
        message.appendChild("It's a tie!");
        tieCount++;
    } else if(player == rock) {
        if(computer == paper){
            message.appendChild("You lose! Paper beats rock.");
            computerScore++;
        } else if(computer == scrs) {
            message.appendChild("You won! Rock beats scissors.");
            userScore++
        }
    } else if(player == paper) {
        if(computer == rock) {
            message.appendChild("You won! Paper beats rock.");
            userScore++;
        } else if (computer == scrs) {
            message.appendChild("You lose! Scissors beats paper.");
            computerScore++;
        }
    } else if (player == scrs) {
        if(computer == rock) {
            message.appendChild("You lose! Rock beats Scissors");
            computerScore++;
        } else if (computer == paper) {
            message.appendChild("You won! Scissors beats paper.")
            userScore++;
        }
    } 
}

function playGame() {
  
  let message2 = document.getElementById("message-2");
  let weapons = [rock, paper, scrs];
  
    for(let i = 0; i < 3; i++){
        const playerWeapon = weapons;
        const computerWeapon = getComputerChoice();
        game(playerWeapon, computerWeapon);
    }
    message2.innerText = "The score is: User " + userScore + " Computer: " + computerScore + " Ties: " + tieCount;
    if(userScore > computerScore) {
        message2.innerText = "You are the fucking master of this game!";
    } else if(computerScore > userScore) {
        message2.innerText = "You suck! HAHAHAHAHAH";
    } else {
        message2.innerText = "Both of you suck!";
    } else {
      message2.innerText = none;
    }
}


playGame();
