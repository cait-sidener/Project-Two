$(document).ready(function() {
  // Getting jQuery references to the survey email, name, form, and category select
  var emailInput = $("#email");
  var nameInput = $("#name");
  var cmsForm = $("#cms");
  var html = $("#question1");
  var css = $("#question2");
  var javascript = $("#question3");
  console.log(cmsForm);

  // Adding an event listener for when the form is submitted
  $(cmsForm).on("submit", function(event) {
    event.preventDefault();
    // Wont submit the survey if we are missing a email or a name
    if (!nameInput.val().trim() || !emailInput.val().trim()) {
      return;
    }
    insertSurvey();
  });

  // Update a given survey, bring user to the members page when done
  function insertSurvey() {
    var urlParts = window.location.pathname.split("/");
    console.log(urlParts)
    var survey = {
      name: nameInput.val().trim(),
      email: emailInput.val().trim(),
      html: html.val(),
      css: css.val(),
      javascript: javascript.val()
    };
    $.post("/api/survey", survey, function() {
      emailInput.val("");
      nameInput.val("");
      cmsForm.val("");
      html.val("");
      css.val("");
      javascript.val("");
      window.location.href = "/members";
    });
  }
});
