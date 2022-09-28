import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className='FooterContainer'>
        <div className='FooterContainer1'>
            <div className='FooterLogo'>
                <h1>Your Logo</h1>
                <p>Phasellus quis consequat augue. Vivamus malesuada felis non dui porta lacinia. Cras facilisis mi at purus finibus, id faucibus augue vestibulum.</p>
            </div>
            <div className='FooterLinksDiv'>
                <h1>Categories</h1>
                <Link to='/about-us' className='FooterLink'>About Us</Link>
                <Link to='/offer' className='FooterLink'>Offer</Link>
                <Link to='/contact' className='FooterLink'>Contact</Link>
            </div>
            <div className='FooterLinksDiv'>
                <h1>Follow Us</h1>
                <Link to='/' className='FooterLink'>Facebook</Link>
                <Link to='/' className='FooterLink'>Twitter</Link>
                <Link to='/' className='FooterLink'>Instagram</Link>
            </div>
        </div>
        <div className='FooterBotDiv'>
            <p>Copyright &copy; 2022 Created by Ksawery Tkaczyk</p>
        </div>
    </div>
  )
}

export default Footer