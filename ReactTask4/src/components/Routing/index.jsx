import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Posts from '../pages/Posts'
import Users from '../pages/Users'
import UsersDetail from '../pages/Users/UsersDetail'
import PostsDetail from '../pages/Posts/postsDetail'

const WebRouting = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/users' element={<Users/>} />
            <Route path='/posts' element={<Posts/>} />
            <Route path='/users/:name' element={<UsersDetail/>} />
            <Route path='/posts/:id' element={<PostsDetail/>} />
            {/* <Route path='*' element={<div>Redd ol burdan!</div>} /> */}
        </Routes>
    )
}

export default WebRouting