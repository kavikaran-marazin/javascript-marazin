let isregistered = false;
let amount = 90000;
let isvip = false;

let discount = 0

if(isregistered){
    if(amount >= 90000){
        if(isvip){
            discount = 0.3
        }
        else{
            discount = 0.15
        }
    }
    else{
        console.log("No Discount for less then Rs.90000 purchasing");
        
    }
}
else{
    console.log("Customer is Not Registered ");
    
}

let discount_amount = amount*discount;
let Total_amount = amount-discount_amount;

console.log("Your purchased amount: ",amount);
console.log("Customer type: ", isvip ? "VIP" : "Regular Customer");
console.log("Your Total: ",Total_amount);


