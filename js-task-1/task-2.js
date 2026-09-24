let lap = 120000;
let mouse =2500;
let keyboard = 5000;

let totalCost = lap + mouse + keyboard;
console.log("Total cost of the items is: " + totalCost);

totalCost -= 5000;
let deliveryCharge = 2000;
totalCost += deliveryCharge;
console.log(`Total cost after discount and delivery charge is: ${totalCost}`);