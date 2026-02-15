const obj = {};
const handler = {
  set(obj, prop, value) {
    switch (prop) {
      case "name":
        if (value.length !== 7 || typeof value != "string") {
          throw new Error("Must be a string and exactly 7 characters");
        }
        obj.name = value;
        break;
      case "address":
        if (typeof value != "string") {
          throw new Error("Must be a string");
        }
        obj.address = value;
        break;
      case "age":
        if (value < 25 || value > 60 || typeof value != "number") {
          throw new Error("Must be a number between 25 and 60 ");
        }
        obj.age = value;
        break;

      default:
        throw new Error("properties must be either a string, address or age");
    }
  },
};
const objProxy = new Proxy(obj, handler);
objProxy.name = "asddddd";
objProxy.address = "asd";
objProxy.age = 55;
// objProxy.whatever = "asd";
