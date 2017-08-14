import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalType: props.modalType
    };
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
                <a>Login with Facebook</a>
                <br />
                <a>Login with Google</a>
              </div>
            : <div>
                <a>Sign Up with Facebook</a>
                <br />
                <a>Sign Up with Google</a>
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

export default LoginModal;
