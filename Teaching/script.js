// Initiate counter

// Function to increment counter
// function add() {
//   var x = 0;
//   var y = 1;
//   var sum = x + y;

//   return function () {
//     counter++;
//     console.log(counter);

//   };
// }
// var y = add();

// y();
// y();
// y();
// Call add() 3 times
// add();
// add();
// add();
// Example 1
// var f;
// var x;
// var g = function () {
//   var a = 5; //X01

//   f = function () {
//     return (a = a + a); //X02
//   };
//   x = function () {
//     return (a = a + 1); //X02
//   };
//   console.log(a);
// };

// g();
// console.log(f());
// console.log(f());
// console.log(x());
// console.log(x());
// g();
// console.log(x());
// console.dir(f);

// var h = function () {
//   var b = 12;
//   f = function () {
//     console.log(b * b);
//   };
// };

// // Re-assigning f function
// h();
// f();
// console.dir(f);

// // Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);
// function createBankAccount(initialBalance) {
//   let balance = initialBalance; // 🔒 private variable (closure)

//   return {
//     deposit(amount) {
//       if (amount <= 0) {
//         console.log("Deposit must be positive");
//         return;
//       }
//       balance += amount;
//       console.log(`Deposited ${amount}. New balance: ${balance}`);
//     },

//     withdraw(amount) {
//       if (amount > balance) {
//         console.log("Insufficient funds");
//         return;
//       }
//       balance -= amount;
//       console.log(`Withdrew ${amount}. New balance: ${balance}`);
//     },

//     getBalance() {
//       return balance;
//     }
//   };
// }
