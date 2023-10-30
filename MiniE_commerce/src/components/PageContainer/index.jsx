import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'
import { NavigationProducts } from '../Navigation'

const PageContainer = ({ children }) => {
    return (
        <div className='container'>
            <Header />
            <div className='categories'>
                <h3>Our Products</h3>
                <ul className='categoryList'>
                   <NavigationProducts/>
                </ul>
            </div>
            <div className='productCards'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default PageContainer