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

function ServicesSection() {
    return (
        <Services>
            <Description>
                <h2>
                    High <span>quality</span> services
                </h2>
                <Cards>
                    <Card>
                        <Icon>
                            <img src={clock}  />
                            <h3>Efficient</h3>
                        </Icon>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <Icon>
                            <img src={diaphragm}  />
                            <h3>Diaphragm</h3>
                        </Icon>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <Icon>
                            <img src={money}  />
                            <h3>Affordable</h3>
                        </Icon>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <Icon>
                            <img src={teamwork}  />
                            <h3>Teamwork</h3>
                        </Icon>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2}  />
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
`

const Card = styled.div`
    flex-basis: 20rem;

    
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
