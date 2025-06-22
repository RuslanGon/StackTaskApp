import express from 'express';
import dotenv from 'dotenv';
import startServer from './db.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';


dotenv.config(); 

const app = express();
app.use(express.json())
app.use(cors())




startServer(app);