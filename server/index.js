import express from 'express';
import startServer from './db.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import morgan from 'morgan'


const app = express();
app.use(express.json())
app.use(cors())


startServer(app);