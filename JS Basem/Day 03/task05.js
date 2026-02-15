var arr = [];
var multiplication = 1;
var division;
var sum = 0;
var i = 0;
do {
  var input = Number(prompt("Please enter a number Except 0"));
  if (input !== 0) {
    arr.push(input);
    i++;
  } else {
    alert("You cannot enter 0");
  }
} while (input === 0 || i < 3);

for (var i = 0; i < arr.length; i++) {
  multiplication *= arr[i];
  sum += arr[i];

  if (i === 0) {
    division = arr[i];
  } else {
    division /= arr[i];
  }
}
document.writeln(
  `<h3>Sum of 3 values: ${arr[0]} + ${arr[1]} + ${arr[2]}  = ${sum} </h3>`
);
document.writeln(
  `<h3>Multiplication of 3 values: ${arr[0]} * ${arr[1]} * ${arr[2]}  = ${multiplication}  </h3>`
);
document.writeln(
  `<h3>Division of 3 values: ${arr[0]} / ${arr[1]} / ${arr[2]}  = ${division}  </h3>`
);
