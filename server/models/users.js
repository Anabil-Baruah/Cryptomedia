// user.js
const mongoose = require('mongoose');

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
  profileTheme:Boolean,

  metadata:{
    socialLinks:{
        insta_id:String,
        linkeding_id:String,
        facebook_id:String,
        twitter_id:String,
        github_id:String,
        website:String,
    },
    favourits:[{
      coin_id:String,
      coin_name:String,
    }]
  }
});

// Create and export the User model
module.exports = mongoose.model('User', userSchema);
