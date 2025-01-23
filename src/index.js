// require('dotenv').config({path: './env'})

import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({
    path: './env'
})

connectDB()
.then( () => {
  app.listen( process.env.PORT || 8000 , () => {
   console.log(` Server in running at PORT :  ${process.env.PORT}`);
  })
})
.catch( (error) => {
    console.log("MONGO db connection failed !! " , error);
})