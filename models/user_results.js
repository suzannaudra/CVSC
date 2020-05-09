
// create model for user results table
module.exports = function(sequelize, DataTypes) {
    var UserResults = sequelize.define("UserResults", {
      data_set1: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      data_set2: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      correlation_votes: {
        type: DataTypes.INTEGER,
      },
      causation_votes: {
        type: DataTypes.INTEGER
      },
      user_comment: {
        type: DataTypes.TEXT
      }      
    });
    
    return UserResults;
  };

//   CREATE TABLE user_results
// (
// 	id int NOT NULL AUTO_INCREMENT,
//     data_set1 INT NOT NULL,
//     data_set2 INT NOT NULL,
// 	correlation_votes INT DEFAULT 0, 
//     causation_votes INT DEFAULT 0, 
//     user_comment VARCHAR(255), -- optional
// 	PRIMARY KEY (id)
// );

