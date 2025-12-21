const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['present', 'absent', 'late'] },
  method: { type: String, enum: ['fingerprint', 'facial', 'qr', 'manual'] },
  location: String
});

module.exports = mongoose.model('Attendance', AttendanceSchema);