import React from 'react';
import SigInComponent from '../../components/signIn/SignInComponent';

import'./AuthComponentStyle.scss';


const AuthComponent = () => {
  return(
    <div className="sign-in-and-sign-up">
      <SigInComponent/>
    </div>
  )
}

export default AuthComponent