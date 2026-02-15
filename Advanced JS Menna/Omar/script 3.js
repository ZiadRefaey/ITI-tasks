var MyCookieLib = {
    setCookie: function (key, value, expiry) {
        if (!expiry) expiry = new Date();
        document.cookie = key + "=" + value + ";expires=" + expiry.toUTCString() + ";path=/";
    },
    getCookie: function (key) {
        var arr = document.cookie.split(";");
        var res;
        for (var i = 0; i < arr.length; i++) {
            var pair = arr[i].split("=");
            if (pair[0].trim() === key) res = pair[1];
        }
        return res || null;
    },
    deleteCookie: function (key) {
        var pastDate = new Date(0);
        document.cookie = key + "=;expires=" + pastDate.toUTCString() + ";path=/";
    },
    allCookieList: function () {
        var arr = document.cookie.split(";");
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
            var pair = arr[i].split("=");
            obj[pair[0].trim()] = pair[1];
        }
        return obj;
    },
    hasCookie: function (key) {
        return this.getCookie(key) !== null;
    }
};

var username = MyCookieLib.getCookie("username");
var gender = MyCookieLib.getCookie("gender");
var visits = MyCookieLib.getCookie("visits");
var color = MyCookieLib.getCookie("fontColor");

function showProfile() {
    visits = visits ? parseInt(visits) + 1 : 1;
    var expiry = new Date();
    expiry.setMonth(expiry.getMonth() + 1);
    MyCookieLib.setCookie("username", username, expiry);
    MyCookieLib.setCookie("gender", gender, expiry);
    MyCookieLib.setCookie("visits", visits, expiry);
    MyCookieLib.setCookie("fontColor", color, expiry);

    document.body.innerHTML = `
        <div style="text-align:center;color:${color}; margin-top:50px;">
          <h1>Hello: ${username}!</h1>
          <img src="${gender === 'male' ? 'male.png' : 'female.png'}" style="width:150px;height:150px;">
          <p>Your visits count: ${visits}</p>
        </div>
        <div style="text-align:center; margin-top:20px;">
          <button id="logoutBtn" style="padding:10px 20px; font-size:16px; cursor:pointer;">Logout</button>
        </div>
    `;

    document.getElementById("logoutBtn").addEventListener("click", function () {
        MyCookieLib.deleteCookie("username");
        MyCookieLib.deleteCookie("gender");
        MyCookieLib.deleteCookie("visits");
        MyCookieLib.deleteCookie("fontColor");
        location.reload();
    });
}

if (username && gender && color) {
    showProfile();
} else {
    document.getElementById("userForm").addEventListener("submit", function (e) {
        e.preventDefault();
        username = document.getElementById("username").value;
        gender = document.getElementById("gender").value;
        color = document.getElementById("fontColor").value;
        showProfile();
    });
}
