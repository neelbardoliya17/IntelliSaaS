const express= require("express");
 const cookieParser=require("cookie-parser");
 const cron=require("node-cron");
require('dotenv').config();
const usersRouter=require("./routes/usersRouter");
const { errorHandler } = require("./middlewares/errorMiddleware");
const openAIRouter = require("./routes/openAIRouter");
const stripeRouter = require("./routes/stripeRouter");
require("./utils/connectDB")();
const bodyParser=require('./routes/openAIRouter');
const app=express();
const PORT=process.env.PORT || 8090;

//Cron for the trial period runs every second
cron.schedule("* * * * * *",()=>//star represent:second,minute,hour,day of month,month,day of the week
{
    console.log("This task runs every second");
})

//Cron for the paid ones




//middleware
app.use(express.json());//for incoming data
app.use(cookieParser());//pass the cookie automatically

//Routes
app.use("/api/v1/users",usersRouter);
app.use("/api/v1/openai",openAIRouter);
app.use("/api/v1/stripe",stripeRouter);

//error handler middleware
app.use(errorHandler);

//start the server
app.listen(PORT,console.log(`server is running on port ${PORT}`));