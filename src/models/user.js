module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      Fullname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profileImage: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  );
  return User;
};
