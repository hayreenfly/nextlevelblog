import asyncHandler from 'express-async-handler';
import shortId from 'shortid';
import dotenv from 'dotenv';
import User from '../models/userModel.js';
import tokenGenerator from '../utils/tokenGenerator.js';

dotenv.config();

//**************************************
// @desc    User Sign Up Route
// @route   POST /api/users/signup
// @access  Public
//**************************************
const signup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  let username = shortId.generate();
  const user = await User.create({
    name,
    email,
    password,
    profile: `${process.env.CLIENT_URL}/profile/${username}`,
    username,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      profile: user.profile,
      username: user.username,
    });
    // res.json({ message: 'Signup success! Please signin.' });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

//**************************************
// @desc    User Sign In Route
// @route   POST /api/users/signin
// @access  Public
//**************************************
const signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.authenticate(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      name: user.name,
      email: user.email,
      role: user.role,
      token: tokenGenerator(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

//**************************************
// @desc    User Secret Page
// @route   GET /api/users/secret
// @access  Private
//**************************************
const secretPage = (req, res) => {
  res.json({ message: 'You have access to the secret page' });
};

export { signup, signin, secretPage };
