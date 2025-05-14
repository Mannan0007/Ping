import express from "express";
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import userRouter from "./Routes/userRoutes.js";
import cors from 'cors';

dotenv.config({ path: "./config/config.env" });


const app = express();
connectDB();


app.use(cors());


app.use(
  cors({
    origin: "http://localhost:5173", // your frontend URL
    credentials: true, // if you are using cookies or authorization headers
  })
);



app.use(express.json());

app.use('/api/user',userRouter);




app.get('/', (req, res) => {
    res.send("hi from the server")
})

export default app;