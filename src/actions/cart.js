export const setCart = (book) => {
   return {
      type: "ADD_BOOK_TO_CART",
      payload: {
         book
      }
   }
}


export const removeFromCart = (id) => {
   return {
      type: "REMOVE_FROM_CART",
      payload: {
         id
      }
   }
}