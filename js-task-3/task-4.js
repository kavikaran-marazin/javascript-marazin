// 4. Online Shopping — Check whether the user is logged in.
//  If logged in, check whether the shopping cart contains
//  products. If products exist, allow the user to proceed
//  to checkout.

let logged_in = true;
let shopping_cart = 1;
let checkout = false;

if(logged_in===true){

    if(shopping_cart>0){
        console.log( checkout ? "Your checkout is ready": "You want to shop more");
        
    }
    else{
       console.log("your shopping cart is empty") 
    }
}
else{
    console.log("You have to logg-in first!");
}