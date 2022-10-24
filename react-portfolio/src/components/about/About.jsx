import React from 'react'
import './About.css'
import ME from '../../assets/current.png'
import { FaAward } from 'react-icons/fa'
import {IoSchoolOutline} from 'react-icons/io'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>0 Years Working</small>
            </article>

            <article className='about__card'>
              <IoSchoolOutline className='about__icon' />
              <h5>Schooling</h5>
              <small>B.S in Computer Science</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ completed Projects</small>
            </article>
          </div>
          <p>
          I recently graduated from Central Washington University magna cum laude with a 3.8 GPA with a B.S in Computer Science. 
          I am a Software Engineer currently looking for a new position. I love the idea of working with any type of data and am quite a math-oriented person.

          Additionally, I love anything to do with gaming or anything nerdy! I am always on the computer and always trying to learn about new things.

          If you have any interest in connecting with me, send me an email at dylanbillings22@gmail.com or add me on Linkedin!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div> 
    </section>
  )
}

export default about