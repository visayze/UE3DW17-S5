'use strict';

module.exports = function(app) {
  var userCtrl = require('../controllers/user-controller');

  app.route('/users/:userId/reviews')
    .get(userCtrl.findUserReviews);

  app.route('/users/:userId/games/:gameId/review')
    .get(userCtrl.findReview)
    .put(userCtrl.updateUser)
    .delete(userCtrl.removeUserReviews)
    .post(userCtrl.createUser);
};
