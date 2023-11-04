import React from 'react'
import { NavLink } from 'react-router-dom'
const NavigationLink = ({ to, title }) => {
    return (
        <li style={{ color: 'black' }}>
            <NavLink to={to} style={({ isActive }) => ({ color: isActive ? 'blue' : '' })}>{title}</NavLink>
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
export const NavigationProducts = () => {
    return (
        <>
            {/* <NavigationLink to='/' title='Home' /> */}
            <NavigationLink to='/products/groceries' title='Groceries' />
            <NavigationLink to='/products/home-decoration' title='HomeDecorations'/>
            <NavigationLink to='/products/skincare' title='Skincare'/>
            <NavigationLink to='/products/fragrances' title='Fragrances'/>
            <NavigationLink to='/products/smartphones' title='Smartphones'/>
            <NavigationLink to='/products/laptops' title='Laptops'/>
            {/* <NavigationLink to='/cart' title='Cart' /> */}
        </>
    )
}

export default Navigation