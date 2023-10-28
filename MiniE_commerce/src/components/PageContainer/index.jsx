import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import styles from './index.module.css'

const PageContainer = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header />
            <ul className='caterogyList'>
                    <li>smarthpones</li>
                    <li>laptops</li>
                    <li>fragrances</li>
                    <li>skincare</li>
                    <li>groceries</li>
                    <li>home-decoration</li>
                </ul>
            {children}
            <Footer />
        </div>
    )
}

export default PageContainer