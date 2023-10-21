import React from 'react'
import './index.css'
import Navigation from '../Navigation'
const Header = () => {
  return (
    <>
    <header className='heading'>
        <p style={{color:'beige'}}>Which data you want to read?</p>
        <Navigation/>
    </header>
    </>
    )
}

export default Header