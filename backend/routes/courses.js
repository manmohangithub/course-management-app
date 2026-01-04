const router = require("express").Router();
const db = require("../db/database");
const auth = require("../middleware/auth");

router.post("/courses", auth, (req, res) => {
  const { name, description, instructor } = req.body;
  db.run(
    "INSERT INTO courses(name,description,instructor) VALUES(?,?,?)",
    [name, description, instructor],
    () => res.json({ message: "Course created" })
  );
});

router.get("/courses", auth, (req, res) => {
  db.all("SELECT * FROM courses", [], (_, rows) => res.json(rows));
});

router.delete("/course/:id", auth, (req, res) => {
  db.run("DELETE FROM courses WHERE id=?", req.params.id, () =>
    res.json({ message: "Deleted" })
  );
});

module.exports = router;