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
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/free-plan" element={<FreePlanSignup />} />
          <Route path="/checkout/:plan" element={<CheckOutForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
