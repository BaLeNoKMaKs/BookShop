const initialState = {
   isReady: false,
   books: [],
   sortBy: 'all',
   search: ''
}

export default (state = initialState, action) => {
   switch (action.type) {
      case 'SET_BOOKS':
         return {
            ...state,
            books: action.payload.books,
            isReady: true
         };
      case 'SET_QUERY':
         return {
            ...state,
            search: action.payload.search
         };
      case 'FILTER':
         return {
            ...state,
            sortBy: action.payload.sortBy
         }
      default:
         return state
   };

}
