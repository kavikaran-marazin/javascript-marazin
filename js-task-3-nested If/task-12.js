let worked_years = 3;
let rating = "High"
let salary = 100000;
let bonus = 0

if(worked_years>=2){
    if(rating==="High"){
        if(salary>=80000){
            bonus = 0.2
        }
        else{
            bonus = 0.1
        }
    }
    else{
        bonus = 0.5
    }
}
else{
    console.log("You must have experience years of 2 or above");
    
}

let bonus_amount = salary*bonus
let final_salary = bonus_amount+salary

console.log(`Your salary: ${salary}
your bonus: ${bonus_amount}
Your salary with bonus: ${final_salary}`);
