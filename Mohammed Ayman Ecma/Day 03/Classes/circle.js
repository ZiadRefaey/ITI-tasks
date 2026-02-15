import Shape from "./shape.js";

export default class Circle extends Shape {
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
