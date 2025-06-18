const Notification = require('../models/Notification');

// POST /api/notifications - Create notification
exports.createNotification = async (req, res) => {
  try {
    const { title, message, recipients } = req.body;

    if (!title || !message || !recipients) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newNotification = await Notification.create({
      title,
      message,
      recipients,
      status: 'Sent',
    });

    return res.status(201).json({ message: 'Notification sent successfully', data: newNotification });
  } catch (err) {
    console.error('Error sending notification:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// GET /api/notifications - Fetch all notifications
exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ sentAt: -1 });
    res.status(200).json({ data: notifications });
  } catch (err) {
    console.error('Error fetching notifications:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
