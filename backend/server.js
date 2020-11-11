import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
dotenv.config();

import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

// Database
connectDB();

// Import Routes
import blogRoutes from './routes/blogRoute.js';
import userRoutes from './routes/userRoute.js';

const app = express();
const PORT = process.env.PORT || 8000;

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

// Connect routes
app.use('/api/blogs', blogRoutes);
app.use('/api/users', userRoutes);

if (process.env.NODE_ENV === 'development') {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

// Custom Middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}.`);
});
