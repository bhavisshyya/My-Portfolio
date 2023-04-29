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
            <img src={me} alt="My image"></img>
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
               Hey I'm Bhavishya Malhotra, I'm pursuing my degree in Information
            Technology and i have passion for Coding and Problem Solving.{" "}
            <br></br>
            <br></br>I am well acquainted with C++ , CSS , Java-Script , React,
            NodeJS, Express and Mongo Db, etc. I am an eager Learner ,
            constantly striving to improve my skills and stay ahead of latest
            trends in Software Development. I am also a team player and enjoy
            collabrating projects. I am Enthusiastic, Fast-Learner, Hardworking,
            Creative, Innovative, Problem Solver. I want to enhance my
            professional Skills, capabilities and knowledge in your
            organization.     
          </p>

          <a href='#contact' className='btn1 btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
