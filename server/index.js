import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import multer from 'multer';
import cors from 'cors';
import bodyParser from 'body-parser';

//components
import connectDB from './config/db.js';
import Router from './routes/route.js';

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

//Connect to database
connectDB();
// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

// Connection(username, password);

app.listen(port, () =>
  console.log(`Server is running successfully on PORT ${port}`)
);
