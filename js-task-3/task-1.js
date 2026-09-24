// 1. ATM Withdrawal System — 
// Check whether the PIN is correct. 
// If the PIN is correct, check whether 
// the account has enough balance to withdraw 
// the requested amount.

let pin_number = true;
let account_balance = 6000;
let withdraw = 100;

if(pin_number==true){
    if(account_balance>=500){
        account_balance -= withdraw
        console.log("Please Take Your Money...Enjoy");
        console.log(`Your Bank Balance:Rs.${account_balance}`);
        
    }
    else{
        console.log(`Insufficent Account Balance: Rs.${account_balance}`);
        
    }
}
else{
    console.log("Incorrect Pin Number.");
    
}

