import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      name: 'Home',
      path: '/',
    },
    {
      id: 2,
      name: 'Categories',
      path: '/categories',
    },
  ];

  return (
    <nav className="navBar">
      <h1>Bookstore</h1>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
