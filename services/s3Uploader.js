// const { PutObjectCommand } = require("@aws-sdk/client-s3");
// const { v4: uuidv4 } = require("uuid");
// const path = require("path");
// const s3 = require("../utils/S3Client"); // adjust path to your s3Client.js

// const uploadFileToS3 = async (file, folder = "videos") => {
//   const fileExtension = path.extname(file.originalname);
//   const fileName = `${folder}/${uuidv4()}${fileExtension}`;

//   console.log(`Uploading file to S3: ${fileName}`);

//   const command = new PutObjectCommand({
//     Bucket: process.env.S3_BUCKET_NAME,
//     Key: fileName,
//     Body: file.buffer,
//     ContentType: file.mimetype,
//   });

//   try {
//     const result = await s3.send(command);
//     console.log(`Upload successful: ${fileName}`);
//   } catch (err) {
//     console.error("S3 Upload Error:", err);
//     throw err;
//   }

//   return `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
// };

// module.exports = { uploadFileToS3 };
const { PutObjectCommand } = require("@aws-sdk/client-s3");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const s3 = require("../utils/S3Client");

const uploadFileToS3 = async (file, folder = "videos") => {
  const fileExtension = path.extname(file.originalname);
  const fileName = `${folder}/${uuidv4()}${fileExtension}`;

  console.log(`Uploading file to S3: ${fileName}`);

  const command = new PutObjectCommand({
    Bucket: process.env.S3_BUCKET_NAME,
    Key: fileName,
    Body: file.buffer,
    ContentType: file.mimetype,
     ACL: "public-read",
  });

  try {
    await s3.send(command);
    console.log(`Upload successful: ${fileName}`);
    return `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
  } catch (err) {
    console.error("S3 Upload Error:", err);
    throw err;
  }
};

module.exports = { uploadFileToS3 };
