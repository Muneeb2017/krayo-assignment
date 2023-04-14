const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const fileRoute = require("./routes/files");
const path = require("path");

require("./db/db");
require("dotenv").config;

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(fileRoute);

// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const passport = require("passport");
// const authRoute = require("./routes/auth");
// const cookieSession = require("cookie-session");
// const passportStrategy = require("./passport");
// const app = express();

// app.use(
//   cookieSession({
//     name: "session",
//     keys: ["cyberwolve"],
//     maxAge: 24 * 60 * 60 * 100,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(
//   cors({
//     origin: "http://localhost:3000/",
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true,
//   })
// );

// app.use("/auth", authRoute);

app.listen(3030, () => console.log("listening on port: 3030"));
