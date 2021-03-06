import React from 'react'
import { connect } from 'react-redux'


import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.style.scss'

function CartDropdown({ cartItems }) {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items"> 
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems } }) => {
    return {
        cartItems
    }
}

// const mapStateToProps = state => {
//     return {
//         cartItem: state.cart.cartItems
//     }
// }

export default connect(mapStateToProps)(CartDropdown)
