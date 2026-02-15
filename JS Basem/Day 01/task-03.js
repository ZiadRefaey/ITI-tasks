do {
  var message = prompt("enter a message");
} while (isFinite(message) || message === "" || typeof message !== "string");
for (var i = 1; i <= 6; i++) {
  document.writeln("<h" + i + ">" + message + "</h" + i + ">");
}
