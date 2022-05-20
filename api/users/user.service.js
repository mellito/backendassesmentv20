const User = require("./user.model");

async function getuserById(id) {
  const user = await User.findById(id);
  return user;
}

async function createUser(user) {
  const newUser = await User.create(user);
  return newUser;
}

async function getUserByEmail(email) {
  const user = await User.findOne({ email });
  return user;
}

module.exports = {
  getuserById,
  createUser,
  getUserByEmail,
};
