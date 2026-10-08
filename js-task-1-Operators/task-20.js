let studentName = "Ahamed";
let courseFee = 100000;
let regFee = 5000;
let discount = 15000;

let totalDue = courseFee + regFee;
totalDue -= discount;

let totalPaid = 25000;
totalPaid += 20000;
totalPaid += 10000;
totalPaid += 10000; 

let remainingBalance = totalDue - totalPaid;
let installment = remainingBalance / 4;
let remainder = remainingBalance % 4;

console.log("--- Payment Summary for " + studentName + " ---");
console.log("Total Due:", totalDue);
console.log("Total Paid:", totalPaid);
console.log("Remaining Balance:", remainingBalance);
console.log("4 Installments of:", installment);
console.log("Remainder:", remainder);