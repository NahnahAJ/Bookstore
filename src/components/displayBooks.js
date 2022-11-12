import { Progress } from 'antd';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookFromApi, removeBookFromApi } from '../redux/books/books';
import './componentStyles/displayBooks.modules.css';

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
        <div key={book.id} className="Book-Card">
          <div className="Book-Card-Header">
            <div className="Category">category</div>
            <div className="Book-title">{book.title}</div>
            <div className="Book-author">{book.author}</div>
            <div className="buttons">
              <button type="button" className="Comments">Comments</button>
              <button
                className="Remove-Book"
                type="button"
                onClick={() => {
                  dispatch(removeBookFromApi(book.id));
                }}
              >
                Remove
              </button>
              <button type="button" className="Edit-Book">Edit</button>
            </div>
          </div>
          <div className="Progress-circle">
            <Progress
              type="circle"
              percent={75}
              className="circle"
              width={60}
              format={() => ''}
            />

            <div className="progress-percent">
              <span className="percent">
                {75}
                %
              </span>
              <span className="progress">Completed</span>
            </div>
          </div>

          <div className="Completed-chapters">
            <span className="chapter">Current chapter</span>
            <span className="current-chapter">Chapter 1</span>
            <button type="button" className="Progress-btn">Update Progress</button>
          </div>
        </div>
      ))}
      <div className="Line" />
    </>
  );
};

export default DisplayBooks;
