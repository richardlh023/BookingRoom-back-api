module.exports = (sequelize, DataTypes) => {
  const roomModels = sequelize.define(
    "room",
    {
      name: DataTypes.STRING,
      numberSeat: DataTypes.STRING,
      image: DataTypes.STRING,
    },

    {
      underscored: true,
    }
  );

  roomModels.associate = (models) => {
    roomModels.hasMany(models.meeting, {
      foreignKey: {
        name: "roomId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
    roomModels.belongsTo(models.chair, {
      foreignKey: {
        name: "chairId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };

  return roomModels;
};
