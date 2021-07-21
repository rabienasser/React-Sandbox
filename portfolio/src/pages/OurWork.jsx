import React from 'react'
import {Link} from 'react-router-dom'
// Import animations
import {motion} from 'framer-motion'
import {pageAnimation, fade, photoAnim, lineAnim, colorSlider} from '../animation'
import {useScroll} from '../components/UseScroll'
// Styled Components
import styled from 'styled-components'
// Images
import athlete from '../img/athlete-small.png'
import racer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'

function OurWork() {
    const [element, controls] = useScroll()
    const [element2, controls2] = useScroll()
    return (
        <Work variants={pageAnimation} initial='hidden' animate='show' exit='exit' style={{background: 'white'}}>
            {/* Color Frames */}
            <Frame1 variants={colorSlider} />
            <Frame2 variants={colorSlider} />
            <Frame3 variants={colorSlider} />
            <Frame4 variants={colorSlider} />

            <Movie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                    <motion.div className="line" variants={lineAnim}></motion.div>
                <Link to='/work/the-athlete'>
                <Hide>
                    <motion.img src={athlete} alt="athlete" variants={photoAnim} />
                </Hide>
                </Link>
            </Movie>
            <Movie variants={fade} animate={controls} initial='hidden' ref={element}>
                <h2>The Racer</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to='/work/the-racer'>
                    <img src={racer} alt="racer" />
                </Link>
            </Movie>
            <Movie variants={fade} animate={controls2} initial='hidden' ref={element2}>
                <h2>Good Times</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
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
    @media(max-width: 900px){
        padding: 2rem 2rem;
    }
`

const Movie = styled(motion.div)`
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
