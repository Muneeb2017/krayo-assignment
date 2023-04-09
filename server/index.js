const express = require("express");
const cors = require("cors");
const fileRoute = require("./routes/files");
const path = require("path");

require("./db/db");

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "..", "build")));

app.use(fileRoute);

app.listen(3030, () => {
  console.log("server started on port 3030");
});
