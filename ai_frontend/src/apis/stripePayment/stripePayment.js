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
