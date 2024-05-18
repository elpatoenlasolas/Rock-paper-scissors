let tieCount = 0;
let userScore = 0;
let computerScore = 0;

const paper = 'paper';
const rock = 'rock';
const scissors = 'scissors';

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 9) + 1;
    return (computerChoice >= 1 && computerChoice <= 3) ? rock :
           (computerChoice >= 4 && computerChoice <= 6) ? paper :
           scissors;
}

let game = (player, computer) => {
    const message = document.getElementById("message");

    if (player === computer) {
        message.append("It's a tie!");
        tieCount++;
    } else if (player === rock) {
        if (computer === paper) {
            message.append("You lose! Paper beats rock.");
            computerScore++;
        } else if (computer === scissors) {
            message.append("You won! Rock beats scissors.");
            userScore++;
        }
    } else if (player === paper) {
        if (computer === rock) {
            message.append("You won! Paper beats rock.");
            userScore++;
        } else if (computer === scissors) {
            message.append("You lose! Scissors beats paper.");
            computerScore++;
        }
    } else if (player === scissors) {
        if (computer === rock) {
            message.append("You lose! Rock beats Scissors.");
            computerScore++;
        } else if (computer === paper) {
            message.append("You won! Scissors beats paper.");
            userScore++;
        }
    }
}

function playGame() {
    let message2 = document.getElementById("message-2");
    let weapons = [rock, paper, scissors];

    for (let i = 0; i < 3; i++) {
        const playerWeapon = weapons[i];
        const computerWeapon = getComputerChoice();
        game(playerWeapon, computerWeapon);
    }

    message2.innerText = `The score is: User ${userScore} Computer: ${computerScore} Ties: ${tieCount}`;
    
    if (userScore > computerScore) {
        message2.innerText = "You are the master of this game!";
    } else if (computerScore > userScore) {
        message2.innerText = "You lose! Better luck next time.";
    } else {
        message2.innerText = "It's a draw!";
    }
}

playGame();
