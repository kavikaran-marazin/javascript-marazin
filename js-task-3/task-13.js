let isqualification = true;
let entrance_exam_marks = 65;
let isinterviewpassed = true;

if(isqualification){
    if(entrance_exam_marks >= 50){
        if(isinterviewpassed){
            console.log("Congradulation You admission have been approved");
            
        }
        else{
            console.log("Sorry Your admission have rejected, You failed in interview");
            
        }
    }
    else{
        console.log("sorry! Your marks should be 50 or above to get your admission");
        
    }
}
else{
    console.log("Your qualification does not meet our requirements, Your admission is rejected!");
    
}