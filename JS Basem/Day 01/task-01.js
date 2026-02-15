var accumlate = 0;
do {
  var input = prompt("Enter a number:");
  if (isNaN(input) || !input) {
    console.log(input);
    alert("Please enter a valid number");
  } else {
    console.log(input);
    accumlate += Number(input);
  }
} while (accumlate < 100 && Number(input) !== 0);
console.log(accumlate);
