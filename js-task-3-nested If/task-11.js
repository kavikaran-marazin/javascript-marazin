let age = 22;
let salary = 80000;
let credit_score = 800;

if(age >= 21 ){
    if(salary>=65000){
        if(credit_score >= 700){
            console.log("You are eligible to get the loan");
            
        }
        else{
            console.log("sorry not enough credit score!");
            
        }
    }
    else{
        console.log("Your salary at least Rs.65000 to get the loan ");
        
    }
}
else{
    console.log("Your age is must be 21 or above to get the loan");
    
}