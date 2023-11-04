import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import Products from '../pages/Products'
import ProductDetail from '../pages/Products/pages/ProductDetail'

const WebRouting = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:category' element={<ProductDetail />} />
      {/* <Route path='/products/groceries' element={<Groceries />} />
      <Route path='/products/homedecorations' element={<HomeDecoration/>}/>
      <Route path='/products/skincare' element={<Skincare/>}/>
      <Route path='/products/fragrances' element={<Fragrances/>}/>
      <Route path='/products/smartphones' element={<SmartPhones/>}/>
      <Route path='/products/laptops' element={<Laptops/>}/> */}
    </Routes>
  )
}

export default WebRouting