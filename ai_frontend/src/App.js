import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Registration from './components/Users/Register'
import Login from './components/Users/Login'
import Dashboard from './components/Users/Dashboard'
import PrivateNavbar from './components/Navbar/PrivateNavbar'
import PublicNavbar from './components/Navbar/PublicNavbar'
import Home from './components/Home/Home'
import { useAuth } from './AuthContext/AuthContext'

//dummy component
// const Home=()=>
// {
//   return <h1>Home Page</h1>;
// };
export default function App() {
  //custom auth hook
  const {isAuthenticated}=useAuth();
  return (
    <>
    <BrowserRouter>
    {/* Navbar */}
    {isAuthenticated ? <PrivateNavbar/> : <PublicNavbar/>}
    <Routes>
      <Route path="/register" element={<Registration/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/" element={<Home/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}