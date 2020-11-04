import React from 'react';

import google from '../../assets/google.png';

import { withRouter } from 'react-router-dom';
import facebook from '../../assets/facebook.svg';

import './sign-up.styles.scss';

import FormInput from '../../components/form-input/form-input.component';

import FormButton from '../../components/form-button/form-button.component';

import { auth, createUserDocument } from '../../firebase/firebase.util';

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      password: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, phone, password } = this.state;

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      const userDoc = await createUserDocument(user, { name, phone });

      this.setState({
        name: '',
        email: '',
        phone: '',
        password: '',
      });

      console.log(userDoc);
      if (userDoc) this.props.history.push('/open-forum/');
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    const { name, email, phone, password } = this.state;
    return (
      <div className="wrapper">
        <div className="content">
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name="name"
              type="text"
              required
              label
              value={name}
              onChange={this.handleChange}
            />
            <FormInput
              name="phone"
              type="phone"
              required
              label
              value={phone}
              onChange={this.handleChange}
            />
            <FormInput
              name="email"
              type="email"
              required
              label
              value={email}
              onChange={this.handleChange}
            />
            <FormInput
              name="password"
              type="password"
              required
              label
              value={password}
              onChange={this.handleChange}
            />

            <FormButton type="submit">Sign Up</FormButton>
          </form>
          <div className="or-divider">
            <hr />
            <span>or</span>
            <hr />
          </div>

          <div className="socials">
            <img
              src={facebook}
              alt="facebook"
              className="socials-logo-facebook"
            />
            <img src={google} alt="google" className="socials-logo-google" />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUpPage);
