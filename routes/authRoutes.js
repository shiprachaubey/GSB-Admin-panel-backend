const express = require('express');
const router = express.Router();
const { loginAdmin } = require('../controllers/authController');
const {addTeamMember} = require('../controllers/teamController');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const uploadImage = require('../middlewares/imageUploadMiddleware');

router.post('/login', loginAdmin);
// router.post('/add-member', addTeamMember);

router.post('/send-otp', authController.sendOTP);
router.post('/verify-otp', authController.verifyOTP);

// User creation route with image upload
router.post('/create-user', uploadImage, userController.createUser);

module.exports = router;

