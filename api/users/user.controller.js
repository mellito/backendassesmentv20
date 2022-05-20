const { getuserById, createUser } = require("./user.service");

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

module.exports = {
  handleCreateUser,
  handlesGetOneUser,
};
