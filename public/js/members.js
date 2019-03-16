$(document).ready(function() {
  /* global moment */
  // blogContainer holds all of our surveys
  var postCategorySelect = $(".chosen-select");
  // Click events for the edit and delete buttons
  $(document).on("click", "button.edit", handleSurveyEdit);
  postCategorySelect.on("change", handleCategoryChange);
  var surveys;

  // This function grabs surveys from the database and updates the view
  function getSurveys(category) {
    var categoryString = category || "";
    if (categoryString) {
      categoryString = "/category/" + categoryString;
    }
    $.get("/api/surveys" + categoryString, function(data) {
      console.log("surveys", data);
      surveys = data;
      if (!surveys || !surveys.length) {
        displayEmpty();
      } else {
        initializeRows();
      }
    });
  }

  // Getting the initial list of surveys
  getSurveys();
  // InitializeRows handles appending all of our constructed post HTML inside
  // blogContainer
  function initializeRows() {
    blogContainer.empty();
    var surveysToAdd = [];
    for (var i = 0; i < surveys.length; i++) {
      surveysToAdd.push(createNewRow(surveys[i]));
    }
    blogContainer.append(surveysToAdd);
  }

  // This function constructs a post's HTML
  function createNewRow(survey) {
    var newSurveyCard = $("<div>");
    newSurveyCard.addClass("card");
    var newSurveyCardHeading = $("<div>");
    newSurveyCardHeading.addClass("card-header");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn btn-default");
    var newSurveyTitle = $("<h2>");
    var newSurveyDate = $("<small>");
    var newSurveyCategory = $("<h5>");
    newSurveyCategory.text(survey.category);
    newSurveyCategory.css({
      float: "right",
      "font-weight": "700",
      "margin-top": "-15px"
    });
    var newSurveyCardBody = $("<div>");
    newSurveyCardBody.addClass("card-body");
    var newSurveyBody = $("<p>");
    newSurveyTitle.text(survey.title + " ");
    newSurveyBody.text(survey.body);
    var formattedDate = new Date(survey.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    newSurveyDate.text(formattedDate);
    newSurveyTitle.append(newSurveyDate);
    newSurveyCardHeading.append(editBtn);
    newSurveyCardHeading.append(newSurveyTitle);
    newSurveyCardHeading.append(newSurveyCategory);
    newSurveyCardBody.append(newSurveyBody);
    newSurveyCard.append(newSurveyCardHeading);
    newSurveyCard.append(newSurveyCardBody);
    newSurveyCard.data("survey", survey);
    return newSurveyCard;
  }

  // This function figures out which post we want to edit and takes it to the
  // Appropriate url
  function handleSurveyEdit() {
    var currentSurvey = $(this)
      .parent()
      .parent()
      .data("survey");
    window.location.href = "/cms?survey=" + currentSurvey.id;
  }

  // This function displays a message when there are no surveys
  function displayEmpty() {
    blogContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({
      "text-align": "center",
      "margin-top": "50px"
    });
    messageH2.html(
      "No surveys yet for this category, navigate <a href='/cms'>here</a> in order to create a new post."
    );
    blogContainer.append(messageH2);
  }
});
