const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');


const HARDCODED_EMAIL = 'admin@gsbpathy.com';
const HARDCODED_PASSWORD = 'gsbpathy123';

exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  console.log("Login attempt:", email, password);

  try {
    if (email !== HARDCODED_EMAIL || password !== HARDCODED_PASSWORD) {
      console.log("Invalid credentials");
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    console.log("Token created:", token);
    res.status(200).json({ token });
  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};
