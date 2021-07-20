import React from 'react'
// Import img
import home1 from '../img/home1.png'
// Styled components
import {About, Description, Image, Hide} from '../styles'
// Framer Motion
import {motion} from 'framer-motion'
import {titleAnim, fade, photoAnim} from '../animation'
// Import Wave SVG
import Wave from './Wave'
// React Router Dom
import {Link} from 'react-router-dom'

function AboutSection() {
    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim} >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >your <span>dream</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills</motion.p>
                <Link to='/contact'><motion.button variants={fade}>Contact Us</motion.button></Link>
            </Description>
            <Image>
                <motion.img src={home1} alt='home' variants={photoAnim} />
            </Image>
            <Wave />
        </About>
    )
}

// Styled Component
// const About = styled.div`
//     min-height: 90vh;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 5rem 10rem;
//     color: white;
// `

// const Description = styled.div`
//     flex: 1;
//     padding-right: 5rem;

//     h2 {
//         font-weight: lighter;
//     }
// `

// const Image = styled.div`
//     flex: 1;
//     overflow: hidden;

//     img {
//         width: 100%;
//         height: 80vh;
//         object-fit: cover;
//     }
// `

// const Hide = styled.div`
//     overflow: hidden;
// `


export default AboutSection
