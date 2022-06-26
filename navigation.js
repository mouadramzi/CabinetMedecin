import React, { Component } from 'react';
 
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Connect from './home';
// import Login from './signin';
import Login from './signintest'
import Register from './signuptest';
 import Dash from './tableau';
import Calendar1 from './Calender';
 import ContactUs  from './dashbord';
import LogOut from './signout';
import Inscription from './reserve';
 
class Navigation extends Component {
 render() {
   return (
     <Router>
       <div>
       ;<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" id="navtest">
  <a className="navbar-brand" href="/calender">
    E-birth
  </a> 
  
    <span className="navbar-toggler-icon" />
  
  <div className="collapse navbar-collapse" id="navbarsExampleDefault">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/calender">
          Home <span className="sr-only">(current)</span>
        </a>
      </li>
      <div>
      {this.props.authenticated ? (
          <div>
      <li className="nav-item">
        <a className="nav-link" href="/reserve">
          Reserver votre rendez vous
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/tableau">
          Tableau
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/calender">
          Calendrier
        </a>
      </li>   
     
      <li className="nav-item active">
       
      <LogOut >   </LogOut>  
     <li></li>
      </li>  <form className="form-inline my-2 my-lg-0" >
    <a className="navbar-brand" href="#" style={{marginLeft: "180px"}}>
    Date Obtenu 
  </a> 
      <input
        className="form-control mr-sm-2"
        type="text"
       id="het"
        placeholder="Date pick"
        aria-label="Date pick"
      />
    
    </form>
        
      
      
         </div>
      ) : (
          <div>
      <li className="nav-item">
        <a className="nav-link" href="/login">
          login
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/register">
          sign up
        </a>
      </li> 
      </div>   )}
      </div>
      
    </ul>
  
 
  </div>
</nav>

<div>aa</div><br></br>
 
<Switch>  
<Route exact path="/">
    <Redirect to="/calender" />
</Route>
           <Route   path="/login" component={Login} />
           <Route authenticated={this.props.authenticated} path="/login" component={Login} />
           <Route path="/register" component={Register} />
           <Route exact path="/calender" component={Calendar1} />
           <Route path='/reserve' component={Inscription}></Route>
           <Route path='/tableau' component={Dash}></Route>
           <Route path='/contact' component={ContactUs}></Route>
   
         </Switch>
       </div>
     </Router>
   );
 }
}
export default Navigation;