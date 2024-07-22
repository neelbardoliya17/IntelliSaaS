const asyncHandler = require('express-async-handler');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();
const ContentHistory=require('../models/ContentHistory');
const User=require('../models/User');
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const openAIController = asyncHandler(async (req, res) => {
    const { prompt } = req.body;

    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text()?.trim(); // Await the text extraction
        // console.log(text);
        

        //create a history
        const newContent=await ContentHistory.create({
            user:req?.user?._id,
            content:text,
        })
        //push the history in the user
        const userFound=await User.findById(req?.user?.id);
        userFound.history.push(newContent?._id);
        //Update the api request count for that particular 
        userFound.apiRequestCount+=1
        await userFound.save();
        //send the reponse
        res.status(200).json(text);
    } catch (error) {
        console.error('Error occurred:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
});

module.exports = {
    openAIController
};
