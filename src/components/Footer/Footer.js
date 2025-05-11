import React, { useRef, useState, useEffect } from 'react';
import "./Footer.css";
import {motion, useInView } from "framer-motion";

function Footer() {

const ref = useRef(null);
const [refAmount, setRefAmount] = useState(window.innerWidth < 768 ? 0.1 : 0.3);

const handleResize = () => {
    setRefAmount(window.innerWidth < 768 ? 0.1 : 0.3);
};
useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
window.removeEventListener('resize', handleResize);
    };
}, []);

  const isInView = useInView(ref, { amount: refAmount, once: true }); ;  //element eke 0.3 k penna thiyeddi animate wenn patan gnnwa

    const container = {
    hidden: { 
    opacity: 0,
    y:100 
    },

    visible: {
    opacity: 1,
    y:0,
    
    }
};

  return (
    <motion.div className='Footer'
    variants={container}
    initial="hidden"
    animate={isInView ? 'visible' : 'hidden'}
    transition={{delay:0.3,duration:0.8}}
    ref={ref}>
        <div className='FooterContainer'>
            <div className='row'>
                <div className='Footer-col'>
                    <h4>Pure-X</h4>
                    <ul>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">About Us</a></li>
                    </ul>
                </div>
                <div className='Footer-col'>
                    <h4>Get Help</h4>
                    <ul>
                        <li><a href="/">Faq</a></li>
                        <li><a href="/">Mokak hari</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">About Us</a></li>
                    </ul>
                </div>
                <div className='Footer-col'>
                    <h4>mokak hari</h4>
                    <ul>
                        <li><a href="/">mokak hari damu</a></li>
                        <li><a href="/">mokak hari damu</a></li>
                        <li><a href="/">mokak hari damu</a></li>
                        <li><a href="/">About Us</a></li>
                    </ul>
                </div>
                <div className='Footer-col'>
                    <h4>Follow Us</h4>
                    <div className='social-links'>
                        <a href='/'><i className='fab fa-facebook-f'></i></a>
                        <a href='/'><i className='fab fa-instagram'></i></a>
                        <a href='/'><i className='fab fa-twitter'></i></a>
                        <a href='/'><i className='fab fa-linkedin'></i></a>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='Bottom'>
            <h4>© 2013-2024 All Rights Reserved </h4> 
            </div>
        </div>
    </motion.div>
  )
}

export default Footer