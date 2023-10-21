import React from 'react'
import { Routes, Route } from 'react-router'
import Home from '../Pages/Home'
import Owner from '../Pages/Owner'
import Followers from '../Pages/Followers'
import Repos from '../Pages/Repos'

const WebRouting = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/owner' element={<Owner/>}/>
        <Route path='/followers' element={<Followers/>}/>
        <Route path='/repos' element={<Repos/>}/>
    </Routes>
    </>
  )
}

export default WebRouting