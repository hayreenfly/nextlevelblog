import express from 'express';
const router = express.Router();

import { home } from '../controllers/blogController.js';

router.route('/').get(home);

export default router;
