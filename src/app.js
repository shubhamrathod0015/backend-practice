import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Frontend URL accept 
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true
}))

// bodyPurser optinal 
// Limit -->> Data acceptation limit
 
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended : true, limit : "16kb"}))
app.use(express.static("Public"))
app.use(cookieParser())

// routes import 
import userRouter from './routes/user.routes.js'

// routes declaration
app.use("/api/v1/users", userRouter )

// standard https url -->>
// http://localhost:8000/api/v1/users/register

export { app };

// export default (change the name of function other file ) and export {} ( don't change the name of function other file )
