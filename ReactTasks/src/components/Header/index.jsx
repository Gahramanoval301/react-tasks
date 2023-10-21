import React from 'react'
import styles from './index.module.css'
import Navigation from '../Navigation'
const Header = () => {
  return (
    <header className={styles.heading}>
        <Navigation className={styles.navigation}/>
    </header>
  )
}

export default Header