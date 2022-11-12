import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendBookToApi } from '../redux/books/books';
import './componentStyles/AddBook.modules.css';

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
    dispatch(
      sendBookToApi({
        item_id: Date.now(),
        title,
        author,
        category: 'fiction',
      }),
    );
    setAuthor('');
    setTitle('');
  };

  return (

    <div>
      <div className="Title fontStyles"> Add New Book</div>
      <form className="form-container" onSubmit={createdBook}>
        <input
          type="text"
          className="input-text"
          placeholder="Book title"
          value={title}
          onChange={onChangeTitle}
          required
        />
        <input
          type="text"
          className="input-text"
          placeholder="Book author"
          value={author}
          onChange={onChangeAuthor}
          required
        />
        <button type="submit" className="input-submit">
          Add Book
        </button>
      </form>
    </div>
  );
};
export default AddBook;
