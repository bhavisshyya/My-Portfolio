import React from 'react'
import './Project.css'
import im from '../../images/p.png'
import temp from '../../images/TEMP.png'
import piano from '../../images/piano.png'
import col from '../../images/col.png'
import soc from '../../images/social.png'
import post from '../../images/poster.png'
import port from '../../images/portf.png'
function Project() {
  return (
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio_container'>

      <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={soc}></img>
          </div>
          <h3>Social App</h3>
          <div className="cta">
          <a href='https://github.com/bhavisshyya/MySocialApp-Client' className='btn'target='_blank' >Github</a>
          <a href='https://my-social-app-client.vercel.app' className='btn btn-primary' target='_blank'>Live</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={post}></img>
          </div>
          <h3>Posterz - Ecommerce Website</h3>
          <div className="cta">
          <a href='https://github.com/bhavisshyya/Posterz-Ecommerce-client' className='btn'target='_blank' >Github</a>
          {/* <a href='https://collegewebsite2002.netlify.app/' className='btn btn-primary' target='_blank'>Live</a> */}
          </div>
        </article>


        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={im}></img>
          </div>
          <h3>Notes App</h3>
          <div className="cta">
          <a href='https://github.com/bhavisshyya/My-Notes-App' className='btn'target='_blank' >Github</a>
          <a href='https://my-notes-app05.netlify.app/' className='btn btn-primary' target='_blank'>Live</a>
          </div>
        </article>

        
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={port}></img>
          </div>
          <h3>My Portfolio Website</h3>
          <div className="cta">
          <a href='https://github.com/bhavisshyya/My-Portfolio' className='btn'target='_blank' >Github</a>
          <a href='https://bhavisshyya.netlify.app' className='btn btn-primary' target='_blank'>Live</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={col}></img>
          </div>
          <h3>College Website</h3>
          <div className="cta">
          <a href='https://github.com/bhavisshyya/College_Website' className='btn'target='_blank' >Github</a>
          <a href='https://collegewebsite2002.netlify.app/' className='btn btn-primary' target='_blank'>Live</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={piano}></img>
          </div>
          <h3>Working Piano</h3>
          <div className="cta">
          <a href='https://github.com/bhavisshyya/My-Piano' className='btn'target='_blank' >Github</a>
          <a href='https://my-piano2002.netlify.app/' className='btn btn-primary' target='_blank'>Live</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Project