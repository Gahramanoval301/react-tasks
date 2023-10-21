import React from 'react'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import NotFound from '../Pages/NotFound'
import {Route, Routes} from 'react-router-dom'

const WebRouting = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default WebRouting