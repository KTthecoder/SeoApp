import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import menuIcon from '../static/icons/menu.png'
import closeIcon from '../static/icons/close.png'

const Navbar = () => {
  const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(true)

    const location = useLocation()

    const navigate = useNavigate()

    useEffect(() => {
        setShow(false)
        setShow1(true)
    }, [location])

    return (
      // <div className='NavbarContainer'>
      //     <div className='NavbarContainer1'>
      //         <div className='NavbarLeft'>
      //             <h1>YourLogo</h1>
      //         </div>
      //         <div className='NavbarRight'>
      //             <Link to='/' className='NavbarRightLink'>Home</Link>
      //             <Link to='/' className='NavbarRightLink'>About Us</Link>
      //             <Link to='/' className='NavbarRightLink'>Offer</Link>
      //             <Link to='/' className='NavbarRightLink'>Contact</Link>
      //             <Link to='/' className='NavbarRightLink1'>Buy Now</Link>
      //         </div>
      //     </div>
      // </div>
      <div className='NavbarContainer'>
            <div className='NavbarContainer1'>
                <div className='NavbarLogoDiv'>
                    <h1 onClick={() => navigate("/")}>InterArt</h1>
                </div>
                <div className='NavbarMenuDiv'>
                    <Link to='/' className='NavbarMenuLink'>Home</Link>
                    <Link to='/about-us' className='NavbarMenuLink'>About Us</Link>
                    <Link to='/offer' className='NavbarMenuLink'>Offer</Link>
                    <Link to='/contact' className='NavbarMenuLink'>Contact</Link>
                    <Link to='/' className='NavbarMenuLink1'>Buy Now</Link>
                </div>
                <div className='NavbarMenuBtnDiv'>
                    <img src={menuIcon} className='NavbarMenuBtn' onClick={() => setShow(true)} style={show1 ? {display: 'flex'} : {display: 'none'}}/>
                    {/* <a href="https://www.flaticon.com/free-icons/menu" title="menu icons">Menu icons created by SeyfDesigner - Flaticon</a> */}
                </div>
            </div>
            <div className='NavbarMenuDiv1' style={show ? {display: 'flex'} : {display: 'none'}}>
                <div className='NavbarLogoDiv1'>
                    <h1 onClick={() => navigate("/")}>InterArt</h1>
                    <img src={closeIcon} className='NavbarMenuBtn1' onClick={() => setShow(false)} />
                </div>
                <div className='NavbarMenuDiv2'>
                    <Link to='/about-us' className='NavbarMenuLink2'>About Us</Link>
                    {/* <Link to='/offer' className='NavbarMenuLink2'>Offer</Link> */}
                    <Link to='/portfolio' className='NavbarMenuLink2'>Portfolio</Link>
                    <Link to='/faq' className='NavbarMenuLink2'>Faq</Link>
                    <Link to='/contact' className='NavbarMenuLink2'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar