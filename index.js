const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/gametracker');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var userRoutes = require('./api/routes/user-routes');
userRoutes(app);

app.listen(port);

console.log('UE3DW17 S5 API started on: ' + port);
