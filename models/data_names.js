// data_names model
module.exports = function(sequelize, DataTypes) {
  var DataNames = sequelize.define(
    "DataNames",
    {
      dataId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      userResId: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: DataTypes.TEXT,
      x_name: DataTypes.TEXT,
      y_name: DataTypes.TEXT
    },
    { timestamps: false }
  );

  // build association with data_values table
  DataNames.associate = function(models) {
    
    DataNames.hasMany(models.DataValues, {
      foreignKey: {
        name: "dataId",
        allowNull: false
      },
      onDelete: "cascade"
    });

    DataNames.hasOne(models.UserResults, {
        foreignKey: {
            name: "userResId",
            allowNull: false
        }
    });

  };

  return DataNames;
};
