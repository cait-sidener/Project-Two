var db = require("../models");

module.exports = function(app) {
  // Get all results
  app.get("/api/results", function(req, res) {
    db.Result.findAll({}).then(function(dbResult) {
      res.json(dbResult);
    });
  });

  // Create a new result
  app.post("/api/results", function(req, res) {
    console.log(req.body);
    db.Result.create({
      schoolOfStudy: req.body.schoolOfStudy,
      classCode: req.body.classCode,
      className: req.body.className
    }).then(function(dbResult) {
      res.json(dbResult);
    });
  });

  // Delete an result by id
  app.delete("/api/results/:id", function(req, res) {
    db.Result.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbResult) {
      res.json(dbResult);
    });
  });

  // Did not add update for now
};
