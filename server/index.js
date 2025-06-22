import express from 'express';
import startServer from './db.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import morgan from 'morgan'
import { errorHandler, routeNotFound } from './middlewares/errorMiddleware.js';


const app = express();


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(morgan('dev'))
// app.use('/api')
app.use(routeNotFound)
app.use(errorHandler)


startServer(app);