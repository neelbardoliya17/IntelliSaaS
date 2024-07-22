 // const express=require('express')

// const isAuthenticated=require("../middlewares/isAuthenticated");
// const { openAIController } = require('../controllers/openAIController');
// const openAIRouter=express.Router();

// openAIRouter.post('/generate-content',isAuthenticated,openAIController);


// module.exports=openAIRouter;

const express = require('express');
const { openAIController } = require('../controllers/openAIController');
const isAuthenticated=require("../middlewares/isAuthenticated");
const checkApiRequestLimit=require("../middlewares/checkApiRequestLimit");

const router = express.Router();

router.post('/generate',isAuthenticated,checkApiRequestLimit, openAIController);

module.exports = router;

