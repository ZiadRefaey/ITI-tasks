function reverseArray1(arr) {
  if (!arr) return undefined;
  let arr2 = []; //1
  //n
  for (let i = arr.length - 1; i >= 0; i--) {
    arr2[arr.length - i - 1] = arr[i];
  }
  //n
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr2[i];
  }
  //1+n+n = 1+2n = O(n) Linear
}
const arr = [1, 3, 4, 5];
reverseArray1(arr);
console.log(arr);
