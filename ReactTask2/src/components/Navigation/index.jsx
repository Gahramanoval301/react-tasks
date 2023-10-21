import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationLink = ({to, title}) => {
  return (
    <li>
    <NavLink to={to} style={({isActive})=>({color: isActive? 'red' : 'initial'})}  >
        {title}</NavLink>
    </li>
  )
}

const Navigation = () => {
  return (
    <>
    <NavigationLink to='/' title='Home'/>
    <NavigationLink to='/owner' title='Owner'/>
    <NavigationLink to='/followers' title='Followers'/>
    <NavigationLink to='/repos' title='Repos'/>
    </>
  )
}

export default Navigation
