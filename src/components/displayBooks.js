import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookFromApi, removeBookFromApi } from '../redux/books/books';

// Make sure that list of books displays books from Redux store.
// Use useSelector to consume the state.
const DisplayBooks = () => {
  const totalBooks = [];
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksFromApi);
  const arrayOfBooks = books.books;
  Object.keys(arrayOfBooks).forEach((bookObj) => {
    arrayOfBooks[bookObj].forEach((newArray) => {
      totalBooks.push({ ...newArray, id: bookObj });
    });
  });
  useEffect(() => {
    dispatch(getBookFromApi());
  }, [dispatch]);

  // add a functionality for "Remove" button click:
  // display books

  return (
    <>
      {totalBooks.map((book) => (
        <div key={book.id}>
          <span>
            {book.title}
            :
            {book.author}
          </span>
          <button
            type="button"
            onClick={() => {
              dispatch(removeBookFromApi(book.id));
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
};

export default DisplayBooks;
