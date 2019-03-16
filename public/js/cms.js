$(document).ready(function() {
  // Gets an optional query string from our url (i.e. ?survey_id=23)
  var url = window.location.search;
  var surveyId;
  // Sets a flag for whether or not we're updating a survey to be false initially
  var updating = false;

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

  // Adding an event listener for when the form is submitted
  $(cmsForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the survey if we are missing a email or a name
    if (!nameInput.val().trim() || !emailInput.val().trim()) {
      return;
    }
    // Constructing a newsurvey object to hand to the database
    var newsurvey = {
      name: nameInput.val().trim(),
      email: emailInput.val().trim(),
      html: html.val(),
      css: css.val(),
      javascript: javascript.val()
    };

    console.log(newsurvey);

    // If we're updating a survey run updatesurvey to update a survey
    // Otherwise run submitsurvey to create a whole new survey
    if (updating) {
      newsurvey.id = surveyId;
      updatesurvey(newsurvey);
    } else {
      submitsurvey(newsurvey);
    }
  });

  // Submits a new survey and brings user to members page upon completion
  function submitsurvey(survey) {
    $.survey("/api/surveys/", survey, function() {
      window.location.href = "/members";
    });
  }

  // Gets survey data for a survey if we're editing
  function getsurveyData(id) {
    $.get("/api/surveys/" + id, function(data) {
      if (data) {
        // If this survey exists, prefill our cms forms with its data
        nameInput.val(data.name);
        emailInput.val(data.email);
        surveyChosenSelect.val(data.category);
        // If we have a survey with this id, set a flag for us to know to update the survey
        // when we hit submit
        updating = true;
      }
    });
  }

  // Update a given survey, bring user to the members page when done
  function updatesurvey(survey) {
    $.ajax({
      method: "PUT",
      url: "/api/surveys",
      data: survey
    }).then(function() {
      window.location.href = "/members";
    });
  }
});
