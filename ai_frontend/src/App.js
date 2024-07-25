import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Registration from './components/Users/Register'
import Login from './components/Users/Login'
//dummy component
// const Home=()=>
// {
//   return <h1>Home Page</h1>;
// };
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Registration/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}