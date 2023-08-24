function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 9) + 1;
    (computerChoice >= 1 && computerChoice <= 3) ? computerChoice = "Rock" :
    (computerChoice >= 4 && computerChoice <= 6) ? computerChoice = "Paper" :
    computerChoice = "Scissors";
    return computerChoice;
}

const playerWeapon = prompt('Choose your weapon', 'Rock, Paper or Scissors');
const computerWeapon = getComputerChoice();

let game = (player, computer) => {
    if(player == computer) {
        console.log("It's a tie!");
    } else if(player == 'Rock') {
        if(computer == 'Paper'){
            console.log("You lose! Paper beats rock.");
        } else if(computer == 'Scissors') {
            console.log("You won! Rock beats scissors.");
        }
    } else if(player == 'Paper') {
        if(computer == 'Rock') {
            console.log("You won! Paper beats rock.");
        } else if (computer == "Scissors") {
            console.log("You lose! Scissors beats paper.");
        }
    } else if (player == 'Scissors') {
        if(computer == 'Rock') {
            console.log("You lose! Rock beats Scissors");
        } else if (computer == "Paper") {
            console.log("You won! Scissors beats paper.")
        }
    }
}