// user.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    // required: true,
    unique: true,
    trim: true
  },
  tagline: String,
  name: String,
  email: {
    type: String,
    // required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  profileTheme: Boolean,
  accessToken: String,

  metadata: {
    socialLinks: {
      instagram: String,
      linkedin: String,
      facebook: String,
      twitter: String,
      github: String,
      website: String,
    },
    favourits: {
      type: [String], 
      default: [],   
    }
  }
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
})

userSchema.methods.generateAuthToken = async function () {
  try {
    const token = await jwt.sign({ email: this.email }, "himanmynameisanabilbaruahandimlearningmernstack")
    this.accessToken = token
    await this.save();
    return token;
  }
  catch (error) {
    console.log(error);
  }
}

// Create and export the User model
module.exports = mongoose.model('User', userSchema);
