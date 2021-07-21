import React from 'react'
// Import styles
import styled from 'styled-components'
// React Router Dom
import {Link} from 'react-router-dom'


function Navbar() {
    return (
        <StyledNav>
            <h1><Link id='logo' to='/'>Capture</Link></h1>
            <ul>
                <li><Link id='list-item' to="/"> About Us</Link></li>
                <li><Link id='list-item' to="/work"> Our Work</Link></li>
                <li><Link id='list-item' to="/contact"> Contact Us</Link></li>
            </ul>
        </StyledNav>
    )
}


const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 10;

    a {
        color: white;
        text-decoration: none;
    }

    ul {
        display: flex;
    }

    li {
        list-style: none;
        padding-left: 10rem;
        position: relative;
    }

    #logo {
        font-family: 'Lobster', cursive;
        font-size: 1.5rem;
        font-weight: lighter;
    }

    #list-item {
        font-size: 1rem;
    }

    @media (max-width: 900px) {
    flex-direction: column;
    padding: 1rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`

export default Navbar
