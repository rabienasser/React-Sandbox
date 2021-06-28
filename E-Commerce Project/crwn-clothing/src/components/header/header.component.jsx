import React from 'react';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'  //Lets us modify our component to have access to things related to Redux

import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.style.scss';

const Header = ({ currentUser }) => {
    return (
        <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser     //WE ARE GETTING THE NULL VALUE (INITIAL STATE) AS CURRENT USER
    }
}


export default connect(mapStateToProps)(Header)     