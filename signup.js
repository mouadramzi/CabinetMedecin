import React, { Component } from 'react';
 
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
       this.props.history.push('/');
     })
     .catch((error) => {
       this.setState({ error: error });
     });
 };
 render() {
   const { email, password, error } = this.state;
   return (
    <div>
           <h1>Register</h1>
           {error ? (
         <div>
           <div>
             <label>{error.message}</label>
           </div>
         </div>
       ) : null}
      
           
           
      <div>
 <form onSubmit={this.handleSubmit}>
             <input type="text" name="email" placeholder="Email" value={email} onChange={this.handleInputChange} />
             <input
               type="password"
               name="password"
               placeholder="Password"
               value={password}
               onChange={this.handleInputChange}
             />
             <button children="Register" />
           </form>


      </div>
          
      </div>
  
   );
 }
}
export default Register
