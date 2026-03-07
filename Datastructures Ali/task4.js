function isSameFrequence(arr1, arr2) {
  if (!arr1 || !arr2 || arr1.length !== arr2.length) return undefined;
  let bool = true; //1
  //n
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] * arr1[i] != arr2[i]) {
      bool = false;
    }
  }
  //O(1+n) = O(n) Linear
  return bool;
}
console.log(isSameFrequence([1, 2, 3], [1, 4, 9]));
console.log(isSameFrequence([1, 2, 3], [1, 4, 10]));
console.log(isSameFrequence([1, 2, 3], [2, 4, 9]));
