const colorPalettes = [
  {
    main: "#0F172A",
    secondary: "#38BDF8",
    tertiary: "#F8FAFC",
  },
  {
    main: "#F8FAFC",
    secondary: "#4F46E5",
    tertiary: "#1E293B",
  },
  {
    main: "#064E3B",
    secondary: "#FCD34D",
    tertiary: "#ECFDF5",
  },
  {
    main: "#7C2D12",
    secondary: "#FFEDD5",
    tertiary: "#FFFFFF",
  },
  {
    main: "#FAF5FF",
    secondary: "#7E22CE",
    tertiary: "#2E1065",
  },
  {
    main: "#111827",
    secondary: "#10B981",
    tertiary: "#F9FAFB",
  },
];
function getPosts() {
  var request = new XMLHttpRequest();
  request.open("get", "https://jsonplaceholder.typicode.com/posts");
  request.send();
  var container = document.querySelector(".container");
  var curHTML = "";
  request.addEventListener("readystatechange", function () {
    if (this.readyState == 4 && this.status === 200) {
      var posts = JSON.parse(this.response);
      console.log(posts);
      console.log(container);
      posts.forEach(function (element) {
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        var palette = colorPalettes[randomNumber - 1];
        var html = `<div class="card" style="background-color: ${palette.main}; color: ${palette.tertiary};">
        <div class="id-container"><p class="id" style="background-color: ${palette.secondary};">1</p></div>
        <div class="content">
          <h1>${element.title}</h1>
          <p>
           ${element.body}
          </p>
        </div>
      </div>`;
        curHTML += html;
      });
      container.innerHTML = curHTML;

      console.log(posts);
    }
  });
}
getPosts();
