/* eslint-disable linebreak-style */
module.exports = function(sequelize, DataTypes) {
  var Result = sequelize.define("Result", {
    schoolOfStudy: DataTypes.TEXT,
    classCode: DataTypes.TEXT,
    className: DataTypes.TEXT
  });
  return Result;
};
