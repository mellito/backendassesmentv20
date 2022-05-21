const {
  getuserById,
  createUser,
  getUserByEmail,
  getAllUser,
} = require("./user.service");

async function handleCreateUser(req, res) {
  try {
    const newUser = req.body;

    const user = await createUser(newUser);
    return res.status(201).json(user);
  } catch (error) {
    return res.state(500).json(error);
  }
}

async function handlesGetOneUser(req, res) {
  const { id } = req.params;
  try {
    const user = await getuserById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
}

async function handleAllUsers(req, res) {
  try {
    const user = await getAllUser();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
}

async function handlerGetUserByEmail(req, res) {
  const { email } = req.body;
  const user = getUserByEmail(email);

  if (!user) {
    return res.status(404);
  }

  return res.status(200).json(user);
}

module.exports = {
  handleCreateUser,
  handlesGetOneUser,
  handlerGetUserByEmail,
  handleAllUsers,
};
