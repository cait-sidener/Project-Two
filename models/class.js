/* eslint-disable linebreak-style */
module.exports = function(sequelize, DataTypes) {
  var Class = sequelize.define("Class", {
    schoolOfStudy: DataTypes.TEXT,
    classCode: DataTypes.TEXT,
    className: DataTypes.TEXT
  });
  return Class;
};

db.Class.create({
    schoolOfStudy:
    classCode:
    className:
}).then(function(dbClass)) {
console.log(dbClass);
};


db.Class.findOne({ where: { id: 1}}.then(function(dbClass)) {
    console.log(dbClass);
})
