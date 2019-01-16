module.exports = function(sequelize, DataTypes) {
    var Treasure = sequelize.define("Treasure", {
      user: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 150]
        }
      },
      Location : {
        type: DataTypes.FLOAT(20, 3),
        allowNull: false,
      },
      Latitude: {
        type: DataTypes.FLOAT(20, 3),
        allowNull: false,
        validate: {
          len: [1, 150]
        }
      },
      Longitude: {
        type: DataTypes.FLOAT(20, 3),
        allowNull: false,
        validate: {
          len: [1, 150]
        }
      },
      accuracy: {
        type: DataTypes.FLOAT(20, 3),
        allowNull: false,
      },
    });
  
    return Treasure;
  };
  