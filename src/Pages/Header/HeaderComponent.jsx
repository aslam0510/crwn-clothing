import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyle.scss';
import {ReactComponent as Logo} from '../../assets/images/crown.svg'

const HeaderComponent = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo "/>
      </Link>
      <div className="options">
        <h3>
        <Link to="/shop" className="option">SHOP</Link>
        <Link  className="option">CONTACT</Link>
        <Link className="option">SIGN IN</Link>
        </h3>
      </div>
    </div>
  );
};

export default HeaderComponent;
