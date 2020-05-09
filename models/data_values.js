
// data values table model
module.exports = function(sequelize, DataTypes) {
    var DataValues = sequelize.define("DataValues", {
      // data_id: {
      //     type: DataTypes.INTEGER,
      //     allowNull: false,
      //     primaryKey: true,
      // },
      name: DataTypes.STRING,
      x_value: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      y_value: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      }
    });

    // associate with data_names table
    
    DataValues.associate = function(models) {
      
      DataValues.belongsTo(models.DataNames, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    return DataValues;
};

// SCHEMA

  // CREATE TABLE data_values
  // (
  //   data_id int NOT NULL, 	-- manually set id to make inputting values easier
  //   x_value INT NOT NULL, -- EXPECTING YEAR VALUES (ex: 2020)
  //   y_value DECIMAL(10,2) NOT NULL,
      
  //     FOREIGN KEY (data_id)
  //     REFERENCES data_names (data_id)
  //         ON UPDATE CASCADE
  //         ON DELETE RESTRICT 
  // );