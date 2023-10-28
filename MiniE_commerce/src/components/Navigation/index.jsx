import React from 'react'
import { NavLink } from 'react-router-dom'
const NavigationLink = ({to, title}) => {
    return (
        <li style={{color:'black'}}>
            <NavLink to={to} style={({isActive})=>({color: isActive ? 'blue' : ''})}>{title}</NavLink>
        </li>
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