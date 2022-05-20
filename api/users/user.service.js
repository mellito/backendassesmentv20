const User = require("./user.model");

async function getuserById(id) {
  const user = await User.findById(id);
  return user;
}

async function createUser(user) {
  const newUser = await User.create(user);
  return newUser;
}

module.exports = {
  getuserById,
  createUser,
};
