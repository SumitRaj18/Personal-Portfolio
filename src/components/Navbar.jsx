import React, { useState } from 'react'
import './navbar.css'
import logo from '../assets/my.png'
import images from '../assets/images.png'
const Navbar = () => {
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  const[showMenu,setShowMenu]= useState(false)
  return (
    
      <nav className='navbar '>
        <img src= {logo} className='h-full '   />
        <div className="Menu">
            <a href='/'  className='Menulist' >Home</a>
            <a href='#about'  className='Menulist'>About</a>
            <a href='#skills'  className='Menulist'>Skills</a>

            <a href='#education' className='Menulist' >Education</a>
            <a href="#project"  className='Menulist' >Projects</a>

        </div>
        <button className='Menubtn' onClick={()=>{
          document.getElementById("contact").scrollIntoView({behavior:'smooth'})
        }}>
           Contact Me
        </button>
        <img onClick={()=>setShowMenu(!showMenu)} className='mobMenu h-16' src= {images}  />
        <div className="navMenu"  style={{display:showMenu? 'flex':'none'}}>
            <a href='/'  className='list' onClick={()=>setShowMenu(false)}>Home</a>
            <a href='#about'  className='list' onClick={()=>setShowMenu(false)}>About</a>
            <a href='#skills'  className='list' onClick={()=>setShowMenu(false)}>Skills</a>

            <a href='#education' className='list' onClick={()=>setShowMenu(false)}>Education</a>
            <a href="#project"  className='list' onClick={()=>setShowMenu(false)}>Projects</a>
            <a href="#contact"  className='list' onClick={()=>setShowMenu(false)}>Contact</a>



        </div>
      </nav>
  )
}

export default Navbar
