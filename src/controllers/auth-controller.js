const {
  validateRegister,
  validateLogin,
} = require("../validators/auth-validator");
const userService = require("../services/user-service");
const createError = require("../utils/create-error");
const bcryptService = require("../services/bcrypt-service");
const tokenService = require("../services/token-service");

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
