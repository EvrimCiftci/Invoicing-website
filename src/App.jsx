import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import MainPage from './pages/MainPage.jsx'
import Customers from './pages/Customers.jsx'
import Invoice from './pages/Invoice.jsx'
import Schedule from './pages/Schedule.jsx'

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='/Customers' element={<Customers />} />
          <Route path='/invoice' element={<Invoice />} />
          <Route path='/Schedule' element={<Schedule/> } />
        </Routes>
      </BrowserRouter>
      
   </div>
  )
}

export default App
