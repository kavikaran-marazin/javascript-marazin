let restaurent_open = true;
let isitem_available= true;

if(restaurent_open === true){
    if(isitem_available){
        console.log("Your is order placed successfully");
    }
    else{
        console.log("sorry! The selected food item currently unavailable");
        
    }
}
else{
    console.log("The Restaurent is closed");
}