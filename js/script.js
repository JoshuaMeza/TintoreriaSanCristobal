/* Loader */
$(window).on("load", function () {
  $("#onload").fadeOut("slow");
  $(".page-content").show();
});

/* Carousel */
$(".carousel").carousel({
  interval: 4000,
});

/* Display */
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  var finished = true;

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = reveals[i].getBoundingClientRect().height;

    if (windowHeight > revealTop + revealPoint / 3) {
      reveals[i].classList.add("showing");
    } else {
      finished = false;
    }
  }

  if (reveals.length == 0 || finished) {
    removeListener();
  }
}

function removeListener() {
  window.removeEventListener("scroll", reveal);
}
