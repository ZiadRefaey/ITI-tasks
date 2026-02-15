const redRange = document.querySelector(".red");
const greenRange = document.querySelector(".green");
const blueRange = document.querySelector(".blue");

const redValue = document.querySelector(".r-value");
const greenValue = document.querySelector(".g-value");
const blueValue = document.querySelector(".b-value");

const paragraph = document.querySelector(".paragraph");
var red = 0;
var green = 0;
var blue = 0;
function changeRed() {
  red = redRange.value;
  redValue.textContent = redRange.value;
  console.log("red");
  paragraph.style.color = `rgb(${red},${green},${blue})`; // red
}
function changeGreen() {
  green = greenRange.value;
  greenValue.textContent = greenRange.value;
  paragraph.style.color = `rgb(${red},${green},${blue})`; // red
}
function changeBlue() {
  blue = blueRange.value;
  blueValue.textContent = blueRange.value;
  paragraph.style.color = `rgb(${red},${green},${blue})`; // red
}
