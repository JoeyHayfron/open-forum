import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../src/components/header/header.component';
import Topic from '../src/pages/topic/topic.pages';
import HomePage from '../src/pages/home/home.pages';
import SignUpPage from '../src/pages/sign-up/sign-up.pages';
import SignInPage from '../src/pages/sign-in/sign-in.pages';
import { auth, createUserDocument } from './firebase/firebase.util';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      this.props.setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/open-forum/" component={HomePage} />
        <Route path="/topic" component={Topic} />
        <Route
          exact
          path="/signup"
          render={() =>
            this.props.currentUser ? <Redirect to="/open-forum/" /> : <SignUpPage />
          }
        />
        <Route
          exact
          path="/signin"
          render={() =>
            this.props.currentUser ? <Redirect to="/open-forum/" /> : <SignInPage />
          }
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
