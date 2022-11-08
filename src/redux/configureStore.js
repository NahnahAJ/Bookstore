// Importing the necessary methods from Redux Toolkit.
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import addReducer from './books/books';
import statusReducer from './categories/categories';

// Combine both reducers into a root reducer by using configureStore function.
const rootReducer = combineReducers({
  books: addReducer,
  categories: statusReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
