import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../common/LoginModal';
import './styles/LandingNavbar.scss';

class LandingNavbar extends Component {
  state = {
    isLoginModal: false,
    modalType: null
  };
  render() {
    return (
      <nav className="LandingNavbar">
        <h2 className="LandingNavbar__logo">PAPIRUS</h2>
        <ul className="LandingNavbar__list">
          <li
            className="LandingNavbar__list_item"
            onClick={this.props.onHowItWorks}
          >
            How It Works
          </li>
          <li className="LandingNavbar__list_item LandingNavbar__list_item_tutor">
            <Link to="become-a-tutor">Become a Tutor</Link>
          </li>
          <li
            className="LandingNavbar__list_item"
            onClick={() => {
              this.setState({ isLoginModal: true, modalType: 'login' });
            }}
          >
            Login
          </li>
          <li
            className="LandingNavbar__signup btn"
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

export default LandingNavbar;
