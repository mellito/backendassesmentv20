const { Router } = require("express");

const { handleCreateUser, handlesGetOneUser } = require("./user.controller");

const router = Router();
router.get("/:id", handlesGetOneUser);
router.post("/", handleCreateUser);

module.exports = router;
