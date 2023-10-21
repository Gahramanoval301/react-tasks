import React from 'react'
import PageContainer from '../../PageContainer'
import { Link } from 'react-router-dom'
import './index.css'
const Home = () => {
    return (
        <PageContainer>
            <section className='home'>
                <h1 style={{ color: 'darkred', letterSpacing: 5, textAlign: 'center' }}>
                    My Home Page</h1>
                <p style={{fontSize:20, letterSpacing: 2}}>Do you have any information about cats? If you don't know, We will teach!</p>
                <Link to='/about'><h1>Get started with clicking me! </h1></Link>
                <div className='kedyPhotos'>
                    <img src="../../../../public/kedy1.jpg" alt="kedy1" />
                    <img src="../../../../public/kedy2.jpg" alt="kedy2" />
                    <img src="../../../../public/kedy3.jpg" alt="kedy3" />
                    <img src="../../../../public/kedy4.jpg" alt="kedy4" />
                </div>
            </section>
        </PageContainer>
    )
}

export default Home