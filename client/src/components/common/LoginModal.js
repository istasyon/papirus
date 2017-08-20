import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalType: props.modalType
    };
    this.handleFacebook = this.handleFacebook.bind(this);
    this.handleGoogle = this.handleGoogle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ modalType: nextProps.modalType });
  }

  async handleFacebook(token) {
    const response = await axios.post('/api/users/facebook_auth', { token });
    this.props.close();
    this.props.loginUser(response.data.token, response.data.user);
  }

  async handleGoogle(token) {
    const response = await axios.post('/api/users/google_auth', { token });
    this.props.close();
    this.props.loginUser(response.data.token, response.data.user);
  }

  render() {
    const { isVisible, close } = this.props;
    const { modalType } = this.state;
    return (
      <Modal
        style={{ display: 'flex', alignItems: 'center' }}
        show={isVisible}
        onHide={close}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType == 'login' ? 'Login' : 'Sign Up'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalType == 'login'
            ? <div>
                <FacebookLogin
                  appId="1548012248553735"
                  fields="name,email,picture"
                  callback={res => this.handleFacebook(res.accessToken)}
                />
                <br />
                <GoogleLogin
                  clientId="768933820789-9rp4bnd757kb45uqbdacum58lqm4tfo3.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={res => this.handleGoogle(res.accessToken)}
                  onFailure={err => console.log(err)}
                />
              </div>
            : <div>
                <FacebookLogin
                  appId="1548012248553735"
                  fields="name,email,picture"
                  callback={res => this.handleFacebook(res.accessToken)}
                />
                <br />
                <GoogleLogin
                  clientId="768933820789-9rp4bnd757kb45uqbdacum58lqm4tfo3.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={res => this.handleGoogle(res.accessToken)}
                  onFailure={err => console.log(err)}
                />
              </div>}
        </Modal.Body>
        <Modal.Footer>
          {modalType == 'login'
            ? <a onClick={() => this.setState({ modalType: 'signup' })}>
                Don't have an account?
              </a>
            : <a onClick={() => this.setState({ modalType: 'login' })}>
                Already have an account?
              </a>}
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connect(null, actions)(LoginModal);
