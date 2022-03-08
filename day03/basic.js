// DatatTypes in jabascript
// javscript is dynaimc type in nature

// var a="string";
// a=10;
// a=[];
// a={}

// Two category of data types
// 1-> Primitive Datatype  (Number,String,Boolean,Null,Undefined) Pass By Value
// 2-> Non Primitive Datatype (Object,Array,Map,Set,Function)

// Primitive Pass By value
//  NOn Primitive Pass By Refrence

let a= 10;
let b=a;
b=30;

console.log("a ",a," b ",b);

// object key:value pair (key string, value (any datatype))
let user1 = {
    firstName:"Mohd",
    lastName:"Sadab",
    address:{
        "street":"Plot no 566",
        "state":"U.P"
    }
}

let user2=user1;    //pass by reference


//object value access way 

// object.key_name (key is string)   , object[key_name] (key_name can be variable)

// let key="firstName"
// user1[key] 

// let keys= Object.keys(user1)
// console.log(keys)

// user2.firstName = "New"

// console.log(user1,user2)

// we can copy the object by some other way 



// String (text of chracters)

let str1 = 'Valid String'
let str2 = "Valid String"
// let str3 = ' In valid "
let str4 = "It's  also valid"
let str5 = 'It\'s  also valid'   // \' tells the js compiler escape next ' it is not end '
console.log(str5)

// String  in Javascript is immutable
// str1[0] ='P'

// we change string through some function 
console.log(str1[0],str1)


// Number  can be written with or without deciimal 
let num = 34.00  
num= 34;
num = 34.199999927

num = 123e5 // sceintific notation 12300000
num = 123e-5 // sceintific notation 0.00123


//  Booleans (True or False)

let a1=5,b1=5;
let bool = a1==b1;
console.log(bool) // true

bool = a1==6;
console.log(bool) // false

bool =true; 
bool = false; //direct assigning


//  Array  [] //square braces comma seprated value any datatype mutable
let cars = ["Toyota","Nexa","Kwid"];

// access way cars[0] //Toyota  cars[1] "Nexa" cars[2] "Kwid"

cars[0] ="Baleno"
console.log(cars);

let temp = 4%2  ;    // gives remender


// two types of increment and decrement

// ++preincrement, --predecrement have highest priority
//  preincrement  ++variable   variable must be number
//  postincrement variable++ 

// postincrement++, postdecrement-- have lowest priority
//  predecrement  --variable   variable must be number
//  postdeccrement variable--

let post =10

// post = ++post*10
// // post 110

// //  1110 - 111(reason preincrement)
// post = ++post*10 - post
// console.log(post)

// postDecrement--
let post2 = post-- - 5;

console.log(post2,post)

//  && logical and  logical or ||  ! Not

//  true || false  (any one is true in or result is true)

// true && false (any one is false result of and is false)

//  !true (false Not means Negate)

// post = post+5   it is same as    post+=5     (+=  here + can be any operator )


// type conversion
typeof("1")  // return the data type of variable
typeof(post) // return the data type of post

// javascript weak data type

"1"==1   // == compaires only value not data type  answer true
"2"==1  // answer false
// javascript internally convert both data type to toString and compaires value

"1" === 1  // === compiares value with datatype answer false 
1 === 1    // answer true

"1" != 1  // != compiares only value 1 is equal to 1 so answer is false
"1" !== 1 // !== compiares  value with data type 1 is equal to 1 and both are diffrent datatype so answer is true

// ?: ternary operator ( condition ? condition_true return_this: return_this)

// let i_am_true = 5>4?"true":"false";
// console.log(i_am_true)

var not_defined;
var i_am_null = null;
console.log(not_defined,i_am_null);

// t = (not_defined !== null && not_defined !== undefined) ? not_defined : b;
let t= not_defined ?? 10;
console.log(t);

const marks = 54;

// if(marks>=60){
//     // any valid javascript
//     console.log("first division")
// }else{
//     // any valid javascript
//     console.log("second division")
// }

if(marks>=60){
    // any valid javascript
    // database save 
    //  ui per pop up 
    console.log("first division")
}else if(marks>=50 && marks<60){
    // any valid javascript
    console.log("second division")
}else if(marks>33 && marks<50){
    console.log("third division")
}else{
    console.log("failed")
}

const day = "Sunday";

// if we don't use break then after executing match case all the bellow case will get executed
// switch(day){

//     case "Saturday":
//         console.log("Saturday");

//     case "Sunday":
//         console.log("Sunday");
        
//     case "Monday":
//         console.log("Monday");

//     default:
//         console.log("No case match")

// }


// switch(day){

//     case "Saturday":
//         console.log("Saturday");
//         break;

//     case "Sunday":
//         console.log("Sunday");
//         break;
        
//     case "Monday":
//         console.log("Monday");
//         break;

//     default:
//         console.log("No case match")
//         break;

// }


// using same logic for multiple case
// switch(day){

//     case "Saturday":
//     case "Sunday":
//         console.log("Weekend");
//         break;
        
//     case "Monday":
//         console.log("Monday");
//         break;

//     default:
//         console.log("No case match")
//         break;

// }


let val="0";

switch(val){
    case 0:
        console.log("Non strict copairison")
        break;
    
    default:
        console.log("strict copairison")
}


//  javascript single threaded asyncronous programming lanuage