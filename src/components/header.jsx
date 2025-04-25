import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <nav>
        <div className="logo">YourLogo</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}