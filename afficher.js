import React, { Component } from 'react';
import firebase from './firebase.js';
import './calender.css'
    class Inscription1 extends Component {
  
    
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
              id: item,
              title: items[item].title,
              user: items[item].user
            });
          }
          this.setState({
            items: newState
          });
        });
      }
  
   


    render() {
        return (
          
      <div>


      {this.state.items.map((item) => {
        return (
            <div>
            <div className="calendar" data-toggle="calendar">
            <div className="row">
                 <h1 className="title text-center"> {item.user} </h1>
              <div className="col-xs-12 calendar-day">
        <time dateTime={item.title}>{item.title}</time>
      </div>
      </div>
      </div>
      </div>
        )
      })}
     
     </div>
   );
}
}
export default Inscription1