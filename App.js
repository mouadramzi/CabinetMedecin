import React, { Component } from 'react';
import Navigation from './navigation';
import firebase from './firebase';
import Foo from './footer' 
import Map from './footertest'
import Demo1 from './demo1';
class App extends Component {
 state = {
   authenticated: false,
 };
 componentDidMount() {
   firebase.auth().onAuthStateChanged((authenticated) => {
     authenticated
       ? this.setState(() => ({
           authenticated: true,
         }))
       : this.setState(() => ({
           authenticated: false,
         }));
   });
 }
 render() {
   return( <div>
       <Navigation authenticated={this.state.authenticated} ></Navigation>
   <Foo></Foo>  
  
   </div>
  )
    
 }
}
export default App;