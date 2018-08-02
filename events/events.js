


function randomX() {
  return Math.random() * $(window).width();
}

function randomY() {
  return Math.random() * $(window).height();

}
$("#moveButton").on("click", function () {
    console.log("Entered");

    $("#message").css("left", randomX());
    $("#message").css("top", randomY());
});
/* END PROVIDED CODE */

// Write your code below this line :)
