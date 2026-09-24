// 7. Mobile Recharge — Check whether the mobile number is valid
// If valid, check whether the user has enough balance to complete
//  the recharge.

let mobile_number = true;
let account_balance = 40;
let recharge_amount = 400;

if(mobile_number===true){
    if(account_balance>=recharge_amount){
        console.log("Your reload have successfully completed");
        
    }
    else{
        console.log("You have insufficient balance! ");
        
    }
}
else{
    console.log("Incorrect Mobile number");
    
}