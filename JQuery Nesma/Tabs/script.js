$("button").click(function () {
  $("button").removeClass("active");
  $(this).toggleClass("active");
  console.log(this.innerHTML);
  $(".content").text("Content " + this.innerHTML);
});
