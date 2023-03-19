import React from 'react'
import {BsLinkedin, BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
function Social() {
  return (
    <div className='socials'>
        <a href='https://www.linkedin.com/in/bhavisshyya' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/bhavisshyya' target="_blank"><BsGithub/></a>
        <a href='https://twitter.com/Bhavisshyya' target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default Social