const { roomModels } = require("../models");
// const { Op } = require("sequelize");

exports.getRoom = (room) => roomModels.findOne({ where: { name: room } });

exports.createRoom = (room) => roomModels.create(room);
