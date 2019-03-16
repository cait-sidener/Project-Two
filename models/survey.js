// Creating our Survey model
module.exports = function(sequelize, DataTypes) {
  var Survey = sequelize.define("Survey", {
    // The email cannot be null, and must be a proper email before creation
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    // The email cannot be null
    email: {
      type: DataTypes.STRING,
      allowNull: false
      //   validate: {
      //     isEmail: true
      //   }
    },
    html: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    css: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    javascript: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Survey;
};
