class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    if (this.constructor === Shape) {
      throw new Error("Cannot create an instance of Shape");
    }
  }
}
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  calcArea() {
    return this.width * this.height;
  }
  calcPerimeter() {
    return (this.width + this.height) * 2;
  }
}
class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calcArea() {
    return this.radius * this.radius * Math.PI;
  }
  calcPerimeter() {
    return this.radius * 2 * Math.PI;
  }
}
const rectangle = new Rectangle(10, 20);
console.log(rectangle);
console.log(rectangle.calcPerimeter());
const square = new Square(20);
console.log(square);
console.log(square.calcArea());
const circle = new Circle(10);
console.log(circle);
console.log(circle.calcPerimeter());
console.log(circle.calcArea());
