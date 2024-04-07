#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, // Base Currency
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.30,
    PKR: 280,
    DIN: 3.12
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'DIN']
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'DIN']
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: 'number'
    }
]);
console.log(user_answer);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //USD base currency
let convertedAmount = baseAmount * toAmount;
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
console.log(convertedAmount);
