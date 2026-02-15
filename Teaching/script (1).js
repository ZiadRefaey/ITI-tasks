/* ---------------------------- try .. catch --------------------------- */

// try{
//     // var x = 10;
//     console.log(x);
// }catch(err){ //exception
//     console.log(err.message);
// }finally{

// }

// => Use IF condition instead try .. catch

// //finally => execute no matter what happens

// console.log("Hamada");

/* ---------------------------- functions types --------------------------- */

// function statement

// function test(){
//     console.log("ay 7aga");
// }

// test();

// function expression

// var x = function(){ //anonymous function
//     console.log("ay 7aga");
// }

// x();

// self invoked function

// (function(x){
//     console.log(x);
// })(1);

/* ---------------------------- callback function --------------------------- */

// function add(x,y){
//     console.log(x,y);

//     return x() + y();
// }

// function num1(){
//     return 10;
// }

// function num2(){
//     return 20;
// }

// console.log(add(num1,num2));

/* ---------------------------- forEach --------------------------- */

// Loop ?
// Retrun ?
// Parameters ? => callback fn
// Logic ? =>

// var arr = ["Hamada","Mostafa","Ahmed"];

// var x = arr.forEach(function(ele,i,arr){
// console.log(ele);
// if (ele == "Mostafa") {
//     console.log("ay 7aga");
// }
// return ele;
// })

// console.log(x);

// function myForEach(arr, fn){
//     for(var i = 0;i < arr.length;i++){
//         fn(arr[i],i,arr);
//     }
// }

// function test(/**PARAMS */){
//     // debugger;
//     // console.log(arguments);
//     // 0 => Value
//     // 1 => Index
//     // 2 => Array
//     console.log(arguments[0]);
// }

// myForEach(arr,test) // ===> arr.forEach(test)

// function test(){
//     var y = 10;
//     console.log(y);
//     return function(){
//         console.log(y); // 10 ==> Closure
//         //store closure var into memory => calculate if i want a closure or not
//         //undefined => no return
//     }
// }

// var x = test();
// console.log(x());

// console.dir(x); //directory => gets everything about the object itself

/* ---------------------------- counter example --------------------------- */

// var counter = 0;
// counter++;
// counter++;
// counter++;
// counter++;
// counter = 7; // => Fail
// counter++;
// console.log(counter);

// function increment(){
//     var counter = 0;
//     counter++;
//     return counter;
// }

// function increment(){
//     var counter = 0; //Closure
//     return function(){
//         counter++;
//         return counter;
//     };
// }

// var num = increment(); //body

// console.log(num());

// console.log(num()); //1
// console.log(num()); //2
// console.log(num());

// var num2 = increment(); //body

// console.log(num2());
// console.log(num2());
// console.log(num2());
// console.log(num());

// console.dir(num);
// console.dir(num2);

/* ---------------------------- closure --------------------------- */

// 1. function inside of a function
// 2. inner function uses a variable from the outer function
// creates CLosure

/* ---------------------------- closure example --------------------------- */

var arr = [];

for (var i = 0; i < 3; i++) {
  function Hamada() {
    var x = i; //Closure
    arr.push(function () {
      console.log(x);
    });
  }
  Hamada();
}

// 0 1 2
// 2 2 2
// 3 3 3
// 0 0 0

console.log(i);
console.log(arr[0]());
arr[1]();
