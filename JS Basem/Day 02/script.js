// function twoParams(a, b) {
//   if (arguments.length !== 2) {
//     throw "Must be two params";
//   }
//   return a + b;
// }
// var x = twoParams(10, 20);
// // var x = twoParams(0,10, 20);
// // var x = twoParams( 20);
// console.log(x);

//----------------------------------------------------------------------------------------------------------
// function sum() {
//   var total = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     if (typeof arguments[i] !== "number") {
//       throw "Arguments must be numbers";
//     }

//     total += arguments[i];
//   }
//   return total;
// }
// var y = sum(5, 10, 15, 50);
// console.log(y);
//----------------------------------------------------------------------------------------------------------
// function reverse() {
//   var arr = [];
//   for (var i = 0; i < arguments.length; i++) {
//     arr.push(arguments[i]);
//   }
//   return arr.reverse();
// }
// console.log(reverse("b", 1, "a"));

//----------------------------------------------------------------------------------------------------------
// function isPrime(num) {
//   if (num < 2) return false;
//   if (num === 2) return true;
//   if (num % 2 === 0) return false;
//   for (var i = 3; i < Math.sqrt(num); i += 2) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
// console.log(isPrime(20));
// const today = new Date();
// const options = { weekday: "long" };
// const currentDayName = today.toLocaleDateString("en-US");

// console.log(currentDayName);
