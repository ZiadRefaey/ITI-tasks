const overlay = $(".overlay");
overlay.hide(0);
overlay.click(function (e) {
  if (e.target.className === "overlay") {
    overlay.hide(1500);
  }
});
$(".img-wrapper").click(function (e) {
  //   console.log(e.target.attr("src"));
  let imgSrc = $(e.target).attr("src");
  $(".main-img").attr("src", imgSrc);
  overlay.show(0);
});
let index = 0;
const images = [
  "/images/pexels-gaidashz-167145632-20732209.jpg",
  "/images/pexels-guillaume-dhalluin-2159303303-35975973.jpg",
  "/images/pexels-ly-lam-kh-huy-2159008331-35738373.jpg",
  "/images/pexels-yelizegi-35829465.jpg",
];
function next() {
  index++;

  if (index > 3) {
    index = 0;
  }
  updateImg(images[index]);
}
function updateImg(imgSrc) {
  $(".main-img").attr("src", imgSrc);
}
function prev() {
  index--;
  if (index < 0) {
    index = 3;
  }
  updateImg(images[index]);
}
$(".next").click(next);
$(".prev").click(prev);
