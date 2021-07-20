import React from 'react'
// Styled
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Framer Motion
import {motion} from 'framer-motion'
import {contactBlocks, iconAnim} from '../animation'


function ContactBlock({text, icon, button}) {
    return (
        <Block variants={iconAnim}>
            <FontAwesomeIcon icon={icon} className='icon' />
            <h4>{text}</h4>
            <button>{button}</button>
        </Block>
    )
}

const Block = styled(motion.div)`
    background: #23d997;
    height: 250px;
    width: 330px;
    display: flex;
    flex-direction: column;
    color: #353535;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    box-shadow: 10px 10px 8px #888888; 

    .icon {
        font-size: 70px;
        position: relative;
        top: -55px;
        color: #353535;
    }

    h4 {
        color: #353535;
        font-size: 1.5rem;
    }

    button {
        background: white;
        color: #353535;
        padding: 1rem 2rem;
        border: 2px solid #353535;
        font-weight: lighter;
        transition: 0.3s ease all;
        width: 75%;

        &:hover {
            color: white;
            background: #353535;
        }
    }
`



export default ContactBlock
