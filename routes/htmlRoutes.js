var db = require("../models");

// Requiring path so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Login Authentication
  app.get("/login", function(req, res) {
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
    db.Survey.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      console.log(result);
      res.render("members", {
        results: result
      });
    });
    // console.log(req.params.id);
  });

  // Index

  // Load index page
  app.get("/cms", function(req, res) {
    db.Result.findAll({}).then(function(dbResult) {
      res.render("cms", {
        results: dbResult
      });
    });
  });
};
