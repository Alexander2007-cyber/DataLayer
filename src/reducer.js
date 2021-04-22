export const initialState = {
    user: null
  };
  
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
  
