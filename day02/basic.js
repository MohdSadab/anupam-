// use for output
// single line comment
console.log(" i am in the basic file")
// document.write("Hello world")
// console.error("error")
// console.table({'table':'hello'})
console.time('start')
// for(let i=0;i<1000000;i++){

// }

console.timeEnd('start')

// javascript single threaded event driven programming language
//  we don't do cpu intensive work in frontend if we do so main thread will lock page will freeze


// variable is a quantifier(identifier) which contains value which gets varies with time
// binding is dynamic
var a,b,c; //variable declaration

a=10 //assignment means put ten in the memory of a

b=10;

// = least priority use bodmas
c= a+b*20/10;

c= (a+b)*20;  //output 400 (first this calculate then multiply with 20)

// c= a**b  // a power b
console.log(c);

// ; semicolon means next sentance is new sentance



// multiline comments
/**
 * not a fixed keyword
 * start must be with string and $, _
 * can contains number, _ , $ , # 
 */


// z=10;
// console.log(z);

// below are the fixed keyword which cna not use as a variable name
//  function, String, Boolean, Object, Array, let, const, var, switch, for, if,else, while, try, return etc

// 5 * 10 expression

//  in javascript keywords and variable names are case sensitive 
//  example a !=A 

let z=10,Z=20;
console.log(z,Z)

// +  string concate operator if one of the operand is string

// 1+"fmfmfmfmf"
// '1fmfmfmfmf'
// 1-"1"
// 0
// 1-[]
// 1
// 1-"djjdj"
// NaN
// 1*"djjdj"
// NaN
// 1/"djjdj"
// NaN