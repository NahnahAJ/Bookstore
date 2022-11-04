import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ author, title }) => (
  <div>
    <h2>
      {author}
      {' '}
      :
      {' '}
      {title}
    </h2>
    <button type="button">Remove</button>
  </div>
);

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
