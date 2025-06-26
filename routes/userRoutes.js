const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const uploadImage = require('../middlewares/imageUploadMiddleware');

router.post('/create-user', uploadImage, userController.createUser);

module.exports = router;

