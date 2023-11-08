import React from 'react'
import styles from './index.module.css'
import Navigation from '../Navigation'
const PageContainer = ({ children }) => {
    return (
        <div className='container'>
            <header className={styles.header}>
                <nav>
                    <Navigation />
                </nav>
            </header>
            {children}
            <footer className={styles.footer}>
                Footer
            </footer>
        </div>
    )
}

export default PageContainer