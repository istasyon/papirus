const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//TODO: Add facebook/google ids, location, availability
const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  facebookId: {
    type: String,
    sparse: true,
    unique: true
  },
  googleId: {
    type: String,
    sparse: true,
    unique: true
  },
  birthday: Date,
  email: { type: String, lowercase: true, required: true },
  imageUrl: String,
  isTutor: Boolean,
  applicationStatus: String,
  applicationDate: Date,
  platform: String,
  teachingSubjects: [String],
  videoUrl: String,
  description: String,
  experience: String,
  education: String,
  hourlyRate: Number,
  rating: Number,
  location: {
    type: { type: String },
    coordinates: [Number]
  }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
