const path = require("path");
const express = require("express");
const multer = require("multer");
const File = require("../model/file");
const Router = express.Router();
const { tokenVerification } = require("./auth");

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "./files"); //if no error ,1st arg will be null/undefined and second will contain data to be passed
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`); //get unique file name
    },
  }),
  limits: {
    fileSize: 1000000, // max file size 1MB = 1000000 bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          "only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format."
        )
      );
    }
    cb(undefined, true); // continue with upload
  },
});

Router.post(
  "/upload",
  upload.single("file"),
  async (req, res) => {
    try {
      const { title, description } = req.body;
      const { path, mimetype } = req.file;
      const file = new File({
        title,
        description,
        file_path: path,
        file_mimetype: mimetype,
      });
      await file.save();
      res.send("file uploaded successfully.");
    } catch (error) {
      res.status(400).send("Error while uploading file. Try again later.");
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  }
);

// Router.get("/getAllFiles", async (req, res) => {
//   try {
//     const files = await File.find({});
//     const sortedByCreationDate = files.sort(
//       (a, b) => b.createdAt - a.createdAt
//     );
//     res.send(sortedByCreationDate);
//   } catch (error) {
//     res.status(400).send("Error while getting list of files. Try again later.");
//   }
// });

Router.get("/getAllFiles", async (req, res) => {
  try {
    if (!req.headers.authorization) {
      throw new Error("Unauthorized");
    }
    const token = req.headers.authorization?.split(" ")[1];

    const verification = await tokenVerification(token);
    if (verification && verification.exp > Math.floor(Date.now() / 1000)) {
      const files = await File.find({});
      console.log(files);
      const fileData = files.map((file) => ({
        _id: file._id,
        title: file.title,
        description: file.description,
        file_path: file.file_path,
        filename: file.filename,
        mimetype: file.file_mimetype,
        createdAt: file.createdAt,
        updatedAt: file.updatedAt,
      }));
      res.send(fileData);
    } else {
      throw new Error("Unauthorized");
    }
  } catch (error) {
    if (error.message == "Unauthorized") {
      res.status(401).send("Unauthorized");
    } else {
      res
        .status(400)
        .send("Error while getting list of files. Try again later.");
    }
  }
});

Router.get("/download/:id", async (req, res) => {
  try {
    if (!req.headers.authorization) {
      throw new Error("Unauthorized");
    }
    const token = req.headers.authorization?.split(" ")[1];
    const verification = await tokenVerification(token);
    if (verification && verification.exp > Math.floor(Date.now() / 1000)) {
      const file = await File.findById(req.params.id);
      res.set({
        "Content-Type": file.file_mimetype,
      });
      res.sendFile(path.join(__dirname, "..", file.file_path));
    } else {
      throw new Error("Unauthorized");
    }
  } catch (error) {
    if (error.message == "Unauthorized") {
      res.status(401).send("Unauthorized");
    } else {
      res.status(400).send("Error while downloading file. Try again later.");
    }
  }
});

module.exports = Router;
