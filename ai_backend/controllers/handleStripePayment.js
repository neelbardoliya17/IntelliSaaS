const asyncHandler = require("express-async-handler");
const { calculateNextBilingDate } = require("../utils/calculateNextBilingDate");
const {
  showRenewSubscriptionPlan,
} = require("../utils/showRenewsubscriptionPlan");
const Payment = require("../models/Payment");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
//Stripe payments

const handlestripePayment = asyncHandler(async (req, res) => {
  const { amount, subscriptionPlan } = req.body;
  const user = req?.user;
  console.log(user);
  try {
    //create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "usd",

      //add metadata to verify the intended user
      metadata: {
        userId: user?._id?.toString(),
        userEmail: user?.email,
        subscriptionPlan,
      },
    });
    //send the response
    res.json({
      clientSecret: paymentIntent?.client_secret,
      paymentId: paymentIntent?.id,
      metadata: paymentIntent?.metadata,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
});

//handle free subscription
const handleFreeSubscription = asyncHandler(async (req, res) => {
  //get the login user
  const user = req?.user;
  console.log("Free plan");
  //calculate the next billing date
  calculateNextBilingDate();
  //check if user account renew or not
  try {
    if (showRenewSubscriptionPlan(user)) {
      //updathe the user
      user.subscriptionPlan = "Free";
      user.monthlyRequestCount = 5;
      user.apiRequestCount = 0;
      user.nextBilingDate = calculateNextBilingDate();


      //create new payment and save into db
      const newPayment = await Payment.create({
        user: user?.id,
        subscriptionPlan: "Free",
        amount: 0,
        status: "success",
        reference: Math.random().toString(36).substring(7),
        monthlyRequestCount:0,
        currency:"usd"
      });
      user.payments.push(newPayment?._id);
      // //save the user
      await user.save();
      //  //send the response
      res.json({
        status: "success",
        message: "Subscription plan has updated successfully",
        user,
      });

      //send the user
    } else {
      return res.status(403).json({ error: "Subscription is not due yet." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
        error
    })
  }
});

module.exports = { handlestripePayment, handleFreeSubscription };
