import React from 'react'
import '../HomePage/HomePage.css'
import BannerImg from '../../static/images/banner.svg'
import Banner1Img from '../../static/images/banner1.svg'
import Banner2Img from '../../static/images/banner2.svg'
import BlogBg from '../../static/images/blob.svg'
import Blog1Bg from '../../static/images/blob1.svg'
import { Link } from 'react-router-dom'
import SeoIcon from '../../static/icons/seo.png'
import WriterIcon from '../../static/icons/writer.png'
import SocialsIcon from '../../static/icons/socials.png'
import { motion } from 'framer-motion'
import FaqBlock from '../../components/FaqBlock'

const HomePage = () => {
    const variants1 = {
        hidden: { x: '-200px', opacity: 0},
        visible: {
            x: 0, opacity: 1,
            transition: {
                duration: 0.8,
                type: 'spring',
                stiffness: 80,
                delay: 0.2
            }
        }
    }

    const variants2 = {
        hidden: { x: '-200px', opacity: 0},
        visible: {
            x: 0, opacity: 1,
            transition: {
                duration: 0.8,
                type: 'spring',
                stiffness: 80,
                delay: 0.4
            }
        }
    }

    const variants3 = {
        hidden: { x: '-200px', opacity: 0},
        visible: {
            opacity: 1, x: 0,
            transition: {
                duration: 0.8,
                type: 'spring',
                stiffness: 80,
                delay: 0.8
            }
        }
    }

    const variants4 = {
        hidden: { scale: 0, opacity: 0},
        visible: {
            opacity: 1, scale: 1,
            transition: {
                duration: 0.8,
                type: 'spring',
                stiffness: 100,
                delay: 1.2
            }
        }
    }

    const variants5 = {
        hidden: { scale: 0, opacity: 0},
        visible: {
            opacity: 1, scale: 1,
            transition: {
                duration: 1.4,
                type: 'spring',
                stiffness: 100,
                delay: 0.3
            }
        }
    }

    const variants6 = {
        hidden: { scale: 0, opacity: 0},
        visible: {
            opacity: 1, scale: 1,
            transition: {
                duration: 2,
                type: 'spring',
                stiffness: 120,
                delay: 0.5
            }
        }
    }

    const variants7 = {
        hidden: { y: 100, opacity: 0},
        visible: {
            y: 0, opacity: 1,
            transition: {
                duration: 3,
                type: 'spring',
                stiffness: 180,
                delay: 0.4
            }
        }
    }

    const variants8 = {
        hidden: { y: 100, opacity: 0},
        visible: {
            y: 0, opacity: 1,
            transition: {
                duration: 3,
                type: 'spring',
                stiffness: 180,
                delay: 0.2
            }
        }
    }

    const variants9 = {
        hidden: { y: 100, opacity: 0},
        visible: {
            y: 0, opacity: 1,
            transition: {
                duration: 3,
                type: 'spring',
                stiffness: 180,
                delay: 0.6
            }
        }
    }

    const variants10 = {
        hidden: { scale: 0, opacity: 0},
        visible: {
            opacity: 1, scale: 1,
            transition: {
                duration: 1.4,
                type: 'spring',
                stiffness: 120,
                delay: 0.2
            }
        }
    }

    const variants11 = {
        hidden: { scale: 0, opacity: 0},
        visible: {
            scale: 1, opacity: 1,
            transition: {
                duration: 3,
                type: 'spring',
                stiffness: 120,
                delay: 0.4
            }
        }
    }

    const variants12 = {
        hidden: { scale: 0, opacity: 0},
        visible: {
            scale: 1, opacity: 1,
            transition: {
                duration: 1.8,
                type: 'spring',
                stiffness: 120,
                delay: 0.8
            }
        }
    }

    const variants13 = {
        hidden: { scale: 0, opacity: 0},
        visible: {
            scale: 1, opacity: 1,
            transition: {
                duration: 1.6,
                type: 'spring',
                stiffness: 120,
                delay: 0.4
            }
        }
    }

    const variants14 = {
        hidden: { x: '200px', opacity: 0},
        visible: {
            x: 0, opacity: 1,
            transition: {
                duration: 1,
                type: 'spring',
                stiffness: 80,
                delay: 0.4
            }
        }
    }

    const variants15 = {
        hidden: { x: '-200px', opacity: 0},
        visible: {
            x: 0, opacity: 1,
            transition: {
                duration: 1.8,
                type: 'spring',
                stiffness: 80,
                delay: 0.3
            }
        }
    }

    const variants16 = {
        hidden: { scale: 0, opacity: 0},
        visible: {
            opacity: 1, scale: 1,
            transition: {
                duration: 1.6,
                type: 'spring',
                stiffness: 120,
                delay: 0.8
            }
        }
    }

    const variants17 = {
        hidden: { scale: 0, opacity: 0},
        visible: {
            scale: 1, opacity: 1,
            transition: {
                duration: 1.6,
                type: 'spring',
                stiffness: 120,
                delay: 0.4
            }
        }
    }

    const variants18 = {
        hidden: { x: '-200px', opacity: 0},
        visible: {
            x: 0, opacity: 1,
            transition: {
                duration: 0.6,
                type: 'spring',
                stiffness: 80,
                delay: 0.4
            }
        }
    }

    const variants19 = {
        hidden: { x: '200px', opacity: 0},
        visible: {
            x: 0, opacity: 1,
            transition: {
                duration: 0.4,
                type: 'spring',
                stiffness: 80,
                delay: 0.6
            }
        }
    }

    const variants22 = {
        hidden: { scale: 0, opacity: 0},
        visible: {
            opacity: 1, scale: 1,
            transition: {
                duration: 1.4,
                type: 'spring',
                stiffness: 120,
                delay: 0.4
            }
        }
    }

    const variants23 = {
        hidden: { scale: 0, opacity: 0},
        visible: {
            scale: 1, opacity: 1,
            transition: {
                duration: 3,
                type: 'spring',
                stiffness: 120,
                delay: 0.6
            }
        }
    }

    const faqModel = [
        {id: 1, title: 'In maximus malesuada massa, at vehicula nisl viverra quis. Donec ac enim purus.', body: 'Ut est ligula, volutpat at feugiat nec, bibendum id odio. Curabitur varius tellus vel justo dignissim iaculis. Sed at nisl ante. Maecenas blandit id ante eget commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec a viverra metus. Nam finibus dictum velit id sagittis. Nulla suscipit enim nec tincidunt elementum.'},
        {id: 2, title: 'hasellus commodo vestibulum justo. Duis varius mi non velit finibus rutrum.', body: 'Ut est ligula, volutpat at feugiat nec, bibendum id odio. Curabitur varius tellus vel justo dignissim iaculis. Sed at nisl ante. Maecenas blandit id ante eget commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec a viverra metus. Nam finibus dictum velit id sagittis. Nulla suscipit enim nec tincidunt elementum.'},
        {id: 3, title: 'Donec suscipit velit pharetra diam pulvinar, a consequat neque congue.', body: 'Ut est ligula, volutpat at feugiat nec, bibendum id odio. Curabitur varius tellus vel justo dignissim iaculis. Sed at nisl ante. Maecenas blandit id ante eget commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec a viverra metus. Nam finibus dictum velit id sagittis. Nulla suscipit enim nec tincidunt elementum.'},
        {id: 4, title: 'Suspendisse eu sem at urna maximus fringilla.', body: 'Ut est ligula, volutpat at feugiat nec, bibendum id odio. Curabitur varius tellus vel justo dignissim iaculis. Sed at nisl ante. Maecenas blandit id ante eget commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec a viverra metus. Nam finibus dictum velit id sagittis. Nulla suscipit enim nec tincidunt elementum.'},
        {id: 5, title: 'Quisque consectetur mi efficitur condimentum aliquet. Aenean nisi dui, feugiat et est ultrices, fermentum sollicitudin mauris.', body: 'Ut est ligula, volutpat at feugiat nec, bibendum id odio. Curabitur varius tellus vel justo dignissim iaculis. Sed at nisl ante. Maecenas blandit id ante eget commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec a viverra metus. Nam finibus dictum velit id sagittis. Nulla suscipit enim nec tincidunt elementum.'},
        {id: 6, title: 'Integer eros odio, molestie eu cursus quis, bibendum sed ligula.', body: 'Ut est ligula, volutpat at feugiat nec, bibendum id odio. Curabitur varius tellus vel justo dignissim iaculis. Sed at nisl ante. Maecenas blandit id ante eget commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec a viverra metus. Nam finibus dictum velit id sagittis. Nulla suscipit enim nec tincidunt elementum.'},
    ]

    return (
        <div className='HomeContainer'>
            <div className='HomeWave'></div>
            <div className='HomeHeader'>
                <div className='HomeHeaderLeft'>
                    <motion.h1 viewport={{ once: true }} initial="hidden" variants={variants1} whileInView='visible'>Lorem ipsum dolor sit amet</motion.h1>
                    <motion.p viewport={{ once: true }} initial="hidden" variants={variants2} whileInView='visible'>Consectetur adipiscing elit. Praesent placerat fermentum enim vel dignissim. Aenean sed libero metus. Duis consectetur venenatis ante, non facilisis ipsum efficitur non.</motion.p>
                    <motion.a viewport={{ once: true }} initial="hidden" variants={variants3} whileInView='visible' className='HomeHeaderLeftLink'>Get Started</motion.a>
                </div>
                <div className='HomeHeaderRight'>
                    <motion.img viewport={{ once: true }} initial="hidden" variants={variants4} whileInView='visible' src={BannerImg} className='HomeHeaderRightImg' alt='Banner' />
                </div>
            </div>
            <div className='HomeInfoContainer'>
                <div className='HomeInfoHeader'>
                    <motion.p viewport={{ once: true }} initial="hidden" variants={variants5} whileInView='visible'>What we are doing?</motion.p>
                    <motion.h1 viewport={{ once: true }} initial="hidden" variants={variants6} whileInView='visible'>Aenean aliquam, felis vitae hendrerit venenatis, turpis neque feugiat turpis.</motion.h1>
                </div>
                <div className='HomeInfoMain'>
                    <motion.div viewport={{ once: true }} className='HomeInfoMainDiv' initial="hidden" variants={variants7} whileInView='visible'>
                        <img src={SeoIcon} className='HomeInfoMainIcon' alt='Seo Icon'/>
                        {/* <a href="https://www.flaticon.com/free-icons/marketing" title="marketing icons">Marketing icons created by monkik - Flaticon</a> */}
                        <h1 className='HomeInfoMainH1'>SEO Optymalization</h1>
                        <p className='HomeInfoMainP'>Aliquam id quam dolor. Proin non nulla porttitor nulla tempus consectetur. Nullam lobortis ex eu ex placerat pellentesque. Vivamus ac luctus elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
                        <Link to='/' className='HomeInfoMainLink'>See More</Link>
                    </motion.div>
                    <motion.div viewport={{ once: true }} className='HomeInfoMainDiv1' initial="hidden" variants={variants8} whileInView='visible'>
                        <img src={WriterIcon} className='HomeInfoMainIcon' alt='Writer Icon'/>
                        {/* <div> Icons made by <a href="https://www.flaticon.com/authors/itim2101" title="itim2101"> itim2101 </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div> */}
                        <h1 className='HomeInfoMainH11'>Content Marketing</h1>
                        <p className='HomeInfoMainP1'>Aliquam id quam dolor. Proin non nulla porttitor nulla tempus consectetur. Nullam lobortis ex eu ex placerat pellentesque. Vivamus ac luctus elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
                        <Link to='/' className='HomeInfoMainLink1'>See More</Link>
                    </motion.div>
                    <motion.div viewport={{ once: true }} className='HomeInfoMainDiv' initial="hidden" variants={variants9} whileInView='visible'>
                        <img src={SocialsIcon} className='HomeInfoMainIcon' alt='Socials Icon'/>
                        {/* <a href="https://www.flaticon.com/free-icons/marketing" title="marketing icons">Marketing icons created by Freepik - Flaticon</a> */}
                        <h1 className='HomeInfoMainH1'>Social Media Support</h1>
                        <p className='HomeInfoMainP'>Aliquam id quam dolor. Proin non nulla porttitor nulla tempus consectetur. Nullam lobortis ex eu ex placerat pellentesque. Vivamus ac luctus elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
                        <Link to='/' className='HomeInfoMainLink'>See More</Link>
                    </motion.div>
                </div>
            </div>
            <div className='HomeInfoContainer'>
                <div className='HomeInfoHeader1'>
                    <motion.p viewport={{ once: true }} initial="hidden" variants={variants10} whileInView='visible'>Some Information About Us</motion.p>
                    <motion.h1 viewport={{ once: true }} initial="hidden" variants={variants11} whileInView='visible'>Mauris hendrerit maximus mi quis sodales. In sollicitudin at turpis eu semper.</motion.h1>
                </div>
                <div className='HomeInfoSTop'>
                    <div className='HomeInfoSTopLeft'>
                        <motion.img viewport={{ once: true }} initial="hidden" variants={variants12} whileInView='visible' src={Banner1Img} className='HomeInfoSTopLeftImg' alt='Banner1'/>
                        <motion.img viewport={{ once: true }} initial="hidden" variants={variants13} whileInView='visible' src={BlogBg} className='HomeInfoSTopLeftBlob' alt='Blob1' />
                    </div>
                    <motion.div viewport={{ once: true }} initial="hidden" variants={variants14} whileInView='visible' className='HomeInfoSTopLeftText'>
                        <h1>Duis tempor finibus purus, vitae tempor quam luctus non.</h1>
                        <p>Donec commodo, enim a ullamcorper dapibus, ex justo laoreet nulla, id feugiat nibh ex id ante. Duis dignissim magna quis vestibulum tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque magna felis, mattis sed viverra et, fringilla at lorem. Cras gravida libero et dui consequat pellentesque.</p>    
                    </motion.div>
                </div>  
                <div className='HomeInfoSTop'>
                    <motion.div viewport={{ once: true }} initial="hidden" variants={variants15} whileInView='visible' className='HomeInfoSTopLeftText'>
                        <h1>Duis tempor finibus purus, vitae tempor quam luctus non.</h1>
                        <p>Donec commodo, enim a ullamcorper dapibus, ex justo laoreet nulla, id feugiat nibh ex id ante. Duis dignissim magna quis vestibulum tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque magna felis, mattis sed viverra et, fringilla at lorem. Cras gravida libero et dui consequat pellentesque.</p>
                    </motion.div>
                    <div className='HomeInfoSTopLeft'>
                        <motion.img viewport={{ once: true }} initial="hidden" variants={variants16} whileInView='visible' src={Banner2Img} className='HomeInfoSTopLeftImg' alt='Banner2' />
                        <motion.img viewport={{ once: true }} initial="hidden" variants={variants17} whileInView='visible'src={Blog1Bg} className='HomeInfoSTopLeftBlob' alt='Blob2' />
                    </div>
                </div>
            </div>
            <div className='HomeNewsletter'>
                <div className='HomeNewsletter1'>
                    <motion.div viewport={{ once: true }} className='HomeNewsletterLeft' initial="hidden" variants={variants18} whileInView='visible'>
                        <h2>Subscribe to get updated</h2>
                        <p>Vestibulum ex magna, feugiat a imperdiet ac, condimentum in risus. Nullam felis tortor, gravida quis molestie a, porta a quam. Etiam non feugiat nibh. Pellentesque id malesuada enim. Nullam sed nisl non diam fringilla sagittis.</p>
                    </motion.div>
                    <motion.div viewport={{ once: true }} className='HomeNewsletterRight' initial="hidden" variants={variants19} whileInView='visible'>
                        <input type='text' className='HomeNewsletterRightInp' placeholder='Your email...' />
                        <button className='HomeNewsletterRightBtn'>Sign In</button>
                    </motion.div>
                </div>
            </div>
            <div className='HomeInfoContainer'>
                <div className='HomeInfoHeader2'>
                    <motion.p viewport={{ once: true }} initial="hidden" variants={variants22} whileInView='visible'>Frequently Asked Questions</motion.p>
                    <motion.h1 viewport={{ once: true }} initial="hidden" variants={variants23} whileInView='visible'>Sed sed molestie turpis. Nulla id maximus metus. Sed maximus maximus arcu.</motion.h1>
                </div>
                <div className='HomeFaqContainer'>
                    {faqModel && faqModel.map((item) => (
                        <FaqBlock nr={item.id} title={item.title} body={item.body}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage