import React from 'react'
import {Link} from 'react-router-dom'

import MovieDetail from './MovieDetail'

// Styled Components
import styled from 'styled-components'

// Images
import athlete from '../img/athlete-small.png'
import racer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'

function OurWork() {
    return (
        <Work>
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to='/work/the-athlete'>
                    <img src={athlete} alt="athlete" />
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

const Work = styled.div`
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

export default OurWork
