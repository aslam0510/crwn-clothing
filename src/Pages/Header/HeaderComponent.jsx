import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyle.scss';
import {ReactComponent as Logo} from '../../assets/images/crown.svg';
import { auth } from '../../firebase/firebase.utils';


const HeaderComponent = ({currentUser}) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo "/>
      </Link>
      <div className="options">
        <h4>
        <Link to="/shop" className="option">SHOP</Link>
        <Link  className="option">CONTACT</Link>
        {
          currentUser ?
          <div className="option d-inline" onClick={()=>auth.signOut()}>SIGN OUT</div> 
          :
          <Link className="option" to="signIn">SIGN IN</Link>
        }
      
        </h4>
      </div>
    </div>
  );
};

export default HeaderComponent;
