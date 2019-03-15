/* eslint-disable linebreak-style */
module.exports = function(sequelize, DataTypes) {
  var Result = sequelize.define("Result", {
    email: DataTypes.TEXT,
    html: DataTypes.INTEGER,
    css: DataTypes.INTEGER,
    javascript: DataTypes.INTEGER
  });
  return Result;
};
