const router = require("express").Router();
const bcrypt = require("bcryptjs");
const db = require("../../db/database");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);

  db.run(
    "INSERT INTO users(name,email,password) VALUES(?,?,?)",
    [name, email, hash],
    err => {
      if (err) return res.status(400).json({ message: "Email exists" });
      res.json({ message: "Registered successfully" });
    }
  );
});

module.exports = router;