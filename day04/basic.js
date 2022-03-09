
// loops are used to do repeatedly task
// const arr=[1,2,10,5,6,90]

// we can traverse the array using loop

// for 
// while
// do while

// var i;
// for(intitalization;condition;incrementation){}

// increment i by 1
// for(i=0;i<arr.length;i++){
//   console.log(arr[i]);
// }


// increment i by 2
// for(i=0;i<arr.length;i=i+2){
//   console.log(arr[i]);
// }


// multiply i by 2 it stucks in infinite loop because when i=0 i*2 is always 0 
// for(i=0;i<arr.length;i=i*2){
//   console.log(arr[i]);
// }

//  it is also fine we can create variable inside for loop
// for(let i=0;i<arr.length;i++){
//   console.log(arr[i]);
// }

// for(let i=0;i<arr.length;){
//     // i=0
//     i++; // i=1
//     console.log(arr[i]);
// }

// let max =arr[0];

// for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i]   //updating max if it is less than arr[i]
//     }
// }

// console.log(max);

// [1,2,10,5,6,90]


const arr=[1,5,2,10,6,90]

// for( let i=0;i<arr.length;i++){

//     if(arr[i]%5===0){
//         continue;
//     }

//     console.log(arr[i])
// }


// first even number

// for(let i=0;i<arr.length;i++){

//     if(arr[i]%2===0){
//         console.log("first even number in array",arr[i]);
//         break;  //end the loop 
//     }
// }

// console.log("hello world")


// let i=0;

// // this use when we don't know the size of
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }

// let i=10;

// this execute the {} statement at least once whether condition is true or false
// do{

//     console.log(arr[i],i)
//     i++;

// }while(i<arr.length)


// function getMax(arr){
//     let max =arr[0];

//     for(let i=0;i<arr.length;i++){
//         if(max<arr[i]){
//             max=arr[i]   //updating max if it is less than arr[i]
//         }
//     }

//     return max
// }

// console.log(getMax([1,3,45,7,8,9]));
// console.log(getMax([1,3,5,89,81,119]))

// console.log(getMax)


// global scope
// var scope function level  (variable declare inside function can be accessed only inside function)
// block level scope  (let,const)

// let temp=1;  //global scope var a=1;


// function getName(){
//     var name="Hello"
//     console.log(name);
// }

// getName()
// console.log(name,">>>")


// {
//     let a=1;
//     var b=10;
// }

// console.log(b);

// for(var i=0;i<5;i++){

// }
// console.log(i) print 5 because var is functional scope



// for(let i=0;i<5;i++){

// }
// console.log(i) //gives error because let is block scope

const PI= 3.14; //we can not update this  same as let but can't update


hoistMe();

function hoistMe(){
    //var i;  underhood javascript declare variable here
    console.log(" i get hoisted",i)
    var i=10;  // it get hoisted 
}


// function hoistMe(){
//     console.log(" i get hoisted",i)
//     let i=10; // it is not hoisted gives refrenced error
// }
