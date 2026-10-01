// 2. Student Management System 
// Create a program using switch case and if-else. 
// Roles: Admin, Teacher, Student. 
// If the role is Student, check attendance and determine 
// exam eligibility.

let role ="Teacher";
let attendance=300;
let isWantAttendance = 280

switch (role) {
    case "Admin":
        console.log("Admin Access Granded");
        
        break;
    
    case "Teacher":
        console.log("Teacher access grandted");
        
        break;

    case "Students":
        if(attendance>=isWantAttendance){
            console.log("Student is eligible to Atten the Exam");
            
        }
        else{
            console.log("Low Attendance; student is required to submit request letter with reason");
            
        }
        break;
    default:
        console.log("Error, User is not detected");
        
        break;
}