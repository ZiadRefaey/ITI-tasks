alert("welcome to my site");
do {
  var username = prompt("Please enter your name");
  console.log(typeof username);
} while (typeof username !== "string" || username === "" || isFinite(username));
do {
  var color = prompt("please select a color between red, green or blue");
} while (color !== "red" && color !== "green" && color !== "blue");
document.writeln(
  '<h1 style="color:' + color + '">Welcome ' + username + "</h1>"
);
