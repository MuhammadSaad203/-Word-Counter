#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let condition = true;
async function getSentence() {
    console.log(chalk.yellow.bold.italic("\n\t WELCOME TO YOUR OWN WORDS COUNTER "));
    while (condition) {
        const answer = await inquirer.prompt([
            {
                name: "sentence",
                type: "input",
                message: chalk.green.bold.italic("\nEnter a sentence in English : \n\n")
            }
        ]);
        const words = answer.sentence.trim().split(" ");
        console.log(chalk.red.bold.italic(`\nThe words in your sentences are : `));
        console.log(chalk.blue.bold(`\n\t\t${words.length}\n`));
        const more = await inquirer.prompt([
            {
                name: "More",
                type: "confirm",
                message: chalk.green.bold.italic("\n\nDo you want to enter another sentence? \n\n"),
                default: false
            }
        ]);
        condition = more.More;
    }
}
getSentence();
