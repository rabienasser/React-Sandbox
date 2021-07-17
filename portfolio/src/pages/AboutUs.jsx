import React from 'react'

// Import animations
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'

// Import components
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import FAQ from '../components/FAQ'
import Navbar from '../components/Navbar'
import styled from 'styled-components'

function AboutUs() {
    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <AboutSection />
            <ServicesSection />
            <FAQ />
        </motion.div>
    )
}



export default AboutUs
