import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import HomePage from "./pages/homepage/homepage-component";
import ShopPage from "./pages/shop page/shop.component";
import SignInAndSignUpPage from "./pages/sign-in page/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";

import { setCurrentUser } from "./redux/user/user.actions";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
   // THIS CONSTRUCTOR FUNCTION BECOMES OBSOLETE WITH REDUX
   // constructor(props) {
   //    super(props);

   //    this.state = {
   //       currentUser: null,
   //    };
   // }

   unsubscribeFromAuth = null;

   componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
         if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);

            userRef.onSnapshot((snapShot) => {
               console.log(snapShot.data()); //logging '.data()' returns the actual user information in the console
               this.props.setCurrentUser(
                  {
                     id: snapShot.id,
                     ...snapShot.data(),
                  },
                  () => console.log(this.state) //callback function bc setState is asynchronous
               );
            });
         } else {
            this.props.setCurrentUser(userAuth); //If no user is signed in, currentUser becomes null
         }
         // console.log(userAuth);
      });
   }

   componentWillUnmount() {
      this.unsubscribeFromAuth(); //closes subscription
   }

   render() {
      return (
         <div>
            <Header />
            <Switch>
               <Route exact path="/" component={HomePage} />
               <Route path="/shop" component={ShopPage} />
               <Route path="/signin" component={SignInAndSignUpPage} />
            </Switch>
         </div>
      );
   }
}

const mapDispatchToProps = (dispatch) => ({
   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
