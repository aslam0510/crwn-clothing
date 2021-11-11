import React from 'react';
import { Route,Switch} from "react-router-dom";
import './App.css';
import { auth } from './firebase/firebase.utils';
import AuthComponent from './Pages/Auth/AuthComponent';
import HeaderComponent from './Pages/Header/HeaderComponent';
import HomePage from './Pages/HomePage/HomePage';
import ShopComponent from './Pages/Shop/ShopComponent';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }
  
  unSubscribeFromAuth = null;

  componentDidMount(){
   this.unSubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser : user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth()
  }
  render(){
    return (
      <div>
        <HeaderComponent currentUser={this.state.currentUser}/>
       <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopComponent}/>
        <Route exact path="/signIn" component={AuthComponent}/>
       </Switch>
      </div>
    );
  }
 
}

export default App;
 