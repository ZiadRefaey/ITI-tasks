function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    //n
    for (let j = 0; j < arr.length; j++) {
      //n
      console.log(`[${arr[i]}, ${arr[j]}]`);
    }
  }
}
printPairs([1, 2, 3]);
//O(n*n) =  O(n^2) Quadratic
