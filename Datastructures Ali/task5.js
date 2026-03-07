function findMissingNumber(arr) {
  if (!arr) return undefined;
  const missingNumbers = [];
  if (arr[0] != 1) missingNumbers.push(1); //1
  //n
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] != 1) {
      //n
      for (let j = arr[i] + 1; j < arr[i + 1]; j++) {
        missingNumbers.push(j);
      }
    }
  }
  if (missingNumbers.length == 0) return "no missing number";
  return `missing numbers are : ${missingNumbers}`;
}
//O(1+n*n+1) = O(n^2) Quadratic
console.log(findMissingNumber([2, 3, 4, 6, 8]));
console.log(findMissingNumber([2, 3, 4, 5, 6, 8]));
console.log(findMissingNumber([1, 2, 3, 4, 5, 6]));
