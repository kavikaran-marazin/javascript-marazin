let hasdegree = true;
let experience = 3;
let ispassed = false;

let application_status = ""

if(hasdegree){
    
    if(experience>=2){
        if(ispassed){
            application_status=("Your application has been granded");
            
        }
        else{
            application_status=("Your application is rejected , you have to pass the technical test");
            
        }
    }
    else{
       application_status=("Working experience must 2years or above");
        
    }
}
else{
    application_status=("Applicant dont have the required degree");
    
}
console.log("Has Required Degree: ", hasdegree ? "Yes" : "No");
console.log("Years of experience: ",experience);
console.log("Passed Technical Test: ", ispassed ? "Pass" : "Fail");
console.log("Application Staus: ",application_status);



