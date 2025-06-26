const User = require('../models/User');
const { uploadFileToS3 } = require('../services/s3Uploader');

exports.createUser = async (req, res) => {
  try {
    const { fullName, phoneNumber, age, weight, height, goal } = req.body;
    let photoUrl = null;
    if (req.file) {
      // Upload image to S3 and get the URL
      photoUrl = await uploadFileToS3(req.file, 'users');
    }
    const user = new User({ fullName, phoneNumber, age, weight, height, goal, photo: photoUrl });
    await user.save();
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};