// Import Redux Provider and your store in the main component of your React app.
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import Books from './components/Books';
import store from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Books />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
