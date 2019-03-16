$(document).ready(function() {
  /* global moment */
  // membersContainer holds all of our surveys
  // var surveyCategorySelect = $(".chosen-select");
  // // Click events for the edit and delete buttons
  // $(document).on("click", "button.edit", handleSurveyEdit);
  // surveyCategorySelect.on("change", handleCategoryChange);
  // var surveys;

  // // This function grabs surveys from the database and updates the view
  // function getSurveys(category) {
  //   var categoryString = category || "";
  //   if (categoryString) {
  //     categoryString = "/category/" + categoryString;
  //   }
  //   $.get("/api/surveys" + categoryString, function(data) {
  //     console.log("surveys", data);
  //     surveys = data;
  //     if (!surveys || !surveys.length) {
  //       displayEmpty();
  //     } else {
  //       initializeRows();
  //     }
  //   });
  // }

  // // Getting the initial list of surveys
  // getSurveys();
  // // InitializeRows handles appending all of our constructed survey HTML inside
  // // membersContainer
  // function initializeRows() {
  //   membersContainer.empty();
  //   var surveysToAdd = [];
  //   for (var i = 0; i < surveys.length; i++) {
  //     surveysToAdd.push(createNewRow(surveys[i]));
  //   }
  //   membersContainer.append(surveysToAdd);
  // }

  // // This function constructs a survey's HTML
  // function createNewRow(survey) {
  //   var newSurveyCard = $("<div>");
  //   newSurveyCard.addClass("card");
  //   var newSurveyCardHeading = $("<div>");
  //   newSurveyCardHeading.addClass("card-header");
  //   editBtn.text("EDIT");
  //   editBtn.addClass("edit btn btn-default");
  //   var newSurveyTitle = $("<h2>");
  //   var newSurveyDate = $("<small>");
  //   var newSurveyCategory = $("<h5>");
  //   newSurveyCategory.text(survey.category);
  //   newSurveyCategory.css({
  //     float: "right",
  //     "font-weight": "700",
  //     "margin-top": "-15px"
  //   });
  //   var newSurveyCardBody = $("<div>");
  //   newSurveyCardBody.addClass("card-body");
  //   var newSurveyBody = $("<p>");
  //   newSurveyTitle.text(survey.title + " ");
  //   newSurveyBody.text(survey.body);
  //   newSurveyTitle.append(newSurveyDate);
  //   newSurveyCardHeading.append(editBtn);
  //   newSurveyCardHeading.append(newSurveyTitle);
  //   newSurveyCardHeading.append(newSurveyCategory);
  //   newSurveyCardBody.append(newSurveyBody);
  //   newSurveyCard.append(newSurveyCardHeading);
  //   newSurveyCard.append(newSurveyCardBody);
  //   newSurveyCard.data("survey", survey);
  //   return newSurveyCard;
  // }

  // This function figures out which survey we want to edit and takes it to the
  // Appropriate url
  function handleSurveyEdit() {
    var currentSurvey = $(this)
      .parent()
      .parent()
      .data("survey");
    window.location.href = "/members?survey=" + currentSurvey.id;
  }

  // This function displays a message when there are no surveys
  function displayEmpty() {
    membersContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({
      "text-align": "center",
      "margin-top": "50px"
    });
    messageH2.html(
      "No surveys yet for this category, navigate <a href='/cms'>here</a> in order to create a new survey."
    );
    membersContainer.append(messageH2);
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
