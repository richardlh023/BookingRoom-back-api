const { validateRegister } = require("../validators/auth-validator");

exports.register = async (req, res, next) => {
  try {
    const { value, error } = validateRegister(req.body);
    if (error) {
      res.status(400).json({ message: error.details[0].message });
    }
  } catch (err) {
    next(err);
  }
};
