import React from 'react'
import './About.css'
import me from '../../images/secin.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
function about() {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about-container'>
        <div className='about-me'>
          <div className='me-img'>
            <img src={me}></img>
          </div>
        </div>

        <div className='about-content'>
          <div className='about-cards'>
            <article className='about-card'>
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about-card'>
              <VscFolderLibrary className='about-icon'/>
              <h5>Projects</h5>
              <small>10+</small>
            </article>
          </div>

          <p>
              Hey I'm Bhavishya Malhotra, persuing my Btech in JSS College Noida.I am full stack Web Developer. I have good command at solving problems quickly and have ability to perform well in the team. <br></br>
              <br></br>
              I have keen intrest in C++ , CSS , Java-Script , React and 
              want to enhance my professional Skills, capabilities and knowledge in your organization.             
          </p>

          <a href='#contact' className='btn1 btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default about