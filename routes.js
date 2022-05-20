const user = require("./api/users");
const authLocal = require("./auth/local");
const favs = require("./api/favs");

function routes(app) {
  app.use("/api/users/", user);
  app.use("/api/favs/", favs);
  app.use("/auth/", authLocal);
}

module.exports = routes;
