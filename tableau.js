import React, { Component } from 'react';
import firebase from './firebase.js';
import './calender.css'
    class Dash extends Component {
  
    
        constructor() {
          super();
          this.state = {
            currentItem: '',
            username: '',
            items: []
          }
        }
      componentDidMount() {
        const itemsRef = firebase.database().ref('items');
        itemsRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
          for (let item in items) {
            newState.push({
               
              date: items[item].date,
              heure: items[item].heure,
              user: items[item].user,
              num: items[item].num
            });
          }
          this.setState({
            items: newState
          });
        });
      }
  
   


    render() {
        return (
         
            <>
            
 
  <div className="row">
    <div className="col-8">
    <div className="list-group" id="list-tab" role="tablist">
  </div>
    </div><center>
      <h1 id="titre"  >
                Liste des rendez-vous de mois 7  
     </h1>
    </center>
     
    </div>
            {this.state.items.map((item) => {
              return (
                       
                         
                   
                       <div className="az">
         <frames>
     <div className="ad" id="ad1">

 
 
        <a className="list-group-item list-group-item-action active" id="onglet1" data-toggle="list" href="#o1" role="tab" aria-controls="onglet1">{item.user}</a> 
        <a className="list-group-item list-group-item-action" id="onglet2" data-toggle="list" href="#o2" role="tab" aria-controls="onglet2">{item.date} a heure { item.heure} PM</a> 
      

</div>
</frames>
 
<div className="ad">

 
 
 


</div>
 
           </div>
              )
            })}
     <div className="he"> adadadad </div>
           </>
            
 );
}
}
export default Dash