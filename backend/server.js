const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth/register"));
app.use("/api/auth", require("./routes/auth/login"));
app.use("/api", require("./routes/courses"));

app.listen(5000, () => console.log("Backend running on port 5000"));