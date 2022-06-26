import React, { Component } from 'react';
 import './sigincss.css'
import firebase from './firebase.js'
 import emailjs from 'emailjs-com'
  global.z=document.getElementById("het");
class Inscription extends Component {


  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      date:'',
      num:'',
      heure:'',
      items: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); // <-- add this line
  }
handleexist(e)
{ 
  var a=document.getElementById("inputPassword4").value;
  e.preventDefault(e);

firebase.app().database().ref("items").orderByChild("date")
.equalTo(a).once("value", snapshot => {
 
         const userData = snapshot.val();

          
         if (userData) {
            alert("ce rendez vous est deja pris"+a);
          
            document.getElementById("inputPassword4").value="";
   
         } else  {
            
         return
         
         }
     });  
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
      user: this.state.user,
      date: this.state.date,
      num:this.state.num,


    }
    itemsRef.push(item);
    this.setState({

      user: '',
      date:'',
      num:''
    });
  }

      sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_wlatm2p', 'template_myu4j0d', e.target, 'user_40X6EOiSbdUFSGw9BLELq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
alert("un email a été envoyer a ta boite ");
  }
 handleadd(e){
   e.preventDefault(e);
  var query = window.location.search.substring(1);
   
 var a =document.getElementById("inputPassword4").value=query;
  alert (query)

}
  render() {



  return (

      <div>
 
        <body  >
  <form className="formreserv"   onSubmit={(e) => { this.handleSubmit(e); this.sendEmail(e);}}  >  
  <div className="form-group"> <div  className="test">Import Date <input type="radio" onClick={this.handleadd}></input></div>
<div className="form-group">

      Date <input type="datetime-local"   className="form-control" id="inputPassword4" name="date"  onChange={this.handleChange} onSelect={this.handleexist} value={this.state.date}  placeholder="Date" required />
    </div>
</div>
  
  <div className="form-row">
  <div className="form-group">
      <label htmlFor="inputEmail4">Nom</label>
      <input type="text" className="form-control" id="inputEmail4"  name ="user"   onChange={this.handleChange} value={this.state.user} placeholder="Full name " />
    </div>
     
    
   

  </div>

  <div className="form-group">
      <label htmlFor="inputEmail4">Email</label>
      <input type="text" className="form-control" id="inputEmail4"  name ="email"  onChange={this.handleChange}    placeholder="Full email " /> 
    </div>
   
  <div className="form-group">
    <label htmlFor="inputAddress2">Numero</label>
    <input type="text" className="form-control" id="inputAddress2"  onChange={this.handleChange} value={this.state.num} name="num" placeholder="Number" />
  </div>
 

  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type='submit' id="btna"  className=  "btn-primary"   >Sign in</button>


</form>
</body>
</div>

   );
  }
}
    export default Inscription
