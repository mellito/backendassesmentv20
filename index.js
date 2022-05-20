const app = require("./app");

const port = process.env.PORT || 65335;

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}/`);
});
module.exports = app;
