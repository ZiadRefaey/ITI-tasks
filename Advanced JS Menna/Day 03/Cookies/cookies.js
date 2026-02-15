var date = new Date("4/2/2026");
//cookies library
function getCookie(cookieName) {
  var cookiesArr = document.cookie.split(";");
  var res = "Not found";
  cookiesArr.forEach(function (cookie) {
    var kayeValue = cookie.split("=");
    var key = kayeValue[0].trim();
    var value = kayeValue[1];
    if (cookieName === key) res = value;
  });
  return res;
}
function deleteCookie(cookieName) {
  var cookiesArr = document.cookie.split(";");
  var res = "Not found";
  const earlyDate = new Date("1/1/1");
  cookiesArr.forEach(function (cookie) {
    var kayeValue = cookie.split("=");
    var key = kayeValue[0].trim();
    var value = kayeValue[1];
    if (cookieName === key) {
      document.cookie = key + "=" + value + "; expires=" + earlyDate;
      res = "Cookie has been deleted";
    }
  });
  return res;
}

function setCookie(cookieName, cookieValue, expDate) {
  document.cookie = cookieName + "=" + cookieValue + "; expires=" + expDate;
}

setCookie();

function hasCookie(cookieName) {
  var cookiesArr = document.cookie.split(";");
  var res = false;
  cookiesArr.forEach(function (cookie) {
    var kayeValue = cookie.split("=");
    var key = kayeValue[0].trim();
    if (cookieName === key) {
      res = true;
    }
  });
  return res;
}
function allCookiesList() {
  var cookiesList = [];
  var cookiesArr = document.cookie.split(";");
  cookiesArr.forEach(function (cookie) {
    var kayeValue = cookie.split("=");
    var key = kayeValue[0].trim();
    var value = kayeValue[1];
    cookiesList.push({ key, value });
  });
  return cookiesList;
}

//Register page
if (window.location.href == "http://127.0.0.1:5500/index.html") {
  let expiryDate = new Date("10/10/2026");
  var btnSubmit = document.querySelector(".btn-submit");
  var nameInput = document.querySelector(".username");
  var ageInput = document.querySelector(".age");
  var genderInputs = document.getElementsByName("gender");
  var colorSelect = document.querySelector("select");
  console.log(nameInput);
  console.log(ageInput);
  console.log(colorSelect);
  console.log(genderInputs);
  function getFormData(e) {
    e.preventDefault();
    var username = nameInput.value;
    var age = ageInput.value;

    for (var i = 0; i < genderInputs.length; i++) {
      if (genderInputs[i].checked) {
        selectedGender = genderInputs[i].value;
        break;
      }
    }
    var favoriteColor = colorSelect.value;
    var data = {
      age: age,
      gender: selectedGender,
      color: favoriteColor,
      visited: 0,
    };
    stringifiedData = JSON.stringify(data);
    if (hasCookie(username)) {
      var stringUser = getCookie(username);
      var user = JSON.parse(stringUser);
      user.visited++;
      console.log("non string user", user);
      console.log(JSON.stringify(user));
      setCookie(username, JSON.stringify(user), date);
    } else {
      setCookie(username, stringifiedData, date);
    }
    setCookie("currentUser", username, date);
    window.location.href = "profile.html";
  }
  btnSubmit.addEventListener("click", getFormData);
}

// profile logic
if (window.location.href == "http://127.0.0.1:5500/profile.html") {
  var profileImg = document.querySelector(".profile-image");
  var profileName = document.querySelector(".profile-name");
  var profileVisits = document.querySelector(".profile-visits");
  var currentUser = getCookie("currentUser");
  var user = JSON.parse(getCookie(currentUser));
  var gender = user.gender;
  if (gender == "male") {
    imagePath = "/assets/male.avif";
  } else imagePath = "/assets/female.jpg";
  profileImg.src = imagePath;
  profileName.textContent = currentUser;
  profileName.style.color = user.color;
  profileVisits.style.color = user.color;
  window.addEventListener("load", function () {
    user.visited++;
    profileVisits.textContent = user.visited;
    var stringifiedUser = JSON.stringify(user);
    setCookie(currentUser, stringifiedUser);
  });
  console.log(user);
}
