import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets' 
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
          Our passion for food is evident in every dish, crafted with the freshest ingredients and inspired by culinary traditions from around the world. Whether you're here for a hearty breakfast, a light lunch, or a memorable dinner, we promise an experience that’s both comforting and exciting. 
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2 className='text-2xl'>COMPANY</h2>
          <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
          </ul>
         
        </div>
        <div className="footer-content-right">
          <h2 className='text-2xl'>GET IN TOUCH</h2>
          <ul>
            <li>8763458922</li>
            <li>kajalrathi@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2024 &copy; Live India Tech</p>
    </div>
  )
}

export default Footer

