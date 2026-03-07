function productOfNumbersExceptSelf(arr) {
  if (!arr) return undefined;
  let tempArr = []; //1
  //n
  for (let i = 0; i < arr.length; i++) {
    let tempMulti = 1; //1
    //n
    for (let j = 0; j < arr.length; j++) {
      if (i == j) continue;
      //1
      tempMulti *= arr[j];
    }
    //1
    tempArr[i] = tempMulti;
  }
  return tempArr;
}
//O(1+n*(n+1)+1) = O(n^2) Quadratic
console.log(productOfNumbersExceptSelf([1, 2, 3, 4, 7]));
