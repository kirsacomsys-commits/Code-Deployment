require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

app.use(cors());
app.use(express.json());

// DB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes (آپ بعد میں الگ فائلز میں بنا سکتے ہیں)
app.get('/', (req, res) => res.send('AIPECT LMS Backend Running'));

// Socket.io for real-time
io.on('connection', (socket) => {
  console.log('User connected');
  socket.on('attendanceMarked', (data) => {
    io.emit('newAttendance', data);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));