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
        message: "Enter your guess number(Number Limt from 1 to 6):",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulation ! You guess a correct number.");
}
else {
    console.log("Sorry, you guess a wrong number");
}
