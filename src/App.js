import React from 'react';
import { Route,Switch} from "react-router-dom";
import './App.css';
import HeaderComponent from './Pages/Header/HeaderComponent';
import HomePage from './Pages/HomePage/HomePage';
import ShopComponent from './Pages/Shop/ShopComponent';


function App() {
  return (
    
    <div>
      <HeaderComponent/>
     <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/shop" component={ShopComponent}/>
     </Switch>
    </div>
  );
}

export default App;
 