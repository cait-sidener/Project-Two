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

  // NavBarlinks solution:
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
    }
  };
  var userId = getUrlParameter('userId');
  var profileLink = "/members/" + userId;
  $("#profileMenuLink").attr("href", profileLink);
  var resourceLink = "/resources.html?userId=" + userId;
  $("#resourcesMenuLink").attr("href", resourceLink);
  var videoLink = "/video.html?userId=" + userId;
  $("#videoMenuLink").attr("href", videoLink);

// End Document Ready
});