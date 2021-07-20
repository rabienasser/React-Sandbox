import React from 'react'
// Import animations
import {motion} from 'framer-motion'
import {pageAnimation, titleAnim, fade} from '../animation'
// Styled
import styled from 'styled-components'
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faComments, faMobileAlt, faHandPeace, faEnvelope} from "@fortawesome/free-solid-svg-icons"
// Import Components
import ContactBlock from '../components/ContactBlock'

function ContactUs() {
    return (
        <ContactStyle variants={pageAnimation} initial='hidden' animate='show' exit='exit' style={{background: 'white'}}>
            <motion.h1 variants={fade}>Get In Touch</motion.h1>
            <div className="contact-blocks" >
                <ContactBlock text={'Let\'s have a chat'} icon={faComments} button={'Start a Live Chat'}  />
                <ContactBlock text={'Drop us a line'} icon={faEnvelope} button={'Submit a Request'}  />
                <ContactBlock text={'Text Us'} icon={faMobileAlt} button={'Text'}  />
                <ContactBlock text={'Tweet Us'} icon={faHandPeace} button={'Follow Us'}  />
            </div>
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 0rem;
    color: #353535;
    min-height: 90vh;

    h1 {
        text-align: center;
        font-size: 3rem;
        margin-bottom: 7rem;
    }

    .contact-blocks {
        display: flex;
        justify-content: space-evenly;
    }
`



export default ContactUs
