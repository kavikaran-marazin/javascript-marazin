// 5. Banking System
// Create a program using switch case and if-else.
// Account Types: Savings, Current.
// Check account balance and display suitable messages.

let isCardActivate = true;
let pin_number = 12345;
let enterPinnumber = 12345;

let Accounttype = "Saving"; //saving or current
let SavingAccBalance = -12000; 
let CurrentAccBalance = 100000;

if(isCardActivate === true ){
    if(pin_number===enterPinnumber){
        switch(Accounttype){

            case "Saving":
                if(SavingAccBalance>0){
                    console.log("You Saving Account Balance: Rs.",SavingAccBalance);
                }
                else if(SavingAccBalance===0){
                    console.log("Your Saving Account Balance is Empty");     
                }
                else{
                    console.log("Your Saving Account is Overdrawn");
                    
                }
                break;

            case "Current":
                if(CurrentAccBalance>0){
                    console.log("You Saving Account Balance: Rs.",SavingAccBalance);
                }
                else if(CurrentAccBalance===0){
                    console.log("Your Saving Account Balance is Empty");     
                }
                else{
                    console.log("Your Saving Account is Overdrawn");
                    
                }
                break;

            default:
                console.log("No Account is Find");
                break;
                
            
        }
    }
    else{
        console.log("Incorrect Pin Number");
        
    }
}
else{
    console.log("Your card is deactivate, Please contact Your Bank"); 
}
