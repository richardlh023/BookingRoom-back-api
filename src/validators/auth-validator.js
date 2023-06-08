const Joi = require("joi");

const validate = require("./validate");

const registerSchema = Joi.object({
  Fullname: Joi.string().trim().required(),
  email: Joi.alternatives([Joi.string().email({ tlds: false })]),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required(),

  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .trim()
    .required()
    .strip(),
});

exports.validateRegister = validate(registerSchema);
