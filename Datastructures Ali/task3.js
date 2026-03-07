function isSorted(arr) {
  if (!arr) return undefined;
  let bool = true; //1
  //n
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) bool = false;
  }
  return bool;
}
//O(1 + n) = O(n) Linear
console.log(isSorted([1, 3, 4, 7]));
console.log(isSorted([1, 7, 4, 7]));
