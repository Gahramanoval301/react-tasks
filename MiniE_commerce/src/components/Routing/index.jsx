import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Groceries from '../pages/Products/pages/Groceries'
import HomeDecoration from '../pages/Products/pages/HomeDecoration'
import Skincare from '../pages/Products/pages/SkinCare'
import Fragrances from '../pages/Products/pages/Fragrances'
import SmartPhones from '../pages/Products/pages/Smarthphones'
import Laptops from '../pages/Products/pages/Laptops'

const WebRouting = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/groceries' element={<Groceries />} />
      <Route path='/products/homedecorations' element={<HomeDecoration/>}/>
      <Route path='/products/skincare' element={<Skincare/>}/>
      <Route path='/products/fragrances' element={<Fragrances/>}/>
      <Route path='/products/smartphones' element={<SmartPhones/>}/>
      <Route path='/products/laptops' element={<Laptops/>}/>
    </Routes>
  )
}

export default WebRouting