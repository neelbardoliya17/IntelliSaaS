import axios from "axios";

//Stripe payment
export const handleFreeSubscriptionAPI = async (userPrompt) => {
  const reposnse = await axios.post(
    "http://localhost:8090/api/v1/stripe/free-plan",
    {},
    {
      withCredentials: true,
    }
  );
  return reposnse?.data;
};



//Stripe payment intent
export const createStripePaymentIntentAPI = async (payment) => {
  const reposnse = await axios.post(
    "http://localhost:8090/api/v1/stripe/checkout",
    {
      amount:Number(payment?.amount),
      subscriptionPlan:payment?.plan,
    },
    {
      withCredentials: true,
    }
  );
  return reposnse?.data;
};


//Verify payment intent
export const verifyPaymentAPI = async (paymentId) => {
  const reposnse = await axios.post(
    `http://localhost:8090/api/v1/stripe/verify-payment/${paymentId}`,
    {
    },
    {
      withCredentials: true,
    }
  );
  return reposnse?.data;
};