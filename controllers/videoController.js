const Video = require("../models/Video");
const { uploadFileToS3 } = require("../services/s3Uploader");

// exports.uploadVideo = async (req, res) => {
//   try {
//     const { title, description, category, accessLevel } = req.body;
//     const videoFile = req.files?.video?.[0];
//     const thumbnailFile = req.files?.thumbnail?.[0];

//     if (!videoFile) {
//       return res.status(400).json({ message: "Video file is required" });
//     }

//     const videoUrl = await uploadFileToS3(videoFile, "videos");
//     const thumbnailUrl = thumbnailFile ? await uploadFileToS3(thumbnailFile, "thumbnails") : null;

//     const videoDoc = await Video.create({
//       title,
//       description,
//       category,
//       accessLevel,
//       videoUrl,
//       thumbnailUrl,
//     });

//     res.status(201).json({ message: "Video uploaded", video: videoDoc });
//   } catch (error) {
//     console.error("Video Upload Error:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

exports.uploadVideo = async (req, res) => {
  try {
    const { title, description, category, accessLevel } = req.body;
    const videoFile = req.files?.video?.[0];
    const thumbnailFile = req.files?.thumbnail?.[0];

    if (!videoFile) {
      return res.status(400).json({ message: "Video file is required" });
    }

    const videoUrl = await uploadFileToS3(videoFile, "videos");
    const thumbnailUrl = thumbnailFile ? await uploadFileToS3(thumbnailFile, "thumbnails") : null;

    const videoDoc = await Video.create({
      title,
      description,
      category,
      accessLevel,
      videoUrl,
      thumbnailUrl,
    });

    res.status(201).json({ message: "Video uploaded", video: videoDoc });
  } catch (error) {
    console.error("Video Upload Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};