module.exports = (Sequelize, DataTpyes) => {
  const meeting = Sequelize.define(
    "meeting",
    {
      message: DataTpyes.STRING,
      image: {
        type: DataTpyes.STRING,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      underscored: true,
      paranoid: true,
    }
  );

  meeting.associate = (models) => {
    meeting.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };

  return meeting;
};
