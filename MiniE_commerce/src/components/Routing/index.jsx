import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import Products from '../pages/Products'


const WebRouting = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/products' element={<Products/>}/>
    </Routes>
  )
}

export default WebRouting