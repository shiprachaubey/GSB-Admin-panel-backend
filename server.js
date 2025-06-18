
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require("dotenv");
// const { connectDB } = require('./config/db');
// const authRoutes = require('./routes/authRoutes');
// const pdfRoutes = require('./routes/PDFRoutes');
// const fileUpload = require('express-fileupload');

// connectDB();
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(fileUpload({ useTempFiles: true }));


// dotenv.config();

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });


// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/dietplans', pdfRoutes);

// app.get('/health', (req, res) => {
//   res.send('✅ Little Voices API is running.');
// });


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
 const dotenv = require("dotenv");
const { connectDB } = require('./config/db');
const app = express();

connectDB();
app.use(cors());
app.use(express.json());
dotenv.config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const authRoutes = require('./routes/authRoutes');
const teamRoutes = require('./routes/teamRoutes');
const dietPlanRoutes = require("./routes/PDFRoutes");
const videoRoutes = require ("./routes/videoRoutes");
const notificationRoutes = require('./routes/notificationRoutes');
const productRoutes = require('./routes/Product');
const consultantRoutes = require('./routes/consultationRoutes');
const chatRoutes = require('./routes/chatRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require ('./routes/orderRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/dietplans', dietPlanRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/products', productRoutes);
app.use('/api/consultancy', consultantRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

app.listen(9000, '0.0.0.0', () => {
  console.log('Server running on port 9000');
});
