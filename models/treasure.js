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
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 150]
        }
      },
      Latitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          len: [1, 150]
        }
      },
      Longitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          len: [1, 150]
        }
      },
      accuracy: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          len: [1, 150]
        }
      },
    });
  
    return Treasure;
  };
  