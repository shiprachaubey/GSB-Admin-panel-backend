const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  videoUrl: { type: String, required: true },
  thumbnailUrl: String, 
  category: { 
    type: String, 
    enum: ['meditation', 'education', 'success stories', 'fitness'], 
    required: true 
  },
  accessLevel: { type: String, enum: ['Free', 'Paid'], default: 'Free' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Video', videoSchema);
