import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faLinkedin,faGithub,faXTwitter} from '@fortawesome/free-brands-svg-icons'


import './footer.css'
import './navbar.css'
const Footer = () => {
  return (
  <>
   
    <div className='footer'>
      <div className="aboutsec"  >
      Sumit's Portfolio
       
      Thank you for visiting my personal portfolio website. Connect with me over socials.
            Keep Rising 🚀. Connect with me over live chat!
    
        </div>
      <div className="quick" >
       <h1 className='qq text-2xl font-bold'> Quick Links</h1>
        <div className="t" >
                 <a href='/' className='Foot'>Home</a> <br />
        <a href='#about' className='Foot'>About</a> <br />
        <a href='#skills' className='Foot'>Skills</a> <br />
        <a href='#education' className='Foot'>Education</a> <br />
        <a href='#project' className='Foot'>Projects</a>

        </div>
      </div>
      <div className="contactinfo">
      <h1  className='cnf text-2xl font-bold'>Contact Info</h1>  

        <div className="number ml-2" >
            +91-8076924468
        </div>
        <div className="emailid ml-2">
            sumitraj7162@gmail.com
        </div>
        <div className="location ml-2">
            Faridabad,India-121003
        </div>
        <div className="socialmedia mt-4" >
        <a href="https://www.facebook.com/harsh.pathak.7731247/" target='_blank' rel="noopener noreferrer" className=" ml-2 me-4 text-reset">
      <FontAwesomeIcon icon={faFacebook} style={{fontSize:"25px",marginLeft:"10px"}} />      </a>
      <a href="https://x.com/Sumit_18_raj" target='_blank'rel="noopener noreferrer" className="me-4 text-reset">
      <FontAwesomeIcon icon={faXTwitter} style={{color: "white",fontSize:"25px"}} />      </a>
    
      <a href="https://www.instagram.com/sumit_raj18/?hl=en"rel="noopener noreferrer" target='_blank' className="me-4 text-reset">
      <FontAwesomeIcon icon={faInstagram} style={{color: "#e60a95", fontSize:"25px"}} />      </a>
      <a href="https://www.linkedin.com/in/sumit-kumar-476901228/" className="me-4 text-reset" rel="noopener noreferrer" target='_blank'>
      <FontAwesomeIcon icon={faLinkedin} style={{color: "#3054a6",fontSize:"25px"}} />      </a>
      <a href="https://github.com/SumitRaj18" rel="noopener noreferrer" target='_blank' className="me-4 text-reset">
      <FontAwesomeIcon icon={faGithub} style={{color: "white",fontSize:"25px"}} />      </a>
  
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
