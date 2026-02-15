do {
  var personCount = Number(prompt("Enter the no of people"));
  console.log(personCount);
  console.log(isNaN(personCount));
} while (isNaN(personCount) || personCount != false);
var nameRegex = /[a-zA-Z]{3,10}$/;
var ageRegex = /^(1[1-9]|[2-5][0-9])$/;
for (var i = 0; i < personCount; i++) {
  do {
    var username = prompt("Enter user " + (i + 1) + " name");
  } while (!nameRegex.test(username) || !username);
  do {
    var age = prompt("enter user " + (i + 1) + " age");
  } while (!ageRegex.test(age));
  var tableRow = document.createElement("tr");
  var tableDataName = document.createElement("td");
  var tableDataAge = document.createElement("td");
  var tableBody = document.getElementsByTagName("tbody")[0];
  tableDataName.innerText = username;
  tableDataAge.innerText = age;
  tableBody.append(tableRow);
  tableRow.append(tableDataName);
  tableRow.append(tableDataAge);
  console.log(tableBody);
}
