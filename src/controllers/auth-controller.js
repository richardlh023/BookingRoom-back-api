const {
  validateRegister,
  validateLogin,
} = require("../validators/auth-validator");
const userService = require("../services/user-service");
const createError = require("../utils/create-error");
const bcryptService = require("../services/bcrypt-service");
const tokenService = require("../services/token-service");
const roomService = require("../services/room-service");

exports.register = async (req, res, next) => {
  try {
    const value = validateRegister(req.body);

    const isUserExist = await userService.checkEmail(value.email);
    if (isUserExist) {
      createError("อีเมลถูกใช้แล้ว");
    }

    value.password = await bcryptService.hash(value.password);

    const user = await userService.createUser(value);

    const accessToken = tokenService.sign({ id: user.id });
    res.status(200).json({ accessToken });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const value = validateLogin(req.body);
    const user = await userService.getUserByEmail(value.email);
    if (!user) {
      createError("คุณเข้าสู่ระบบไม่ได้", 400);
    }
    const isCorrect = await bcryptService.compare(
      value.password,
      user.password
    );

    if (!isCorrect) {
      createError("คุณเข้าสู่ระบบไม่ได้", 400);
    }

    const accessToken = tokenService.sign({ id: user.id });
    res.status(200).json({ accessToken });
  } catch (err) {
    next(err);
  }
};
exports.card = async (req, res, next) => {
  try {
    const card = [
      {
        neme: "",
        details: "",
        room: "",
        numberSeat: "",
        remaining: "",
        time: "",
        dateStart: "",
        dateEnd: "",
      },
    ];
    res.json(card);
  } catch (err) {
    next(err);
  }
};

exports.createRoom = async (req, res, next) => {
  try {
    const value = req.body;
    value.created_at = Date.now();
    value.updated_at = Date.now();
    // const roomData = await roomService.getRoom(value.name);
    // if (roomData) {
    //   createError("เจอข้อมูลห้องซ้ำ");
    // }

    await roomService.createRoom(value);

    res.status(200).json("สร้างสำเร็จ");
  } catch (err) {
    next(err);
  }
};
