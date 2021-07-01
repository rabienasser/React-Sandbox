export const addItemToCart = (cartItems, cartItemToAdd) => {
   const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToAdd.id
   );

   if (existingCartItem) {
      //if existingCartItem exists...
      return cartItems.map((cartItem) =>
         cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
      );
   }

   return [...cartItems, { ...cartItemToAdd, quantity: 1 }]; //any time an item is added, quanitity increases from 1
};
