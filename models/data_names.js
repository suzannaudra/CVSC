
// data_names model
module.exports = function(sequelize, DataTypes) {
    var DataNames = sequelize.define("DataNames", {
      dataId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
        },
      description: DataTypes.TEXT,
      x_name: DataTypes.TEXT,
      y_name: DataTypes.TEXT
    },
    {timestamps: false}
    );

    // build association with data_values table
    DataNames.associate = function(models) {
      
      DataNames.hasMany(models.DataValues, { // 1 => * DataValues
        foreignKey: {
            name: "dataId",
            allowNull: false
        },
        onDelete: "cascade"
      });

      DataNames.hasMany(models.UserResults, { // 1 => * DataValues
        foreignKey: {
            name: "data1",
            allowNull: false
        }
      });

      DataNames.hasMany(models.UserResults, { // 1 => * DataValues
        foreignKey: {
            name: "data2",
            allowNull: false
        }
      });
    
    };


    return DataNames;
};


//   CREATE TABLE data_names
// (
// 	data_id INT NOT NULL,	-- manually set id to make inputting values easier
// 	`name` varchar(255) NOT NULL, -- should be a unique name for each data set but not enforced
//     `description` varchar(255),
//     x_name varchar(255),
//     y_name varchar(255),
// 	PRIMARY KEY (data_id)
// );