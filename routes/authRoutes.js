const express = require('express');
const router = express.Router();
const { loginAdmin } = require('../controllers/authController');
const {addTeamMember} = require('../controllers/teamController');

router.post('/login', loginAdmin);
// router.post('/add-member', addTeamMember);

module.exports = router;
