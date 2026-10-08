let course_fee = 80000;
let payments = 10000+15000+20000+5000;
console.log("Total paid fee: " + payments);

let remaining_amount = course_fee - payments;
console.log("Remaining fee: " + remaining_amount);

let installment = remaining_amount/4;
let reminder = remaining_amount % 4
console.log(installment);
console.log(reminder);


