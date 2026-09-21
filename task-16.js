let initialBudget = 100000;
let rent = 30000;
let food = 20000;
let transport = 10000;
let internet = 5000;
let other = 8000;


let totalExpenses = rent + food + transport + internet + other;
let remainingBudget = initialBudget - totalExpenses;


let extraIncome = 5000;
let additionalExpense = 2000;
let finalBalance = remainingBudget + extraIncome - additionalExpense;


console.log("Total Expenses:", totalExpenses);
console.log("Remaining Budget:", remainingBudget);
console.log("Final Balance:", finalBalance);