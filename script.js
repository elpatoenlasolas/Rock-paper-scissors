function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 9) + 1;
    (computerChoice >= 1 && computerChoice <= 3) ? computerChoice = "Rock" :
    (computerChoice >= 4 && computerChoice <= 6) ? computerChoice = "Paper" :
    computerChoice = "Scissors";
    console.log(computerChoice);
}
getComputerChoice();