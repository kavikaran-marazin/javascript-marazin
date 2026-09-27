let custmer_age = 19;
let isEmployed = true;
let income = 80000;
let eligible_status = ""

if(custmer_age >= 20 && custmer_age<=60){
    if(isEmployed){
        if(income>=100000){
            eligible_status = "Eligible: Assigned to Premium Insurance plan"
        }
        else if(income>=50000){
            eligible_status = "Eligile : Assigned to Standard insruance plan"
        }
        else{
            eligible_status = "Eligible: Assigned to Basic Insurance PLan"
        }
    }  
    else{
        eligible_status = "Insurance not available for unemployed individuals."
    }
}
else{
    eligible_status = "Your age should be within range of 20 t0 60"
}

console.log("Customer Age: ",custmer_age);
console.log("Employed Status: ", isEmployed ? "Employed" : "Unemployed");
console.log("Monthly Income: Rs. ", income);
console.log("Insurance Status:", eligible_status);


