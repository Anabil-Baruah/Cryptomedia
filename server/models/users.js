// user.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
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
      insta_id: String,
      linkeding_id: String,
      facebook_id: String,
      twitter_id: String,
      github_id: String,
      website: String,
    },
    favourits: [{
      coin_id: String,
      coin_name: String,
    }]
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
    const token = await jwt.sign({ _id: this._id }, "himanmynameisanabilbaruahandimlearningmernstack")
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
