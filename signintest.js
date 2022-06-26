import React, { Component } from 'react';
import './sigincss.css';
import Navigation  from './navigation';
import firebase, { auth, provider } from './firebase.js'; 
class Login extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this); // <-- add this line
  }
  state = {
   email: '',
   password: '',
   error: null,
 };
 login() {
  auth.signInWithPopup(provider) 
    .then((result) => { 
      const user = result.user;
      this.setState({
        user
      });
    });
}
handleInputChange = (event) => {
   this.setState({ [event.target.name]: event.target.value });
 };
handleSubmit = (event) => {
   event.preventDefault();
   const { email, password } = this.state;
firebase
     .auth()
     .signInWithEmailAndPassword(email, password)
     .then((user) => {
       this.props.history.push('/calender');
     })
     .catch((error) => {
       this.setState({ error: error });
     });
 };
 render() {
   const { email, password, error } = this.state;
   return (
       
    <form className="login-reg-panel" onSubmit={this.handleSubmit}>
    <div className="login-info-box">
      <h2>Have an account?</h2>
      <p>Lorem ipsum dolor sit amet</p>
      <label id="label-register" htmlFor="log-reg-show">Login</label>
      <input type="radio" name="active-log-panel" id="log-reg-show" defaultChecked="checked" />
    </div>
    <div className="register-info-box">
      <h2>U don't have an account?</h2> 
      <a id="label-login" htmlFor="log-login-show" href="/register">Register</a>
      <input type="radio" name="active-log-panel" id="log-login-show" />
    </div>
    <div className="white-panel">
      <div className="login-show">
        <h2>LOGIN</h2>
        <input type="text" name="email" placeholder="Email" value={email} onChange={this.handleInputChange} />
        <input  type="password"
               name="password"
               placeholder="Password"
               value={password}
               onChange={this.handleInputChange}/>
      
        <button className="" children="Log In" /><br></br>
        <button id="googlebtn"  class="btn btn-lg btn-google btn-block text-uppercase btn-outline" onClick={this.login}><img src="https://img.icons8.com/color/16/000000/google-logo.png"/> Sign in with google </button>     
        
        {error ? (
         
             <a>{error.message}</a>
          
       ) : null}
      </div>
   
    </div>
  </form>
  
   );
 }
}
export default Login