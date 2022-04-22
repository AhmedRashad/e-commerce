const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./public/images",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({
  storage,
}).any();

const uploadHelper = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
      return res.end("Something went wrong!");
    }
    next();
  });
};

module.exports = { uploadHelper };
