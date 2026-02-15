function* fibonacci(maxValue) {
  let cur = 0;
  let prev1 = 1;
  let prev2 = 0;
  yield 0;
  yield 1;
  do {
    cur = prev1 + prev2;
    if (cur > maxValue) return;
    yield cur;
    prev2 = prev1;
    prev1 = cur;
  } while (true);
}
for (const n of fibonacci(91)) {
  console.log(n); // 0, 1, 1, 2, 3, 5, 8 (does no exceed 10)
}
