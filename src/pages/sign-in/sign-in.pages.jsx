import React from 'react';

import google from '../../assets/google.png';

import facebook from '../../assets/facebook.svg';

import './sign-in.styles.scss';

import FormInput from '../../components/form-input/form-input.component';

import FormButton from '../../components/form-button/form-button.component';

import { auth } from '../../firebase/firebase.util';

class SignInPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      const authorized = await auth.signInWithEmailAndPassword(email, password);
      console.log(authorized);
      this.setState({ email: '', password: '' });
    } catch (err) {
      console.log('An error occured', err.message);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="wrapper">
        <div className="content">
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name="email"
              type="text"
              label
              value={email}
              onChange={this.handleChange}
              required
            />
            <FormInput
              name="password"
              type="password"
              value={password}
              label
              onChange={this.handleChange}
              required
            />
            <FormButton type="submit">Sign In</FormButton>
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

export default SignInPage;
