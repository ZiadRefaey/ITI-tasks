$("#services").animate({ width: "100%" }, 2000);
$("#services").animate({ height: "100vh" }, 2000, function () {
  $("#services h2").fadeIn(1000, function () {
    $("#services p").fadeIn(1000, function () {
      $(".img-wrapper")
        .eq(0)
        .slideDown(1500, function () {
          $(".img-wrapper")
            .eq(1)
            .slideDown(1500, function () {
              $(".img-wrapper").eq(2).slideDown(1500);
            });
        });
    });
  });
});
