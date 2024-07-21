const express= require("express");
require('dotenv').config();
const usersRouter=require("./routes/usersRouter");
const { errorHandler } = require("./middlewares/errorMiddleware");
require("./utils/connectDB")();
const app=express();
const PORT=process.env.PORT || 8090;

//middleware
app.use(express.json());//for incoming data

//Routes
app.use("/api/v1/users",usersRouter);

//error handler middleware
app.use(errorHandler);

//start the server
app.listen(PORT,console.log(`server is running on port ${PORT}`));