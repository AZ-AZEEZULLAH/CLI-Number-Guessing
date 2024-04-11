#!/usr/bin/env node
import inquirer from "inquirer";
console.log("welcome to Number Guessing Game");
// 1) Computer will genarate a random number
// 2) user input for guessing number 
// 3) compare user input with computer generated number and show result -do
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6:",
    },
]);
if (answer.usersGuessedNumber) {
    console.log("Congratulation! you guessed right number");
}
else {
    console.log("You guessed wrong number");
}
