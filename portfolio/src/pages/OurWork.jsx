import React from 'react'
import {Link} from 'react-router-dom'
// Import animations
import {motion} from 'framer-motion'
import {pageAnimation, fade, photoAnim, lineAnim, colorSlider} from '../animation'
// Styled Components
import styled from 'styled-components'
// Images
import athlete from '../img/athlete-small.png'
import racer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'

function OurWork() {
    return (
        <Work variants={pageAnimation} initial='hidden' animate='show' exit='exit' style={{background: 'white'}}>
            {/* Color Frames */}
            <Frame1 variants={colorSlider} />
            <Frame2 variants={colorSlider} />
            <Frame3 variants={colorSlider} />
            <Frame4 variants={colorSlider} />

            <Movie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <Hide>
                    <motion.div className="line" variants={lineAnim}></motion.div>
                </Hide>
                <Link to='/work/the-athlete'>
                    <motion.img src={athlete} alt="athlete" variants={photoAnim} />
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to='/work/the-racer'>
                    <img src={racer} alt="racer" />
                </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to='/work/good-times'>
                    <img className='goodtimes-img' src={goodtimes} alt="good times" />
                </Link>
            </Movie>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem 0rem 10rem;
    color: #1b1b1b;
`

const Movie = styled.div`
    padding-bottom: 10rem;

    .line {
        height: 0.5rem;
        background: #23d997;
        margin: 1rem 0 3rem 0;
    }

    img {
        height: 70vh;
        width: 100%;
        object-fit: cover;
    }

    .goodtimes-img {
        object-position: bottom;
    }

`

const Hide = styled.div`
    overflow: hidden;
`

// Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`
const Frame2 = styled(Frame1)`
    background: #ff8efb;
`
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
    background: #8effa0
`

export default OurWork
