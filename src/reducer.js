export const initialState = {
    basket: [],
    user: null
  };
  
  // Selector
  export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);
  
  const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
      case "userAuth": 
      return {
        ...state,
        user: action.item
      }
  
      default:
        return state;
    }
  };
  
  export default reducer;
  