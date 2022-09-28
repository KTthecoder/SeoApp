import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='NavbarContainer'>
        <div className='NavbarContainer1'>
            <div className='NavbarLeft'>
                <h1>YourLogo</h1>
            </div>
            <div className='NavbarRight'>
                <Link to='/' className='NavbarRightLink'>Home</Link>
                <Link to='/' className='NavbarRightLink'>About Us</Link>
                <Link to='/' className='NavbarRightLink'>Offer</Link>
                <Link to='/' className='NavbarRightLink'>Contact</Link>
                <Link to='/' className='NavbarRightLink1'>Buy Now</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar