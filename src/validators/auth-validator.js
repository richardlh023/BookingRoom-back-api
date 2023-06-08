const Joi = require("joi");

const registerSchema = Joi.object({
  Fullname: Joi.string().trim().required(),
  Email: Joi.alternatives([Joi.string().email({ tlds: false })]),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{4-30}$/)
    .trim()
    .required(),

  confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
});

exports.validateRegister = (input) => registerSchema.validate(input);
