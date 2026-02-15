Array.prototype.myForEach = function (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this);
  }
};
let arr = [1, 2, 3];
arr.myForEach(function (element, i, arr) {
  console.log(element);
  console.log(i);
  console.log(arr);
});
