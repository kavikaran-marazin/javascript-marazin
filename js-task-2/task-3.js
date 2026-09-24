// Question 3: E-Commerce Discount System

let amount = 10000;
let ispremium = false;
let coupon = false;
let discount = 0;

if(ispremium==true){

    if(amount>=10000){
        discount = 0.2;
    }
    else{
        discount = 0.1;
    }
}
else{
    // for regular
    if(amount >= 10000){
        discount = 0.1;
    }
    else{
        discount = 0
    }    
}


let discount_amount = amount*discount
let final_amount = amount-discount_amount

if(coupon==true){
    final_amount -= 500;
}

if(final_amount<=0){
    final_amount=0
}

console.log(`Original Amount: ${amount}`);
console.log("Customer Type:", ispremium ? "Premium" : "Regular");
console.log(`Discount Applied: ${discount*100}%`);
console.log("Coupon Used:", coupon ? "Yes (Rs. 500 off)" : "No");
console.log(`Final Amountc: Rs ${final_amount}`);






