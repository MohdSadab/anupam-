

// anyName()
// named function hoisted
// anyName();
// function anyName(){
//     console.log("hellow world")
// }


// // anonymous function it can't call before declaration
// // we use when we need function as a variable 
// var anonymous = function(){
//     console.log("anonymous")
// }

// anonymous();


// // arrow function  used as anonymous function
// const arrowFunction = (param1,param2)=>{
//     console.log("arrowFUnction")
// }

// arrowFunction();



// const a=()=>{
//     console.log("a");
// }


// const b = function(){
//     a();
//     console.log("b")
// }


// function c(){
//     b();
//     console.log("c")
// }


// function d(){
//     c();
//     console.log("d")
// }

// d();


// pure function same parameter same output

// function sum(a,b){

//     return a+b;
// }

// console.log(sum(10, 20))
// console.log(sum(10, 20))
// console.log(sum(10, 20))
// console.log(sum(10, 20))
// console.log(sum(10, 20))
// console.log(sum(10, 20))

// impure function same input diffrent output may occour
// function rand(a){
//     return Math.random()*a;
// }

// console.log(rand(100))
// console.log(rand(100))
// console.log(rand(100))
// console.log(rand(100))
// console.log(rand(100))


// recursion function calling(invoke) itself  with termination condition known as recursion
// nth number of series
// function fibonacci(n){

//     if(n<=1){
//         return 1;
//     }

//     return fibonacci(n-1)+fibonacci(n-2)
// }

// console.log(fibonacci(5))


// callbackfunction function passing as an argument known as callback function
// javascript is asynchronous in nature
// synchronous (work is done on sequential manner)


function a(cb,arg){

    if(parseInt(Math.random()*arg)==3){
        cb();
    }

}


a(
    
function(){
 console.log("completed")   
},5

)


a(
    
    function(){
     console.log("completed")   
    },5
    
    )

a(
    
    function(){
     console.log("completed")   
    },5
    
)
    