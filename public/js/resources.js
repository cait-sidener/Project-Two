$(document).ready(function() {
  $("#btnBig1").click(function() {
    $("#html-links").toggle("fast", function() {
      // Animation complete
    });
  });
  $("#btnBig2").click(function() {
    $("#js-links").toggle("fast", function() {
      // Animation complete
    });
  });
  $("#btnBig3").click(function() {
    $("#css-links").toggle("fast", function() {
      // Animation complete
    });
  });
});
