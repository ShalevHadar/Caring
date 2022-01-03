const jwt = require("jsonwebtoken");

const verifyTokenMiddleware = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["authorization"];

  if (!token) {
    return res.status(403).send({
      message: "A token is required for authentication",
    });
  }

  const newToken = token.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(newToken, process.env.TOKEN_KEY);
    req.email = decoded;
    return next();
  } catch (err) {
    return res.status(401).send({
      message: "Invalid Token",
    });
  }
};

module.exports = { verifyTokenMiddleware };
