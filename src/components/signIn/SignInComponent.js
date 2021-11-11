import React from 'react';
import './SignInComponentStyle.scss';
import FormInput  from '../form-input/FormInputComponent';
import CustomButtonComponent from '../custom-button/CustomButtonComponent';
import { signInWithGoogle } from './../../firebase/firebase.utils';


 class SigInComponent extends React.Component{
   constructor(props){
     super(props);

     this.state ={
       email : '',
       password : ''
     }
   }
 
   handleSubmit = (event) =>{
    event.preventDefault()
    this.setState({email:'',password:''})
   }

   handleChange = (event)=>{
     const {value,name} = event.target;
     this.setState({ [name]: value})
  
   }
   render(){
     return(
       <div className="sign-in">
         <h2 className="title">I already have an account</h2>
         <span>SignIn with your email and password</span>
         <form onSubmit={this.handleSubmit}>
           <FormInput type="email" handleChange={this.handleChange} name="email" value={this.state.email} required label="Email"/>
           <FormInput type="password" handleChange={this.handleChange} name="password" value={this.state.password} required label="Password"/>
           <CustomButtonComponent type="submit">SIGN IN</CustomButtonComponent>
           <br/>
           <CustomButtonComponent onClick={signInWithGoogle}>SIGN IN with Google</CustomButtonComponent>
         
         </form>
       </div>
     )
   }
 }

 export default SigInComponent