// Creating our Survey model
module.exports = function(sequelize, DataTypes) {
  var Survey = sequelize.define("Survey", {
    // The email cannot be null, and must be a proper email before creation
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // The email cannot be null
    email: {
      type: DataTypes.STRING,
      allowNull: false
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
    },
    matchId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      default: null
    }
  });
  Survey.associate = function(models) {
    Survey.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Survey;
};
