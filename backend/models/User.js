const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['admin', 'teacher', 'student', 'parent'], default: 'student' },
  phone: String,
  biometricTemplate: String, // encrypted fingerprint/facial
  photo: String,
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] // for parents
});

module.exports = mongoose.model('User', UserSchema);