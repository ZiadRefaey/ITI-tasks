function getMin(...args) {
  const min = Math.min(...args);
  return min;
}
function getMax(...args) {
  const max = Math.max(...args);
  return max;
}
console.log(getMin(1, 23, 2, 5, 312));
console.log(getMax(1, 23, 2, 5, 312));
