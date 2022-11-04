import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Book from './Book';
import Categories from '../pages/Categories';
import Form from './Form';
import Navbar from './Navbar';

const Books = () => (
  <>
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={(
          <div>
            <Book author="Sam" title="Things" />
            <Form />
          </div>
          )}
      />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default Books;
