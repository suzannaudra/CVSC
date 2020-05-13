
// create model for user results table
module.exports = function(sequelize, DataTypes) {
    var UserResults = sequelize.define("UserResults", {
      userResId: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
    //     dataId: {
    //     type: DataTypes.INTEGER,
    //     required: true
    //   },
      correlation_votes: {
        type: DataTypes.INTEGER,
      },
      causation_votes: {
        type: DataTypes.INTEGER
      },
      user_comment: {
        type: DataTypes.TEXT
      },
        data1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: 'compositeIndex'
      },
      data2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: 'compositeIndex'
      },    
    },
    { timestamps: false });

    // build association with data_values table
    // UserResults.associate = function(models) {
        
    //     UserResults.belongsToMany(models.DataNames, {
    //         foreignKey: {
    //         name: "userResId",
    //         allowNull: false
    //         }
    //         //      onDelete: "cascade"
    //     });

    // }

    return UserResults;
};


