
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require("dotenv");
const { connectDB } = require('./config/db');
const authRoutes = require('./routes/authRoutes');

connectDB();
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });


// Routes
app.use('/api/auth', authRoutes);

app.get('/health', (req, res) => {
  res.send('✅ Little Voices API is running.');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
