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
    message.innerText = ''; // Clear previous messages

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

    updateScore();
}

function updateScore() {
    const message2 = document.getElementById("message-2");
    message2.innerText = `The score is: User ${userScore} Computer: ${computerScore} Ties: ${tieCount}`;
}

function playGame(playerWeapon) {
    const computerWeapon = getComputerChoice();
    game(playerWeapon, computerWeapon);
}

document.getElementById('rock').addEventListener('click', () => playGame(rock));
document.getElementById('paper').addEventListener('click', () => playGame(paper));
document.getElementById('scissors').addEventListener('click', () => playGame(scissors));
