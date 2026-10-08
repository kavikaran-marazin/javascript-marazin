let isactive = true;
let leave_balance_days = 15
let requested_days = 11;
let allowed_limit = 10;

if(isactive){
    if(leave_balance_days >= requested_days){
        if(requested_days<=allowed_limit){
            console.log("Your Leave request approved");
            
        }
        else{
            console.log("Rejected: Requested leave duration exceeds the maximum allowed limit");
            
        }
    }
    else{
        console.log("Rejected: Insufficient leave balance");
        
    }
}
else{
    console.log("Rejected: Employee account is inactive. Leave request cannot be processed");
    
}