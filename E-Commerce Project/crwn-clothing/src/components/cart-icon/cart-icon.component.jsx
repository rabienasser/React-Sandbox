import React from 'react'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.style.scss'


function CartIcon({ toggleCartHidden, itemCount }) {
    return (
        <div className='cart-icon'>
            <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden}/>
            <span className='item-count'> {itemCount} </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}

// Add number of items into cart icon
const mapStateToProps = ({ cart: { cartItems } }) => {
    return {
        itemCount: cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
