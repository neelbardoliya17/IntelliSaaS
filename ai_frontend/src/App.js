import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Users/Register";
import Login from "./components/Users/Login";
import Dashboard from "./components/Users/Dashboard";
import PrivateNavbar from "./components/Navbar/PrivateNavbar";
import PublicNavbar from "./components/Navbar/PublicNavbar";
import Home from "./components/Home/Home";
import { useAuth } from "./AuthContext/AuthContext";
import AuthRoute from "./components/AutoRoute/AutoRoute";
import BlogPostAIAssistant from "./components/ContentGeneration/ContentGeneration";
import Plans from "./components/Plans/Plan";
import FreePlanSignup from "./components/StripePayment/FreePlanSignup";
import CheckOutForm from "./components/StripePayment/CheckoutForm";
import PaymentSuccess from "./components/StripePayment/PaymentSuccess";
import ContentGenerationHistory from "./components/ContentGeneration/ContentHistory";
import AppFeatures from "./components/Features/Features";
import AboutUs from "./components/About/About";
import ContactUs from "./components/Contact/Contact_us";
//dummy component
// const Home=()=>
// {
//   return <h1>Home Page</h1>;
// };
export default function App() {
  //custom auth hook
  const { isAuthenticated } = useAuth();
  return (
    <>
      <BrowserRouter>
        {/* Navbar */}
        {isAuthenticated ? <PrivateNavbar /> : <PublicNavbar />}
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <AuthRoute>
                <Dashboard />
              </AuthRoute>
            }
          />
          <Route
            path="/generate-content"
            element={
              <AuthRoute>
                <BlogPostAIAssistant />
              </AuthRoute>
            }
          />
          <Route path="/history" element={<ContentGenerationHistory />} />
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route
            path="/free-plan"
            element={
              <AuthRoute>
                <FreePlanSignup />{" "}
              </AuthRoute>
            }
          />
          <Route
            path="/checkout/:plan"
            element={
              <AuthRoute>
                <CheckOutForm />
              </AuthRoute>
            }
          />
          <Route
            path="/success"
            element={
                <PaymentSuccess />
            }
          />
          <Route path="/features" element={<AppFeatures />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
