import React from 'react';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'  //Lets us modify our component to have access to things related to Redux

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.style.scss';

const Header = ({ currentUser, hidden }) => {
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
            <CartIcon />
        </div>
        {
            hidden ? null :
            <CartDropdown />

        }
    </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser,     //WE ARE GETTING THE NULL VALUE (INITIAL STATE) AS CURRENT USER
        hidden: state.cart.hidden
    }
}

// ADVANCED DESTRUCTURED WAY OF WRITING THE ABOVE
//  const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => {
//      return {
//          currentUser, 
//          hidden
//      }
//  }


export default connect(mapStateToProps)(Header)     