import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.css'
const NavigationLink = ({ to, title }) => {
    return (
        <li className={styles.navLink}>
            <NavLink to={to} style={({ isActive }) => ({ color: isActive ? 'hotpink' : 'white' })}>{title}</NavLink>
        </li>
    )
}

const Navigation = () => {
    return (
        <ul className={styles.navigation}>
            <NavigationLink to={'/home' || '/'} title='Home' />
            <NavigationLink to='/users' title='Users' />
            <NavigationLink to='/posts' title='Posts' />
        </ul>
    )
}
export default Navigation