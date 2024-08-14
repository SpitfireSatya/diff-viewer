const express = require("express");
const fs = require("fs/promises");
const cors = require("cors");
const path = require("path");
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './my-uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage, preservePath: true })

const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors());

app.post("/upload", upload.any(), async (req, res) => {
  
  console.log(req.form);

  res.status(200).json({});

  let data = [];
  // req.on("data", (chunk) => {
  //   console.log(chunk);
  //   data.push(chunk);
  // });

  // req.on("end", () => {
  //   let fileData = Buffer.concat(data);
  //   fs.writeFile(
  //     path.join(__dirname, "example.pdf"),
  //     fileData,
  //     "base64",
  //     (err) => {
  //       if (err) {
  //         res.statusCode = 500;
  //       }
  //     }
  //   );
  // });
});

app.listen(PORT, () => {
  console.log("Server running at Port", PORT);
});