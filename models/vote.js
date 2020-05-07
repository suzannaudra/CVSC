// model to update 'user results table (voting/rating)'
module.exports = function(sequelize, DataTypes) {
  var Vote = sequelize.define("Vote", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Vote;
};
