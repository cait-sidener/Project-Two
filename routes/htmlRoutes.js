var db = require("../models");

// Requiring path so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Login Authentication
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members/:id", isAuthenticated, function(req, res) {
    console.log("What's my ID??? " + req.params.id);
    db.Survey.findAll({
      where: {
        UserId: req.params.id
      }
    }).then(function(result) {
      res.render("members", {
        data: result
      });
    });
  });

  app.get("/resources", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/resources.html"));
  });

  app.get("/chatroom", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/chatroom.html"));
  });
};
