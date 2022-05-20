const user = require("./api/users");

function routes(app) {
  app.use("/api/users/", user);
}

module.exports = routes;
