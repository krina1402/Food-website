import React from 'react'
import Navbar  from './component/Navbar/Navbar'
import './component/Navbar/Navbar.css'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/placeorder/Placeorder'
import Footer from './component/Footer/Footer'


function App() {
  return (
   <>
   <div className='app'>
    <Navbar/>
  <Routes>
    <Route  path='/' element={<Home/>} />
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/Placeordec' element={<Placeorder/>} />
  </Routes>
    </div>
    <Footer/>
   </>
  )
}

export default App
