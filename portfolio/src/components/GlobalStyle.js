import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nobile', sans-serif;
    }

    body {
        background: #1b1b1b;
        color: white;
        overflow-x: hidden;
    }

    button {
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        padding: 1rem 1.2rem;
        border: 3px solid #23d997;
        background-color: transparent;
        color: white;
        transition: all 0.5s ease;
        
        &:hover {
            background-color: #23d997;
            color: white;
        }
    }

    h2 {
        font-weight: lighter;
        font-size: 3rem;
    }

    h4 {
        font-weight: bold;
    }

    p {
        padding: 3rem 0;
        color: #ccc;
        font-size: 1rem;
        line-height: 150%;
    }

    a {
        font-size: 1.1rem;
    }

    span {
        font-weight: bold;
        color: #23d997;
        font-style: italic;
    }
`;

export default GlobalStyle;
