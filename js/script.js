/* Loader */
$(window).on("load", function () {
  $("#onload").fadeOut("slow");
  $(".page").show();
});

/* Display */
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = reveals[i].getBoundingClientRect().height;

    if (windowHeight > revealTop + revealPoint / 3) {
      reveals[i].classList.add("showing");
    }
  }
}
