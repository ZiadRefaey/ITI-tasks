const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

do {
  var email = prompt("please enter your email");
  if (!emailRegex.test(email)) {
    alert("please enter a valid email");
  }
} while (!emailRegex.test(email));
alert("your email is: " + email);

const nameRegex = /^[A-Za-z]{3,16}$/;
do {
  var fullName = prompt("please enter your Name");
  if (!nameRegex.test(fullName)) {
    alert("please enter a valid name");
  }
} while (!nameRegex.test(fullName));
alert("your name is: " + fullName);
