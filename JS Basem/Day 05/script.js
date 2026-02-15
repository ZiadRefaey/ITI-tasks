var submitBtn = document.querySelector(".btn-submit");
var resetBtn = document.querySelector(".btn-reset");
var nameInput = document.querySelector(".input-name");
var ageInput = document.querySelector(".input-age");
var emailInput = document.querySelector(".input-email");
var nameValidation = document.querySelector(".name-validation");
var ageValidation = document.querySelector(".age-validation");
var emailValidation = document.querySelector(".email-validation");
var table = document.querySelector("table");
var tableBody = document.querySelector("tbody");

resetBtn.addEventListener("click", function (e) {
  e.preventDefault();

  nameInput.value = "";
  ageInput.value = "";
  emailInput.value = "";
  nameValidation.textContent = "";
  ageValidation.textContent = "";
  emailValidation.textContent = "";
});
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  var nameBool;
  var emailBool;
  var ageBool;
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  //Name validation
  if (nameInput.value === "") {
    nameValidation.textContent = "This Field is required";
    nameBool = false;
  } else if (nameInput.value.length < 3) {
    nameValidation.textContent = "Must be more than 3 letters";
    nameBool = false;
  } else if (isFinite(nameInput.value)) {
    nameValidation.textContent = "Cannot be a number";
    nameBool = false;
  } else {
    nameBool = true;
    nameValidation.textContent = "";
  }

  //Age validation
  if (ageInput.value == "") {
    ageValidation.textContent = "This field is required";
    ageBool = false;
  } else if (isNaN(ageInput.value)) {
    ageValidation.textContent = "Cannot be a string";
    ageBool = false;
  } else if (ageInput.value < 10 || ageInput.value > 60) {
    ageValidation.textContent = "must be between 10 and 59 ";
    ageBool = false;
  } else {
    ageValidation.textContent = "";
    ageBool = true;
  }

  //Email validation
  if (emailInput.value == "") {
    emailValidation.textContent = "This field is required";
    emailBool = false;
  } else if (!emailRegex.test(emailInput.value)) {
    emailValidation.textContent = "Must be an email";
    emailBool = false;
  } else {
    emailValidation.textContent = "";
    emailBool = true;
  }
  if (emailBool && ageBool && nameBool) {
    tableBody.innerHTML = `
    <tr>
        <td>${nameInput.value}</td>
        <td>${ageInput.value}</td>
        <td>${emailInput.value}</td>
    </tr>`;
    nameInput.value = "";
    ageInput.value = "";
    emailInput.value = "";
  }
});
