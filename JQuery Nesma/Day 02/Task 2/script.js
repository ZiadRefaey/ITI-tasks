function createLoader(node) {
  const centerlized = $(document.createElement("div"));
  centerlized.addClass("center-children");
  const loader = $(document.createElement("span"));
  loader.addClass("loader");
  centerlized.append(loader);
  $(`${node}`).append(centerlized);
}
createLoader(".sidebar");
$.get("https://jsonplaceholder.typicode.com/users", function (data) {
  data.forEach((user, index) => {
    console.log(user.name);
    var newBtn = $(document.createElement("button"));
    newBtn.text(user.name).addClass("user");
    newBtn.attr("id", index + 1);
    // console.log(newBtn.attr("id"));
    if (index < 1) {
      $(".sidebar").empty();
    }
    $(".sidebar").append(newBtn);
  });
  $("button").click(function () {
    $(".content").empty();

    createLoader(".content");
    var btnID = $(this).attr("id");
    $.ajax({
      url: `https://jsonplaceholder.typicode.com/posts?userId=${btnID}`,
      method: "GET",
      success: function (posts) {
        $(".content").empty();
        for (i = 0; i < posts.length; i++) {
          $(".content").append(
            `<div class='jquery-post'>${posts[i].title}</div>`,
          );
        }
      },
    });
  });
});
