export default class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    if (this.constructor === Shape) {
      throw new Error("Cannot create an instance of Shape");
    }
  }
}
