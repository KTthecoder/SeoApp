import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import menuIcon from '../static/icons/menu.png'
import closeIcon from '../static/icons/close.png'
import { motion } from 'framer-motion'

const navbarVariants = {
    hidden: {
        y: '-80px', opacity: 0,
        transition: {
            type: 'spring', stiffness: 100, duration: 0.1
        }
    },
    visible: {
        y: 0, opacity: 1,
        transition: {
            type: 'spring', stiffness: 100, duration: 0.1
        }
    }
}

const Navbar = () => {
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(true)
    const [color, setColor] = useState(false)

    const location = useLocation()

    const navigate = useNavigate()

    window.addEventListener('scroll', () => {
        if(window.scrollY >= 90){
            setColor(true)
        }
        else{
            setColor(false)
        }
    })

    useEffect(() => {
        setShow(false)
        setShow1(true)
    }, [location])

    return (
        <>
            {color ? (
                <motion.div className='NavbarContainer' variants={navbarVariants} initial='hidden' animate='visible'>
                    <div className='NavbarContainerShow'>
                        <div className='NavbarContainer1'>
                            <div className='NavbarLogoDiv'>
                                <h1 onClick={() => navigate("/")} style={{color: 'rgba(0, 132, 232, 1)'}}>InterArt</h1>
                            </div>
                            <div className='NavbarMenuDiv'>
                                <Link to='/' className='NavbarMenuLink' style={{color: '#111'}}>Home</Link>
                                <Link to='/about-us' className='NavbarMenuLink' style={{color: '#111'}}>About Us</Link>
                                <Link to='/offer' className='NavbarMenuLink' style={{color: '#111'}}>Offer</Link>
                                <Link to='/contact' className='NavbarMenuLink' style={{color: '#111'}}>Contact</Link>
                                <Link to='/' className='NavbarMenuLink1' style={{backgroundColor: 'rgba(0, 132, 232, 1)', color: 'white'}}>Buy Now</Link>
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
                </motion.div>
            ) : (
                <motion.div className='NavbarContainer' variants={navbarVariants} initial='hidden' animate='visible'>
                    <div className='NavbarContainerBig'>
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
                </motion.div>
            )}
        </>
    )
}

export default Navbar