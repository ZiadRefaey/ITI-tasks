function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  Rectangle.count++;
}
Rectangle.count = 0;
Rectangle.prototype.calcPerimeter = function () {
  return (this.width + this.height) * 2;
};
Rectangle.prototype.calcArea = function () {
  return this.width * this.height;
};
Rectangle.prototype.displayInfo = function () {
  console.log(
    "The area of the rectangle is: " +
      this.calcArea() +
      " and the Perimeter of the rectangle is:" +
      this.calcPerimeter(),
  );
};
Rectangle.displayCount = function () {
  console.log("currently created instances are: " + Rectangle.count);
};

var rect1 = new Rectangle(10, 20);
var rect2 = new Rectangle(10, 20);
var rect3 = new Rectangle(10, 20);
var rect4 = new Rectangle(10, 20);
rect1.displayInfo();

Rectangle.displayCount();
