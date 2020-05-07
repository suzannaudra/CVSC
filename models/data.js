// model to get data set values from database

module.exports = function(sequelize, DataTypes) {
  var Vote = sequelize.define("Vote", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return Vote;
};