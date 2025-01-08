import React from 'react'
import './intro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faLinkedin,faGithub,faXTwitter} from '@fortawesome/free-brands-svg-icons'

import work from '../assets/work.gif'
const Intro = () => {
  return (
   
      <section id='intro'>
           <div className="introContent">
            <span className='hello' style={{fontWeight:'400'}}>
                Hello,
            </span>
            <span className='introTxt'>I'm a <span className='introName'>Sumit Kumar</span> <br />
            <p className='introPara typing'>I'm a skilled MERN Developer </p>

            </span>
            <div className="socialmedia mt-4" >
                   <a href="https://www.facebook.com/harsh.pathak.7731247/" target='_blank' rel="noopener noreferrer" className=" me-4 text-reset">
                 <FontAwesomeIcon icon={faFacebook} className='cena' style={{color:'blue',fontSize:"35px",marginLeft:"10px"}} />      </a>
                 <a href="https://x.com/Sumit_18_raj" target='_blank'rel="noopener noreferrer" className=" me-4 text-reset">
                 <FontAwesomeIcon icon={faXTwitter} className='cena' style={{color: "black",fontSize:"35px"}} />      </a>
               
                 <a href="https://www.instagram.com/sumit_raj18/?hl=en"rel="noopener noreferrer" target='_blank' className=" me-4 text-reset">
                 <FontAwesomeIcon icon={faInstagram} className='cena' style={{color: "#e60a95", fontSize:"35px"}} />      </a>
                 <a href="https://www.linkedin.com/in/sumit-kumar-476901228/" className=" me-4 text-reset" rel="noopener noreferrer" target='_blank'>
                 <FontAwesomeIcon icon={faLinkedin} className='cena' style={{color: "#3054a6",fontSize:"35px"}} />      </a>
                 <a href="https://github.com/SumitRaj18" rel="noopener noreferrer" target='_blank' className=" me-4 text-reset">
                 <FontAwesomeIcon icon={faGithub} className='cena' style={{color: "black",fontSize:"35px"}} />      </a>
             
                   </div>
           </div>
           <img src={work}  className='bg' />
           
      </section>
  )
}

export default Intro
