// 4. Hospital Queue System
// Create a program using switch case and if-else.
// Patient Types: Emergency, Regular.
// Give priority treatment based on patient type and age.

let patienttype = "regular";
let treatment_priority;
let age = 70;

switch(patienttype){
    case "Emergency":
        if(age>=60){
            treatment_priority = "Highest Priority"
        }
        
        else{
            treatment_priority = "High Priority"
        }
    break;

    case "Regular":
        if(age>=60){
            treatment_priority = "Priority"
        }
        else{
            treatment_priority = "Normal Priority"
        }
    break;

    default:
        console.log("Invalid Patient Type");
    break;
        
}
console.log("Patient Type: ", patienttype  );
console.log("Patient Priority: ",treatment_priority);

