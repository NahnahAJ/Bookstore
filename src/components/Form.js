import React from 'react';

const Form = () => (
  <form className="form-container">
    <input
      type="text"
      className="input-text"
      placeholder="Book title"
    />
    <input
      type="text"
      className="input-text"
      placeholder="Book author"
    />
    <button type="submit" className="input-submit">
      Add Book
    </button>
  </form>
);
export default Form;
