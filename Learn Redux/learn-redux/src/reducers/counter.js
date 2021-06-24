const counterReducer = (state = 5, action) => {
   // eslint-disable-next-line default-case
   switch (action.type) {
      case "INCREMENT":
         return state + 1;
      case "DECREMENT":
         return state - 1;
      default:
         return state;
   }
};

export default counterReducer;
