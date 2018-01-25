'use strict';

module.exports = function(app) {
  var userCtrl = require('../controllers/user-controller');

  app.route('/users/:userId/reviews')
    .get(userCtrl.findReviews);

  app.route('/users/:userId/games/:gameId/review')
    .get(userCtrl.findReview)
    .put(userCtrl.updateReview)
    .delete(userCtrl.removeReview)
    .post(userCtrl.createReview);
};
