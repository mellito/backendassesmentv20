const { Router } = require("express");
const { isAuth } = require("../../auth/auth.service");

const {
  handlerCreateFav,
  handlerGetAllFavs,
  handlerGetOneFav,
  handlerUpdateFav,
  handlerDeleteFav,
} = require("./favs.controller");

const router = Router();

router.post("/", isAuth(), handlerCreateFav);
router.get("/", isAuth(), handlerGetAllFavs);
router.get("/:id", isAuth(), handlerGetOneFav);
router.patch("/:id", isAuth(), handlerUpdateFav);
router.delete("/:id", isAuth(), handlerDeleteFav);

module.exports = router;
