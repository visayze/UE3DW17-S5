'use strict';

module.exports = function(app) {
  var userCtrl = require('../controllers/user-controller');

  app.route('/users')
    .post(userCtrl.createUser);

  app.route('/users/:userId')
    .get(userCtrl.findUser)
    .put(userCtrl.updateUser)
    .delete(userCtrl.removeUser);

  app.route('/users/email/:email')
  	.get(userCtrl.findUserByEmail);

  app.route('/users/:userId/games/:gameId/review')
    .get(userCtrl.findReview);
};
