import React from 'react'
// Styled components
import styled from 'styled-components'
import {About, Description, Image, Hide} from '../styles'
// Import Component
import Toggle from './Toggle'
// Framer Motion
import {motion} from 'framer-motion'
import {AnimateSharedLayout} from 'framer-motion'
// Animate section scrolling
import{useScroll} from './UseScroll'
import {scrollReveal} from '../animation'

function FAQ() {
    const [element, controls] = useScroll()
    return (
        <FAQstyle variants={scrollReveal} animate={controls} initial='hidden' ref={element}>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title='How Do I Start?'>
                        <div className='answer'>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, culpa?</p>
                        </div>
                </Toggle>
                <Toggle title='Daily Schedule'>
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, culpa?</p>
                        </div>
                </Toggle>
                <Toggle title='Different Payment Methods'>
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, culpa?</p>
                        </div>
                </Toggle>
                <Toggle title='What Products Do You Offer?'>
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, culpa?</p>
                        </div>
                </Toggle>
            </AnimateSharedLayout>
          
        </FAQstyle>
    )
}


const FAQstyle = styled(About)`
    display: block;

    span {
        display: block;
    }

    h2 {
        padding-bottom: 5rem;
    }

    h4 {
        font-size: 1.5rem;
    }

    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }

    .question {
        padding: 1.5rem 0rem;
        cursor: pointer;
    }

    .answer {

        p{
            padding: 1rem 0;
        }
    }
`

export default FAQ
