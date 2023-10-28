import React from 'react'
import Navigation from '../Navigation'
import styles from './index.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.navList}>
        <Navigation />
      </ul>
      
    </header>
  )
}

export default Header