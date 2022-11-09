import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

// add functionality for "Add new" button click:

const AddBook = () => {
  const dispatch = useDispatch();

  const createdBook = () => {
    // Take the inputs from the state and  and add them to an object.
    const title = document.getElementById('title');
    const author = document.getElementById('author');

    // Set the data inputs in the local React state (set title and author).
    // generate a unique id
    // dispatch a corresponding action
    dispatch(
      addBook({ id: Date.now(), title: title.value, author: author.value }),
    );
  };

  return (
    <form className="form-container">
      <input
        id="title"
        type="text"
        className="input-text"
        placeholder="Book title"
      />
      <input
        id="author"
        type="text"
        className="input-text"
        placeholder="Book author"
      />
      <button
        type="submit"
        className="input-submit"
        onClick={(e) => {
          e.preventDefault();
          createdBook();
        }}
      >
        Add Book
      </button>
    </form>
  );
};
export default AddBook;
