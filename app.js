import express  from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import { globalErrorHandler } from "./src/utils/errorHandler.js"
import { config } from "./src/config/index.js";



const app = express()


// Database connection
mongoose.connect(config.mongodb_connection_url).then(()=> console.log("Database connection established")).catch(e=> console.log("Mongo connection error: ", e.message))


// Port configuration
const port = config.port || 3000;

// Middlewares
app.use(morgan('tiny'))
app.use(express.json())


app.use(globalErrorHandler)

// Setting up the express server
app.listen(port, ()=>{
  console.log(`Server runnning on port: ${port}`)
})