#! /usr/bin/env node
import inquirer from "inquirer";
console.log('\n\tWelcome to AWAIS-cli-number-guessing-game\n');
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your Guessed number (Number limit from 1 to 5):",
    },]);
if (answer.userGuessedNumber === randomNumber) {
    console.log('Congratulations ! You Guessed Correct Number');
}
else {
    console.log('Sorry ! You Guessed Wrong number Please Try Again');
}
