'use strict';

const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    //required: true,
  },
  gameId:{
    type: String,
    //required: true,
  },
  score:{
    type: Number,
    default: null
  }
});

UserSchema.pre('save', function(next) {
    next();
});

UserSchema.pre('validate', function(next) {
    next();
});

module.exports = mongoose.model('Users', UserSchema);