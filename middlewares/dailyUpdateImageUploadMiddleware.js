const multer = require("multer");

const storage = multer.memoryStorage();

const uploadDailyUpdateImage = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only JPG, PNG, and WEBP images are allowed."));
    }
  },
}).fields([
  { name: 'image', maxCount: 1 }
]);

module.exports = uploadDailyUpdateImage;