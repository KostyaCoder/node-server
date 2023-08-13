const path = require("path");
const multer = require("multer");
const CONSTANTS = require("../constants");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(CONSTANTS.FILE_PATH, "images"));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

module.exports.uploadeFile = multer({ storage });
