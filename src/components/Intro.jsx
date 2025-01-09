import React,{useState,useEffect} from 'react'
import './intro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faLinkedin,faGithub,faXTwitter} from '@fortawesome/free-brands-svg-icons'

import work from '../assets/work.gif'
const Intro = () => {
  const phrases = [
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
  ];
  const colors = ["darkblue","darkbluee","darkblue"]; // Different colors for each phrase
  const sizes = ["30px","30px","30px"]; // Different font sizes for each phrase
  const weight= ["600","600","600"];
 
  
  
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting && subIndex < phrases[index].length) {
        setSubIndex((prev) => prev + 1);
      } else if (isDeleting && subIndex > 0) {
        setSubIndex((prev) => prev - 1);
      } else if (!isDeleting && subIndex === phrases[index].length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length); // Cycle through phrases
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, phrases]);
  return (
   
      <section id='intro'>
           <div className="introContent">
            <span className='hello' >
                Hello,
            </span>
    
            <span className='introTxt' >I'm  <span className='introName' style={{fontWeight:'700',color:'#ff7c04;'}}>Sumit Kumar</span> <br />
         
            <div className='fb'>
              <span className='fb'
            style={{
          color: colors[index], // Change color based on the phrase
          fontSize: sizes[index], 
          fontWeight:weight[index],// Change size based on the phrase
          transition: "all 0.3s ease-in-out", // Smooth transitions for color and size
        }}
        >    I am into    {phrases[index].substring(0, subIndex)}
           </span>
       <span
        className="cursor"
        style={{  }} // Match cursor color to text
      >
        
      </span>
    </div>
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
           <img src={work} alt=''  className='bg' />
           
      </section>
  )
}

export default Intro
