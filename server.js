import express from 'express';


//middleware
import errorHandlerMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';
import 'express-async-errors'



//router
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'
import dotenv from 'dotenv';

//db and authenticateUser  
import connectDB from './db/connect.js';

dotenv.config();



const app=express();

//middleware
//pass and access json data 

app.use(express.json())




app.get("/",(req,res)=>{
    res.json({msg:"hello"});
})

app.get("/api/v1",(req,res)=>{
    res.json({msg:"API"});
})




app.use('/api/v1/auth',authRouter)
app.use('/api/v1/jobs',jobsRouter)


//when route does not match
app.use(notFoundMiddleware)
 
//when a error is thrown
app.use(errorHandlerMiddleware)

const port=process.env.PORT || 5000;



const start=async ()=>{

try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port,()=>{
        console.log(`The server is listening from port ${port}!`)
    })


} catch (error) {
 console.log(error);   
}



}

start()
