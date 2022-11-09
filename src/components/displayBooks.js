import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

// Make sure that list of books displays books from Redux store.
// Use useSelector to consume the state.
const DisplayBooks = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  // add a functionality for "Remove" button click:
  // display books
  return (
    <>
      {books.map((book) => (
        <div key={book.id}>
          <span>
            {book.title}
            :
            {book.author}
          </span>
          <button
            type="button"
            onClick={
            () => dispatch(removeBook(book.id))
          }
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
};

export default DisplayBooks;
