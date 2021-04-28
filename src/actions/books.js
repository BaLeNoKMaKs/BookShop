export const setBooks = (books) => ({
   type: "SET_BOOKS",
   payload: {
      books
   }
})

export const addBooks = (search) => ({
   type: "SET_QUERY",
   payload: {
      search
   }
})


export const filter = (type) => ({
   type: "FILTER",
   payload: {
      sortBy: type
   }
})