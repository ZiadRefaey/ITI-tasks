const person = {
  name: "Ziad",
  age: 24,
  job: "Frontend Dev",
};

person[Symbol.iterator] = function () {
  const entries = Object.entries(this);
  let index = -1;

  return {
    next() {
      index++;

      return {
        value: entries[index],
        done: index >= entries.length,
      };
    },
  };
};
const d = person[Symbol.iterator]();
console.log(d.next());
console.log(d.next());
console.log(d.next());
console.log(d.next());
for (const [key, value] of person) {
  console.log(key, value);
}
