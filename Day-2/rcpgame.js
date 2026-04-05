const prompt = require("prompt-sync")();

const computerChoice = Math.floor(Math.random() * 3) + 1;

let userChoice = prompt(`Please select one of the below options:
1. Press 1 for ROCK
2. Press 2 for PAPER
3. Press 3 for SCISSORS
`);

userChoice = parseInt(userChoice);

console.log("Computer:", computerChoice);
console.log("User:", userChoice);