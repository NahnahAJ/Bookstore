// Define action types for adding and removing a book.
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const ADD_BOOK = 'bookstore/books/ADD_BOOK';
export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
export const GET_BOOK = 'bookstore/books/GET_BOOK';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GYyCqiiRoOj0083JgG28/books';

const initialState = {
  books: {},
  isLoading: true,
};

export const getBookFromApi = createAsyncThunk(
  GET_BOOK,
  async () => {
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export const sendBookToApi = createAsyncThunk(
  ADD_BOOK,
  async (book, thunkAPI) => {
    try {
      await axios.post(URL, book);
      return thunkAPI.dispatch(getBookFromApi());
    } catch (error) {
      return error;
    }
  },
);

export const removeBookFromApi = createAsyncThunk(
  REMOVE_BOOK,
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${URL}/${id}`);
      return thunkAPI.dispatch(getBookFromApi());
    } catch (error) {
      return error;
    }
  },
);

const createApiSlice = createSlice({
  name: 'booksFromApi',
  initialState,
  reducers: {},
  extraReducers: {
    [getBookFromApi.pending]: (state) => {
      state.isLoading = true;
    },
    [getBookFromApi.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [getBookFromApi.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default createApiSlice.reducer;
