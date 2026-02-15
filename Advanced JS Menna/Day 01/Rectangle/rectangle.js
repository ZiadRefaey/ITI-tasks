function createRectangle(width, height) {
  var obj = {
    width: width,
    height: height,
    calculatePerimeter: function () {
      return (this.width + this.height) * 2;
    },
    calculateArea: function () {
      return this.width * this.height;
    },
    displayInfo() {
      console.log("width: " + width);
      console.log("height: " + height);
      console.log("Perimeter: " + this.calculatePerimeter());
      console.log("area: " + this.calculateArea());
    },
  };
  return obj;
}
var rect = createRectangle(20, 30);
rect.displayInfo();
