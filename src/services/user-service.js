const User = require("../models/user");

const findEmail = async (email) => {
  try {
    const user = await User.findOne({
      where: { email },
    });

    if (user) {
      console.log("User found:", user);
    } else {
      console.log("User not found");
    }
  } catch (error) {
    console.error("Error occurred while finding user:", error);
  }
};

const createUser = (user) => User.create(user);
module.exports = {
  findEmail,
  createUser,
};
