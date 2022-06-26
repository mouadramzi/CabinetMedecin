import React from 'react';
import emailjs from 'emailjs-com';
 

export default function ContactUs() {

  function  sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_wlatm2p', 'template_myu4j0d', e.target, 'user_40X6EOiSbdUFSGw9BLELq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="name" />
      <label>Name</label>
      <input type="text" name="email" />
      <label>Email</label>
      <input type="email" name="message" />
      <label>subject</label>
      <input type="text" name="subject" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}