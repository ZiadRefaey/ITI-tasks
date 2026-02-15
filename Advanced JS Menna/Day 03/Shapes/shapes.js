function Shape(width, height) {
  this.width = width;
  this.height = height;
  if (this.constructor === Shape) {
    throw new Error("Cannot create Shape Objects");
  }
}

function Rectangle(width, height) {
  if (this.constructor === Rectangle && Rectangle.count > 0) {
    throw new Error("Can have only one rectangle");
  }
  Shape.call(this, width, height);
  if (this.constructor === Rectangle) {
    Rectangle.count++;
  }
}

Rectangle.count = 0;
Rectangle.prototype.calcPerimeter = function () {
  return (this.width + this.height) * 2;
};
Rectangle.prototype.calcArea = function () {
  return this.width * this.height;
};
Rectangle.prototype.toString = function () {
  return (
    "Width of rectangle is:" +
    this.width +
    " Height of rectangle is: " +
    this.height +
    +"The area of the rectangle is: " +
    this.calcArea() +
    " and the Perimeter of the rectangle is:" +
    this.calcPerimeter()
  );
};
Rectangle.displayCount = function () {
  console.log("currently created instances are: " + Rectangle.count);
};
function Square(side) {
  if (this.constructor === Square && Square.count > 0) {
    throw new Error("Can have only one Square");
  }
  Rectangle.call(this, side, side);
  if (this.constructor === Square) {
    Square.count++;
  }
}
Square.count = 0;
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
const x = new Rectangle(10, 20);
const y = new Square(10, 20);
