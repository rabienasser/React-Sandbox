import React from 'react'
// Import image
import home2 from '../img/home2.png'
// Styled components
import styled from 'styled-components'
import {About, Description, Image, Hide} from '../styles'
// Import Icons
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
// Animate section scrolling
import{useScroll} from './UseScroll'
import {scrollReveal} from '../animation'

function ServicesSection() {
    const [element, controls] = useScroll()
    return (
        <Services variants={scrollReveal} animate={controls} initial='hidden' ref={element}>
            <Description>
                <h2>
                    High <span>quality</span> services
                </h2>
                <Cards>
                    <Card>
                        <Icon>
                            <img src={clock} alt='clock' />
                            <h3>Efficient</h3>
                        </Icon>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <Icon>
                            <img src={diaphragm} alt='diaphragm' />
                            <h3>Diaphragm</h3>
                        </Icon>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <Icon>
                            <img src={money} alt='money' />
                            <h3>Affordable</h3>
                        </Icon>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <Icon>
                            <img src={teamwork} alt='teamwork' />
                            <h3>Teamwork</h3>
                        </Icon>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt='home' />
            </Image>
        </Services>
    )
}


// Styled Component
const Services = styled(About)`
   h2 {
       padding-bottom: 5rem;
   }

   p{
       width: 70%;
       padding: 2rem 0 4rem 0;
   }
`

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    @media(max-width: 768px){
        display: flex;
        flex-wrap: wrap;
    }
`

const Card = styled.div`
    flex-basis: 20rem;
   margin: auto;
   @media(max-width: 768px){
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
   }
`

const Icon = styled.div`
    display: flex;
    align-items:center;

    h3 {
        margin-left: 15px;
        color: #1b1b1b;
        background-color: white;
        padding: 1rem;
        font-size: 15px;
    }
`




export default ServicesSection
