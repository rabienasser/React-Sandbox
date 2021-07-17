import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {MovieState} from '../movieState'

import styled from 'styled-components'


function MovieDetail() {
    const history = useHistory()
    const url = history.location.pathname
    
    // State
    const [movies, setMovies] = useState(MovieState)
    const [movie, setMovie] = useState(null)

    // UseEffect
    useEffect(() => {
            const currentMovie = movies.filter(movie => movie.url === url)
            setMovie(currentMovie[0])
    }, [movies, url])  //update when movies and url changes

    return (
        <>
        {movie && (
        <div>
            <Headline>
                <h2>{movie.title}</h2>
                <img className={`${movie.url === '/work/good-times' ? 'good-times-img' : ''}`} src={movie.mainImg} alt="movie" />
            </Headline>
            <Awards>
                {
                    movie.awards.map(award => (
                        <Award title={award.title} desc={award.description} key={award.title} />)
                    )
                }
            </Awards>
            <ImageDisplay>
                <img src={movie.secondaryImg} alt="movie" />
            </ImageDisplay>
        </div>
        )}
        </>
    )
}

// Award component
const Award = ({title, desc}) => {
    return(
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{desc}</p>
        </AwardStyle>
    )
}

// Styled 

const Headline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;

    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }

    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }

    .good-times-img {
        object-position: bottom;
    }
`

const Awards = styled.div`
    min-height: 60vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`

const AwardStyle = styled.div`
    padding: 0 3rem;

    h3 {
        font-size: 1.5rem;
    }

    .line {
        width: 100%;
        height: 0.5rem;
        background: #23d997;
        margin: 1rem 0rem;
    }

    p {
        padding: 2rem 0;
    }
`

const ImageDisplay = styled.div`
    height: 100vh;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`


export default MovieDetail
