import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import App from '../../App'
import SignupForm from '../../SignUp/SignupForm'
import Welcome from '../../Welcome/Welcome'
import Game from '../Game'
import More from '../../More/More'
import Help from '../../Help/Help'
import Cookies from '../../Cookies'

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/Signup" element={<SignupForm/>}></Route>
      <Route path="/Welcome" element={<Welcome/>}></Route>
      <Route path="/Game" element={<Game/>}></Route>
      <Route path="/More" element={<More/>}></Route>
      <Route path="/Help" element={<Help/>}></Route>
      <Route path="/Cookies" element={<Cookies/>}></Route>
     
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
