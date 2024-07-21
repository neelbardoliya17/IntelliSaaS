const mongoose=require('mongoose');

//schema
const historySchema=new mongoose.Schema({
    user:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    content:
    {
        type:String,
        required:true,
    },
},
{
    timestamps:true,
}
);

//Coimpiker to form the model
const ContentHist=mongoose.model("Payment",historySchema);

module.exports=ContentHist;