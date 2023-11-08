import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Posts from '../pages/Posts'
import Users from '../pages/Users'

const WebRouting = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/users' element={<Users/>} />
            <Route path='/posts' element={<Posts/>} />
            <Route path='*' element={<div>Redd ol burdan!</div>} />
        </Routes>
    )
}

export default WebRouting