'use strict';

module.exports = function(app) {
  var userCtrl = require('../controllers/user-controller');

  app.route('/users/:userId')
    .get(userCtrl.findUser);

  app.route('/users/:userId/games/:gameId/review')
    .get(userCtrl.findReview)
    .post(userCtrl.createUser);
};
