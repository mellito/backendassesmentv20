const jsonwebtoken = require("jsonwebtoken");
const compose = require("composable-middleware");

const { getUserByEmail } = require("../api/users/user.service");

async function validateToken(token) {
  try {
    const payload = jsonwebtoken.verify(token, "secret_token");
    return payload;
  } catch (error) {
    return error;
  }
}

function isAuth() {
  return compose().use(async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).end();
    }

    const [, token] = authHeader.split(" ");
    const payload = await validateToken(token);

    if (!payload) {
      return res.status(401).end();
    }
    const user = await getUserByEmail(payload.email);
    if (!user) {
      return res.status(401).end();
    }
    req.user = user;
    next();
    return null;
  });
}

function signToken(payload) {
  const token = jsonwebtoken.sign(payload, "secret_token", {
    expiresIn: "2h",
  });

  return token;
}

module.exports = {
  isAuth,
  signToken,
};
