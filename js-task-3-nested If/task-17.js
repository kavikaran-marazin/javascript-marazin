let hasAccount = true;              
let isCourseAvailable = true;      
let completedPrerequisite = true;   

let enrollmentStatus = "";

if (hasAccount) {
    if (isCourseAvailable) {
        if (completedPrerequisite) {
            enrollmentStatus = "Success: Enrolled in the course successfully.";
        } else {
            enrollmentStatus = "Failed: You must complete the prerequisite course first.";
        }
    } else {
        enrollmentStatus = "Failed: The selected course is currently unavailable.";
    }
} else {
    enrollmentStatus = "Failed: Student account required to enroll.";
}

console.log("Course Enrollment Status:", enrollmentStatus);