import React from 'react'

// Import animations
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'

function ContactUs() {
    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit' style={{background: 'white'}}>
            <h1>Contact Us</h1>
        </motion.div>
    )
}

export default ContactUs
