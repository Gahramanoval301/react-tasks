import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Groceries from '../pages/Products/pages/Groceries'
import HomeDecoration from '../pages/Products/pages/HomeDecoration'
const WebRouting = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/groceries' element={<Groceries />} />
      <Route path='/products/homedecorations' element={<HomeDecoration/>}/>
    </Routes>
  )
}

export default WebRouting