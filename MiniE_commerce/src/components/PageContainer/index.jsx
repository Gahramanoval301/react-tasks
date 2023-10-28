import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import styles from './index.module.css'

const PageContainer = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default PageContainer