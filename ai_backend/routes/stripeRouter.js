const express=require('express')

const isAuthenticated=require("../middlewares/isAuthenticated")
const handlestripePayment=require("../controllers/handleStripePayment");
const stripeRouter=express.Router();


stripeRouter.post('/checkout',isAuthenticated,handlestripePayment);


module.exports=stripeRouter;