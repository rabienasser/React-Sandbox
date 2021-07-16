import React from 'react'

// Import components
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import FAQ from '../components/FAQ'
import Navbar from '../components/Navbar'
import styled from 'styled-components'

function AboutUs() {
    return (
        <div className="App">
            <AboutSection />
            <ServicesSection />
            <FAQ />
        </div>
    )
}



export default AboutUs
