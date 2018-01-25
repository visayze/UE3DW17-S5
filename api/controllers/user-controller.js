'use strict';

const mongoose = require('mongoose');
const User = require('../models/user-schema');

exports.createUser = function(req, res) {
  var newUser = new User( {score:req.body.score,userId:req.params.userId,gameId:req.params.gameId} );
  newUser.save(function(err, user) {
    if (err)
    {
      console.error(err);
      res.json({
        message: err.code === 11000 ? 'User already exist' : 'Unable to create user'
      });
    }
    res.json(user);
  });
};


exports.updateUser = function(req, res) {
  User.findOneAndUpdate({userId:req.params.userId}, {score:req.body.score}, {new: true}, function(err, user) {
    if (err)
    {
      console.error(err);
      res.json({ message: 'Unable to update user' });
    }
    res.json(user);
  });
};

exports.findUserReviews = function(req, res) {
  User.find({userId: req.params.userId}, function(err, user) {
    if (err)
    {
      console.error(err);
      res.json({ message: 'Unable to find user '+req.params.userId });
    }
    res.json(user);
  });
};


exports.removeUserReviews = function(req, res) {
  User.remove({
    userId: req.params.userId,
    gameId: req.params.gameId
  }, function(err, User) {
    if (err)
    {
      console.error(err);
      res.json({ message: 'Unable to delete user review' });
    }
    res.json({ message: 'User review successfully deleted' });
  });
};


exports.findReview = function(req, res) {
  	User.findOne(
  		{
  			userId:req.params.userId,
  			gameId:req.params.gameId
  		}, 
	  	/*{
  			_id: false,
  			score: true
  		},*/
	function(err, game) {
    if (err)
    {
      console.error(err);
      res.json({ message: 'Unable to find game '+req.params.gameId+' for user '+req.params.userId });
    }
    res.json(game);
  });
};