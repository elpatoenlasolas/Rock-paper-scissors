function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 9) + 1;
    (computerChoice >= 1 && computerChoice <= 3) ? computerChoice = "Rock" :
    (computerChoice >= 4 && computerChoice <= 6) ? computerChoice = "Paper" :
    computerChoice = "Scissors";
    return computerChoice;
}

const playerWeapon = prompt('Choose your weapon', 'Rock, Paper or Scissors');
const computerWeapon = getComputerChoice();

let playGame = (player, computer) => {
    if(player === computer) {
        console.log("It's a tie!")
}
}