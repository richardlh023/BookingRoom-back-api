const { Op } = require("sequelize");
const { User } = require("../models");

exports.getUserByEmail = (email) =>
  User.findOne({
    where: {
      [Op.or]: { email: email },
    },
  });

exports.createUser = (user) => User.create(user);
