

// // anyName()
// // named function hoisted
// // anyName();
// // function anyName(){
// //     console.log("hellow world")
// // }


// // // anonymous function it can't call before declaration
// // // we use when we need function as a variable 
// // var anonymous = function(){
// //     console.log("anonymous")
// // }

// // anonymous();


// // // arrow function  used as anonymous function
// // const arrowFunction = (param1,param2)=>{
// //     console.log("arrowFUnction")
// // }

// // arrowFunction();



// // const a=()=>{
// //     console.log("a");
// // }


// // const b = function(){
// //     a();
// //     console.log("b")
// // }


// // function c(){
// //     b();
// //     console.log("c")
// // }


// // function d(){
// //     c();
// //     console.log("d")
// // }

// // d();


// // pure function same parameter same output

// // function sum(a,b){

// //     return a+b;
// // }

// // console.log(sum(10, 20))
// // console.log(sum(10, 20))
// // console.log(sum(10, 20))
// // console.log(sum(10, 20))
// // console.log(sum(10, 20))
// // console.log(sum(10, 20))

// // impure function same input diffrent output may occour
// // function rand(a){
// //     return Math.random()*a;
// // }

// // console.log(rand(100))
// // console.log(rand(100))
// // console.log(rand(100))
// // console.log(rand(100))
// // console.log(rand(100))


// // recursion function calling(invoke) itself  with termination condition known as recursion
// // nth number of series
// // function fibonacci(n){

// //     if(n<=1){
// //         return 1;
// //     }

// //     return fibonacci(n-1)+fibonacci(n-2)
// // }

// // console.log(fibonacci(5))


// // callbackfunction function passing as an argument known as callback function
// // javascript is asynchronous in nature
// // synchronous (work is done on sequential manner)


// // function a(cb,arg){

// //     if(parseInt(Math.random()*arg)==3){
// //         cb();
// //     }

// // }


// // a(
    
// // function(){
// //  console.log("completed")   
// // },5

// // )


// // a(
    
// //     function(){
// //      console.log("completed")   
// //     },5
    
// //     )

// // a(
    
// //     function(){
// //      console.log("completed")   
// //     },5
    
// // )
    
// // looping
// // *
// // **
// // ***
// // ****
// // *****

// // printPattern(row)

// // function return min from array with loop and recursion





// // console.log("first")
// // console.log("second")
// // setTimeout(function(){
// //     console.log(" third")
// // },5000)
// // console.log("four")
// // console.log("five")

// var temp ="shdhd"/4;
// console.log(Number.isNaN(1))


// // propeties of string
// var str = "Hello"

// console.log(str.length)


// // template literal es6
// ` dhhdhdhd
// dbdbbd
// ${str}
// `

// let title="hello world"    //Hello World   

// function title(str) { return updateted string with valid title}

let arr =[2,10,5,12,2,5,6,7,8,2,3,4,1,24,54];


// push (insert element at end of the array)
// arr.push(4);

// pop (remove element from the end)

// arr.pop()


// arr.shift()

// arr.shift()



// arr.unshift(5);
// console.log(arr)

// filter is a function that takes callback as an argument and return new array with filtered value according to condition
// arr= arr.filter((elem)=>{
//     return elem%5!==0
// })

// arr.splice(2,1)



// filter is a function that takes callback as an argument and return new array with modification you did
// arr=arr.map(function(elem){
//     return elem**2
// })


// reduce is a function that takes callback as an argument and return single value
// let sum = arr.reduce(function(prevValue,currValue){
//     return prevValue+currValue
// },0)
// console.log(arr)

// arr = [[1,2,3],[4,5],[6,8,[9,10]]]

// arr.forEach(function(elem,row){
    
//     elem.forEach((val,col)=>{
//         console.log(val," row,col   ",row,col)
//     })
// })

// console.log(arr.flat(2))

// console.log(arr.reverse())

// return -1 if element not found else return index of element
console.log(arr)


let obj={
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et niet architecto",
    address:{
        street:"Kanpur",
        state: "U.P"
    },
    hobbies:['Cricket','Football',"Table Tenis"],
    temp:"added"
}

// console.log()

// Object.keys(obj).forEach(value=>{

//     console.log(value,obj[value])
// })

// for(let curr of Object.entries(obj)){
//     console.log(curr);
// }


// console.log("++++++++++++++++++++")
// object destructuring
// temp default value is hello
// const {address,hobbies,temp="Hello"} =obj ;

// console.log(address,hobbies,temp);

//array destructuring
// for(let [key,value] of Object.entries(obj)){
//     console.log(key,value);
// }

// const [first,second,third] =arr

// let a=1,b=2;

// [a,b]=[b,a];

// console.log(a,b)

// let {address:ad,hobbies:hb}=obj;
// console.log(ad,hb)

// let {address:{street},hobbies:[first]}=obj;

// console.log(street,first)

// shallow copy ... (obj,Set,Map,arr,STring)

// let arr1=[1,3,4,5,8,9];

// let arr2 = [...arr1,9,8,7];
// console.log(arr2,arr1)

let obj2={...obj}
console.log(obj2,obj);
// obj2.address.street="New"

// console.log(obj2,obj)


// rest operator
// function sum(...args){
//     console.log(args);
// }

// sum(1,2,4)

// sum(1,2,4,4,5,6,7)

// map is similar to object except one thing map key can be any data type 

const map = new Map();

map.set(1, "I am Number");
map.set("1", "I am string");

// console.log(map.get(1),map.get("1"))
// console.log(map.size)

// map.forEach((value,key)=>{
//     console.log(key,value);
// })

// map.delete(1)
// console.log(map.size,">>>")

// delete obj["key_name"]



const set = new Set([...arr]);

// set.add(2)
// set.add(-1)
// console.log(set.has(-1));