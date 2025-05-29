// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const videoController = require("../controllers/videoController");
// const { verifyToken } = require("../middlewares/authMiddleware");


// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// router.post(
//   "/upload",
//   upload.fields([
//     { name: "video", maxCount: 1 },
//     { name: "thumbnail", maxCount: 1 },
//   ]),
//   videoController.uploadVideo
// );

// module.exports = router;
const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");
const videoUpload = require("../middlewares/videouploadMiddleware"); // path to the above file

router.post("/upload", videoUpload, videoController.uploadVideo);

module.exports = router;
