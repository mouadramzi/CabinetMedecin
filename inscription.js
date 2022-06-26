import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js'
class Inscription extends Component {
  
    
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); // <-- add this line
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.currentItem,
      user: this.state.username
    }
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: ''
    });
  }
    
 
  render() {
    return (
<div className="main">
  <section className="signup">
    {/* <img src="images/signup-bg.jpg" alt=""> */}
    <div className="container">
      <div className="signup-content">
        <form  onSubmit={this.handleSubmit} className="signup-form">
          <h2 className="form-title">Create account</h2>
          <div className="form-group">
            <input type="text" className="form-input" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.state.username} placeholder="Your Name" />
          </div>
          <div className="form-group">
            <input type="email" className="form-input" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange} value={this.state.currentItem} placeholder="Your Email" />
          </div>
          <div className="form-group">
            <input type="text" className="form-input" name="password" id="password" placeholder="Password" />
            <span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password" />
          </div>
          <div className="form-group">
            <input type="password" className="form-input" name="re_password" id="re_password" placeholder="Repeat your password" />
          </div>
          <div className="form-group">
            <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
            <label htmlFor="agree-term" className="label-agree-term"><span><span /></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
          </div>
          <div className="form-group">
            <input type="submit" name="submit" id="submit" className="form-submit" defaultValue="Sign up" />
          </div>
        </form>
        <p className="loginhere">
          Have already an account ? <a href="#" className="loginhere-link">Login here</a>
        </p>
      </div>
    </div>
  </section>
</div>
   );
  }
}
    export default Inscription