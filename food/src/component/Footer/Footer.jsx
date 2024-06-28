import React from 'react'
import './Footer.css'
import { assets } from '../../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=''/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque dicta dolorum eum voluptatum distinctio sequi beatae id nam nihil amet magni fugiat, aperiam ipsam corrupti, voluptatibus culpa odio quo suscipit!</p>
             </div>
            <div className="footer-content-center">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            <div className="footer-content-right"></div>
        </div>
      
    </div>
  )
}

export default Footer
