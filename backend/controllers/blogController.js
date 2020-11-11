import asyncHandler from 'express-async-handler';

//**************************************
// @desc    Home Route
// @route   GET /api/blog
// @access  Public
//**************************************
const home = asyncHandler(async (req, res) => {
  res.json({ time: Date().toString() });
});

export { home };
