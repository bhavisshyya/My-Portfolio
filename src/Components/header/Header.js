import React from 'react'
import Cv from './Cv'
import './Header.css'
import Me from '../../images/fi.jpg'
import Social from './Social'
function Header() {
  return (
    <header>
        <div className='container headerContainer'>
            <h5>Hello i'm</h5>
            <h1>Bhavishya Malhotra</h1>
            <h5>Fullstack Developer</h5>
            <Cv />
            <div className='me'>
                <img src={Me} />
                <div className='layer'><h3>Call me B</h3></div>
                
            </div>
            <a href='#contact' className='scroll-down'>Scroll Down</a>
            <Social />
        </div>
    </header>
  )
}

export default Header