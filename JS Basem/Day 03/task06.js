var arr = [];
for (var i = 0; i < 5; i++) {
  arr.push(Number(prompt("Please enter a number")));
}
var ArrDeepCopy1 = [];
var ArrDeepCopy2 = [];
ArrDeepCopy1 = ArrDeepCopy1.concat(arr);
ArrDeepCopy2 = ArrDeepCopy2.concat(arr);
var ascendedArr = ArrDeepCopy1.sort(function (a, b) {
  return a - b;
});
var descendedArr = ArrDeepCopy2.sort(function (a, b) {
  return b - a;
});

for (var i = 0; i < arr.length; i++) {
  if (i == 0) {
    document.writeln("<span>Original Array: </span>");
  }
  document.writeln("<span>" + arr[i] + "</span>");
}
document.writeln("<br/>");

for (var i = 0; i < ascendedArr.length; i++) {
  if (i == 0) {
    document.writeln("<span>Sorted Array (Asc): </span>");
  }
  document.writeln("<span>" + ascendedArr[i] + "</span>");
}
document.writeln("<br/>");

for (var i = 0; i < descendedArr.length; i++) {
  if (i == 0) {
    document.writeln("<span>Sorted Array(DSC): </span>");
  }
  document.writeln("<span>" + descendedArr[i] + "</span>");
}
