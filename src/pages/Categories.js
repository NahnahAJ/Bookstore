import React from 'react';
// Import Redux useDispatch.
import { useDispatch, useSelector } from 'react-redux';
import { statusAction } from '../redux/categories/categories';

// add a functionality for "Check status" button click:
const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  return (
    <div>
      <h1>{categories}</h1>
      <button
        type="button"
        onClick={
// Dispatch a corresponding action.
          () => dispatch(statusAction())
    }
      >
        Check status
      </button>
    </div>
  );
};

export default Categories;
