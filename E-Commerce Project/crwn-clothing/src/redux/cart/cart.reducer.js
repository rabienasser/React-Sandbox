import { CartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";

/* eslint-disable default-case */
const INITIAL_STATE = {
   hidden: true,
   cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case CartActionTypes.TOGGLE_CART_HIDDEN:
         return {
            ...state,
            hidden: !state.hidden, //Whether state 'hidden' is true OR false, toggle the opposite
         };
      case CartActionTypes.ADD_ITEM:
         return {
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload),
         };

      default:
         return state;
   }
};

export default CartReducer;
