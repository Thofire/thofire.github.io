import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/newpaws.jpg'
import IMG2 from '../../assets/noteflow.jpg'
import IMG3 from '../../assets/TApicker.png'

const data = [{
  id:1,
  image: IMG1,
  title: 'Pet adoption App',
  github:'https://github.com/CS481group2/petAdoption'
},
{
  id: 2,
  image: IMG2,
  title: 'A react based text editor',
  github:'https://github.com/maslindc2/note-flow'
},
{
  id:3,
  image: IMG3,
  title: 'Takes 2 CSV files and assigns students to classes based on requirements',
  github:'https://github.com/TDavis0/CS480-1'
}
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
      {
        data.map(({id, image, title, github}) => {
          return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
            <a href={github} className='btn' target='_blank'>Github</a>
            </div>
          </article>
          )
        })
      }

      </div>
    </section>
  )
}

export default Portfolio