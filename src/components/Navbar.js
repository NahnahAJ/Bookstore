import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import './componentStyles/Navbar.modules.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      name: 'BOOKS',
      path: '/',
    },
    {
      id: 2,
      name: 'CATEGORIES',
      path: '/categories',
    },
  ];

  return (
    <nav className="navBar display">
      <span className="Bookstore-CMS fontStyles">Bookstore-CMS</span>
      {links.map((link) => (
        <span className="BOOK" key={link.id}>
          <NavLink to={link.path}>{link.name}</NavLink>
        </span>
      ))}
      <div className="Oval">
        <FaUserAlt className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
