import React, {Component} from 'react'
import Calendar from 'react-calendar'
import './fav1.css'
import firebase from './firebase.js'
export var a;
global.a =a; 
class Calendar1 extends Component {
    constructor() {
        super();
        
         
    this.state = {
        date: new Date(2021, 6, 30)  
    }
    }
   
    handletime(){

    }
   
    handleexist(value, e){

    e.preventDefault(e);
         
   a   =value.getDate()+"-"+"0"+(value.getMonth()+1).toString()+"-"+value.getFullYear();
 
const c=value.getFullYear()+"-"+"0"+(value.getMonth()+1).toString()+"-"+value.getDate();
     console.log(a.toString());
        firebase.app().database().ref("items").orderByChild("date").equalTo(a.toString()).once("value", snapshot => {

         const userData = snapshot.val();

   if(userData){
    
        console.log(a); 
   alert("cette date est deja pris")}
   else { 

      window.location.href ="/reserve"+"?"+c+"T12:00";
   // onClickDay={(value)=>alert(value.toLocaleDateString())}
        
  }
});  

    }
 
render(){
    

return(
<div  >
  <div  id="he">
  <Calendar   value={this.state.date} onChange={this.handleexist}   />
  </div>

 
</div>
)
}

}
export default Calendar1;  
 