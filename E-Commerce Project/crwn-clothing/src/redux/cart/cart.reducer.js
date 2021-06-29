import { CartActionTypes } from "./cart.types";

/* eslint-disable default-case */
const INITIAL_STATE = {
   hidden: true,
};

const CartReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case CartActionTypes.TOGGLE_CART_HIDDEN:
         return {
            ...state,
            hidden: !state.hidden, //Whether state 'hidden' is true OR false, toggle the opposite
         };
      default:
         return state;
   }
};

export default CartReducer;
