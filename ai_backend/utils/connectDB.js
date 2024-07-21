const mongoose=require("mongoose");
//pass:QTJOGThgrGNQUKjK
const connectDB=async()=>
{
    try {
        const conn=await mongoose.connect("mongodb+srv://neelbardoliya4:QTJOGThgrGNQUKjK@ai-project.saemo8m.mongodb.net/ai-mern-project?retryWrites=true&w=majority&appName=ai-project");
        console.log(`MongoDB connected ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to mongoDB  ${error.message}`);
        process.exit(1);
    }
}

module.exports=connectDB;