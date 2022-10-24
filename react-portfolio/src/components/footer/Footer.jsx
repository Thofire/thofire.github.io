import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Dylan Billings</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/dylan.billings.12/"><FaFacebookF/></a>
        </div>      

      <div className='footer__copyright'>
        <small>&copy; Dylan Billings. All Rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer