module.exports = function(sequelize, DataTypes) {
    var Treasure = sequelize.define("Treasure", {
      userName: {
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

    Treasure.associate = function(models) {
      
      Treasure.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Treasure;
  };
  