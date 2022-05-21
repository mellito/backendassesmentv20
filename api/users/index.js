const { Router } = require("express");

const {
  handleCreateUser,
  handlesGetOneUser,
  handleAllUsers,
} = require("./user.controller");

const router = Router();
router.get("/:id", handlesGetOneUser);
router.post("/", handleCreateUser);
router.get("/", handleAllUsers);

module.exports = router;
