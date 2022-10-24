import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/newpaws.jpg'
import IMG2 from '../../assets/noteflow.jpg'
import IMG3 from '../../assets/TApicker.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Newpaws app" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Newpaws app" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Newpaws app" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio