import React from 'react'
import './Footer.css'
import {BsLinkedin, BsInstagram , BsTwitter} from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skill'>Skills</a></li>
        <li><a href='#project'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://www.linkedin.com/in/bhavisshyya'> <BsLinkedin/> </a>
        <a href='https://twitter.com/Bhavisshyya'> <BsTwitter/> </a>
        <a href='https://www.instagram.com/bhavisshyya'> <BsInstagram/> </a>
      </div>

      <div className="copyright">
        <small>&copy:All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer