import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Categories from '../pages/Categories';
import AddBook from './AddBook';
import Navbar from './Navbar';
import DisplayBooks from './displayBooks';

const Books = () => (
  <>
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={(
          <div>
            <AddBook />
            <h2>Redux Store:</h2>
            <DisplayBooks />
          </div>
          )}
      />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default Books;
