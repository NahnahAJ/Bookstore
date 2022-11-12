import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Categories from '../pages/Categories';
import AddBook from './AddBook';
import Navbar from './Navbar';
import DisplayBooks from './displayBooks';

const Books = () => (
  <>
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <div>
              <DisplayBooks />
              <AddBook />
            </div>
          )}
        />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </>
);

export default Books;
