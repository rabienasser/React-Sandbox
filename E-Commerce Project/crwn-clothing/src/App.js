import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage-component";
import ShopPage from "./pages/shop page/shop.component";
import SignInAndSignUpPage from "./pages/sign-in page/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         currentUser: null,
      };
   }

   unsubscribeFromAuth = null;

   componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
         if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);

            userRef.onSnapshot((snapShot) => {
               console.log(snapShot);
            });
         }

         console.log(userAuth);
      });
   }

   componentWillUnmount() {
      this.unsubscribeFromAuth(); //closes subscription
   }

   render() {
      return (
         <div>
            <Header currentUser={this.state.currentUser} />
            <Switch>
               <Route exact path="/" component={HomePage} />
               <Route path="/shop" component={ShopPage} />
               <Route path="/signin" component={SignInAndSignUpPage} />
            </Switch>
         </div>
      );
   }
}

export default App;
