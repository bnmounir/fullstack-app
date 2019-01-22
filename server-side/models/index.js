const mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose.Promise = Promise;
mongoose.connect(
  process.env.MONGO_CLOUD_DB,
  { useCreateIndex: true, useNewUrlParser: true }
);

module.exports.User = require('./user');
module.exports.Message = require('./message');
