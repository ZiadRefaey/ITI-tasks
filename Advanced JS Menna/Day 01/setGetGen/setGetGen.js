var obj = {
  username: "ziad",
  age: 25,
  setGetGen: function () {
    var currentObj = this;
    for (var key in currentObj) {
      if (typeof currentObj[key] != "function") {
        (function () {
          var currentValue = currentObj[key];
          Object.defineProperty(currentObj, key, {
            set: function (value) {
              console.log("done with setter function");
              currentValue = value;
            },
            get: function () {
              console.log("done with getter function");
              return currentValue;
            },
          });
        })();
      }
    }
  },
};
var setGetGen = obj.setGetGen;

console.log(obj);
obj.setGetGen();
console.log(obj);

var obj2 = {
  airlines: "Egyptian lines",
  flightNum: "L123",
};
console.log(obj2);
setGetGen.call(obj2);
console.log(obj2);
// console.log(obj.username);
