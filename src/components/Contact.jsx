import React,{useRef} from 'react'
import './contact.css'
import './navbar.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g2894z7', 'template_7t9grx3', form.current, {
        publicKey: 'Jxax-kIKmpkjabcpj',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='contact-form' >  
      <div id="contact">
         <div className="tan">
       
      <form ref={form} className='contactForm' onSubmit={sendEmail} >
      <h1 className='contactPage' >Contact Me</h1>
    <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
 
         <input type="text" className='name' name='user_name' placeholder='Your Name' />
         <input type="text" className='email' name="user_email" placeholder='Your Email' />
         <textarea rows="5" name='message' className='message' placeholder='Your Message' />
<button className='submit text-center'>Submit</button>


      </form>
      </div></div>
    </div>
  )
}

export default Contact
