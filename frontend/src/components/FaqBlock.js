import React, { useState, useEffect } from 'react'
import ArrowDown from '../static/icons/down.png'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const FaqBlock = ({nr, title, body}) => {
    const [faq, setFaq] = useState(false)

    const FaqToggle = (value) => {
        if (value === false){
            setFaq(true)
        }
        else{
            setFaq(false)
        }
    }

    const variants = {
        hidden: { scale: 0, opacity: 0},
        visible: {
            opacity: 1, scale: 1,
            transition: {
                duration: 0.8,
                type: 'spring',
                stiffness: 100,
                delay: 0.4
            }
        }
    }

    return (
        <motion.div className='HomeFaqDiv' initial="hidden" variants={variants} whileInView='visible' viewport={{ once: true }}>
            <div className='HomeFaqTop'>
                <h1><span>0{nr}.</span> {title}</h1>
                <img src={ArrowDown} className='HomeFaqDivImg' alt='Arrow Down' onClick={() => FaqToggle(faq)} />
                {/* <a href="https://www.flaticon.com/free-icons/down-arrow" title="down arrow icons">Down arrow icons created by Arkinasi - Flaticon</a> */}
            </div>
            <div className='HomeFaqDivP' style={faq ? {animationName: 'growDown'} : {animationName: 'growUp'}}>
                <p>{body}</p>
            </div>
        </motion.div>
    )
}

export default FaqBlock