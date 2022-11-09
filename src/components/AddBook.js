import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

// add functionality for "Add new" button click:

const AddBook = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  const onChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const dispatch = useDispatch();

  const createdBook = (e) => {
    e.preventDefault();
    // Take the inputs from the state and  and add them to an object.
    // Set the data inputs in the local React state (set title and author).
    // generate a unique id
    // dispatch a corresponding action
    dispatch(addBook({ id: Date.now(), title, author }));
    setAuthor('');
    setTitle('');
  };

  return (
    <form className="form-container" onSubmit={createdBook}>
      <input
        type="text"
        className="input-text"
        placeholder="Book title"
        value={title}
        onChange={onChangeTitle}
      />
      <input
        type="text"
        className="input-text"
        placeholder="Book author"
        value={author}
        onChange={onChangeAuthor}
      />
      <button type="submit" className="input-submit">
        Add Book
      </button>
    </form>
  );
};
export default AddBook;
