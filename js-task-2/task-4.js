let years_served = 2;
let base_salary = 80000;
let rating = "B"

let bonus = 0;

if(years_served>=5){

    if(rating=="A"){
        bonus = 0.3;
    }
    else if(rating=="B"){
        bonus = 0.2
    }
    else{
        bonus = 0.1
    }
}
else{
    if(rating=="A"){
        bonus = 0.15
    }
    else{
        bonus = 0.05
    }
}

let final_bonus = base_salary * bonus
let final_salary = base_salary+final_bonus

console.log(`Your base salary is: ${base_salary}
your years of service: ${years_served}
Your Rating: ${rating}
Your bonus percentage: ${bonus*100}%
Your bonus Amount: ${final_bonus}
Your Salary: ${final_salary}`);
