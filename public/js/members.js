$(document).ready(function() {
  console.log("hello!");
  // Getting jQuery references to the survey email, name, form, and category select
  var emailInput = $("#email");
  var nameInput = $("#name");
  var cmsForm = $("#cms");
  var html = $("#question1");
  var css = $("#question2");
  var javascript = $("#question3");
  console.log(cmsForm);

  $(document).on("click", function() {
    event.preventDefault();
    console.log($(this));
  })
  // Adding an event listener for when the form is submitted
  $("#survey-submit").on("click", function(event) {
    event.preventDefault();
    // Wont submit the survey if we are missing a email or a name
    if (!nameInput.val().trim() || !emailInput.val().trim()) {
      return;
    }
    insertSurvey();
  });

  // Update a given survey, bring user to the members page when done
  function insertSurvey() {
    var userId = window.location.pathname.split("/").pop();
    console.log(userId);
    var survey = {
      name: nameInput.val().trim(),
      email: emailInput.val().trim(),
      html: html.val(),
      css: css.val(),
      javascript: javascript.val(),
      UserId: userId
    };
    $.post("/api/survey", survey, function() {
      emailInput.val("");
      nameInput.val("");
      cmsForm.val("");
      html.val("");
      css.val("");
      javascript.val("");
      window.location.reload();
    });
  }
});
