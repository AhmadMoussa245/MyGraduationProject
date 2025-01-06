import express from 'express';
import morgan from 'morgan';
import userRoute from './routes/userRoute.js'
import AppError from './utils/appError.js';
import globalErrorHandler from './utils/catchAsync.js'


const app=express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/',userRoute);

app.all('*',(req,res,next)=>{
    next(new AppError(
        `Can't find ${req.originalUrl}!`,404
    ));
});

app.use(globalErrorHandler);

export default app;