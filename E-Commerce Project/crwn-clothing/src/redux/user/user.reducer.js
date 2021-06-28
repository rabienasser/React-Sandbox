const INITIAL_STATE = {
   currentUser: null,
};

// Because state is undefined in the userReducer function, we can use ES6 to assign the state to the pre-defined object INITIAL_STATE
const userReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case "SET_CURRENT_USER":
         return {
            ...state, //Always spread everything in the state, we only modify what we care about
            currentUser: action.payload,
         };

      default:
         return state;
   }
};

export default userReducer;
