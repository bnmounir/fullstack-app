const db = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.signin = async function(req, res, next) {
  //find a user
  // checking if their password matches what was sent to the server
  // if it all matches
  // log them in setting a cookie OR setting info with sessions OR web token in this case
  try {
    let user = await db.User.findOne({
      email: req.body.email
    });
    let { id, username, profileImageUrl } = user;
    let isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
      let token = jwt.sign(
        {
          id,
          username,
          profileImageUrl
        },
        process.env.SECRET_KEY
      );
      return res.status(200).json({
        id,
        username,
        profileImageUrl,
        token
      });
    } else {
      return next({ status: 400, message: 'Invalid Email/Password.' });
    }
  } catch (err) {
    return next({ status: 400, message: 'Invalid Email/Password.' });
  }
};

exports.signup = async function(req, res, next) {
  try {
    let user = await db.User.create(req.body);
    let { id, username, profileImageUrl } = user;
    let token = jwt.sign(
      {
        id,
        username,
        profileImageUrl
      },
      process.env.SECRET_KEY
    );
    return res.status(200).json({
      id,
      username,
      profileImageUrl,
      token
    });
  } catch (err) {
    if (err.code === 11000) {
      err.message = 'Sorry, that username/email is already taken!';
    }
    return next({
      status: 400,
      message: err.message
    });
  }
};
