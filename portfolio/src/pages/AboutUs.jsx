import React from 'react'
// Import animations
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'
// Import components
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import FAQ from '../components/FAQ'
import {Hide} from '../styles'

function AboutUs() {
    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <AboutSection />
            <Hide>   {/* Adding Hide prevents overflow x on media queries */}
                <ServicesSection />    
            </Hide>
            <Hide>
                <FAQ />
            </Hide>
        </motion.div>
    )
}



export default AboutUs
