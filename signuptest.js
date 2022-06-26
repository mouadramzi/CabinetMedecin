import React, { Component } from 'react';
 import './sigincss.css'
import firebase from './firebase';
class Register extends Component {
 state = {
   email: '',
   password: '',
   error: null,
 };
handleInputChange = (event) => {
   this.setState({ [event.target.name]: event.target.value });
 };
handleSubmit = (event) => {
   event.preventDefault();
   const { email, password } = this.state;
firebase
     .auth()
     .createUserWithEmailAndPassword(email, password)
     .then((user) => {
       this.props.history.push('/login');
     })
     .catch((error) => {
       this.setState({ error: error });
     });
 };
 render() {
   const { email, password, error } = this.state;
   return (
     
    <form className="login-reg-panel"  onSubmit={this.handleSubmit}>
    <div className="login-info-box">
      <h2>Have an account?</h2>
    
      <label id="label-register" htmlFor="log-reg-show">Login</label>
      <input type="radio" name="active-log-panel" id="log-reg-show" defaultChecked="checked" />
    </div>
    <div className="register-info-box">
      <h2>Do you have an account ?</h2>
      <p>Sign in </p>
      <a id="label-login" htmlFor="log-login-show" href="/login">Login</a>
      <input type="radio" name="active-log-panel" id="log-login-show" />
    </div>
    <div className="white-panel">
      <div className="login-show">
       
        <h2>Sign UP</h2>
      
            
        <input type="text" name="name" placeholder="Name"   />

        <input type="text" name="email" placeholder="Email" value={email} onChange={this.handleInputChange} />
        <input  type="password"
               name="password"
               placeholder="Password"
               value={password}
               onChange={this.handleInputChange}/>
                <input  type="password"
               name="password"
               placeholder=" Confirm Password"
               />
      
        <button children="Save"/>
       <div>
       {error ? (
         
         <a>{error.message}</a>
      
   ) : null}
       </div>
      
      </div>
   
    </div>
  </form>
 
   );
 }
}
export default Register