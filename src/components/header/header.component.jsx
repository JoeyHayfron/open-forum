import React from 'react';

import { withRouter } from 'react-router-dom';

import CustomButton from '../button/button.component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { auth } from '../../firebase/firebase.util';

import './header.styles.scss';

const Header = ({ history, currentUser }) => (
  <div className="headerContainer">
    <h1 className="headerTitle" onClick={() => history.push('/')}>
      Open Forum
    </h1>
    {currentUser ? (
      <div className="signed-in">
        <span className="user-name">{`Welcome ${currentUser.name}`}</span>
        <CustomButton onClick={() => auth.signOut()}>Logout</CustomButton>
      </div>
    ) : (
      <div className="headerButtons">
        <CustomButton isSignUp onClick={() => history.push('/signup')}>
          Sign Up
        </CustomButton>
        <CustomButton onClick={() => history.push('/signin')}>
          Login
        </CustomButton>
      </div>
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(withRouter(Header));
