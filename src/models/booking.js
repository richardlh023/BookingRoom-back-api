module.exports = (Sequelize, DataTpyes) => {
  const booking = Sequelize.define(
    "booking",
    {},
    {
      underscored: true,
    }
  );

  booking.associate = (models) => {
    booking.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };

  return booking;
};
