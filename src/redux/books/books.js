// Define action types for adding and removing a book.
export const ADD_BOOK = 'bookstore/books/ADD_BOOK';
export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Set the initial state to be an empty array of books.
const defaultState = [];

// Write your reducer and export it as default.
const addReducer = (state = defaultState, action) => {
  switch (action.type) {
    // Define state changes for the actions that you created.
    case ADD_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      return state.filter((books) => books.id !== action.id);
    // In case of unknown action - return the current state.
    default:
      return state;
  }
};

// Export Action Creators for your actions.
export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default addReducer;
