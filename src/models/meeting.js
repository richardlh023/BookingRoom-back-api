module.exports = (Sequelize, DataTpyes) => {
  const meeting = Sequelize.define(
    "meeting",
    {
      name: {
        type: DataTpyes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      details: {
        type: DataTpyes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      roomNumber: {
        type: DataTpyes.STRING,
        validate: {
          notEmpty: true,
        },
      },

      time: {
        type: DataTpyes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      dateStart: {
        type: DataTpyes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      dateEnd: {
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
    meeting.hasMany(models.booking, {
      foreignKey: {
        name: "meetingId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
    meeting.belongsTo(models.room, {
      foreignKey: {
        name: "roomId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };

  return meeting;
};
