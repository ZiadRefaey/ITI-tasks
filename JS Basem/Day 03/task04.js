do {
  var number = prompt("please enter a number");
  if (number <= 0) {
    alert("please enter a positive number");
  }
} while (number <= 0);

alert("square root of your number is: " + Math.sqrt(number));
