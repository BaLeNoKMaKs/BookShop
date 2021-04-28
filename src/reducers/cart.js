const initialState = {
   cartArr: [],
}

const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      case "ADD_BOOK_TO_CART":
         return {
            ...state,
            cartArr: [
               ...state.cartArr,
               action.payload.book
            ]
         }
      case "REMOVE_FROM_CART":
         return {
            ...state,
            cartArr: state.cartArr.filter(element => action.payload.id !== element.id)
         }
      default:
         return state
   }
}

export default cartReducer