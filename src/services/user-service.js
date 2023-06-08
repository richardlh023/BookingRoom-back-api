const userRepository = require("../repositories/user-repository");

exports.checkEmail = async (email) => {
  const exisUser = await userRepository.getUserByEmail(email);
  return !!exisUser;
};

exports.createUser = (user) => userRepository.createUser(user);
