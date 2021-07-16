import React from 'react'

// Styled components
import styled from 'styled-components'
import {About, Description, Image, Hide} from '../styles'

function FAQ() {
    return (
        <FAQstyle>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, culpa?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, culpa?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Different Payment Methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, culpa?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What Products Do You Offer</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, culpa?</p>
                </div>
                <div className="faq-line"></div>
            </div>
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
        padding: 3rem 0rem;
        cursor: pointer;
    }

    .answer {
        padding: 2rem 0;

        p{
            padding: 1rem 0;
        }
    }
`

export default FAQ
