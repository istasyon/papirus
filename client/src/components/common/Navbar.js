import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../common/LoginModal';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import './styles/Navbar.scss';

class Navbar extends Component {
  state = {
    isLoginModal: false,
    modalType: null
  };

  renderContentRight() {
    switch (this.props.user) {
      case null:
        return;
      case false:
        return (
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
        );
      default:
        return (
          <ul className="Navbar__list">
            <li className="Navbar__list_item Navbar__list_item_tutor">
              <Link to="/become-a-tutor">Become a Tutor</Link>
            </li>
            <li
              className="Navbar__list_item"
              onClick={() => {
                this.props.logoutUser();
              }}
            >
              Logout
            </li>
          </ul>
        );
    }
  }
  render() {
    return (
      <nav className="Navbar">
        <h2 className="Navbar__logo">
          <Link to="/">PAPIRUS</Link>
        </h2>
        {this.renderContentRight()}
        <LoginModal
          isVisible={this.state.isLoginModal}
          modalType={this.state.modalType}
          close={() => this.setState({ isLoginModal: false, modalType: null })}
        />
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps, actions)(Navbar);
