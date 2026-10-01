// 3. E-Commerce Order System
// Create a program using switch case and if-else.
// Payment Methods: Cash, Card, Online. 
// Apply different discounts based on payment 
// method and purchase amount.

let paymentmethod = "Cash" ;
let totalpurchase= 150000;

let discount = 0 ;


switch (paymentmethod){
    case "Cash":
        if(totalpurchase >= 100000)
        {
            discount = 0.1
        }
        else if(totalpurchase >= 50000){
            discount = 0.05
        }
        else{
            discount = 0
        }
        break;

    case "Card":
        if(totalpurchase >= 100000){
            discount = 0.2
        }
        else if(totalpurchase >= 50000){
            discount = 0.1
        }
        else{
            discount = 0.05
        }

        break;
    
    case "Online":
        if(totalpurchase >= 100000){
            discount = 0.3
        }
        else if(totalpurchase >= 50000){
            discount = 0.2
        }
        else{
            discount = 0.1
        }
        break;
    
    default:
        console.log("Invalid Payment Method");
        break;
        
}

let discountamount = totalpurchase * discount;
console.log("Your discount: ",discountamount);

let finalamount = totalpurchase - discountamount;

console.log("Your Total : ", finalamount);


let amountpaid = 75000;

let balance ;

if(amountpaid >= finalamount){

    balance = amountpaid - finalamount;
    console.log(`Thankyou for your payment. Please Take Your balance
Rs. ${balance}, Thankyou and ComeBack`);
    
}
else if(amountpaid >0){

    balance = finalamount - amountpaid;

    console.log(`Your paid: ${amountpaid}
You have to pay balance: ${balance}`);
    
}
else{
    console.log("Please Pay first to proceed ..");
    
}
