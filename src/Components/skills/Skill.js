import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./skill.css";
function Skill() {
  return (
    <section id='skill'>
      <h2>Skills</h2>
      <h5>I have</h5>

      <div className='container experience-container'>
        <div className='experience-webd'>
          <h3>Web Development</h3>
          <div className='experience-content'>
            <article className='experience-detail'>
              <BsFillPatchCheckFill className='exp-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
    <article className='experience-detail'>
              <BsFillPatchCheckFill className='exp-icon' />
              <div>
                <h4>SCSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-detail'>
              <BsFillPatchCheckFill className='exp-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience-detail'>
              <BsFillPatchCheckFill className='exp-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-detail'>
              <BsFillPatchCheckFill className='exp-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience-detail'>
              <BsFillPatchCheckFill className='exp-icon' />
              <div>
                <h4>Node Js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience-detail'>
              <BsFillPatchCheckFill className='exp-icon' />
              <div>
                <h4>MongoDb</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience-detail'>
              <BsFillPatchCheckFill className='exp-icon' />
              <div>
                <h4>Express</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience-detail'>
              <BsFillPatchCheckFill className='exp-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience-detail'>
              <BsFillPatchCheckFill className='exp-icon' />
              <div>
                <h4>MySql</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience-dsa'>
          <h3>Data Structures & Algorithm</h3>
          <div className='experience-content'>
            <article className='experience-detail'>
              <BsFillPatchCheckFill className='exp-icon' />
              <div>
                <h4>C++</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-detail'>
              <BsFillPatchCheckFill className='exp-icon' />
              <div>
                <h4>C</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-detail'>
              <BsFillPatchCheckFill className='exp-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience-detail'>
              <BsFillPatchCheckFill className='exp-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
