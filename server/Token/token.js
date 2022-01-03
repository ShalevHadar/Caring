const jwt = require("jsonwebtoken");

const create = (email) => {
  const secret = process.env.TOKEN_KEY;
  const token = jwt.sign({ email }, secret, {
    expiresIn: "2h",
  });
  return token;
};

module.exports = {
  create,
};
