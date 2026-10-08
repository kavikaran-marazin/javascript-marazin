// 6. Hotel Room Booking — 
// Check whether the customer is logged in. 
// If logged in, check whether a room is available. 
// If available, check whether payment has been completed.


let logged_in = true;
let rooms = 10;
let customer_bill = 10000;
let room_rate = 20000;

if(logged_in===true){
    if(rooms > 0){
        if(room_rate===customer_bill){
            console.log("You've Successfully Booked Your Rooms");
            
        }
        else{
            console.log("You have to complete your payment");
            
        }
    }
    else{
        console.log("sorry! no rooms are available now.");
        
    }
}
else{
    console.log("you have to logg-in first!");
    
}