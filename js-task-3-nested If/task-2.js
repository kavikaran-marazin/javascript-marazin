// 2. Student Exam Result — 
// Check whether the student attended the exam. 
// If they attended, check whether the mark is 50 or above.
//  If they passed, check whether the mark is 75
//  or above to display "Distinction"

let attendence = false;
let marks = 49

if(attendence ===true){
    if(marks>=50){
        if(marks >=75){
            console.log("Congratulations Your Distinction Passed!!!");
            
        }
        else{
            console.log("Your Pass.");
        }
    }
    else{
        console.log("sorry! Your fail.");
        
    }
}
else{
    console.log("Student was absent to the exam.");
    
}