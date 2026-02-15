const fruits = ["apple", "banana", "apple", "pinapple", "mango", "apple"];
const AppleCount = fruits.reduce((acc, fruit) => {
  if (fruit === "apple") return ++acc;
  return acc;
}, 0);
console.log(AppleCount);
