import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import {auth ,createUserProfileDocument} from './firebase/firebase.utils';  //to store state of user on app state

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth =auth.onAuthStateChanged(async userAuth =>{                          //from auth library of firebase user parameter is user state of logged in user

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        // data of snapshot is in snapshot.data()

        userRef.onSnapshot(snapShot=>{
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }
      else{
        this.setState({currentUser:userAuth});
      }

      //createUserProfileDocument(user);
      //this.setState({currentUser:user});
      // console.log(user);                                   //using firebse no requirement of oAuth from google console

    })
  }
  

  componentWillUnmount(){
    this.unsubscribeFromAuth();      //to close subscription when we want to unmount
  }
   
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
