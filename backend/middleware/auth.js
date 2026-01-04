const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    jwt.verify(token.split(" ")[1], "SECRET_KEY");
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};