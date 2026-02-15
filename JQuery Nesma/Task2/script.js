$(".img-wrapper").click(function (e) {
  //   console.log(e.target.attr("src"));
  let imgSrc = $(e.target).attr("src");
  console.log(imgSrc);
  $(".main-img").attr("src", imgSrc);
});
