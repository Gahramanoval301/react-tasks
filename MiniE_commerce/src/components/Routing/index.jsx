import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Groceries from '../pages/Products/groceries'


const WebRouting = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/groceries' element={<Groceries/>}/>
    </Routes>
  )
}

export default WebRouting