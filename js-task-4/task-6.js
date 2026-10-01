// 6. Super Market Billing System
// (Mini Project) Create a billing system.
// Categories: Grocery, Electronics, Clothing.
// Use switch case for category selection.
// Use if-else for discount calculation.
// Display the final bill amount.

let Categories = "Grocery";

let PurchaseAmount = 100000;
let discount = 0


switch (Categories) {
    case "Grocery":
        if(PurchaseAmount >= 10000){
            discount = 0.1;
        }
        else if(PurchaseAmount >= 5000){
            discount = 0.05
        }
        else{
            discount = 0
        }
        break;

    case "Electronics":
        if(PurchaseAmount >= 50000){
            discount = 0.15;
        }
        else if(PurchaseAmount >= 10000){
            discount = 0.1
        }
        else{
            discount = 0.05
        }
        break;

    case "Clothing":
        if(PurchaseAmount >= 50000){
            discount = 0.3;
        }
        else if(PurchaseAmount >= 20000){
            discount = 0.2
        }
        else{
            discount = 0.1
        }
        break;

    default:
        break;
}
let discountAmount = PurchaseAmount * discount;
let final_amount = PurchaseAmount - discountAmount;

console.log("Purchased Category: ",Categories);
console.log("Your Accutal Total: Rs.",PurchaseAmount);
console.log(`Your Discount Applied: ${discount*100}%
Your Discount Amount ${discountAmount}`);

console.log("Your Total: " ,final_amount);

let Paid_amount = -1
let Balance;

if(Paid_amount >= final_amount ){

    Balance = Paid_amount-final_amount
    console.log("Your Payment is Successful");
    console.log("Take Your Balance: Rs.",Balance);
}
else if(Paid_amount>0){
    Balance = final_amount - Paid_amount
    console.log("Your Payment: Rs.", Paid_amount);
    console.log("You Have to Pay Balance Money: Rs.",Balance);
}
else{
    console.log("Payment is not Completed");
    
}


