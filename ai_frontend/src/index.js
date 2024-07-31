import React from "react";
import ReactDOM from "react-dom/client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./AuthContext/AuthContext";

//Stripe Configuration
const stripePromise = loadStripe(
  "pk_test_51PVrrmBY7ZkVKuz4EG70rlGHgiJrmAbEC5SiuaHJHIT3pMR9iJgzA2sVVOYKVLZ8MyWYveE223LDAkzUai1H6eU200PGcmO4Mw"
);

const options = {
  mode: "payment",
  currency: "usd",
  description: 'Export of software development services for a MERN stack project',
  metadata: {
    company: "Ecommerce",
    description: "Description of the product or service",
    },
  amount: 2020,
};


const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Elements stripe={stripePromise} options={options}>
          <App />
        </Elements>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
