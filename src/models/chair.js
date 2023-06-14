module.exports = (sequelize, DataTypes) => {
  const chair = sequelize.define(
    "chair",
    {
      status: DataTypes.INTEGER,
    },

    {
      underscored: true,
    }
  );

  chair.associate = (models) => {
    chair.hasMany(models.room, {
      foreignKey: {
        name: "chairId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };

  return chair;
};
