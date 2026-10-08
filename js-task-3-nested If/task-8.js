let customer_account = true;
let pendingbill = true;
let billamount = 10000;
let payment = 9000;

if(customer_account===true){
    if(pendingbill===true){
        if(payment>=billamount){
            console.log("You payment is successfully completed");
            
        }
        else{
            console.log("payment failed the amount is insufficient");
            
        }
    }
    else{
        console.log("There is no pending bill you ca proceed");
        
    }
}
else{
    console.log("Customer Account is not active!");
    
}