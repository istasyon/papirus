import React from 'react';

import './styles/LandingNavbar.scss';

const LandingNavbar = () => {
  return (
    <nav className="LandingNavbar">
      <h2 className="LandingNavbar__logo">PAPIRUS</h2>
      <ul className="LandingNavbar__list">
        <li
          className="LandingNavbar__list_item"
          onClick={() => console.log('HowItWorks')}
        >
          How It Works
        </li>
        <li className="LandingNavbar__list_item">Become a Tutor</li>
        <li className="LandingNavbar__list_item">Login</li>
        <li className="LandingNavbar__signup btn">Sign Up</li>
      </ul>
    </nav>
  );
};

export default LandingNavbar;
