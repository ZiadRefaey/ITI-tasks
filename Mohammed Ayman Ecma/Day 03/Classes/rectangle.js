import Shape from "./shape.js";

export default class Rectangle extends Shape {
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
