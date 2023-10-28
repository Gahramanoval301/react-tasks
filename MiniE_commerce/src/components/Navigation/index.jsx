import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationLink = ({to, title}) => {
    return (
        <NavLink to={to} style={({isActive})=>({color: isActive ? 'red' : ''})}>{title}</NavLink>
    )
}

const Navigation = () => {
    return (
        <>
            <NavigationLink to='/' title='Home' />
            <NavigationLink to='/products' title='Products' />
            <NavigationLink to='/cart' title='Cart' />
        </>
    )
}



export default Navigation