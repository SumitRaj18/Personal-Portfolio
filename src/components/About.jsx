import React from 'react'
import './about.css'
import pic from '../assets/pc.avif'
const About = () => {
  return (
    <section id='about'>
    <div className='mt-6'>
      <h1 style={{textAlign:'center',fontSize:'30px',fontWeight:'bold'}}>About Me</h1>
      <div className="bh">
      <div className="box">
        <h1 className='text-4xl font-bold mt-4'>I'm Sumit</h1> <br />
        <h3 className='text-xl font-bold'>Full Stack Developer</h3> <br />
        <p className=' tannn lePushReleaseFromTop sequence text-lg'>I am a Full-Stack developer based in Faridabad, India. I am an BCA Graduate from MDU. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. <br />

<div className='flex'>
<div className='text-blue-600 font-bold'>Email:</div> <div className='ml-2'>sumitraj7162@gmail.com</div>    
</div>
<div className='flex'>
<div className='text-blue-600 font-bold'>Place</div> : <div className='ml-2'>Faridabad, India - 121003</div> 
</div>
</p>
      </div>
      <div className="pic">
        <img src={pic} style={{
          height:'200px',width:"200px",objectFit:'fill',borderRadius:'50%'
        }} alt="" />
      </div>
      </div>
    </div>
    </section>

  )
}

export default About
