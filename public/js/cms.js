$(document).ready(function() {
  // Gets an optional query string from our url (i.e. ?survey_id=23)
  var url = window.location.search;
  var surveyId;

  // If we have this section in our url, we pull out the survey id from the url
  // In localhost:8080/cms?survey_id=1, surveyId is 1
  if (url.indexOf("?survey_id=") !== -1) {
    surveyId = url.split("=")[1];
    getsurveyData(surveyId);
  }

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
    // $.post("/api/survey", survey, function() {
    //   emailInput.val("");
    //   nameInput.val("");
    //   cmsForm.val("");
    //   html.val("");
    //   css.val("");
    //   javascript.val("");
    //   window.location.href = "/members";
    // });
  }
});
