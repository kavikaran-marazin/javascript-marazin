//Function Declaration
function greet(name){
    return "Hello " + name;
}
let greets = greet("kavi")
console.log(greets);


//function Expression
const welcome = function(name){
    return "Hello " + name;
}
let welcomes = welcome("Prakanya")
console.log(welcomes);


//arrow function
const greetings = (name) =>{
    return "Hello " + name;
}
let greeting = greetings("Kaviharan")
console.log(greeting);


//Anonymous Function  --- method-1
setTimeout(function(name){
    console.log("Hi There! ,Im " + name);
},1000,"Haran");


//Anonymous Function  --- method-2
function greetss(name){
    console.log("Hello im " + name);
    
}

// setTimeout(function(){
//     greetss("Kaviharan")
// },2000);

setTimeout(() => {
    greetss("Reacher")
}, 2000);


//Immediately Invoked function(IIFE)

(function() {
    console.log("I run Immediately!");
    
})();


//Callback Function
function process(cb) {
    cb();
}


//Default parameter 

function greeet(name = "Guest"){
    console.log("Hello " + name);
     
}
greeet()


//rest parameter

function sum(...nums){
    return nums.reduce((a,b) => a+b, 0);
}
let sums = sum(5,8)
console.log(sums);

//recursive function
function fact(n){
    if (n===0) return 1;
    return n * fact(n-1);
}
let facts = fact(4)
console.log(facts);

//higher order function
function multiplyBy(factor){
    return function(num){
        return num * factor;
    };
}

let multiply = multiplyBy(6)
console.log(multiply(7));
