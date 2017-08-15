import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../common/LoginModal';
import './styles/Navbar.scss';

export default class Navbar extends Component {
  state = {
    isLoginModal: false,
    modalType: null
  };
  render() {
    return (
      <nav className="Navbar">
        <h2 className="Navbar__logo">
          <Link to="/">PAPIRUS</Link>
        </h2>
        <ul className="Navbar__list">
          <li className="Navbar__list_item Navbar__list_item_tutor">
            <Link to="/become-a-tutor">Become a Tutor</Link>
          </li>
          <li
            className="Navbar__list_item"
            onClick={() => {
              this.setState({ isLoginModal: true, modalType: 'login' });
            }}
          >
            Login
          </li>
          <li
            className="Navbar__signup btn"
            onClick={() => {
              this.setState({ isLoginModal: true, modalType: 'signup' });
            }}
          >
            Sign Up
          </li>
        </ul>
        <LoginModal
          isVisible={this.state.isLoginModal}
          modalType={this.state.modalType}
          close={() => this.setState({ isLoginModal: false, modalType: null })}
        />
      </nav>
    );
  }
}
