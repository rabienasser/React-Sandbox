import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {
    return (
        // <div>
        //     {/* <h1 style={headingStyle}>{props.branding}</h1>  Add inline styling with CSS */}
        //     <h1>{props.branding}</h1> 
        // </div>

        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">{props.branding}</a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

// Typechecking with PropTypes
Header.defaultProps = {
    branding: 'My App' //Sets default header if nothing is passed in App.js
}

Header.propTypes = {
    branding: PropTypes.string.isRequired  //Ensuring that a string is passed into the Header in App.js
}





// Adding a style class to a component
// const headingStyle = {
//     color: 'green',
//     fontSize: '50px'
// }

/* Could also be written like this:

const Header = () => {
    return (
        <div>
            <h1>Contact Manager</h1>
        </div>

export default Header;
    )*/
